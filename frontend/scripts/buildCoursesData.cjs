const fs = require('fs');
const path = require('path');

const zipDir = path.resolve(__dirname, '../src/data/zip_contents');

const courseMeta = [
  // S1
  {
    code: 'UCEST105',
    title: 'Algorithmic Thinking with Python',
    semester: 'S1',
    credits: 2,
    ltpr: '0-0-2-0',
    evaluation: 'CIA 50 / ESE 50',
    category: 'ESC Practical',
    description: 'Foundations of computational problem solving using Python. Data types, loops, functions, file handling, and modular programming.',
    topics: ['Computational Logic & Flowcharts', 'Control Flow & Nested Loops', 'Lists, Dictionaries & Tuples', 'File Processing & Modules'],
    experimentsCount: 12,
    completedExperiments: 12,
    progressPercentage: 100,
    fileKey: 'S1_UCEST105_Algorithmic_Thinking_with_Python.txt',
    env: 'Python 3.12 Linux Sandbox',
    skills: [
      { name: 'Python 3', tag: 'Syntax', iconType: 'python' },
      { name: 'Control Flow', tag: 'Logic', iconType: 'code' },
      { name: 'Algorithms', tag: 'Core', iconType: 'cpu' },
    ],
    fileTypes: ['1 Python file (.py)', 'Output screenshot (.png/.jpg)'],
    acceptedFormats: '.py,.png,.jpg',
    starter: '#!/usr/bin/env python3\\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\\n\\ndef main():\\n    print(\"CampusLab Python 3.12 Sandbox Ready\")\\n\\nif __name__ == \"__main__\":\\n    main()\\n',
    cmd: 'python3 solution.py',
    output: 'Python 3.12.3 [Ubuntu Linux]\\nExecuting solution.py...\\nInput processed: [Success]\\nOutput: Solution verified for all KTU test vectors.\\nExit code: 0'
  },
  {
    code: 'GXESL106',
    title: 'Basic Electrical & Electronics Engineering Workshop',
    semester: 'S1',
    credits: 1,
    ltpr: '0-0-2-0',
    evaluation: 'CIA 50 / ESE 50',
    category: 'ESC Practical',
    description: 'Hands-on training in basic electrical wiring, electronic soldering, circuit breadboarding, measuring instruments, and component testing.',
    topics: ['Staircase & Godown Wiring', 'Soldering Practice & PCB', 'Multimeter & CRO Operation', 'Electronic Component Testing'],
    experimentsCount: 10,
    completedExperiments: 10,
    progressPercentage: 100,
    fileKey: 'S1_GXESL106_Basic_Electrical_and_Electronics_Workshop.txt',
    env: 'Electrical & Electronics Virtual Lab Bench',
    skills: [
      { name: 'Circuit Wiring', tag: 'SPDT/Godown', iconType: 'cpu' },
      { name: 'Multimeter & CRO', tag: 'Instrumentation', iconType: 'layers' },
    ],
    fileTypes: ['1 Schematic Diagram (.png/.pdf)', 'Observations & Readings (.txt/.png)'],
    acceptedFormats: '.png,.pdf,.txt',
    starter: '# Circuit Schematic & Wiring Observations\\n# Supply Voltage: 230V AC, 50Hz\\n# Switch 1: SPDT (Staircase position A)\\n# Switch 2: SPDT (Staircase position B)\\n',
    cmd: './run_circuit_sim --check',
    output: '[Virtual Bench] Checking SPDT wiring continuity...\\nCircuit Path: Node A -> Node B (Closed)\\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\\nSafety Ground Check: OK'
  },

  // S2
  {
    code: 'GXEST204',
    title: 'Programming in C',
    semester: 'S2',
    credits: 2,
    ltpr: '0-0-2-0',
    evaluation: 'CIA 50 / ESE 50',
    category: 'ESC Practical',
    description: 'Low-level imperative programming with C. Pointers, memory allocation, structures, bitwise manipulation, and standard libraries.',
    topics: ['Pointers & Dynamic Memory', 'Structures & Unions', 'File Handling & Streams', 'Command-Line Arguments'],
    experimentsCount: 14,
    completedExperiments: 14,
    progressPercentage: 100,
    fileKey: 'S2_GXEST204_Programming_in_C.txt',
    env: 'GCC C17 Linux Container (Ubuntu 24.04)',
    skills: [
      { name: 'C Programming', tag: 'C17', iconType: 'c' },
      { name: 'Pointers & Memory', tag: 'Pointers', iconType: 'cpu' },
      { name: 'Data Structures', tag: 'Structs', iconType: 'code' },
    ],
    fileTypes: ['1 C Source file (.c)', 'Output screenshot (.png/.jpg)'],
    acceptedFormats: '.c,.png,.jpg',
    starter: '#include <stdio.h>\\n#include <stdlib.h>\\n\\nint main() {\\n    printf(\"KTU 2024 CSE - GXEST204 Programming in C\\\\n\");\\n    return 0;\\n}\\n',
    cmd: 'gcc -Wall -O2 solution.c -o solution && ./solution',
    output: 'student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\\nInput values processed successfully.\\nResult matches expected KTU test vector.\\nAll test cases passed.'
  },
  {
    code: 'GXESL208',
    title: 'IT Workshop',
    semester: 'S2',
    credits: 1,
    ltpr: '0-0-2-0',
    evaluation: 'CIA 50 / ESE 50',
    category: 'ESC Practical',
    description: 'PC hardware diagnostics, Linux CLI mastery, Git version control, bash scripting, and software deployment pipelines.',
    topics: ['Hardware Disassembly & Assembly', 'Linux Shell & Command Mastery', 'Git Version Control & Branching', 'Bash Shell Scripting'],
    experimentsCount: 10,
    completedExperiments: 10,
    progressPercentage: 100,
    fileKey: 'S2_GXESL208_IT_Workshop.txt',
    env: 'Ubuntu 24.04 LTS CLI & Git Sandbox',
    skills: [
      { name: 'Linux CLI', tag: 'Bash', iconType: 'terminal' },
      { name: 'Git Version Control', tag: 'Git', iconType: 'code' },
      { name: 'Hardware Diagnostics', tag: 'SysInfo', iconType: 'cpu' },
    ],
    fileTypes: ['1 Bash Script (.sh)', 'Terminal transcript (.txt)'],
    acceptedFormats: '.sh,.txt',
    starter: '#!/bin/bash\\n# KTU 2024 Scheme - GXESL208 IT Workshop\\n\\necho \"Running system diagnostics...\"\\nuname -a\\n',
    cmd: './diagnose.sh',
    output: 'Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\\nGit repository status: clean, on branch master'
  },

  // S3
  {
    code: 'PCCSL307',
    title: 'Data Structures Lab',
    semester: 'S3',
    credits: 2,
    ltpr: '0-0-3-0',
    evaluation: 'CIA 50 / ESE 50',
    category: 'PC Practical',
    description: 'Implementation and analysis of fundamental linear and non-linear data structures: Linked Lists, Stacks, Queues, Trees, and Graphs in C.',
    topics: ['Sparse Polynomials & Arrays', 'Stack Infix/Postfix & Queues', 'Singly & Doubly Linked Lists', 'BST, Graphs & Sorting (Quick/Merge)'],
    experimentsCount: 16,
    completedExperiments: 16,
    progressPercentage: 100,
    fileKey: 'S3_PCCSL307_Data_Structures_Lab.txt',
    env: 'GCC C17 Linux Container (Data Structures)',
    skills: [
      { name: 'C Programming', tag: 'C17', iconType: 'c' },
      { name: 'Data Structures', tag: 'DSA', iconType: 'tree' },
      { name: 'Memory Management', tag: 'malloc/free', iconType: 'cpu' },
    ],
    fileTypes: ['1 C Source file (.c)', 'Execution screenshot (.png/.jpg)'],
    acceptedFormats: '.c,.png,.jpg',
    starter: '#include <stdio.h>\\n#include <stdlib.h>\\n\\n// KTU PCCSL307 Data Structures Lab\\nint main() {\\n    printf(\"PCCSL307 Data Structures\\\\n\");\\n    return 0;\\n}\\n',
    cmd: 'gcc dsa.c -o dsa && ./dsa',
    output: 'student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\\nCreated Dynamic Data Structure.\\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\\nOperations completed in 0.8ms.'
  },
  {
    code: 'PCCSL308',
    title: 'Digital Lab',
    semester: 'S3',
    credits: 2,
    ltpr: '0-0-3-0',
    evaluation: 'CIA 50 / ESE 50',
    category: 'PC Practical',
    description: 'Design, realization, and verification of combinational and sequential digital circuits using discrete logic ICs and simulation tools.',
    topics: ['Logic Gates & De Morgan Realization', 'Adders, Subtractors & Code Converters', 'Multiplexers & Decoders', 'Flip-Flops, Shift Registers & Counters'],
    experimentsCount: 12,
    completedExperiments: 12,
    progressPercentage: 100,
    fileKey: 'S3_PCCSL308_Digital_Lab.txt',
    env: 'Digital Logic Simulator & Verilog Bench',
    skills: [
      { name: 'Digital Logic', tag: 'Boolean', iconType: 'cpu' },
      { name: 'Truth Tables', tag: 'K-Maps', iconType: 'layers' },
    ],
    fileTypes: ['1 Circuit file (.circ/.png)', 'Truth Table verification (.txt)'],
    acceptedFormats: '.circ,.png,.txt',
    starter: '# Digital Circuit Netlist / Logic Simulation\\n# Gate inputs: A, B, C, D\\n# Outputs: Y = A\'B + CD\\n',
    cmd: './sim_digital --test',
    output: 'Running Logic Verification Matrix (16 input vectors)...\\nAll 16 truth table outputs match theoretical Boolean reduction.\\nPropagation Delay: 5.2 ns'
  },
  {
    code: 'PBCST304',
    title: 'Object Oriented Programming',
    semester: 'S3',
    credits: 4,
    ltpr: '3-0-0-1',
    evaluation: 'CIA 50 / ESE 50',
    category: 'PC-PBL',
    description: 'Object-Oriented Analysis, Design, and Programming using Java. Classes, inheritance, polymorphism, abstract classes, interfaces, multithreading, and GUI basics.',
    topics: ['Classes, Objects & Constructors', 'Inheritance, Polymorphism & Interfaces', 'Exception Handling & Multi-threading', 'Java Generics, Collections & Streams'],
    experimentsCount: 10,
    completedExperiments: 10,
    progressPercentage: 100,
    fileKey: 'S3_PBCST304_Object_Oriented_Programming_PBL.txt',
    env: 'OpenJDK 21 / Java Linux Sandbox',
    skills: [
      { name: 'Java 21', tag: 'OOP', iconType: 'code' },
      { name: 'Polymorphism & Interfaces', tag: 'Architecture', iconType: 'layers' },
      { name: 'Exception Handling', tag: 'Safety', iconType: 'cpu' },
    ],
    fileTypes: ['1 Java file (.java)', 'Output screenshot (.png/.jpg)'],
    acceptedFormats: '.java,.png,.jpg',
    starter: 'public class Main {\\n    public static void main(String[] args) {\\n        System.out.println(\"KTU PBCST304 Object Oriented Programming\");\\n    }\\n}\\n',
    cmd: 'javac Main.java && java Main',
    output: 'Compiled Main.java with javac 21.0.4\\nObject Hierarchy Initialized.\\nPolymorphic methods dispatched successfully.'
  },

  // S4
  {
    code: 'PCCSL407',
    title: 'Operating Systems Lab',
    semester: 'S4',
    credits: 2,
    ltpr: '0-0-3-0',
    evaluation: 'CIA 50 / ESE 50',
    category: 'PC Practical',
    description: 'System calls, process scheduling algorithms, IPC (pipes, shared memory), semaphores, deadlock handling, memory allocation, and page replacement.',
    topics: ['Process Creation & fork()', 'CPU Scheduling Algorithms', 'Semaphores & IPC', 'Memory Management (Paging)'],
    experimentsCount: 10,
    completedExperiments: 8,
    progressPercentage: 80,
    fileKey: 'S4_PCCSL407_Operating_Systems_Lab.txt',
    activeSessionId: 's4-cse-os-lab',
    env: 'Isolated Linux Container (Kernel 6.8 POSIX)',
    skills: [
      { name: 'C Programming', tag: 'POSIX', iconType: 'c' },
      { name: 'fork() & Syscalls', tag: 'Syscall', iconType: 'fork' },
      { name: 'Process Tree', tag: 'Processes', iconType: 'tree' },
    ],
    fileTypes: ['1 C file (.c)', 'Output screenshot (.png/.jpg)'],
    acceptedFormats: '.c,.png,.jpg',
    starter: '#include <stdio.h>\\n#include <unistd.h>\\n#include <sys/types.h>\\n\\nint main() {\\n    pid_t pid = fork();\\n    if (pid == 0) {\\n        printf(\"Child Process PID: %d\\\\n\", getpid());\\n    } else {\\n        printf(\"Parent Process PID: %d\\\\n\", getpid());\\n    }\\n    return 0;\\n}\\n',
    cmd: 'gcc process_tree.c -o process_tree && ./process_tree',
    output: 'student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\\nParent Process PID: 12450\\nChild 1 Process PID: 12451 (parent: 12450)\\nChild 2 Process PID: 12452 (parent: 12450)'
  },
  {
    code: 'PCCSL408',
    title: 'Database Management Systems Lab',
    semester: 'S4',
    credits: 2,
    ltpr: '0-0-3-0',
    evaluation: 'CIA 50 / ESE 50',
    category: 'PC Practical',
    description: 'Relational database design, DDL/DML, complex SQL queries, views, triggers, stored procedures, transactions, and full-stack DB integration.',
    topics: ['ER Modeling & Schema Design', 'SQL Joins, Views & Subqueries', 'Triggers & Functions', 'PL/SQL Programming'],
    experimentsCount: 10,
    completedExperiments: 4,
    progressPercentage: 40,
    fileKey: 'S4_PCCSL408_DBMS_Lab.txt',
    env: 'PostgreSQL 16 CLI Sandbox',
    skills: [
      { name: 'SQL Querying', tag: 'PostgreSQL', iconType: 'sql' },
      { name: 'Database Design', tag: 'Relational', iconType: 'code' },
      { name: 'Triggers & Procedures', tag: 'PL/pgSQL', iconType: 'cpu' },
    ],
    fileTypes: ['1 SQL Script (.sql)', 'Query output (.txt/.png)'],
    acceptedFormats: '.sql,.txt,.png',
    starter: '-- KTU PCCSL408 DBMS Lab\\nCREATE TABLE students (\\n    id SERIAL PRIMARY KEY,\\n    name VARCHAR(100),\\n    cgpa NUMERIC(3,2)\\n);\\n',
    cmd: 'psql -U student -d campuslab_db -f queries.sql',
    output: 'CREATE TABLE\\nINSERT 0 10\\n id |   name   | cgpa \\n----+----------+------\\n  1 | Adarsh S | 9.20\\n  2 | Rahul K  | 8.85\\n(2 rows)\\nQuery executed in 1.42ms'
  },
  {
    code: 'PBCST404',
    title: 'Computer Organization & Architecture',
    semester: 'S4',
    credits: 4,
    ltpr: '3-0-0-1',
    evaluation: 'CIA 50 / ESE 50',
    category: 'PC-PBL',
    description: 'Functional units, CPU datapath, control unit design, ALU modeling, pipeline hazard detection, cache memory mapping, and RISC-V assembly simulation.',
    topics: ['Basic Functional Units', 'Processor & Control Unit', 'Memory System & Cache', 'Input/Output Organization'],
    experimentsCount: 5,
    completedExperiments: 1,
    progressPercentage: 20,
    fileKey: 'S4_PBCST404_Computer_Organization_and_Architecture_PBL.txt',
    env: 'Verilog & RISC-V Simulator Container',
    skills: [
      { name: 'Verilog HDL', tag: 'RTL', iconType: 'cpu' },
      { name: 'Computer Architecture', tag: 'Hardware', iconType: 'layers' },
    ],
    fileTypes: ['1 Verilog file (.v)', 'Simulation waveform (.png)'],
    acceptedFormats: '.v,.png',
    starter: 'module alu_16bit(\\n    input [15:0] a, b,\\n    input [2:0] opcode,\\n    output reg [15:0] result,\\n    output zero\\n);\\n',
    cmd: 'iverilog -o alu_sim alu.v alu_tb.v && vvp alu_sim',
    output: 'VCD info: dumpfile dump.vcd opened for output.\\nALU Opcode 000 (ADD): A=0005, B=0003 -> Result=0008 | Zero=0 (PASSED)\\nALU Opcode 001 (SUB): A=0005, B=0005 -> Result=0000 | Zero=1 (PASSED)'
  },

  // S5
  {
    code: 'PCCSL507',
    title: 'Networks Lab',
    semester: 'S5',
    credits: 2,
    ltpr: '0-0-3-0',
    evaluation: 'CIA 50 / ESE 50',
    category: 'PC Practical',
    description: 'Network commands, socket programming (TCP & UDP), client-server communication, simulation of sliding window, routing algorithms, and packet capture.',
    topics: ['Linux Network Diagnostic & Packet Capture', 'TCP Client-Server Socket Programming', 'UDP Client-Server Socket Programming', 'Sliding Window & Routing (Bellman-Ford)'],
    experimentsCount: 10,
    completedExperiments: 0,
    progressPercentage: 0,
    fileKey: 'S5_PCCSL507_Networks_Lab.txt',
    env: 'Wireshark & NS3 POSIX Socket Sandbox',
    skills: [
      { name: 'Socket Programming', tag: 'TCP/IP', iconType: 'code' },
      { name: 'Packet Analysis', tag: 'Wireshark', iconType: 'terminal' },
      { name: 'Network Protocols', tag: 'Networking', iconType: 'cpu' },
    ],
    fileTypes: ['1 C/Python file (.c/.py)', 'Wireshark capture (.pcap/.png)'],
    acceptedFormats: '.c,.py,.pcap,.png',
    starter: '# KTU PCCSL507 Networks Lab\\nimport socket\\n\\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\ns.bind((\"0.0.0.0\", 8080))\\ns.listen(5)\\nprint(\"Server listening on port 8080...\")\\n',
    cmd: 'python3 server.py & python3 client.py',
    output: 'Server listening on port 8080...\\n[Server] Connection accepted from 127.0.0.1:49210\\n[Client] Sending message: \"PING\"\\n[Server] Received PING -> Sending PONG\\nRound trip time: 0.38ms'
  },
  {
    code: 'PCCSL508',
    title: 'Machine Learning Lab',
    semester: 'S5',
    credits: 2,
    ltpr: '0-0-3-0',
    evaluation: 'CIA 50 / ESE 50',
    category: 'PC Practical',
    description: 'Implementation of ML algorithms using Python, NumPy, Pandas, Scikit-learn, and PyTorch: Regression, Classification, Clustering, and Neural Networks.',
    topics: ['Data Preprocessing & Feature Engineering', 'Linear & Logistic Regression', 'Decision Trees, Random Forest & SVM', 'K-Means Clustering & PCA', 'Multi-Layer Perceptron (PyTorch)'],
    experimentsCount: 10,
    completedExperiments: 0,
    progressPercentage: 0,
    fileKey: 'S5_PCCSL508_Machine_Learning_Lab.txt',
    env: 'PyTorch 2.4 & Scikit-learn Linux Sandbox',
    skills: [
      { name: 'Python ML', tag: 'Scikit-Learn', iconType: 'python' },
      { name: 'Model Evaluation', tag: 'Metrics', iconType: 'cpu' },
      { name: 'Neural Networks', tag: 'PyTorch', iconType: 'layers' },
    ],
    fileTypes: ['1 Python script (.py/.ipynb)', 'Loss/Accuracy curve (.png)'],
    acceptedFormats: '.py,.ipynb,.png',
    starter: 'import numpy as np\\nfrom sklearn.model_selection import train_test_split\\nfrom sklearn.metrics import accuracy_score\\n\\nprint(\"KTU PCCSL508 Machine Learning Lab ready!\")\\n',
    cmd: 'python3 ml_model.py',
    output: 'Dataset: 1,500 samples | Train: 1,200 | Test: 300\\nTraining Model: Convergence reached in 45 iterations.\\nTest Accuracy: 97.33% | F1-Score: 0.968\\nConfusion matrix plotted to output.png'
  },
  {
    code: 'PBCST504',
    title: 'Microcontrollers',
    semester: 'S5',
    credits: 4,
    ltpr: '3-0-0-1',
    evaluation: 'CIA 50 / ESE 50',
    category: 'PC-PBL',
    description: 'Architecture and assembly/C programming of ARM Cortex-M / 8051 microcontrollers. GPIO, timers, interrupts, ADC, DAC, and serial communication interfacing.',
    topics: ['ARM Cortex Architecture & Registers', 'Embedded C & GPIO Interfacing', 'Timers, Counters & PWM Generation', 'Interrupt Service Routines & ADC/DAC', 'Serial Protocols (UART, SPI, I2C)'],
    experimentsCount: 8,
    completedExperiments: 0,
    progressPercentage: 0,
    fileKey: 'S5_PBCST504_Microcontrollers_PBL.txt',
    env: 'QEMU ARM Cortex-M Linux Emulator',
    skills: [
      { name: 'Embedded C', tag: 'ARM Cortex', iconType: 'c' },
      { name: 'GPIO & Interrupts', tag: 'Peripherals', iconType: 'cpu' },
    ],
    fileTypes: ['1 Embedded C file (.c)', 'Simulation trace (.png)'],
    acceptedFormats: '.c,.png',
    starter: '#include <stdint.h>\\n// KTU PBCST504 Microcontrollers\\nint main(void) {\\n    // Initialize GPIO Pin\\n    while(1) {}\\n}\\n',
    cmd: './arm_emu --run firmware.elf',
    output: 'ARM Cortex-M4 Emulator started.\\nClock: 72 MHz | SysTick interrupt enabled.\\nGPIO Port C Pin 13 toggling at 1 Hz.'
  },

  // S6
  {
    code: 'PCCSL607',
    title: 'Systems Lab',
    semester: 'S6',
    credits: 2,
    ltpr: '0-0-3-0',
    evaluation: 'CIA 50 / ESE 50',
    category: 'PC Practical',
    description: 'Design and implementation of language processors: Lexical analyzers using Lex, Parsers using Yacc, Intermediate code generators, Assemblers, and Loaders.',
    topics: ['Lexical Analyzer Generation using Lex', 'Syntax Analyzer using Yacc', 'Two-Pass Assembler & Macro Processor', 'Absolute & Relocating Loaders'],
    experimentsCount: 10,
    completedExperiments: 0,
    progressPercentage: 0,
    fileKey: 'S6_PCCSL607_Systems_Lab.txt',
    env: 'Flex & Bison Linux Compiler Container',
    skills: [
      { name: 'Lex & Yacc', tag: 'Compiler', iconType: 'terminal' },
      { name: 'Lexical Analysis', tag: 'Grammar', iconType: 'code' },
      { name: 'Code Generation', tag: 'Intermediate', iconType: 'cpu' },
    ],
    fileTypes: ['1 Lex/Yacc file (.l/.y)', 'Parser output (.txt)'],
    acceptedFormats: '.l,.y,.txt',
    starter: '%{\\n#include <stdio.h>\\n%}\\n%%\\n[0-9]+   { printf(\"NUMBER: %s\\\\n\", yytext); }\\n[a-zA-Z_][a-zA-Z0-9_]* { printf(\"IDENTIFIER: %s\\\\n\", yytext); }\\n.        { /* skip */ }\\n%%\\nint main() { yylex(); return 0; }\\nint yywrap() { return 1; }\\n',
    cmd: 'flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt',
    output: 'Tokens matched:\\nIDENTIFIER: total_count\\nOPERATOR: =\\nNUMBER: 450\\nLexical analysis completed: 0 errors.'
  },
  {
    code: 'PBCST604',
    title: 'Fundamentals of Cyber Security',
    semester: 'S6',
    credits: 4,
    ltpr: '3-0-0-1',
    evaluation: 'CIA 50 / ESE 50',
    category: 'PC-PBL',
    description: 'Cryptographic algorithms, symmetric/asymmetric encryption, hashing, authentication, network vulnerability assessment, packet sniffing, and secure coding.',
    topics: ['Classical & Modern Cryptography (DES/AES)', 'Public-Key Infrastructure & RSA/ECC', 'Cryptographic Hashes & Digital Signatures', 'Vulnerability Audits, Sniffing & Firewalls'],
    experimentsCount: 8,
    completedExperiments: 0,
    progressPercentage: 0,
    fileKey: 'S6_PBCST604_Fundamentals_of_Cyber_Security_PBL.txt',
    env: 'Kali Linux Security Sandbox',
    skills: [
      { name: 'Cryptography', tag: 'RSA/AES', iconType: 'layers' },
      { name: 'Network Auditing', tag: 'Port Scan', iconType: 'terminal' },
    ],
    fileTypes: ['1 Python/C script (.py/.c)', 'Security Report (.pdf)'],
    acceptedFormats: '.py,.c,.pdf',
    starter: '# KTU PBCST604 Fundamentals of Cyber Security\\n# Symmetric & Asymmetric Cryptography implementation\\n',
    cmd: 'python3 security_test.py',
    output: '2048-bit RSA Keypair generated.\\nPlaintext: \"KTU 2024 Scheme B.Tech CSE Practical\"\\nCiphertext: 4b29f0e137... (Encrypted)\\nDecrypted message: MATCHED successfully.'
  },
  {
    code: 'PCCSP608',
    title: 'Mini Project: Socially Relevant Project',
    semester: 'S6',
    credits: 2,
    ltpr: '0-0-0-3',
    evaluation: 'CIA 50 / ESE 50',
    category: 'Project',
    description: 'Team-based design and implementation of a socially relevant software engineering solution solving problems in agriculture, healthcare, or education.',
    topics: ['Problem Identification & Feasibility Study', 'System Requirements Specification (SRS)', 'Architectural & Database Design', 'Implementation, Testing & Community Pilot'],
    experimentsCount: 5,
    completedExperiments: 0,
    progressPercentage: 0,
    fileKey: 'S6_PCCSP608_Mini_Project.txt',
    env: 'Full-Stack Web & Mobile Sandbox',
    skills: [
      { name: 'System Architecture', tag: 'Full-Stack', iconType: 'code' },
      { name: 'Database & API', tag: 'Backend', iconType: 'layers' },
    ],
    fileTypes: ['1 Project Report (.pdf)', 'Source code archive (.zip)'],
    acceptedFormats: '.pdf,.zip',
    starter: '# KTU PCCSP608 Mini Project\\n# Socially Relevant Project Repository\\n',
    cmd: 'npm run test:all',
    output: 'Running project test suite...\\n✓ 18 unit tests passed\\n✓ API endpoints verified (HTTP 200 OK)\\n✓ Database migrations applied cleanly'
  },

  // S7
  {
    code: 'PCCSS705',
    title: 'Seminar',
    semester: 'S7',
    credits: 2,
    ltpr: '0-0-3-0',
    evaluation: 'CIA 100',
    category: 'Seminar',
    description: 'Survey of modern research literature from IEEE, ACM, or Springer. Preparation of formal technical seminar report in LaTeX and technical presentation.',
    topics: ['Literature Survey & Paper Selection', 'Technical Synthesis & Report Writing (LaTeX)', 'Slide Preparation & Presentation Skills', 'Viva-Voce & Discussion Defense'],
    experimentsCount: 4,
    completedExperiments: 0,
    progressPercentage: 0,
    fileKey: 'S7_PCCSS705_Seminar.txt',
    env: 'LaTeX / Overleaf Research Environment',
    skills: [
      { name: 'Technical Review', tag: 'IEEE Paper', iconType: 'code' },
      { name: 'Presentation', tag: 'Seminar', iconType: 'layers' },
    ],
    fileTypes: ['1 Seminar Report (.pdf)', 'Presentation Slides (.pdf/.pptx)'],
    acceptedFormats: '.pdf,.pptx',
    starter: '% KTU PCCSS705 Seminar Report Template\\n\\documentclass[12pt,a4paper]{article}\\n\\begin{document}\\n\\title{Technical Seminar}\\n\\maketitle\\n\\end{document}\\n',
    cmd: 'pdflatex seminar_report.tex',
    output: 'Output written on seminar_report.pdf (18 pages, 42080 bytes).\\nReferences and citations verified from IEEE Xplore.'
  },
  {
    code: 'PCCSP706',
    title: 'Major Project Phase I / Internship',
    semester: 'S7',
    credits: 4,
    ltpr: '0-0-0-8',
    evaluation: 'CIA 100',
    category: 'Project',
    description: 'Phase I of capstone engineering project or 6-month industry internship: Literature review, problem formulation, SRS, system architecture design, and initial prototype.',
    topics: ['Problem Statement & Novelty Statement', 'SRS & High-Level Architectural Design', 'Prototype Development & Proof of Concept', 'Phase I Progress Defense & Review Evaluation'],
    experimentsCount: 4,
    completedExperiments: 0,
    progressPercentage: 0,
    fileKey: 'S7_PCCSP706_Major_Project_Phase1_or_Internship.txt',
    env: 'Capstone Project Workspace',
    skills: [
      { name: 'System Design', tag: 'Architecture', iconType: 'layers' },
      { name: 'Prototyping', tag: 'Phase I', iconType: 'code' },
    ],
    fileTypes: ['1 Phase I Report (.pdf)', 'Prototype code (.zip)'],
    acceptedFormats: '.pdf,.zip',
    starter: '# KTU PCCSP706 Major Project Phase I\\n',
    cmd: './validate_prototype.sh',
    output: 'Phase I Architecture verified.\\nCore module implementation: 55% complete.\\nInterim presentation approved.'
  },

  // S8
  {
    code: 'PCCSP806',
    title: 'Major Project Phase II / Internship',
    semester: 'S8',
    credits: 4,
    ltpr: '0-0-0-8',
    evaluation: 'CIA 70 / ESE 30',
    category: 'Project',
    description: 'Phase II full product deployment, comprehensive integration testing, performance benchmarking, research publication draft, and final viva-voce thesis defense.',
    topics: ['Full-System Integration & Optimization', 'Performance Benchmarking & Security Audits', 'Research Paper Draft / Patent Filing', 'Final Thesis Defense & Demonstration'],
    experimentsCount: 3,
    completedExperiments: 0,
    progressPercentage: 0,
    fileKey: 'S8_PCCSP806_Major_Project_Phase2_or_Internship.txt',
    env: 'Production Cloud Sandbox',
    skills: [
      { name: 'Cloud Deployment', tag: 'Kubernetes', iconType: 'layers' },
      { name: 'Thesis Defense', tag: 'Viva', iconType: 'code' },
    ],
    fileTypes: ['1 Final B.Tech Thesis (.pdf)', 'Complete Source Archive (.zip)'],
    acceptedFormats: '.pdf,.zip',
    starter: '# KTU PCCSP806 Major Project Phase II\\n',
    cmd: './verify_production_release.sh',
    output: 'All production microservices deployed.\\nLoad test: 10,000 requests/sec, 0 error rate.\\nFinal thesis report ready for external examination.'
  },
];

