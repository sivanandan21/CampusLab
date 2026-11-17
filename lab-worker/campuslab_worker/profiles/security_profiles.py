from typing import Dict, Any


SECURITY_PROFILES: Dict[str, Dict[str, Any]] = {
    # Default for all standard student labs (C, Python, Java, SQL, Lex, Verilog)
    "standard_student": {
        "nano_cpus": 1_000_000_000,          # 1.0 vCPU limit
        "mem_limit": "512m",                  # 512 MB RAM
        "memswap_limit": "512m",              # No swap exploitation
        "pids_limit": 64,                     # Strict PID quota - protects EC2 host from fork bombs
        "user": "1000:1000",                  # Non-root UID:GID
        "cap_drop": ["ALL"],                  # Drop all Linux capabilities
        "cap_add": ["CHOWN", "DAC_OVERRIDE", "SETUID", "SETGID"],  # Minimal required for compilers
        "network_mode": "bridge",             # Internal container network
        "read_only": False,
        "tmpfs": {
            "/tmp": "size=64m,exec",          # In-memory execution temp space
            "/run": "size=16m,noexec",
        },
        "ulimits": [
            {"Name": "nofile", "Soft": 1024, "Hard": 2048},
            {"Name": "nproc", "Soft": 64, "Hard": 64},
        ],
    },
    # High-memory profile for Machine Learning & Big Data Labs (PCCSL508)
    "ml_heavy": {
        "nano_cpus": 2_000_000_000,          # 2.0 vCPU limit
        "mem_limit": "1024m",                 # 1 GB RAM
        "memswap_limit": "1024m",
        "pids_limit": 128,
        "user": "1000:1000",
        "cap_drop": ["ALL"],
        "cap_add": ["CHOWN", "DAC_OVERRIDE"],
        "network_mode": "bridge",
        "read_only": False,
        "tmpfs": {
            "/tmp": "size=128m,exec",
        },
        "ulimits": [
            {"Name": "nofile", "Soft": 2048, "Hard": 4096},
            {"Name": "nproc", "Soft": 128, "Hard": 128},
        ],
    },
    # Isolated offline profile for Network & Security Labs (PCCSL507, PBCST604)
    "isolated_sandbox": {
        "nano_cpus": 1_000_000_000,
        "mem_limit": "512m",
        "memswap_limit": "512m",
        "pids_limit": 64,
        "user": "1000:1000",
        "cap_drop": ["ALL"],
        "network_mode": "none",               # Complete network isolation
        "read_only": False,
        "tmpfs": {
            "/tmp": "size=64m,exec",
        },
        "ulimits": [
            {"Name": "nproc", "Soft": 64, "Hard": 64},
        ],
    },
}


def get_profile_for_course(course_code: str) -> Dict[str, Any]:
    """Select appropriate hardened profile according to course domain."""
    code = course_code.upper()
    if code in ("PCCSL508",):  # ML Lab
        return SECURITY_PROFILES["ml_heavy"]
    elif code in ("PBCST604",):  # Cyber Security Lab
        return SECURITY_PROFILES["isolated_sandbox"]
    return SECURITY_PROFILES["standard_student"]
