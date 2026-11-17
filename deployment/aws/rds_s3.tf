# ==============================================================================
# CampusLab AWS Infrastructure - RDS PostgreSQL, S3 Artifact Bucket & Secrets
# ==============================================================================

# -----------------------------------------------------------------------------
# 1. AWS SECRETS MANAGER (Database & Shared Secrets)
# -----------------------------------------------------------------------------
resource "random_password" "db_password" {
  length           = 24
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_secretsmanager_secret" "db_secret" {
  name                    = "campuslab/${var.environment}/credentials"
  recovery_window_in_days = 0

  tags = {
    Name = "campuslab-credentials-${var.environment}"
  }
}

resource "aws_secretsmanager_secret_version" "db_secret_val" {
  secret_id = aws_secretsmanager_secret.db_secret.id
  secret_string = jsonencode({
    username             = var.db_username
    password             = random_password.db_password.result
    database             = var.db_name
    host                 = aws_db_instance.postgres.address
    port                 = 5432
    app_secret_key       = "campuslab_pilot_secret_key_ktu2024_btech_cse_secure_key"
    worker_shared_secret = "worker_hmac_shared_secret_campuslab_ktu2024"
  })
}

# -----------------------------------------------------------------------------
# 2. AMAZON RDS POSTGRESQL 16 (Multi-AZ in Private Data Subnets)
# -----------------------------------------------------------------------------
resource "aws_db_subnet_group" "rds" {
  name       = "campuslab-rds-subnet-group-${var.environment}"
  subnet_ids = aws_subnet.private_data[*].id

  tags = {
    Name = "campuslab-rds-subnet-group"
  }
}

resource "aws_db_parameter_group" "pg16" {
  name   = "campuslab-pg16-params-${var.environment}"
  family = "postgres16"

  parameter {
    name  = "rds.force_ssl"
    value = "1"
  }

  parameter {
    name  = "log_connections"
    value = "1"
  }

  parameter {
    name  = "log_disconnections"
    value = "1"
  }
}

resource "aws_db_instance" "postgres" {
  identifier        = "campuslab-db-${var.environment}"
  allocated_storage = 20
  max_allocated_storage = 100
  storage_type      = "gp3"
  engine            = "postgres"
  engine_version    = "16.3"
  instance_class    = var.db_instance_class
  db_name           = var.db_name
  username          = var.db_username
  password          = random_password.db_password.result

  multi_az               = true
  db_subnet_group_name   = aws_db_subnet_group.rds.name
  vpc_security_group_ids = [aws_security_group.rds.id]
  parameter_group_name   = aws_db_parameter_group.pg16.name

  storage_encrypted      = true
  skip_final_snapshot    = true
  backup_retention_period = 7
  deletion_protection    = false # Enable for production

  tags = {
    Name = "campuslab-rds-postgres-${var.environment}"
  }
}

# -----------------------------------------------------------------------------
# 3. AMAZON S3 ARTIFACT BUCKET (Encrypted, Private, Block Public Access)
# -----------------------------------------------------------------------------
resource "random_id" "bucket_suffix" {
  byte_length = 4
}

resource "aws_s3_bucket" "artifacts" {
  bucket        = "campuslab-artifacts-${var.environment}-${random_id.bucket_suffix.hex}"
  force_destroy = false

  tags = {
    Name        = "campuslab-artifacts"
    Environment = var.environment
  }
}

# Block all public access
resource "aws_s3_bucket_public_access_block" "artifacts" {
  bucket = aws_s3_bucket.artifacts.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Default AES256 / KMS Server-Side Encryption
resource "aws_s3_bucket_server_side_encryption_configuration" "artifacts" {
  bucket = aws_s3_bucket.artifacts.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# Versioning
resource "aws_s3_bucket_versioning" "artifacts" {
  bucket = aws_s3_bucket.artifacts.id
  versioning_configuration {
    status = "Enabled"
  }
}

# Lifecycle rules: Transition submissions to Glacier after 90 days
resource "aws_s3_bucket_lifecycle_configuration" "artifacts" {
  bucket = aws_s3_bucket.artifacts.id

  rule {
    id     = "archive-old-lab-submissions"
    status = "Enabled"

    filter {
      prefix = "submissions/"
    }

    transition {
      days          = 90
      storage_class = "GLACIER"
    }

    expiration {
      days = 365 # 1 year retention for academic records
    }
  }
}
