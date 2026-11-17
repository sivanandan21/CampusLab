#!/usr/bin/env bash
# ==============================================================================
# CampusLab Hardened EC2 Worker Node Bootstrap Script
# OS: Ubuntu 24.04 LTS (Noble Numbat) • AWS Region: ap-south-1
# Sets up Docker, Kernel Security Quotas, Worker Systemd Service & CloudWatch Agent
# ==============================================================================

set -euo pipefail
IFS=$'\n\t'

echo "======================================================================"
echo "[CampusLab Bootstrap] Starting EC2 Worker Provisioning..."
echo "======================================================================"

# 1. System Updates & Kernel Hardening
export DEBIAN_FRONTEND=noninteractive
apt-get update && apt-get upgrade -y
apt-get install -y --no-install-recommends \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    ufw \
    python3-pip \
    python3-venv \
    jq

# Kernel Protection against fork bombs & resource exhaustion
cat <<'EOF' > /etc/sysctl.d/99-campuslab-worker.conf
# Maximum PIDs allowed on worker host
kernel.pid_max = 65536
# File descriptor limits
fs.file-max = 2097152
# Memory overcommit handling
vm.overcommit_memory = 1
# Disable IPv6 if unused
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
EOF
sysctl --system

# 2. Install Official Docker Engine
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  tee /etc/apt/sources.list.d/docker.list > /dev/null

apt-get update
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin

# 3. Configure Hardened Docker Daemon
cat <<'EOF' > /etc/docker/daemon.json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "50m",
    "max-file": "3"
  },
  "default-ulimits": {
    "nofile": {
      "Name": "nofile",
      "Hard": 2048,
      "Soft": 1024
    },
    "nproc": {
      "Name": "nproc",
      "Hard": 128,
      "Soft": 64
    }
  },
  "live-restore": true,
  "no-new-privileges": true,
  "icc": false
}
EOF

systemctl daemon-reload
systemctl restart docker
systemctl enable docker

# 4. Configure UFW Firewall (Restrict port 8001 strictly to Private App Subnets)
ufw default deny incoming
ufw default allow outgoing
ufw allow from 10.0.11.0/24 to any port 8001 proto tcp comment "Allow Backend AZ1"
ufw allow from 10.0.12.0/24 to any port 8001 proto tcp comment "Allow Backend AZ2"
ufw --force enable

# 5. Deploy CampusLab Worker Python Microservice
mkdir -p /opt/campuslab-worker
useradd -r -s /bin/false -d /opt/campuslab-worker campusworker || true
usermod -aG docker campusworker

cat <<'EOF' > /etc/systemd/system/campuslab-worker.service
[Unit]
Description=CampusLab EC2 Lab Worker Service
After=network.target docker.service
Requires=docker.service

[Service]
Type=simple
User=root
WorkingDirectory=/opt/campuslab-worker
Environment="PYTHONUNBUFFERED=1"
Environment="PORT=8001"
EnvironmentFile=-/etc/campuslab/worker.env
ExecStart=/opt/campuslab-worker/venv/bin/uvicorn campuslab_worker.main:app --host 0.0.0.0 --port 8001 --workers 4
Restart=always
RestartSec=5
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF

# 6. Install AWS CloudWatch Unified Agent
curl -s https://s3.ap-south-1.amazonaws.com/amazoncloudwatch-agent-ap-south-1/ubuntu/amd64/latest/amazon-cloudwatch-agent.deb -o /tmp/amazon-cloudwatch-agent.deb
dpkg -i -E /tmp/amazon-cloudwatch-agent.deb
rm -f /tmp/amazon-cloudwatch-agent.deb

cat <<'EOF' > /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json
{
  "metrics": {
    "namespace": "CampusLab/Pilot",
    "metrics_collected": {
      "cpu": {
        "measurement": ["cpu_usage_idle", "cpu_usage_iowait", "cpu_usage_user", "cpu_usage_system"],
        "metrics_collection_interval": 30
      },
      "mem": {
        "measurement": ["mem_used_percent", "mem_available"],
        "metrics_collection_interval": 30
      },
      "disk": {
        "measurement": ["used_percent"],
        "metrics_collection_interval": 60,
        "resources": ["/"]
      }
    }
  }
}
EOF

/opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
    -a fetch-config \
    -m ec2 \
    -s \
    -c file:/opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json

echo "======================================================================"
echo "[CampusLab Bootstrap] Worker EC2 Node Provisioned and Hardened."
echo "======================================================================"