function findFile(fileKey) {
  let matched = null;
  function search(dir) {
    fs.readdirSync(dir).forEach(file => {
      const full = path.join(dir, file);
      if (fs.statSync(full).isDirectory()) search(full);
      else if (file === fileKey || file.toLowerCase() === fileKey.toLowerCase()) matched = full;
    });
  }
  search(zipDir);
  return matched;
}

function parseExperimentsForCourse(meta) {
  const filePath = findFile(meta.fileKey);
  const exps = [];
  if (!filePath) {
    console.warn('File not found for', meta.code, meta.fileKey);
    return exps;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  let current = null;

  lines.forEach(line => {
    const trimmed = line.trim();
    // match EXP 01:, TASK 01:, MILESTONE 01: or 1. Title
    const expMatch = trimmed.match(/^(?:EXP|TASK|MILESTONE|MODULE)\s*(\d+)?:\s*(.*)/i);
    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);

    if (expMatch) {
      if (current) exps.push(current);
      const num = expMatch[1] ? parseInt(expMatch[1], 10) : exps.length + 1;
      current = {
        num,
        title: expMatch[2].trim(),
        question: '',
      };
    } else if (!expMatch && numMatch && (meta.category === 'Project' || meta.category === 'Seminar')) {
      if (current) exps.push(current);
      current = {
        num: parseInt(numMatch[1], 10),
        title: numMatch[2].split(':')[0].trim(),
        question: numMatch[2].includes(':') ? numMatch[2].split(':').slice(1).join(':').trim() : numMatch[2].trim(),
      };
    } else if (current) {
      if (trimmed.startsWith('Question:') || trimmed.startsWith('Task:') || trimmed.startsWith('Deliverable:')) {
        current.question = trimmed.replace(/^(Question|Task|Deliverable):\s*/i, '');
      } else if (!current.question && trimmed && !trimmed.startsWith('===') && !trimmed.startsWith('KTU 2024') && !trimmed.startsWith('COURSE:') && !trimmed.startsWith('OPTION')) {
        current.question = trimmed;
      }
    }
  });

  if (current) exps.push(current);

  // Map into typed Experiment objects
  return exps.map((raw, idx) => {
    const expNumber = raw.num || idx + 1;
    const padded = expNumber.toString().padStart(2, '0');
    const id = `${meta.code.toLowerCase()}-exp${padded}`;
    const title = raw.title || `Experiment ${padded}`;
    const question = raw.question || `Implement practical requirements for ${title}.`;

    return {
      id,
      expNumber,
      title,
      question,
      durationMinutes: 45,
      environment: meta.env,
      objectives: [
        `Understand theoretical principles of ${title.toLowerCase()}`,
        `Implement and test laboratory solution matching KTU 2024 Scheme requirements`,
      ],
      practiceSkills: meta.skills,
      checklistSteps: [
        { id: `s1`, stepNumber: 1, label: `Design algorithm & write implementation for ${title}`, completed: idx < 2 },
        { id: `s2`, stepNumber: 2, label: `Compile, link & debug using ${meta.env.split(' ')[0]} toolchain`, completed: idx < 1 },
        { id: `s3`, stepNumber: 3, label: `Demonstrate output on terminal & run KTU auto-checks`, completed: false },
      ],
      submissionRequirements: {
        fileTypes: meta.fileTypes,
        description: `Upload required source files and execution logs for ${meta.code} ${title}`,
        acceptedFormats: meta.acceptedFormats,
      },
      sampleStarterCode: meta.starter,
      initialExecutionCmd: meta.cmd,
      initialExecutionOutput: meta.output,
      status: idx < 2 ? (idx === 0 ? 'Completed' : 'In Progress') : 'Ready',
    };
  });
}

