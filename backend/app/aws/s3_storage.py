import logging
from typing import Dict, Any, Optional
import boto3
from botocore.config import Config
from botocore.exceptions import ClientError
from ..core.config import settings

logger = logging.getLogger("campuslab.aws.s3")


class S3StorageService:
    def __init__(self):
        self.bucket = settings.S3_ARTIFACT_BUCKET
        self.region = settings.AWS_REGION
        self.endpoint_url = settings.S3_ENDPOINT_URL
        self._client = None

    def _get_client(self):
        if self._client is None:
            config = Config(
                region_name=self.region,
                signature_version="s3v4",
                s3={"addressing_style": "virtual"},
                retries={"max_attempts": 3, "mode": "standard"},
            )
            kwargs = {
                "config": config,
                "endpoint_url": self.endpoint_url or f"https://s3.{self.region}.amazonaws.com",
            }
            if settings.AWS_ACCESS_KEY_ID and settings.AWS_SECRET_ACCESS_KEY:
                kwargs["aws_access_key_id"] = settings.AWS_ACCESS_KEY_ID
                kwargs["aws_secret_access_key"] = settings.AWS_SECRET_ACCESS_KEY
                if settings.AWS_SESSION_TOKEN:
                    kwargs["aws_session_token"] = settings.AWS_SESSION_TOKEN

            try:
                self._client = boto3.client("s3", **kwargs)
            except Exception as e:
                logger.warning(f"Could not initialize real AWS S3 client: {e}. Running in local mock mode.")
                self._client = None
        return self._client

    def generate_presigned_put(
        self,
        s3_key: str,
        content_type: str,
        expires_in: int = 900,  # 15 minutes
        metadata: Optional[Dict[str, str]] = None,
    ) -> Dict[str, Any]:
        """
        Generate short-lived S3 Presigned PUT URL for student lab artifact upload.
        Enforces server-side encryption and metadata tags.
        """
        client = self._get_client()
        is_mock_env = (
            settings.APP_ENV == "development"
            and not settings.USE_LIVE_AWS
            and not settings.AWS_ACCESS_KEY_ID
            and not self.endpoint_url
        )
        if client is None or is_mock_env:
            # Local development mock presigned URL
            mock_url = f"http://localhost:8000/api/v1/mock-s3/upload/{s3_key}"
            return {
                "upload_url": mock_url,
                "s3_key": s3_key,
                "bucket": self.bucket,
                "expires_in_seconds": expires_in,
                "headers": {"Content-Type": content_type},
            }

        params = {
            "Bucket": self.bucket,
            "Key": s3_key,
            "ContentType": content_type,
            "ServerSideEncryption": "AES256",
        }
        if metadata:
            params["Metadata"] = metadata

        try:
            url = client.generate_presigned_url(
                ClientMethod="put_object",
                Params=params,
                ExpiresIn=expires_in,
                HttpMethod="PUT",
            )
            return {
                "upload_url": url,
                "s3_key": s3_key,
                "bucket": self.bucket,
                "expires_in_seconds": expires_in,
                "headers": {
                    "Content-Type": content_type,
                    "x-amz-server-side-encryption": "AES256",
                },
            }
        except ClientError as e:
            logger.error(f"Error generating presigned PUT for {s3_key}: {e}")
            raise

    def generate_presigned_get(
        self,
        s3_key: str,
        expires_in: int = 3600,  # 1 hour
        filename: Optional[str] = None,
    ) -> str:
        """Generate short-lived S3 Presigned GET URL for viewing or downloading submissions & PDF reports."""
        client = self._get_client()
        is_mock_env = (
            settings.APP_ENV == "development"
            and not settings.USE_LIVE_AWS
            and not settings.AWS_ACCESS_KEY_ID
            and not self.endpoint_url
        )
        if client is None or is_mock_env:
            return f"http://localhost:8000/api/v1/mock-s3/download/{s3_key}"

        params = {
            "Bucket": self.bucket,
            "Key": s3_key,
        }
        if filename:
            params["ResponseContentDisposition"] = f'attachment; filename="{filename}"'

        try:
            return client.generate_presigned_url(
                ClientMethod="get_object",
                Params=params,
                ExpiresIn=expires_in,
            )
        except ClientError as e:
            logger.error(f"Error generating presigned GET for {s3_key}: {e}")
            return f"https://{self.bucket}.s3.{self.region}.amazonaws.com/{s3_key}"


s3_service = S3StorageService()
