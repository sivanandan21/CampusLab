# ==============================================================================
# CampusLab KTU AWS CLI Container Image
# Ubuntu 24.04 + AWS CLI v2 for Cloud Computing & AWS Practical Labs
# Injected with STS Short-lived Credentials via Entrypoint
# ==============================================================================

FROM campuslab/ktu-base-linux:2024

USER root

# Install unzip and AWS CLI v2
RUN apt-get update && apt-get install -y --no-install-recommends \
    unzip \
    ca-certificates \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip -q awscliv2.zip \
    && ./aws/install \
    && rm -rf awscliv2.zip aws /var/lib/apt/lists/*

# Add STS credential injector helper
COPY --chown=student:student <<'EOF' /usr/local/bin/init-aws-sandbox.sh
#!/bin/bash
if [ -n "$AWS_ACCESS_KEY_ID" ] && [ -n "$AWS_SESSION_TOKEN" ]; then
    mkdir -p /home/student/.aws
    cat <<EOC > /home/student/.aws/credentials
[default]
aws_access_key_id = $AWS_ACCESS_KEY_ID
aws_secret_access_key = $AWS_SECRET_ACCESS_KEY
aws_session_token = $AWS_SESSION_TOKEN
EOC
    cat <<EOC > /home/student/.aws/config
[default]
region = ap-south-1
output = json
EOC
    echo "[CampusLab] STS Temporary Sandbox credentials loaded for ap-south-1 (45-min TTL)."
fi
exec /bin/bash "$@"
EOF

RUN chmod +x /usr/local/bin/init-aws-sandbox.sh

USER student
WORKDIR /home/student

ENTRYPOINT ["/usr/local/bin/init-aws-sandbox.sh"]
CMD ["/bin/bash"]