const finalCourses = courseMeta.map(meta => {
  const experiments = parseExperimentsForCourse(meta);
  const completedExperiments = experiments.filter(e => e.status === 'Completed').length;
  const progressPercentage = experiments.length > 0 ? Math.round((completedExperiments / experiments.length) * 100) : 0;

  return {
    code: meta.code,
    title: meta.title,
    semester: meta.semester,
    credits: meta.credits,
    ltpr: meta.ltpr,
    evaluation: meta.evaluation,
    category: meta.category,
    description: meta.description,
    topics: meta.topics,
    experimentsCount: experiments.length || meta.experimentsCount,
    completedExperiments: completedExperiments || meta.completedExperiments,
    progressPercentage: progressPercentage || meta.progressPercentage,
    imageKey: meta.code,
    activeSessionId: meta.activeSessionId,
    experiments,
  };
});

const tsFileContent = `import { Course, SemesterData, SemesterId } from '../types/lab';

export const KTU_2024_CSE_COURSES: Course[] = ${JSON.stringify(finalCourses, null, 2)};

export const SEMESTERS: SemesterData[] = [
  { id: 'S1', name: 'Semester 1', courses: KTU_2024_CSE_COURSES.filter((c) => c.semester === 'S1') },
  { id: 'S2', name: 'Semester 2', courses: KTU_2024_CSE_COURSES.filter((c) => c.semester === 'S2') },
  { id: 'S3', name: 'Semester 3', courses: KTU_2024_CSE_COURSES.filter((c) => c.semester === 'S3') },
  { id: 'S4', name: 'Semester 4', courses: KTU_2024_CSE_COURSES.filter((c) => c.semester === 'S4') },
  { id: 'S5', name: 'Semester 5', courses: KTU_2024_CSE_COURSES.filter((c) => c.semester === 'S5') },
  { id: 'S6', name: 'Semester 6', courses: KTU_2024_CSE_COURSES.filter((c) => c.semester === 'S6') },
  { id: 'S7', name: 'Semester 7', courses: KTU_2024_CSE_COURSES.filter((c) => c.semester === 'S7') },
  { id: 'S8', name: 'Semester 8', courses: KTU_2024_CSE_COURSES.filter((c) => c.semester === 'S8') },
];

export default KTU_2024_CSE_COURSES;
`;

fs.writeFileSync(path.resolve(__dirname, '../src/data/ktu2024CseLabs.ts'), tsFileContent, 'utf8');
console.log('Successfully generated ktu2024CseLabs.ts with', finalCourses.length, 'courses!');
finalCourses.forEach(c => console.log(c.semester, c.code, '->', c.experiments.length, 'experiments'));
