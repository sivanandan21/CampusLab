# ==============================================================================
# CampusLab KTU Base Linux Container Image — All-in-One Linux & CSE Toolchain
# APJ Abdul Kalam Technological University (KTU) 2024 Scheme - B.Tech CSE
# Ubuntu 24.04 LTS • Complete GNU/Linux Utilities & S1-S8 Lab Toolchains
# ==============================================================================

FROM ubuntu:24.04

LABEL maintainer="CampusLab Platform Engineering <security@campuslab.edu>"
LABEL scheme="KTU 2024 Scheme B.Tech CSE"
LABEL tier="complete-linux-sandbox"
LABEL version="2024.1"

# Set environment variables for non-interactive installation
ENV DEBIAN_FRONTEND=noninteractive \
    LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    TERM=xterm-256color \
    HOME=/home/student

# Prevent background service autostart during package installation in container build
RUN echo '#!/bin/sh\nexit 101' > /usr/sbin/policy-rc.d && chmod +x /usr/sbin/policy-rc.d

# 1. Update package lists and install almost every standard Linux command and utility
RUN apt-get update && apt-get install -y --no-install-recommends \
    # Core GNU Utilities & File Management
    coreutils \
    util-linux \
    bsdextrautils \
    findutils \
    diffutils \
    patch \
    grep \
    sed \
    gawk \
    tar \
    gzip \
    bzip2 \
    xz-utils \
    zstd \
    zip \
    unzip \
    p7zip-full \
    cpio \
    tree \
    file \
    bc \
    dc \
    jq \
    less \
    moreutils \
    \
    # Process, System Monitoring & Diagnostics
    procps \
    psmisc \
    htop \
    lsof \
    strace \
    ltrace \
    time \
    sysstat \
    iotop \
    \
    # Networking & Diagnostic Tools
    iproute2 \
    net-tools \
    iputils-ping \
    iputils-tracepath \
    traceroute \
    mtr-tiny \
    dnsutils \
    curl \
    wget \
    netcat-openbsd \
    socat \
    telnet \
    tcpdump \
    tshark \
    nmap \
    iperf3 \
    ethtool \
    whois \
    rsync \
    openssh-client \
    nginx \
    \
    # Compilers, Debuggers, Assemblers & Build Tools (C / C++ / Lex / Yacc / ASM)
    build-essential \
    gcc \
    g++ \
    clang \
    llvm \
    gdb \
    valgrind \
    make \
    cmake \
    nasm \
    yasm \
    flex \
    bison \
    m4 \
    binutils \
    \
    # Hardware & Logic Simulation (KTU Digital & Microcontroller Labs)
    iverilog \
    gtkwave \
    \
    # Python 3 Toolchain & Data Science / ML Libraries (KTU Python & ML Labs)
    python3 \
    python3-pip \
    python3-venv \
    python3-dev \
    python3-numpy \
    python3-scipy \
    python3-pandas \
    python3-matplotlib \
    \
    # Java Development Kit (KTU OOP & Java Labs)
    openjdk-21-jdk-headless \
    \
    # Node.js & npm (KTU Web & Fullstack Labs)
    nodejs \
    npm \
    \
    # Database Clients (KTU DBMS Lab)
    sqlite3 \
    postgresql-client \
    mariadb-client \
    \
    # Text Editors, Terminal Multiplexers & Shells
    vim \
    nano \
    ed \
    tmux \
    screen \
    bash \
    dash \
    zsh \
    \
    # Security, Cryptography & System Administration
    openssl \
    ca-certificates \
    gnupg \
    xxd \
    sudo \
    passwd \
    man-db \
    manpages \
    manpages-dev \
    \
    # Cleanup apt caches to keep image size lean
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# 2. Configure passwordless sudo for student inside the sandbox container
#    --force makes groupadd succeed even if GID 1000 already exists (Ubuntu 24.04 base ships with one)
RUN groupadd --force -g 1000 student && \
    useradd -u 1000 -g student -s /bin/bash -m -d /home/student student || true && \
    echo "student ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/student && \
    chmod 0440 /etc/sudoers.d/student

