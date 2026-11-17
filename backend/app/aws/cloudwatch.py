import json
import logging
import sys
from datetime import datetime, timezone
from typing import Dict, Any, Optional
import boto3
from ..core.config import settings

logger = logging.getLogger("campuslab.aws.cloudwatch")


class StructuredJsonFormatter(logging.Formatter):
    """Format logs as structured JSON for Amazon CloudWatch Logs Insights."""
    def format(self, record: logging.LogRecord) -> str:
        log_obj = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
            "environment": settings.APP_ENV,
        }
        # Add custom attributes if present
        for attr in ("request_id", "user_id", "admission_number", "session_id", "worker_id", "event_type"):
            if hasattr(record, attr):
                log_obj[attr] = getattr(record, attr)

        if record.exc_info:
            log_obj["exception"] = self.formatException(record.exc_info)

        return json.dumps(log_obj)


def setup_cloudwatch_logging():
    """Configure root logger to output structured JSON."""
    handler = logging.StreamHandler(sys.stdout)
    handler.setFormatter(StructuredJsonFormatter())
    logging.root.handlers = [handler]
    logging.root.setLevel(logging.DEBUG if settings.DEBUG else logging.INFO)


class CloudWatchMetricsService:
    def __init__(self):
        self.namespace = settings.CLOUDWATCH_NAMESPACE
        self.region = settings.AWS_REGION
        self._client = None

    def _get_client(self):
        if self._client is None and settings.APP_ENV in ("staging", "production"):
            try:
                self._client = boto3.client("cloudwatch", region_name=self.region)
            except Exception as e:
                logger.warning(f"CloudWatch client initialization skipped: {e}")
        return self._client

    def emit_metric(
        self,
        metric_name: str,
        value: float,
        unit: str = "Count",
        dimensions: Optional[Dict[str, str]] = None,
    ) -> None:
        """
        Publish custom metric to Amazon CloudWatch (Namespace='CampusLab/Pilot').
        Metrics: ActiveSessions, ProvisioningDurationMs, WorkerContainerCount, CleanupFailures, AuthFailures.
        """
        client = self._get_client()
        if not client:
            # In local development, log the metric locally
            logger.debug(f"[Metric] {self.namespace} -> {metric_name}: {value} {unit} ({dimensions or {}})")
            return

        dim_list = []
        if dimensions:
            dim_list = [{"Name": k, "Value": str(v)} for k, v in dimensions.items()]
        dim_list.append({"Name": "Environment", "Value": settings.APP_ENV})

        try:
            client.put_metric_data(
                Namespace=self.namespace,
                MetricData=[
                    {
                        "MetricName": metric_name,
                        "Value": value,
                        "Unit": unit,
                        "Dimensions": dim_list,
                        "Timestamp": datetime.now(timezone.utc),
                    }
                ],
            )
        except Exception as e:
            logger.error(f"Failed to publish CloudWatch metric {metric_name}: {e}")


cloudwatch_metrics = CloudWatchMetricsService()
