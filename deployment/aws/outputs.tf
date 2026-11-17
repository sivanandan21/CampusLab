output "alb_dns_name" {
  description = "Public DNS hostname of Application Load Balancer"
  value       = aws_lb.campuslab_alb.dns_name
}

output "rds_endpoint" {
  description = "Private RDS PostgreSQL endpoint"
  value       = aws_db_instance.postgres.endpoint
}

output "s3_bucket_name" {
  description = "Private S3 Artifact Bucket name"
  value       = aws_s3_bucket.artifacts.id
}

output "vpc_id" {
  description = "CampusLab VPC ID"
  value       = aws_vpc.main.id
}

output "secrets_manager_arn" {
  description = "Secrets Manager secret ARN"
  value       = aws_secretsmanager_secret.db_secret.arn
}