# 3. Create KTU Lab Starter Workspace and Sample Directories
WORKDIR /home/student

RUN mkdir -p /home/student/workspace \
    /home/student/s1-python \
    /home/student/s2-c \
    /home/student/s3-dsa \
    /home/student/s4-os \
    /home/student/s4-dbms \
    /home/student/s5-networks \
    /home/student/s5-ml \
    /home/student/s6-systems

# 4. Populate S4 OS Lab sample process_tree.c
RUN cat << 'EOF' > /home/student/workspace/process_tree.c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
    printf("Parent Process PID: %d\n", getpid());
    pid_t p1 = fork();
    if (p1 == 0) {
        printf("Child 1 Process PID: %d (parent: %d)\n", getpid(), getppid());
        exit(0);
    }
    pid_t p2 = fork();
    if (p2 == 0) {
        printf("Child 2 Process PID: %d (parent: %d)\n", getpid(), getppid());
        exit(0);
    }
    wait(NULL);
    wait(NULL);
    return 0;
}
EOF

# 5. Populate S4 OS Lab sample Makefile
RUN cat << 'EOF' > /home/student/workspace/Makefile
CC = gcc
CFLAGS = -Wall -Wextra -O2
TARGET = process_tree

all: $(TARGET)

$(TARGET): process_tree.c
	$(CC) $(CFLAGS) -o $(TARGET) process_tree.c

clean:
	rm -f $(TARGET) *.o

run: all
	./$(TARGET)
EOF

# 6. Populate sample Python solution
RUN cat << 'EOF' > /home/student/workspace/solution.py
"""
CampusLab KTU 2024 Scheme - Sample Script
"""
import sys

def main():
    print("KTU 2024 Scheme Practical Sandbox initialized.")
    print(f"Python version: {sys.version.split()[0]}")
    print("Environment test completed: 0 errors.")

if __name__ == "__main__":
    main()
EOF

# 7. Populate README.md
RUN cat << 'EOF' > /home/student/workspace/README.md
# CampusLab KTU 2024 Scheme Practical Environment
Welcome to your containerized Linux laboratory sandbox.

### Pre-installed Toolchains:
- GCC 13.x, G++, Clang, GDB, Valgrind, Make, CMake
- Python 3.12 (NumPy, SciPy, Pandas, Matplotlib)
- OpenJDK 21 (javac, java, jar)
- PostgreSQL client (psql), SQLite3, MariaDB client
- Lex & Yacc (Flex, Bison), NASM, Iverilog, GTKWave
- Linux Diagnostics: ps, top, htop, pstree, lsof, strace, ltrace, iostat, vmstat
- Network Tools: ip, ping, netstat, ss, curl, wget, nmap, tcpdump, traceroute
- Text Editors: nano, vim, ed, tmux
EOF

# Ensure proper permissions for student user
RUN chown -R student:student /home/student && \
    chmod -R 755 /home/student

# Switch to student user
USER student

# Custom bash prompt and welcome banner with system info
RUN echo 'PS1="\\[\\033[01;32m\\]student@ktu-lab\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ "' >> /home/student/.bashrc && \
    echo 'alias ll="ls -la --color=auto"' >> /home/student/.bashrc && \
    echo 'alias la="ls -A --color=auto"' >> /home/student/.bashrc && \
    echo 'alias l="ls -CF --color=auto"' >> /home/student/.bashrc && \
    echo 'echo -e "\\033[1;36m=== CampusLab Isolated Linux Sandbox (KTU 2024 Scheme) ===\\033[0m"' >> /home/student/.bashrc && \
    echo 'echo -e "\\033[0;32mUbuntu 24.04 LTS • Full Linux Command Suite & KTU S1-S8 Compilers Ready\\033[0m"' >> /home/student/.bashrc && \
    echo 'echo -e "\\033[0;33mWorkspace Directory: /home/student/workspace\\033[0m\\n"' >> /home/student/.bashrc

WORKDIR /home/student/workspace

CMD ["/bin/bash"]
