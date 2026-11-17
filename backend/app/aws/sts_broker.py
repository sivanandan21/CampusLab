import logging
from typing import Dict, Any, Optional
import boto3
from botocore.exceptions import ClientError
from ..core.config import settings

logger = logging.getLogger("campuslab.aws.sts")


class STSSandboxBroker:
    def __init__(self):
        self.region = settings.AWS_REGION
        self.role_arn = settings.STS_SANDBOX_ROLE_ARN
        self._client = None

    def _get_client(self):
        if self._client is None and settings.APP_ENV in ("staging", "production"):
            try:
                self._client = boto3.client("sts", region_name=self.region)
            except Exception as e:
                logger.warning(f"Could not initialize AWS STS client: {e}")
        return self._client

    def issue_sandbox_credentials(
        self,
        admission_number: str,
        session_id: str,
        college_id: str = "CET_KTU",
        duration_seconds: int = 2700,  # 45 minutes
    ) -> Dict[str, Any]:
        """
        Issue temporary, scoped AWS credentials for AWS laboratory exercises.
        Session tags: college_id, admission_number, session_id.
        Policy restricts all actions to ap-south-1 with a strict boundary.
        """
        client = self._get_client()
        role_session_name = f"campuslab-{admission_number}-{session_id[:8]}"

        if not client or not self.role_arn or settings.APP_ENV == "development":
            # Mock temporary credentials for development/testing
            return {
                "access_key_id": f"ASIA_MOCK_{admission_number.upper()}",
                "secret_access_key": f"mock_secret_key_session_{session_id[:8]}",
                "session_token": f"mock_session_token_{session_id}",
                "expiration": "2026-11-17T18:00:00Z",
                "region": self.region,
            }

        # Policy restriction: lock to ap-south-1
        session_policy = """{
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Deny",
                    "Action": "*",
                    "Resource": "*",
                    "Condition": {
                        "StringNotEquals": {
                            "aws:RequestedRegion": "ap-south-1"
                        }
                    }
                }
            ]
        }"""

        tags = [
            {"Key": "college_id", "Value": college_id},
            {"Key": "admission_number", "Value": admission_number},
            {"Key": "session_id", "Value": session_id},
        ]

        try:
            response = client.assume_role(
                RoleArn=self.role_arn,
                RoleSessionName=role_session_name,
                Policy=session_policy,
                DurationSeconds=duration_seconds,
                Tags=tags,
            )
            credentials = response["Credentials"]
            return {
                "access_key_id": credentials["AccessKeyId"],
                "secret_access_key": credentials["SecretAccessKey"],
                "session_token": credentials["SessionToken"],
                "expiration": credentials["Expiration"].isoformat(),
                "region": self.region,
            }
        except ClientError as e:
            logger.error(f"STS AssumeRole failed for student {admission_number}: {e}")
            raise


sts_broker = STSSandboxBroker()
