/**
 * CampusLab Linux Command & Shell Simulator Engine
 * Implements realistic execution, file system state, and outputs for all standard Linux commands.
 */

import { Course, Experiment } from '../types/lab';

export interface ShellState {
  cwd: string;
  files: { [filename: string]: string };
  history: string[];
  user: string;
  hostname: string;
}

export function createInitialShellState(course?: Course, experiment?: Experiment): ShellState {
  const semTag = (course?.semester || 's4').toLowerCase();
  const codeTag = (course?.code || 'pccsl407').toLowerCase();
  const hostname = `ktu-${semTag}-${codeTag}`;

  const starterCode = experiment?.sampleStarterCode
    ? experiment.sampleStarterCode.replace(/\\n/g, '\n')
    : `#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n\nint main() {\n    printf("Parent Process PID: %d\\n", getpid());\n    return 0;\n}\n`;

  const files: { [name: string]: string } = {
    'process_tree.c': starterCode,
    'main.c': starterCode,
    'solution.py': `import sys\n\ndef main():\n    print("KTU 2024 Scheme Python Sandbox OK")\n\nif __name__ == "__main__":\n    main()\n`,
    'Makefile': `CC = gcc\nCFLAGS = -Wall -O2\n\nall:\n\t$(CC) $(CFLAGS) -o process_tree process_tree.c\n\nclean:\n\trm -f process_tree *.o\n`,
    'README.md': `# KTU 2024 Scheme Practical Sandbox\nCourse: ${course?.code || 'PCCSL407'}\nExperiment: ${experiment?.title || 'Exp 04'}\n`,
    'queries.sql': `CREATE TABLE students (id SERIAL PRIMARY KEY, name VARCHAR(100), marks INT);\nINSERT INTO students VALUES (1, 'Adarsh S', 95);\nSELECT * FROM students;\n`,
  };

  return {
    cwd: '/home/student/workspace',
    files,
    history: [],
    user: 'student',
    hostname,
  };
}

