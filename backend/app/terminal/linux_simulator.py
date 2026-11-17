"""
CampusLab Linux Command Engine (Backend Simulator & Fallback)
Provides full Linux command responses for all standard shell tools and KTU lab experiments.
"""

from datetime import datetime
from typing import Dict, List, Tuple, Optional


class LinuxShell:
    def __init__(self, course_code: str = "PCCSL407", experiment_slug: str = "exp-04", starter_code: Optional[str] = None):
        self.course_code = course_code.upper()
        self.experiment_slug = experiment_slug.lower()
        self.hostname = f"ktu-{self.course_code.lower()}"
        self.user = "student"
        self.cwd = "/home/student/workspace"
        self.history: List[str] = []

        code = starter_code or (
            "#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n\n"
            "int main() {\n    printf(\"Parent Process PID: %d\\n\", getpid());\n    return 0;\n}\n"
        )
        self.files: Dict[str, str] = {
            "process_tree.c": code,
            "main.c": code,
            "solution.py": 'import sys\n\ndef main():\n    print("KTU 2024 Scheme Python Sandbox OK")\n\nif __name__ == "__main__":\n    main()\n',
            "Makefile": "CC = gcc\nCFLAGS = -Wall -O2\n\nall:\n\t$(CC) $(CFLAGS) -o process_tree process_tree.c\n\nclean:\n\trm -f process_tree *.o\n",
            "README.md": f"# KTU 2024 Scheme Practical Sandbox\nCourse: {self.course_code}\nExperiment: {self.experiment_slug}\n",
            "queries.sql": "CREATE TABLE students (id SERIAL PRIMARY KEY, name VARCHAR(100), marks INT);\nINSERT INTO students VALUES (1, 'Adarsh S', 95);\nSELECT * FROM students;\n",
        }

    def execute(self, cmd_input: str, initial_cmd: Optional[str] = None, initial_output: Optional[str] = None) -> Tuple[List[str], bool]:
        trimmed = cmd_input.strip()
        if not trimmed:
            return [], False

        self.history.append(trimmed)

        # Chained commands: &&
        if "&&" in trimmed:
            sub_cmds = [c.strip() for c in trimmed.split("&&")]
            lines = []
            for sc in sub_cmds:
                out, is_clear = self.execute(sc, initial_cmd, initial_output)
                if is_clear:
                    return [], True
                lines.extend(out)
            return lines, False

        # Sudo transparency
        working = trimmed
        if working.startswith("sudo "):
            working = working[5:].strip()

        parts = working.split()
        main = parts[0].lower()
        args = parts[1:]

        # 1. Clear
        if main == "clear":
            return [], True

        # 2. Help
        if main == "help":
            return [
                "\x1b[1;36m=== CampusLab Linux Command Reference (KTU 2024 Scheme) ===\x1b[0m",
                "\x1b[1;33mFiles & Dirs:\x1b[0m  ls, pwd, cd, cat, touch, mkdir, rm, cp, mv, head, tail, grep, wc, tree, file, stat",
                "\x1b[1;33mSystem & Stats:\x1b[0m uname, hostname, uptime, whoami, id, date, cal, df, du, free, top, htop, ps, pstree",
                "\x1b[1;33mCompilers & Dev:\x1b[0m gcc, g++, clang, make, gdb, valgrind, strace, nasm, flex, bison",
                "\x1b[1;33mProgramming:\x1b[0m    python3, pip, javac, java, node, npm",
                "\x1b[1;33mDatabase:\x1b[0m       psql, sqlite3, mysql",
                "\x1b[1;33mNetworking:\x1b[0m     ifconfig, ip, ping, netstat, ss, curl, wget, nslookup, dig, nmap, traceroute",
                "\x1b[1;33mShell Utilities:\x1b[0m echo, env, export, which, history, clear, man, sudo",
            ], False

        # 3. Pwd & Cd
        if main == "pwd":
            return [self.cwd], False

        if main == "cd":
            target = args[0] if args else "~"
            if target in ("~", "/home/student", ""):
                self.cwd = "/home/student"
            elif target in ("..", "../"):
                segs = [s for s in self.cwd.split("/") if s]
                if segs:
                    segs.pop()
                self.cwd = "/" + "/".join(segs)
            elif target in ("workspace", "./workspace"):
                self.cwd = "/home/student/workspace"
            elif target.startswith("/"):
                self.cwd = target
            else:
                self.cwd = f"{self.cwd}/{target}".replace("//", "/")
            return [], False

        # 4. ls, ll, la
        if main in ("ls", "ll", "la"):
            is_long = main == "ll" or any("l" in a for a in args)
            is_all = main == "la" or any("a" in a for a in args)

            files = list(self.files.keys())
            if is_all:
                files = [".", "..", ".bashrc", ".profile"] + files

            if is_long:
                lines = [f"total {len(files) * 4}"]
                for f in files:
                    is_dir = f.endswith("/") or f in (".", "..")
                    perms = "drwxr-xr-x" if is_dir else "-rw-r--r--"
                    size = 4096 if is_dir else len(self.files.get(f, ""))
                    color = "\x1b[1;34m" if is_dir else "\x1b[1;32m" if f.endswith((".c", ".py")) else "\x1b[0m"
                    lines.append(f"{perms} 1 student student {size:6d} Oct 24 10:15 {color}{f}\x1b[0m")
                return lines, False
            else:
                colored = []
                for f in files:
                    if f.endswith((".c", ".py")):
                        colored.append(f"\x1b[1;32m{f}\x1b[0m")
                    elif f == "process_tree" or f.endswith(".o"):
                        colored.append(f"\x1b[1;31m{f}\x1b[0m")
                    else:
                        colored.append(f)
                return ["  ".join(colored)], False

        # 5. File ops: touch, mkdir, rm, cp, mv
        if main == "touch":
            fname = args[0] if args else "file.txt"
            if fname not in self.files:
                self.files[fname] = ""
            return [], False

        if main == "mkdir":
            dname = args[0] if args else "folder"
            self.files[f"{dname}/"] = ""
            return [], False

        if main == "rm":
            fnames = [a for a in args if not a.startswith("-")]
            for fn in fnames:
                self.files.pop(fn, None)
            return [], False

        if main == "cp" and len(args) >= 2:
            src, dst = args[0], args[1]
            if src in self.files:
                self.files[dst] = self.files[src]
            return [], False

        if main == "mv" and len(args) >= 2:
            src, dst = args[0], args[1]
            if src in self.files:
                self.files[dst] = self.files.pop(src)
            return [], False

        # 6. File reading: cat, head, tail
        if main == "cat":
            if not args:
                return ["cat: missing operand"], False
            fname = args[0]
            if fname in self.files:
                return self.files[fname].split("\n"), False
            for k in self.files:
                if fname in k:
                    return self.files[k].split("\n"), False
            return [f"cat: {fname}: No such file or directory"], False

        if main == "head":
            fname = args[-1] if args else ""
            if fname in self.files:
                return self.files[fname].split("\n")[:10], False
            return ["head: cannot open file"], False

        if main == "tail":
            fname = args[-1] if args else ""
            if fname in self.files:
                return self.files[fname].split("\n")[-10:], False
            return ["tail: cannot open file"], False

        if main == "grep":
            query = args[0].strip("'\"") if args else ""
            content = self.files.get(args[1], "") if len(args) > 1 else "\n".join(self.files.values())
            matches = [line for line in content.split("\n") if query.lower() in line.lower()]
            return [m.replace(query, f"\x1b[1;31m{query}\x1b[0m") for m in matches], False

        if main == "wc":
            fname = args[0] if args else ""
            content = self.files.get(fname, "")
            lines = len(content.split("\n"))
            words = len(content.split())
            chars = len(content)
            return [f"  {lines}  {words}  {chars} {fname}"], False

        if main == "tree":
            return [
                ".",
                "├── Makefile",
                "├── README.md",
                "├── main.c",
                "├── process_tree.c",
                "├── queries.sql",
                "└── solution.py",
                "",
                "0 directories, 6 files",
            ], False

        if main == "file":
            fname = args[0] if args else "process_tree.c"
            if fname.endswith(".c"):
                return [f"{fname}: C source, ASCII text"], False
            if fname.endswith(".py"):
                return [f"{fname}: Python script, ASCII text executable"], False
            return [f"{fname}: ASCII text"], False

        # 7. System info: uname, hostname, uptime, whoami, id, date, cal, df, du, free
        if main == "uname":
            if "-a" in args:
                return ["Linux ktu-lab 6.6.0-24-generic #24-Ubuntu SMP PREEMPT_DYNAMIC Thu Oct 17 18:24:12 UTC 2024 x86_64 x86_64 x86_64 GNU/Linux"], False
            return ["Linux"], False

        if main == "hostname":
            return [self.hostname], False

        if main == "whoami":
            return [self.user], False

        if main == "id":
            return ["uid=1000(student) gid=1000(student) groups=1000(student),27(sudo)"], False

        if main == "uptime":
            return [" 14:10:05 up 14 days,  3:22,  1 user,  load average: 0.12, 0.08, 0.05"], False

        if main == "date":
            return [datetime.now().strftime("%a %b %d %H:%M:%S IST %Y")], False

        if main == "cal":
            return [
                "    October 2026      ",
                "Su Mo Tu We Th Fr Sa  ",
                "             1  2  3  ",
                " 4  5  6  7  8  9 10  ",
                "11 12 13 14 15 16 17  ",
                "18 19 20 21 22 23 24  ",
                "25 26 27 28 29 30 31  ",
            ], False

        if main == "df":
            return [
                "Filesystem     1K-blocks     Used Available Use% Mounted on",
                "/dev/root       51474044 14238492  34601428  30% /",
                "tmpfs            2048000        0   2048000   0% /dev/shm",
                "tmpfs             512000      780    511220   1% /run",
            ], False

        if main == "du":
            return ["48K\t."], False

        if main == "free":
            return [
                "               total        used        free      shared  buff/cache   available",
                "Mem:           4.0Gi       512Mi       2.8Gi       1.0Mi       720Mi       3.2Gi",
                "Swap:          1.0Gi          0B       1.0Gi",
            ], False

        # 8. Processes: ps, pstree, top, htop, kill
        if main == "ps":
            if any("aux" in a or "-ef" in a for a in args):
                return [
                    "USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND",
                    "root         1  0.0  0.1   4320  1450 ?        Ss   10:00   0:00 /bin/init",
                    "student   1040  0.0  0.2   8920  3210 pts/0    Ss   10:14   0:00 /bin/bash",
                    "student   12450 0.1  0.3  14200  4100 pts/0    S    10:15   0:00 ./process_tree",
                    "student   12451 0.0  0.1   4200  1200 pts/0    S    10:15   0:00 [process_tree] <child 1>",
                    "student   12452 0.0  0.1   4200  1200 pts/0    S    10:15   0:00 [process_tree] <child 2>",
                    "student   12500 0.0  0.1   7400  2100 pts/0    R+   10:16   0:00 ps aux",
                ], False
            return [
                "  PID TTY          TIME CMD",
                " 1040 pts/0    00:00:00 bash",
                "12450 pts/0    00:00:00 process_tree",
                "12451 pts/0    00:00:00 process_tree",
                "12452 pts/0    00:00:00 process_tree",
                "12510 pts/0    00:00:00 ps",
            ], False

        if main == "pstree":
            return [
                "init───containerd───container-shim───bash───process_tree─┬─process_tree(child1)",
                "                                                         └─process_tree(child2)",
            ], False

        if main in ("top", "htop"):
            return [
                "top - 14:15:02 up 14 days, 1 user,  load average: 0.08, 0.05, 0.01",
                "Tasks:   5 total,   1 running,   4 sleeping,   0 stopped,   0 zombie",
                "%Cpu(s):  1.2 us,  0.4 sy,  0.0 ni, 98.4 id,  0.0 wa,  0.0 hi,  0.0 si",
                "MiB Mem :   4096.0 total,   2840.5 free,    524.2 used,    731.3 buff/cache",
                "",
                "  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND",
                "12450 student   20   0   14200   4100   2800 S   0.8   0.1   0:00.12 process_tree",
                " 1040 student   20   0    8920   3210   2100 S   0.0   0.1   0:00.08 bash",
                "    1 root      20   0    4320   1450   1100 S   0.0   0.0   0:00.02 init",
            ], False

        if main in ("kill", "pkill"):
            return ["[1]+  Terminated              process_tree"], False

        # 9. Networking: ifconfig, ip, ping, netstat, ss, curl, wget, nslookup, dig, traceroute, nmap
        if main == "ifconfig":
            return [
                "eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500",
                "        inet 172.18.0.4  netmask 255.255.0.0  broadcast 172.18.255.255",
                "        ether 02:42:ac:12:00:04  txqueuelen 0  (Ethernet)",
                "",
                "lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536",
                "        inet 127.0.0.1  netmask 255.0.0.0",
            ], False

        if main == "ip":
            if "route" in args:
                return ["default via 172.18.0.1 dev eth0 proto static", "172.18.0.0/16 dev eth0 proto kernel scope link src 172.18.0.4"], False
            return [
                "1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN",
                "    inet 127.0.0.1/8 scope host lo",
                "2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP",
                "    inet 172.18.0.4/16 brd 172.18.255.255 scope global eth0",
            ], False

        if main == "ping":
            host = [a for a in args if not a.startswith("-")][0] if args else "127.0.0.1"
            return [
                f"PING {host} ({host}) 56(84) bytes of data.",
                f"64 bytes from {host}: icmp_seq=1 ttl=64 time=0.042 ms",
                f"64 bytes from {host}: icmp_seq=2 ttl=64 time=0.048 ms",
                f"--- {host} ping statistics ---",
                "2 packets transmitted, 2 received, 0% packet loss, time 1002ms",
            ], False

        if main == "nginx":
            if "-v" in args or "-V" in args:
                return ["nginx version: nginx/1.24.0 (Ubuntu 24.04 LTS)"], False
            if "-t" in args:
                return [
                    "nginx: the configuration file /etc/nginx/nginx.conf syntax is ok",
                    "nginx: configuration file /etc/nginx/nginx.conf test is successful",
                ], False
            if "-s" in args:
                sig = args[1] if len(args) > 1 else "reload"
                return [f"[OK] Nginx signal '{sig}' dispatched successfully."], False
            return [
                "Starting nginx... [OK]",
                "Nginx 1.24.0 active on port 80",
                "Reverse proxying to CampusLab API & Frontend.",
            ], False

        if main in ("systemctl", "service"):
            target = next((a for a in args if not a.startswith("-") and a not in ("status", "start", "restart")), "nginx")
            return [
                f"● {target}.service - Service Unit for {target}",
                f"     Loaded: loaded (/lib/systemd/system/{target}.service; enabled)",
                f"     Active: active (running) since Tue 2026-10-24 10:15:00 IST; 4h 12min ago",
                f"   Main PID: 1042 ({target})",
            ], False

        if main in ("netstat", "ss"):
            return [
                "Active Internet connections (only servers)",
                "Proto Recv-Q Send-Q Local Address           Foreign Address         State",
                "tcp        0      0 0.0.0.0:8000            0.0.0.0:*               LISTEN",
                "tcp        0      0 127.0.0.1:5432          0.0.0.0:*               LISTEN",
                "tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN",
            ], False

        if main in ("curl", "wget"):
            url = [a for a in args if not a.startswith("-")][0] if args else "http://localhost:8000"
            return [
                f"Connecting to {url}... connected.",
                "HTTP/1.1 200 OK",
                '{"status": "healthy", "service": "CampusLab Sandbox Engine", "ktu_scheme": "2024"}',
            ], False

        # 10. Compilers: gcc, g++, clang, make, ./binary
        if main in ("gcc", "g++", "clang"):
            self.files["process_tree"] = "[binary]"
            return [
                "\x1b[32m[GCC 13.2.0 - Compilation successful: 0 errors, 0 warnings]\x1b[0m",
                "Binary generated: \x1b[1;32mprocess_tree\x1b[0m (run with ./process_tree)",
            ], False

        if main == "make":
            self.files["process_tree"] = "[binary]"
            return [
                "gcc -Wall -Wextra -O2 -o process_tree process_tree.c",
                "\x1b[32m[Build completed successfully]\x1b[0m",
            ], False

        if main.startswith("./") or main == "process_tree":
            if initial_output:
                return initial_output.split("\n"), False
            return [
                "Parent Process PID: 12450",
                "Child 1 Process PID: 12451 (parent: 12450)",
                "Child 2 Process PID: 12452 (parent: 12450)",
                "[Process execution complete - return code: 0]",
            ], False

        if main == "gdb":
            return [
                "GNU gdb (Ubuntu 13.2-1ubuntu1) 13.2",
                "Reading symbols from process_tree...done.",
                "(gdb) \x1b[33mType 'run' to start, 'quit' to exit.\x1b[0m",
            ], False

        if main == "valgrind":
            return [
                "==12450== Memcheck, a memory error detector",
                "==12450== Command: ./process_tree",
                "==12450== All heap blocks were freed -- no leaks are possible",
                "==12450== ERROR SUMMARY: 0 errors from 0 contexts",
            ], False

        if main == "strace":
            return [
                'execve("./process_tree", ["./process_tree"], 0x7ffd98a1) = 0',
                "clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|SIGCHLD) = 12451",
                "clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|SIGCHLD) = 12452",
                'write(1, "Parent Process PID: 12450\\n", 26) = 26',
                "wait4(-1, NULL, 0, NULL) = 12451",
                "exit_group(0) = ?",
            ], False

        # 11. Programming: python, pip, java, node, psql, sqlite3
        if main in ("python", "python3"):
            if "--version" in args or "-v" in args:
                return ["Python 3.12.3"], False
            if initial_output and initial_cmd and "python" in initial_cmd:
                return initial_output.split("\n"), False
            return [
                "\x1b[32m[Python 3.12.3 Execution: 0 errors]\x1b[0m",
                "KTU 2024 Scheme Python Sandbox OK",
            ], False

        if main in ("pip", "pip3"):
            return ["pip 24.0 (numpy, scipy, pandas, matplotlib installed)"], False

        if main == "javac":
            return ["\x1b[32m[javac 21.0.2 - Compiled .class successfully]\x1b[0m"], False

        if main == "java":
            return ["OpenJDK 64-Bit Server VM (build 21.0.2+13-Ubuntu-1, mixed mode)"], False

        if main == "psql":
            return [
                "psql (PostgreSQL 16.2)",
                "Connected to database campuslab_db.",
                "campuslab_db=> \\dt",
                " Schema |   Name    | Type  |  Owner  ",
                "--------+-----------+-------+---------",
                " public | students  | table | student ",
                "(1 row)",
            ], False

        if main == "sqlite3":
            return ["SQLite version 3.45.1. Connected to in-memory database."], False

        # 12. Shell: echo, env, which, history, man
        if main == "echo":
            msg = " ".join(args)
            msg = msg.replace("$USER", self.user).replace("$HOME", "/home/student")
            msg = msg.replace("$HOSTNAME", self.hostname).replace("$SHELL", "/bin/bash")
            return [msg], False

        if main in ("env", "printenv"):
            return [
                f"USER={self.user}",
                "HOME=/home/student",
                "SHELL=/bin/bash",
                f"HOSTNAME={self.hostname}",
                "KTU_SCHEME=2024",
                "LANG=C.UTF-8",
                "TERM=xterm-256color",
            ], False

        if main in ("which", "whereis"):
            target = args[0] if args else "bash"
            return [f"/usr/bin/{target}"], False

        if main == "history":
            return [f"  {i+1:4d}  {h}" for i, h in enumerate(self.history)], False

        if main == "man":
            topic = args[0] if args else "ls"
            return [f"Manual entry for {topic} in KTU 2024 Scheme Container Sandbox."], False

        # Generic fallback
        return [f"bash: {main}: command executed in container sandbox (code 0)"], False
