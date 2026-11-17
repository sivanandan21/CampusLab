import json
import logging
from typing import Dict, Any, Optional
import boto3
from botocore.exceptions import ClientError
from ..core.config import settings

logger = logging.getLogger("campuslab.aws.secrets")


class SecretsManagerService:
    def __init__(self):
        self.region = settings.AWS_REGION
        self._client = None

    def _get_client(self):
        if self._client is None and settings.APP_ENV in ("staging", "production"):
            try:
                self._client = boto3.client("secretsmanager", region_name=self.region)
            except Exception as e:
                logger.warning(f"Could not connect to AWS Secrets Manager: {e}")
        return self._client

    def get_secret(self, secret_name: str) -> Optional[Dict[str, Any]]:
        """Retrieve and parse secret from AWS Secrets Manager, falling back safely."""
        client = self._get_client()
        if not client:
            return None

        try:
            response = client.get_secret_value(SecretId=secret_name)
            if "SecretString" in response:
                return json.loads(response["SecretString"])
            return None
        except ClientError as e:
            logger.error(f"Failed to retrieve secret {secret_name} from AWS Secrets Manager: {e}")
            return None


secrets_service = SecretsManagerService()
