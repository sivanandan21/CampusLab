# ==============================================================================
# CampusLab AWS Infrastructure - ALB, EC2 Launch Templates & IAM Profiles
# ==============================================================================

# -----------------------------------------------------------------------------
# 1. APPLICATION LOAD BALANCER (Public Subnets)
# -----------------------------------------------------------------------------
resource "aws_lb" "campuslab_alb" {
  name               = "campuslab-alb-${var.environment}"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb.id]
  subnets            = aws_subnet.public[*].id

  idle_timeout = 3600 # 1 hour to support long-running interactive terminal WebSockets

  tags = {
    Name = "campuslab-alb-${var.environment}"
  }
}

# ALB Target Group for FastAPI Backend
resource "aws_lb_target_group" "backend_tg" {
  name                 = "campuslab-backend-tg-${var.environment}"
  port                 = 8000
  protocol             = "HTTP"
  vpc_id               = aws_vpc.main.id
  target_type          = "instance"
  deregistration_delay = 30

  health_check {
    enabled             = true
    path                = "/health"
    port                = "8000"
    protocol            = "HTTP"
    healthy_threshold   = 2
    unhealthy_threshold = 3
    timeout             = 5
    interval            = 20
    matcher             = "200"
  }

  tags = {
    Name = "campuslab-backend-tg-${var.environment}"
  }
}

# ALB HTTP Listener (Port 80)
resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.campuslab_alb.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.backend_tg.arn
  }
}

# -----------------------------------------------------------------------------
# 2. IAM ROLES & INSTANCE PROFILES
# -----------------------------------------------------------------------------

# Backend IAM Role
resource "aws_iam_role" "backend_role" {
  name = "CampusLabBackendRole-${var.environment}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })
}

# Backend IAM Policy (S3, SecretsManager, CloudWatch, STS)
resource "aws_iam_role_policy" "backend_policy" {
  name = "CampusLabBackendPolicy-${var.environment}"
  role = aws_iam_role.backend_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:GetObject",
          "s3:AbortMultipartUpload"
        ]
        Resource = "${aws_s3_bucket.artifacts.arn}/*"
      },
      {
        Effect = "Allow"
        Action = [
          "secretsmanager:GetSecretValue",
          "secretsmanager:DescribeSecret"
        ]
        Resource = aws_secretsmanager_secret.db_secret.arn
      },
      {
        Effect = "Allow"
        Action = [
          "cloudwatch:PutMetricData"
        ]
        Resource = "*"
        Condition = {
          StringEquals = {
            "cloudwatch:namespace": "CampusLab/Pilot"
          }
        }
      },
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "*"
      },
      {
        Effect = "Allow"
        Action = [
          "sts:AssumeRole"
        ]
        Resource = "arn:aws:iam::*:role/CampusLabStudentSandboxRole"
      }
    ]
  })
}

resource "aws_iam_instance_profile" "backend_profile" {
  name = "CampusLabBackendProfile-${var.environment}"
  role = aws_iam_role.backend_role.name
}

# Worker IAM Role
resource "aws_iam_role" "worker_role" {
  name = "CampusLabWorkerRole-${var.environment}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "worker_ssm" {
  role       = aws_iam_role.worker_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

resource "aws_iam_instance_profile" "worker_profile" {
  name = "CampusLabWorkerProfile-${var.environment}"
  role = aws_iam_role.worker_role.name
}

# -----------------------------------------------------------------------------
# 3. LAUNCH TEMPLATES & AUTO SCALING GROUPS
# -----------------------------------------------------------------------------
data "aws_ami" "ubuntu_2404" {
  most_recent = true
  owners      = ["099720109477"] # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

# Backend Launch Template
resource "aws_launch_template" "backend" {
  name_prefix   = "campuslab-backend-lt-"
  image_id      = data.aws_ami.ubuntu_2404.id
  instance_type = var.backend_instance_type

  iam_instance_profile {
    name = aws_iam_instance_profile.backend_profile.name
  }

  network_interfaces {
    associate_public_ip_address = false
    security_groups             = [aws_security_group.backend.id]
  }

  user_data = base64encode(<<-EOF
              #!/bin/bash
              apt-get update && apt-get install -y python3-pip python3-venv git
              # Pull and run CampusLab FastAPI application
              EOF
  )

  tags = {
    Name = "campuslab-backend-node"
  }
}

# Backend Auto Scaling Group (Private App Subnets)
resource "aws_autoscaling_group" "backend_asg" {
  name_prefix         = "campuslab-backend-asg-"
  vpc_zone_identifier = aws_subnet.private_app[*].id
  target_group_arns   = [aws_lb_target_group.backend_tg.arn]

  min_size     = 1
  max_size     = 3
  desired_capacity = 1

  launch_template {
    id      = aws_launch_template.backend.id
    version = "$Latest"
  }

  tag {
    key                 = "Name"
    value               = "campuslab-backend-${var.environment}"
    propagate_at_launch = true
  }
}

# Worker Node Launch Template (Private Worker Subnets)
resource "aws_launch_template" "worker" {
  name_prefix   = "campuslab-worker-lt-"
  image_id      = data.aws_ami.ubuntu_2404.id
  instance_type = var.worker_instance_type

  iam_instance_profile {
    name = aws_iam_instance_profile.worker_profile.name
  }

  network_interfaces {
    associate_public_ip_address = false
    security_groups             = [aws_security_group.worker.id]
  }

  # Hardened Bootstrap Script
  user_data = filebase64("${path.module}/../scripts/ec2_worker_bootstrap.sh")

  tags = {
    Name = "campuslab-worker-node"
  }
}

# Worker Auto Scaling Group
resource "aws_autoscaling_group" "worker_asg" {
  name_prefix         = "campuslab-worker-asg-"
  vpc_zone_identifier = aws_subnet.private_worker[*].id

  min_size     = 1
  max_size     = 4
  desired_capacity = 1

  launch_template {
    id      = aws_launch_template.worker.id
    version = "$Latest"
  }

  tag {
    key                 = "Name"
    value               = "campuslab-worker-${var.environment}"
    propagate_at_launch = true
  }
}
