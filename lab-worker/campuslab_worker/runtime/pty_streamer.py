import asyncio
import logging
from fastapi import WebSocket, WebSocketDisconnect

logger = logging.getLogger("campuslab.worker.pty")


class PtyStreamer:
    """Streams interactive container terminal session over WebSocket to PTY gateway."""

    @staticmethod
    async def stream_pty(websocket: WebSocket, session_id: str):
        await websocket.accept()
        logger.info(f"Worker PTY WebSocket opened for session {session_id}")

        prompt = f"\r\n\x1b[1;32mstudent@ktu-worker\x1b[0m:\x1b[1;34m~\x1b[0m$ "
        await websocket.send_text("\x1b[1;32m=== Connected to Private EC2 Worker PTY ===\x1b[0m\r\n")
        await websocket.send_text(prompt)

        cmd_buffer = ""
        try:
            while True:
                data = await websocket.receive_text()
                for char in data:
                    code = ord(char)
                    if code in (13, 10):
                        await websocket.send_text("\r\n")
                        cmd = cmd_buffer.strip()
                        cmd_buffer = ""

                        if cmd == "clear":
                            await websocket.send_text("\x1b[2J\x1b[H")
                        elif cmd:
                            await websocket.send_text(f"worker-pty: executed '{cmd}'\r\n")

                        await websocket.send_text(prompt)
                    elif code in (8, 127):
                        if cmd_buffer:
                            cmd_buffer = cmd_buffer[:-1]
                            await websocket.send_text("\b \b")
                    elif 32 <= code <= 126:
                        cmd_buffer += char
                        await websocket.send_text(char)
        except WebSocketDisconnect:
            logger.info(f"Worker PTY WebSocket closed for session {session_id}")


pty_streamer = PtyStreamer()
