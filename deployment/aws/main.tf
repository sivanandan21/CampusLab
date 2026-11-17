# ==============================================================================
# CampusLab AWS Infrastructure - VPC, Subnets, Gateways & Security Groups
# Region: ap-south-1 (Mumbai) • Architecture: Multi-tier Isolated Subnets
# ==============================================================================

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "CampusLab"
      Scheme      = "KTU-2024-CSE"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}

# -----------------------------------------------------------------------------
# 1. VPC
# -----------------------------------------------------------------------------
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "campuslab-vpc-${var.environment}"
  }
}

# -----------------------------------------------------------------------------
# 2. INTERNET GATEWAY & ELASTIC IPS
# -----------------------------------------------------------------------------
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "campuslab-igw-${var.environment}"
  }
}

resource "aws_eip" "nat" {
  count  = 2
  domain = "vpc"

  tags = {
    Name = "campuslab-nat-eip-${count.index + 1}-${var.environment}"
  }
}

# -----------------------------------------------------------------------------
# 3. SUBNETS (Across 2 AZs in ap-south-1)
# -----------------------------------------------------------------------------
data "aws_availability_zones" "available" {
  state = "available"
}

# Public Subnets (ALB & NAT)
resource "aws_subnet" "public" {
  count                   = 2
  vpc_id                  = aws_vpc.main.id
  cidr_block              = cidrsubnet(var.vpc_cidr, 8, count.index + 1)
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true

  tags = {
    Name = "campuslab-public-subnet-${count.index + 1}-${var.environment}"
    Tier = "Public"
  }
}

# NAT Gateways in Public Subnets
resource "aws_nat_gateway" "nat" {
  count         = 2
  allocation_id = aws_eip.nat[count.index].id
  subnet_id     = aws_subnet.public[count.index].id

  tags = {
    Name = "campuslab-nat-${count.index + 1}-${var.environment}"
  }
}

# Private App Subnets (FastAPI Backend)
resource "aws_subnet" "private_app" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(var.vpc_cidr, 8, count.index + 11)
  availability_zone = data.aws_availability_zones.available.names[count.index]

  tags = {
    Name = "campuslab-private-app-subnet-${count.index + 1}-${var.environment}"
    Tier = "PrivateApp"
  }
}

# Private Worker Subnets (Private EC2 Container Hosts - No Public IP)
resource "aws_subnet" "private_worker" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(var.vpc_cidr, 8, count.index + 21)
  availability_zone = data.aws_availability_zones.available.names[count.index]

  tags = {
    Name = "campuslab-private-worker-subnet-${count.index + 1}-${var.environment}"
    Tier = "PrivateWorker"
  }
}

# Private Data Subnets (Amazon RDS PostgreSQL)
resource "aws_subnet" "private_data" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(var.vpc_cidr, 8, count.index + 31)
  availability_zone = data.aws_availability_zones.available.names[count.index]

  tags = {
    Name = "campuslab-private-data-subnet-${count.index + 1}-${var.environment}"
    Tier = "PrivateData"
  }
}

# -----------------------------------------------------------------------------
# 4. ROUTE TABLES
# -----------------------------------------------------------------------------
# Public Route Table
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "campuslab-public-rt-${var.environment}"
  }
}

resource "aws_route_table_association" "public" {
  count          = 2
  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

# Private Route Tables (App & Worker Route to NAT Gateway)
resource "aws_route_table" "private" {
  count  = 2
  vpc_id = aws_vpc.main.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat[count.index].id
  }

  tags = {
    Name = "campuslab-private-rt-${count.index + 1}-${var.environment}"
  }
}

resource "aws_route_table_association" "private_app" {
  count          = 2
  subnet_id      = aws_subnet.private_app[count.index].id
  route_table_id = aws_route_table.private[count.index].id
}

resource "aws_route_table_association" "private_worker" {
  count          = 2
  subnet_id      = aws_subnet.private_worker[count.index].id
  route_table_id = aws_route_table.private[count.index].id
}

# Data Subnets Route Table (Isolated - No internet route)
resource "aws_route_table" "data" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "campuslab-data-rt-${var.environment}"
  }
}

resource "aws_route_table_association" "private_data" {
  count          = 2
  subnet_id      = aws_subnet.private_data[count.index].id
  route_table_id = aws_route_table.data.id
}

# -----------------------------------------------------------------------------
# 5. SECURITY GROUPS (Strict Ingress & Egress Boundaries)
# -----------------------------------------------------------------------------

# ALB Security Group
resource "aws_security_group" "alb" {
  name        = "campuslab-alb-sg-${var.environment}"
  description = "Allows inbound HTTPS & HTTP to Application Load Balancer"
  vpc_id      = aws_vpc.main.id

  ingress {
    description = "HTTP Inbound"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS Inbound"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = "All outbound"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "campuslab-alb-sg-${var.environment}"
  }
}

# Backend App Security Group
resource "aws_security_group" "backend" {
  name        = "campuslab-backend-sg-${var.environment}"
  description = "Allows traffic strictly from ALB to FastAPI port 8000"
  vpc_id      = aws_vpc.main.id

  ingress {
    description     = "Traffic from ALB"
    from_port       = 8000
    to_port         = 8000
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }

  egress {
    description = "Outbound to internal VPC and NAT"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "campuslab-backend-sg-${var.environment}"
  }
}

# Worker Node Security Group (Private EC2 Subnet)
resource "aws_security_group" "worker" {
  name        = "campuslab-worker-sg-${var.environment}"
  description = "Allows traffic ONLY from Backend App on internal port 8001"
  vpc_id      = aws_vpc.main.id

  ingress {
    description     = "Internal API and PTY WebSocket from Backend"
    from_port       = 8001
    to_port         = 8001
    protocol        = "tcp"
    security_groups = [aws_security_group.backend.id]
  }

  egress {
    description = "Outbound for Docker package updates"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "campuslab-worker-sg-${var.environment}"
  }
}

# Database Security Group (RDS PostgreSQL)
resource "aws_security_group" "rds" {
  name        = "campuslab-rds-sg-${var.environment}"
  description = "Allows PostgreSQL traffic ONLY from Backend App"
  vpc_id      = aws_vpc.main.id

  ingress {
    description     = "PostgreSQL from Backend App"
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.backend.id]
  }

  egress {
    description = "No outbound from database"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "campuslab-rds-sg-${var.environment}"
  }
}
