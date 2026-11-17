import asyncio
import json
import logging
from typing import Optional
from fastapi import WebSocket, WebSocketDisconnect
import websockets
from ..core.config import settings
from .linux_simulator import LinuxShell

logger = logging.getLogger("campuslab.terminal.gateway")


class PtyGateway:
    """Relays student browser xterm.js WebSocket to private EC2 worker container PTY."""

    @staticmethod
    async def handle_terminal_ws(
        client_ws: WebSocket,
        session_id: str,
        course_code: str = "PCCSL407",
        experiment_slug: str = "exp-04",
        environment: str = "Ubuntu 24.04 LTS Container",
        starter_code: Optional[str] = None,
        initial_cmd: Optional[str] = None,
        initial_output: Optional[str] = None,
    ):
        """Accept student WebSocket and proxy or simulate terminal session."""
        await client_ws.accept()

        worker_ws_url = f"{settings.WORKER_API_URL.replace('http', 'ws')}/internal/v1/pty-ws/{session_id}"

        # Attempt connection to live Private EC2 Worker PTY
        worker_conn = None
        try:
            worker_conn = await asyncio.wait_for(websockets.connect(worker_ws_url), timeout=1.5)
            logger.info(f"Connected to EC2 worker PTY at {worker_ws_url}")
        except Exception:
            logger.info(f"EC2 worker PTY unreachable at {worker_ws_url}. Operating in local interactive sandbox mode.")
            worker_conn = None

        if worker_conn:
            # Bidirectional pipe between client and worker
            async def client_to_worker():
                try:
                    while True:
                        msg = await client_ws.receive_text()
                        await worker_conn.send(msg)
                except Exception:
                    pass

            async def worker_to_client():
                try:
                    while True:
                        msg = await worker_conn.recv()
                        await client_ws.send_text(msg)
                except Exception:
                    pass

            try:
                await asyncio.gather(client_to_worker(), worker_to_client())
            finally:
                await worker_conn.close()
        else:
            # Local interactive terminal simulation
            await PtyGateway._run_interactive_simulation(
                client_ws=client_ws,
                course_code=course_code,
                experiment_slug=experiment_slug,
                environment=environment,
                starter_code=starter_code,
                initial_cmd=initial_cmd,
                initial_output=initial_output,
            )

    @staticmethod
    async def _run_interactive_simulation(
        client_ws: WebSocket,
        course_code: str,
        experiment_slug: str,
        environment: str,
        starter_code: Optional[str],
        initial_cmd: Optional[str],
        initial_output: Optional[str],
    ):
        host = f"ktu-{course_code.lower()}"
        prompt = f"\r\n\x1b[1;32mstudent@{host}\x1b[0m:\x1b[1;34m~\x1b[0m$ "

        # Welcome message
        await client_ws.send_text("\x1b[1;36m=== CampusLab Isolated Linux Sandbox (KTU 2024 Scheme) ===\x1b[0m\r\n")
        await client_ws.send_text(f"Environment: {environment}\r\n")
        await client_ws.send_text(f"Course: {course_code} • Experiment: {experiment_slug}\r\n")
        await client_ws.send_text("Type \x1b[1;33mhelp\x1b[0m to view commands, or run code directly.\r\n\r\n")

        # Initial command output if pre-configured
        if initial_cmd:
            await client_ws.send_text(f"{prompt.lstrip()}{initial_cmd}\r\n")
            if initial_output:
                for line in initial_output.split("\n"):
                    await client_ws.send_text(f"{line}\r\n")

        await client_ws.send_text(prompt)

        shell = LinuxShell(course_code=course_code, experiment_slug=experiment_slug, starter_code=starter_code)
        cmd_buffer = ""

        try:
            while True:
                data = await client_ws.receive_text()

                for char in data:
                    code = ord(char)

                    # Enter key
                    if code in (13, 10):
                        await client_ws.send_text("\r\n")
                        cmd = cmd_buffer.strip()
                        cmd_buffer = ""

                        if cmd:
                            lines, is_clear = shell.execute(cmd, initial_cmd, initial_output)
                            if is_clear:
                                await client_ws.send_text("\x1b[2J\x1b[H")
                            else:
                                for line in lines:
                                    await client_ws.send_text(f"{line}\r\n")

                        await client_ws.send_text(prompt)

                    # Backspace
                    elif code in (8, 127):
                        if cmd_buffer:
                            cmd_buffer = cmd_buffer[:-1]
                            await client_ws.send_text("\b \b")

                    # Ctrl+C
                    elif code == 3:
                        cmd_buffer = ""
                        await client_ws.send_text(f"^C{prompt}")

                    # Printable chars
                    elif 32 <= code <= 126:
                        cmd_buffer += char
                        await client_ws.send_text(char)

        except WebSocketDisconnect:
            logger.info(f"Terminal WebSocket client disconnected: session={session_id}")
        except Exception as e:
            logger.error(f"Terminal WebSocket error: {e}")


pty_gateway = PtyGateway()