export function runLinuxCommand(
  cmdInput: string,
  state: ShellState,
  experiment?: Experiment
): { output: string[]; clear?: boolean } {
  const trimmed = cmdInput.trim();
  if (!trimmed) return { output: [] };

  state.history.push(trimmed);

  // Handle pipelines and simple chaining '&&'
  if (trimmed.includes('&&')) {
    const subCmds = trimmed.split('&&').map(s => s.trim());
    let combinedOutput: string[] = [];
    for (const sc of subCmds) {
      const res = runLinuxCommand(sc, state, experiment);
      if (res.clear) return res;
      combinedOutput = combinedOutput.concat(res.output);
    }
    return { output: combinedOutput };
  }

  // Handle sudo prefix transparently
  let workingCmd = trimmed;
  if (workingCmd.startsWith('sudo ')) {
    workingCmd = workingCmd.substring(5).trim();
  }

  const parts = workingCmd.split(/\s+/);
  const main = parts[0].toLowerCase();
  const args = parts.slice(1);

  // 1. Terminal clear
  if (main === 'clear') {
    return { output: [], clear: true };
  }

  // 2. Help
  if (main === 'help') {
    return {
      output: [
        '\x1b[1;36m=== CampusLab Linux Command Reference (KTU 2024 Scheme) ===\x1b[0m',
        '\x1b[1;33mFiles & Dirs:\x1b[0m  ls, pwd, cd, cat, touch, mkdir, rm, cp, mv, head, tail, grep, wc, tree, file, stat',
        '\x1b[1;33mSystem & Stats:\x1b[0m uname, hostname, uptime, whoami, id, date, cal, df, du, free, top, htop, ps, pstree',
        '\x1b[1;33mCompilers & Dev:\x1b[0m gcc, g++, clang, make, gdb, valgrind, strace, nasm, flex, bison',
        '\x1b[1;33mProgramming:\x1b[0m    python3, pip, javac, java, node, npm',
        '\x1b[1;33mDatabase:\x1b[0m       psql, sqlite3, mysql',
        '\x1b[1;33mNetworking:\x1b[0m     ifconfig, ip, ping, netstat, ss, curl, wget, nslookup, dig, nmap, traceroute',
        '\x1b[1;33mShell Utilities:\x1b[0m echo, env, export, which, history, clear, man, sudo',
        experiment?.initialExecutionCmd ? `\x1b[1;32mRecommended Experiment Command:\x1b[0m ${experiment.initialExecutionCmd}` : '',
      ].filter(Boolean),
    };
  }

  // 3. Navigation & Directory
  if (main === 'pwd') {
    return { output: [state.cwd] };
  }

  if (main === 'cd') {
    const target = args[0] || '~';
    if (target === '~' || target === '/home/student' || target === '') {
      state.cwd = '/home/student';
    } else if (target === '..' || target === '../') {
      const segs = state.cwd.split('/').filter(Boolean);
      segs.pop();
      state.cwd = '/' + segs.join('/');
    } else if (target === 'workspace' || target === './workspace') {
      state.cwd = '/home/student/workspace';
    } else if (target.startsWith('/')) {
      state.cwd = target;
    } else {
      state.cwd = `${state.cwd}/${target}`.replace('//', '/');
    }
    return { output: [] };
  }

  // 4. File Listing: ls
  if (main === 'ls' || main === 'll' || main === 'la') {
    const isLong = main === 'll' || args.some(a => a.includes('l'));
    const isAll = main === 'la' || args.some(a => a.includes('a'));

    const fileList = Object.keys(state.files);
    if (isAll) {
      fileList.unshift('.', '..', '.bashrc', '.profile');
    }

    if (isLong) {
      const lines = [`total ${fileList.length * 4}`];
      fileList.forEach(file => {
        const isDir = file.endsWith('/') || file === '.' || file === '..';
        const perms = isDir ? 'drwxr-xr-x' : '-rw-r--r--';
        const size = isDir ? 4096 : (state.files[file]?.length || 1024);
        const color = isDir ? '\x1b[1;34m' : file.endsWith('.c') || file.endsWith('.py') ? '\x1b[1;32m' : '\x1b[0m';
        lines.push(`${perms} 1 student student ${size.toString().padStart(6, ' ')} Oct 24 10:15 ${color}${file}\x1b[0m`);
      });
      return { output: lines };
    } else {
      const colored = fileList.map(f => {
        if (f.endsWith('.c') || f.endsWith('.py')) return `\x1b[1;32m${f}\x1b[0m`;
        if (f.endsWith('.o') || f === 'process_tree') return `\x1b[1;31m${f}\x1b[0m`;
        return f;
      });
      return { output: [colored.join('  ')] };
    }
  }

  // 5. File Operations: touch, mkdir, rm, cp, mv
  if (main === 'touch') {
    const fname = args[0] || 'file.txt';
    if (!state.files[fname]) {
      state.files[fname] = '';
    }
    return { output: [] };
  }

  if (main === 'mkdir') {
    const dirname = args[0] || 'new_folder';
    state.files[`${dirname}/`] = '';
    return { output: [] };
  }

  if (main === 'rm') {
    const fname = args.filter(a => !a.startsWith('-'))[0];
    if (fname && state.files[fname] !== undefined) {
      delete state.files[fname];
    }
    return { output: [] };
  }

  if (main === 'cp') {
    const src = args[0];
    const dst = args[1];
    if (src && dst && state.files[src] !== undefined) {
      state.files[dst] = state.files[src];
    }
    return { output: [] };
  }

  if (main === 'mv') {
    const src = args[0];
    const dst = args[1];
    if (src && dst && state.files[src] !== undefined) {
      state.files[dst] = state.files[src];
      delete state.files[src];
    }
    return { output: [] };
  }

  // 6. Content viewing: cat, head, tail
  if (main === 'cat') {
    const fname = args[0];
    if (!fname) return { output: ['cat: missing operand'] };
    if (state.files[fname] !== undefined) {
      return { output: state.files[fname].split('\n') };
    }
    // Search partial
    const match = Object.keys(state.files).find(k => k.includes(fname));
    if (match) {
      return { output: state.files[match].split('\n') };
    }
    return { output: [`cat: ${fname}: No such file or directory`] };
  }

  if (main === 'head') {
    const fname = args[args.length - 1];
    if (fname && state.files[fname]) {
      return { output: state.files[fname].split('\n').slice(0, 10) };
    }
    return { output: ['head: cannot open file'] };
  }

  if (main === 'tail') {
    const fname = args[args.length - 1];
    if (fname && state.files[fname]) {
      const lines = state.files[fname].split('\n');
      return { output: lines.slice(-10) };
    }
    return { output: ['tail: cannot open file'] };
  }

  // 7. Grep & Word Count
  if (main === 'grep') {
    const query = args[0]?.replace(/['"]/g, '');
    const fname = args[1];
    if (!query) return { output: ['Usage: grep [PATTERN] [FILE]'] };
    const content = (fname && state.files[fname]) || Object.values(state.files).join('\n');
    const matched = content.split('\n').filter(l => l.toLowerCase().includes(query.toLowerCase()));
    return {
      output: matched.map(l => l.replace(new RegExp(query, 'gi'), '\x1b[1;31m$&\x1b[0m')),
    };
  }

  if (main === 'wc') {
    const fname = args[0];
    const content = (fname && state.files[fname]) || '';
    const lines = content.split('\n').length;
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    const bytes = content.length;
    return { output: [`  ${lines}  ${words}  ${bytes} ${fname || ''}`] };
  }

  // 8. Tree & File info
  if (main === 'tree') {
    return {
      output: [
        '.',
        '├── Makefile',
        '├── README.md',
        '├── main.c',
        '├── process_tree.c',
        '├── queries.sql',
        '└── solution.py',
        '',
        '0 directories, 6 files',
      ],
    };
  }

  if (main === 'file') {
    const fname = args[0] || 'process_tree.c';
    if (fname.endsWith('.c')) return { output: [`${fname}: C source, ASCII text`] };
    if (fname.endsWith('.py')) return { output: [`${fname}: Python script, ASCII text executable`] };
    if (fname.endsWith('.sql')) return { output: [`${fname}: PostgreSQL SQL script, ASCII text`] };
    return { output: [`${fname}: ASCII text`] };
  }

  if (main === 'stat') {
    const fname = args[0] || 'process_tree.c';
    return {
      output: [
        `  File: ${fname}`,
        `  Size: 428       \tBlocks: 8          IO Block: 4096   regular file`,
        `Device: 0,55\tInode: 142857      Links: 1`,
        `Access: (0644/-rw-r--r--)  Uid: ( 1000/ student)   Gid: ( 1000/ student)`,
        `Access: 2026-10-24 10:15:22.000000000 +0530`,
        `Modify: 2026-10-24 10:15:22.000000000 +0530`,
        `Change: 2026-10-24 10:15:22.000000000 +0530`,
      ],
    };
  }

  // 9. System Information & Hardware
  if (main === 'uname') {
    if (args.includes('-a')) {
      return { output: ['Linux ktu-lab 6.6.0-24-generic #24-Ubuntu SMP PREEMPT_DYNAMIC Thu Oct 17 18:24:12 UTC 2024 x86_64 x86_64 x86_64 GNU/Linux'] };
    }
    return { output: ['Linux'] };
  }

  if (main === 'hostname') {
    return { output: [state.hostname] };
  }

  if (main === 'whoami') {
    return { output: [state.user] };
  }

  if (main === 'id') {
    return { output: ['uid=1000(student) gid=1000(student) groups=1000(student),27(sudo)'] };
  }

  if (main === 'uptime') {
    return { output: [' 14:10:05 up 14 days,  3:22,  1 user,  load average: 0.12, 0.08, 0.05'] };
  }

  if (main === 'date') {
    return { output: [new Date().toString()] };
  }

  if (main === 'cal') {
    return {
      output: [
        '    October 2026      ',
        'Su Mo Tu We Th Fr Sa  ',
        '             1  2  3  ',
        ' 4  5  6  7  8  9 10  ',
        '11 12 13 14 15 16 17  ',
        '18 19 20 21 22 23 24  ',
        '25 26 27 28 29 30 31  ',
      ],
    };
  }

  if (main === 'df') {
    return {
      output: [
        'Filesystem     1K-blocks     Used Available Use% Mounted on',
        '/dev/root       51474044 14238492  34601428  30% /',
        'tmpfs            2048000        0   2048000   0% /dev/shm',
        'tmpfs             512000      780    511220   1% /run',
      ],
    };
  }

  if (main === 'du') {
    return { output: ['48K\t.'] };
  }

  if (main === 'free') {
    const isHuman = args.some(a => a.includes('h') || a.includes('m'));
    if (isHuman) {
      return {
        output: [
          '               total        used        free      shared  buff/cache   available',
          'Mem:           4.0Gi       512Mi       2.8Gi       1.0Mi       720Mi       3.2Gi',
          'Swap:          1.0Gi          0B       1.0Gi',
        ],
      };
    }
    return {
      output: [
        '               total        used        free      shared  buff/cache   available',
        'Mem:         4194304      524288     2936016        1024      737000     3355443',
        'Swap:        1048576           0     1048576',
      ],
    };
  }

  // 10. Process Management: ps, top, htop, pstree, kill
  if (main === 'ps') {
    if (args.some(a => a.includes('aux') || a.includes('-ef'))) {
      return {
        output: [
          'USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND',
          'root         1  0.0  0.1   4320  1450 ?        Ss   10:00   0:00 /bin/init',
          'student   1040  0.0  0.2   8920  3210 pts/0    Ss   10:14   0:00 /bin/bash',
          'student   12450 0.1  0.3  14200  4100 pts/0    S    10:15   0:00 ./process_tree',
          'student   12451 0.0  0.1   4200  1200 pts/0    S    10:15   0:00 [process_tree] <child 1>',
          'student   12452 0.0  0.1   4200  1200 pts/0    S    10:15   0:00 [process_tree] <child 2>',
          'student   12500 0.0  0.1   7400  2100 pts/0    R+   10:16   0:00 ps aux',
        ],
      };
    }
    return {
      output: [
        '  PID TTY          TIME CMD',
        ' 1040 pts/0    00:00:00 bash',
        '12450 pts/0    00:00:00 process_tree',
        '12451 pts/0    00:00:00 process_tree',
        '12452 pts/0    00:00:00 process_tree',
        '12510 pts/0    00:00:00 ps',
      ],
    };
  }

  if (main === 'pstree') {
    return {
      output: [
        'init───containerd───container-shim───bash───process_tree─┬─process_tree(child1)',
        '                                                         └─process_tree(child2)',
      ],
    };
  }

  if (main === 'top' || main === 'htop') {
    return {
      output: [
        'top - 14:15:02 up 14 days, 1 user,  load average: 0.08, 0.05, 0.01',
        'Tasks:   5 total,   1 running,   4 sleeping,   0 stopped,   0 zombie',
        '%Cpu(s):  1.2 us,  0.4 sy,  0.0 ni, 98.4 id,  0.0 wa,  0.0 hi,  0.0 si',
        'MiB Mem :   4096.0 total,   2840.5 free,    524.2 used,    731.3 buff/cache',
        '',
        '  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND',
        '12450 student   20   0   14200   4100   2800 S   0.8   0.1   0:00.12 process_tree',
        ' 1040 student   20   0    8920   3210   2100 S   0.0   0.1   0:00.08 bash',
        '    1 root      20   0    4320   1450   1100 S   0.0   0.0   0:00.02 init',
      ],
    };
  }

  if (main === 'kill' || main === 'pkill') {
    return { output: ['[1]+  Terminated              process_tree'] };
  }

  // 11. Networking: ifconfig, ip, ping, netstat, ss, curl, wget
  if (main === 'ifconfig') {
    return {
      output: [
        'eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500',
        '        inet 172.18.0.4  netmask 255.255.0.0  broadcast 172.18.255.255',
        '        ether 02:42:ac:12:00:04  txqueuelen 0  (Ethernet)',
        '        RX packets 2452  bytes 184520 (184.5 KB)',
        '        TX packets 2140  bytes 162100 (162.1 KB)',
        '',
        'lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536',
        '        inet 127.0.0.1  netmask 255.0.0.0',
        '        loop  txqueuelen 1000  (Local Loopback)',
      ],
    };
  }

  if (main === 'ip') {
    if (args.includes('route')) {
      return { output: ['default via 172.18.0.1 dev eth0 proto static', '172.18.0.0/16 dev eth0 proto kernel scope link src 172.18.0.4'] };
    }
    return {
      output: [
        '1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000',
        '    inet 127.0.0.1/8 scope host lo',
        '2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default',
        '    inet 172.18.0.4/16 brd 172.18.255.255 scope global eth0',
      ],
    };
  }

  if (main === 'ping') {
    const host = args.filter(a => !a.startsWith('-'))[0] || '127.0.0.1';
    return {
      output: [
        `PING ${host} (${host}) 56(84) bytes of data.`,
        `64 bytes from ${host}: icmp_seq=1 ttl=64 time=0.042 ms`,
        `64 bytes from ${host}: icmp_seq=2 ttl=64 time=0.048 ms`,
        `64 bytes from ${host}: icmp_seq=3 ttl=64 time=0.045 ms`,
        `--- ${host} ping statistics ---`,
        `3 packets transmitted, 3 received, 0% packet loss, time 2004ms`,
        `rtt min/avg/max/mdev = 0.042/0.045/0.048/0.003 ms`,
      ],
    };
  }

  if (main === 'nginx') {
    if (args.includes('-v') || args.includes('-V')) {
      return { output: ['nginx version: nginx/1.24.0 (Ubuntu 24.04 LTS)'] };
    }
    if (args.includes('-t')) {
      return {
        output: [
          'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok',
          'nginx: configuration file /etc/nginx/nginx.conf test is successful',
        ],
      };
    }
    if (args.includes('-s')) {
      return { output: [`[OK] Nginx signal '${args[1] || 'reload'}' dispatched successfully.`] };
    }
    return {
      output: [
        'Starting nginx... [OK]',
        'Nginx 1.24.0 running on http://127.0.0.1:80',
        'Serving reverse proxy to CampusLab API & Frontend.',
      ],
    };
  }

  if (main === 'systemctl' || main === 'service') {
    const target = args.find(a => !a.startsWith('-') && a !== 'status' && a !== 'start' && a !== 'restart') || 'nginx';
    return {
      output: [
        `● ${target}.service - Service Unit for ${target}`,
        `     Loaded: loaded (/lib/systemd/system/${target}.service; enabled)`,
        `     Active: active (running) since Tue 2026-10-24 10:15:00 IST; 4h 12min ago`,
        `   Main PID: 1042 (${target})`,
        `      Tasks: 4 (limit: 128)`,
        `     Memory: 18.4M`,
        `        CPU: 142ms`,
      ],
    };
  }

  if (main === 'netstat' || main === 'ss') {
    return {
      output: [
        'Active Internet connections (only servers)',
        'Proto Recv-Q Send-Q Local Address           Foreign Address         State',
        'tcp        0      0 0.0.0.0:8000            0.0.0.0:*               LISTEN',
        'tcp        0      0 127.0.0.1:5432          0.0.0.0:*               LISTEN',
        'tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN',
      ],
    };
  }

  if (main === 'curl' || main === 'wget') {
    const url = args.filter(a => !a.startsWith('-'))[0] || 'http://localhost:8000';
    return {
      output: [
        `Connecting to ${url}... connected.`,
        'HTTP/1.1 200 OK',
        'Content-Type: application/json',
        '{"status": "healthy", "service": "CampusLab Sandbox Engine", "ktu_scheme": "2024"}',
      ],
    };
  }

  if (main === 'nslookup' || main === 'dig') {
    const domain = args[0] || 'ktu.edu.in';
    return {
      output: [
        `Server:    127.0.0.53`,
        `Address:   127.0.0.53#53`,
        `Non-authoritative answer:`,
        `Name:      ${domain}`,
        `Address:   104.21.32.14`,
      ],
    };
  }

  if (main === 'traceroute') {
    const target = args[0] || 'ktu.edu.in';
    return {
      output: [
        `traceroute to ${target} (104.21.32.14), 30 hops max, 60 byte packets`,
        ` 1  gateway (172.18.0.1)  0.312 ms  0.280 ms  0.265 ms`,
        ` 2  10.0.0.1 (10.0.0.1)  1.240 ms  1.180 ms  1.150 ms`,
        ` 3  104.21.32.14 (104.21.32.14)  12.450 ms  12.380 ms  12.410 ms`,
      ],
    };
  }

  if (main === 'nmap') {
    return {
      output: [
        'Starting Nmap 7.94 ( https://nmap.org )',
        'Nmap scan report for localhost (127.0.0.1)',
        'Host is up (0.00012s latency).',
        'PORT     STATE SERVICE',
        '22/tcp   open  ssh',
        '5432/tcp open  postgresql',
        '8000/tcp open  http-alt',
        'Nmap done: 1 IP address (1 host up) scanned in 0.08 seconds',
      ],
    };
  }

  // 12. Compilers, Build Tools & Execution: gcc, g++, clang, make, ./binary
  if (main === 'gcc' || main === 'g++' || main === 'clang') {
    state.files['process_tree'] = '[ELF 64-bit LSB executable, x86-64]';
    return {
      output: [
        '\x1b[32m[GCC 13.2.0 - Compilation successful: 0 errors, 0 warnings]\x1b[0m',
        'Binary generated: \x1b[1;32mprocess_tree\x1b[0m (ready to execute via ./process_tree)',
      ],
    };
  }

  if (main === 'make') {
    state.files['process_tree'] = '[ELF 64-bit LSB executable, x86-64]';
    return {
      output: [
        'gcc -Wall -Wextra -O2 -o process_tree process_tree.c',
        '\x1b[32m[Build completed successfully]\x1b[0m',
      ],
    };
  }

  if (main.startsWith('./') || main === 'process_tree') {
    if (experiment?.initialExecutionOutput) {
      return { output: experiment.initialExecutionOutput.split('\n') };
    }
    return {
      output: [
        'Parent Process PID: 12450',
        'Child 1 Process PID: 12451 (parent: 12450)',
        'Child 2 Process PID: 12452 (parent: 12450)',
        '[Process execution complete - return code: 0]',
      ],
    };
  }

  if (main === 'gdb') {
    return {
      output: [
        'GNU gdb (Ubuntu 13.2-1ubuntu1) 13.2',
        'Reading symbols from process_tree...done.',
        '(gdb) \x1b[33mType "run" to start, "break main" to set breakpoint, "quit" to exit.\x1b[0m',
      ],
    };
  }

  if (main === 'valgrind') {
    return {
      output: [
        '==12450== Memcheck, a memory error detector',
        '==12450== Command: ./process_tree',
        '==12450== ',
        '==12450== HEAP SUMMARY:',
        '==12450==     in use at exit: 0 bytes in 0 blocks',
        '==12450==   total heap usage: 2 allocs, 2 frees, 1,024 bytes allocated',
        '==12450== ',
        '==12450== All heap blocks were freed -- no leaks are possible',
        '==12450== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)',
      ],
    };
  }

  if (main === 'strace') {
    return {
      output: [
        'execve("./process_tree", ["./process_tree"], 0x7ffd98a1 /* 24 vars */) = 0',
        'brk(NULL)                               = 0x55d78a9c8000',
        'clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|SIGCHLD) = 12451',
        'clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|SIGCHLD) = 12452',
        'write(1, "Parent Process PID: 12450\\n", 26) = 26',
        'wait4(-1, NULL, 0, NULL)                = 12451',
        'wait4(-1, NULL, 0, NULL)                = 12452',
        'exit_group(0)                           = ?',
        '+++ exited with 0 +++',
      ],
    };
  }

  if (main === 'nasm' || main === 'yasm') {
    return { output: ['[NASM 2.16.01 - Assembled 64-bit object successfully]'] };
  }

  if (main === 'flex' || main === 'bison') {
    return { output: [`[${main.toUpperCase()} Parser/Lexer generated C code successfully: lex.yy.c / y.tab.c]`] };
  }

  // 13. Programming Runtimes: python3, pip, java, javac, node, npm
  if (main === 'python' || main === 'python3') {
    if (args.includes('--version') || args.includes('-v')) {
      return { output: ['Python 3.12.3'] };
    }
    const targetScript = args.filter(a => !a.startsWith('-'))[0];
    if (targetScript) {
      if (experiment?.initialExecutionOutput && experiment.initialExecutionCmd?.includes('python')) {
        return { output: experiment.initialExecutionOutput.split('\n') };
      }
      return {
        output: [
          '\x1b[32m[Python 3.12.3 execution: 0 errors]\x1b[0m',
          'KTU 2024 Scheme Python Sandbox OK',
          'Process completed with return code 0.',
        ],
      };
    }
    return {
      output: [
        'Python 3.12.3 (main, Apr 10 2024, 05:33:47) [GCC 13.2.0] on linux',
        'Type "help", "copyright", "credits" or "license" for more information.',
        '>>> print("Welcome to KTU 2024 CSE Python Sandbox!")',
        'Welcome to KTU 2024 CSE Python Sandbox!',
      ],
    };
  }

  if (main === 'pip' || main === 'pip3') {
    if (args.includes('list')) {
      return {
        output: [
          'Package         Version',
          '--------------- -------',
          'matplotlib      3.8.4  ',
          'numpy           1.26.4 ',
          'pandas          2.2.2  ',
          'pip             24.0   ',
          'scikit-learn    1.4.2  ',
          'scipy           1.13.0 ',
          'setuptools      69.5.1 ',
        ],
      };
    }
    return { output: ['pip 24.0 from /usr/lib/python3/dist-packages/pip (python 3.12)'] };
  }

  if (main === 'javac') {
    return { output: ['\x1b[32m[javac 21.0.2 - Compiled bytecode .class successfully]\x1b[0m'] };
  }

  if (main === 'java') {
    if (args.includes('-version') || args.includes('--version')) {
      return {
        output: [
          'openjdk version "21.0.2" 2024-01-16',
          'OpenJDK Runtime Environment (build 21.0.2+13-Ubuntu-1)',
          'OpenJDK 64-Bit Server VM (build 21.0.2+13-Ubuntu-1, mixed mode, sharing)',
        ],
      };
    }
    return {
      output: [
        'KTU 2024 Scheme Java Practical execution complete.',
        'Output: Class verified and executed successfully.',
      ],
    };
  }

  if (main === 'node') {
    if (args.includes('-v') || args.includes('--version')) {
      return { output: ['v20.12.2'] };
    }
    return { output: ['Welcome to Node.js v20.12.2. Type ".help" for more information.'] };
  }

  if (main === 'npm') {
    return { output: ['10.5.0'] };
  }

  // 14. Databases: psql, sqlite3, mysql
  if (main === 'psql') {
    return {
      output: [
        'psql (PostgreSQL 16.2 (Ubuntu 16.2-1.pgdg24.04+1))',
        'Type "help" for help.',
        '',
        'campuslab_db=> \\dt',
        '              List of relations',
        ' Schema |   Name    | Type  |  Owner  ',
        '--------+-----------+-------+---------',
        ' public | students  | table | student ',
        ' public | lab_marks | table | student ',
        '(2 rows)',
      ],
    };
  }

  if (main === 'sqlite3') {
    return {
      output: [
        'SQLite version 3.45.1 2024-01-30 16:01:20',
        'Enter ".help" for usage hints.',
        'Connected to a transient in-memory database.',
        'sqlite> SELECT datetime("now");',
        '2026-10-24 14:20:00',
      ],
    };
  }

  // 15. Shell Utilities: echo, env, which, history, man
  if (main === 'echo') {
    let raw = args.join(' ');
    raw = raw.replace(/\$USER/g, state.user);
    raw = raw.replace(/\$HOME/g, '/home/student');
    raw = raw.replace(/\$HOSTNAME/g, state.hostname);
    raw = raw.replace(/\$SHELL/g, '/bin/bash');
    raw = raw.replace(/\$PATH/g, '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin');
    return { output: [raw] };
  }

  if (main === 'env' || main === 'printenv') {
    return {
      output: [
        `USER=${state.user}`,
        `LOGNAME=${state.user}`,
        `HOME=/home/student`,
        `PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin`,
        `SHELL=/bin/bash`,
        `TERM=xterm-256color`,
        `KTU_SCHEME=2024`,
        `HOSTNAME=${state.hostname}`,
        `LANG=C.UTF-8`,
      ],
    };
  }

  if (main === 'which' || main === 'whereis') {
    const target = args[0] || 'bash';
    return { output: [`/usr/bin/${target}`] };
  }

  if (main === 'history') {
    return {
      output: state.history.map((h, i) => `  ${(i + 1).toString().padStart(4, ' ')}  ${h}`),
    };
  }

  if (main === 'man') {
    const topic = args[0] || 'ls';
    return {
      output: [
        `NAME`,
        `       ${topic} - KTU 2024 Scheme Container Manual Entry`,
        `SYNOPSIS`,
        `       ${topic} [OPTION]... [FILE]...`,
        `DESCRIPTION`,
        `       Display system manual and command reference for KTU B.Tech CSE laboratory students.`,
      ],
    };
  }

  // Fallback for general Linux commands
  return {
    output: [`bash: ${main}: command executed in container sandbox (exit code 0)`],
  };
}
