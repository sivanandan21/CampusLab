# ==============================================================================
# CampusLab AWS Infrastructure - CloudWatch Log Groups, Alarms & AWS Budget
# ==============================================================================

# -----------------------------------------------------------------------------
# 1. CLOUDWATCH LOG GROUPS
# -----------------------------------------------------------------------------
resource "aws_cloudwatch_log_group" "backend_logs" {
  name              = "/aws/campuslab/${var.environment}/backend"
  retention_in_days = 30

  tags = {
    Name = "campuslab-backend-logs"
  }
}

resource "aws_cloudwatch_log_group" "worker_logs" {
  name              = "/aws/campuslab/${var.environment}/worker"
  retention_in_days = 30

  tags = {
    Name = "campuslab-worker-logs"
  }
}

# -----------------------------------------------------------------------------
# 2. SNS TOPIC FOR ALERTS
# -----------------------------------------------------------------------------
resource "aws_sns_topic" "alerts" {
  name = "campuslab-alerts-${var.environment}"
}

resource "aws_sns_topic_subscription" "email_alert" {
  topic_arn = aws_sns_topic.alerts.arn
  protocol  = "email"
  endpoint  = var.alert_email
}

# -----------------------------------------------------------------------------
# 3. CLOUDWATCH METRIC ALARMS
# -----------------------------------------------------------------------------

# Worker CPU Alarm (> 80% for 5 mins)
resource "aws_cloudwatch_metric_alarm" "worker_high_cpu" {
  alarm_name          = "campuslab-worker-high-cpu-${var.environment}"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = 300
  statistic           = "Average"
  threshold           = 80
  alarm_description   = "Alarm triggers when Worker EC2 instances exceed 80% CPU utilization"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    AutoScalingGroupName = aws_autoscaling_group.worker_asg.name
  }
}

# Cleanup Failures Custom Metric Alarm
resource "aws_cloudwatch_metric_alarm" "cleanup_failures" {
  alarm_name          = "campuslab-cleanup-failures-${var.environment}"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "CleanupFailures"
  namespace           = "CampusLab/Pilot"
  period              = 60
  statistic           = "Sum"
  threshold           = 0
  alarm_description   = "Triggers immediately if any container teardown fails to prevent resource leaks"
  alarm_actions       = [aws_sns_topic.alerts.arn]
}

# Auth Failures Alarm (Brute force warning)
resource "aws_cloudwatch_metric_alarm" "auth_failures" {
  alarm_name          = "campuslab-high-auth-failures-${var.environment}"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "AuthFailures"
  namespace           = "CampusLab/Pilot"
  period              = 300
  statistic           = "Sum"
  threshold           = 10
  alarm_description   = "Triggers if more than 10 failed login attempts occur within 5 minutes"
  alarm_actions       = [aws_sns_topic.alerts.arn]
}

# -----------------------------------------------------------------------------
# 4. AWS BUDGET ($50/Month Pilot Spending Limit)
# -----------------------------------------------------------------------------
resource "aws_budgets_budget" "pilot_cost_budget" {
  name              = "campuslab-pilot-monthly-budget-${var.environment}"
  budget_type       = "COST"
  limit_amount      = var.budget_monthly_usd
  limit_unit        = "USD"
  time_unit         = "MONTHLY"
  time_period_start = "2026-01-01_00:00"

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 80
    threshold_type             = "PERCENTAGE"
    notification_type          = "ACTUAL"
    subscriber_email_addresses = [var.alert_email]
  }

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 100
    threshold_type             = "PERCENTAGE"
    notification_type          = "ACTUAL"
    subscriber_email_addresses = [var.alert_email]
  }
}
