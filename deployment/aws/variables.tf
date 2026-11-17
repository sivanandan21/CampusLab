variable "aws_region" {
  description = "AWS deployment region"
  type        = string
  default     = "ap-south-1" # Asia Pacific (Mumbai)
}

variable "environment" {
  description = "Deployment environment (pilot, staging, production)"
  type        = string
  default     = "pilot"
}

variable "vpc_cidr" {
  description = "VPC CIDR block"
  type        = string
  default     = "10.0.0.0/16"
}

variable "db_instance_class" {
  description = "Amazon RDS PostgreSQL instance class"
  type        = string
  default     = "db.t4g.medium"
}

variable "db_name" {
  description = "RDS Database name"
  type        = string
  default     = "campuslab"
}

variable "db_username" {
  description = "Master username for RDS"
  type        = string
  default     = "campusadmin"
}

variable "backend_instance_type" {
  description = "EC2 instance type for FastAPI Backend"
  type        = string
  default     = "t3.medium"
}

variable "worker_instance_type" {
  description = "EC2 instance type for Private Lab Worker container hosts"
  type        = string
  default     = "c6i.large"
}

variable "budget_monthly_usd" {
  description = "Monthly AWS cost budget threshold in USD for pilot alert"
  type        = string
  default     = "50"
}

variable "alert_email" {
  description = "Email address for AWS CloudWatch and Budget threshold alarms"
  type        = string
  default     = "devops-alerts@campuslab.edu"
}
