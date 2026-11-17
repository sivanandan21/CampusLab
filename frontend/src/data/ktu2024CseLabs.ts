import { Course, SemesterData, SemesterId } from '../types/lab';

export const KTU_2024_CSE_COURSES: Course[] = [
  {
    "code": "UCEST105",
    "title": "Algorithmic Thinking with Python",
    "semester": "S1",
    "credits": 2,
    "ltpr": "0-0-2-0",
    "evaluation": "CIA 50 / ESE 50",
    "category": "ESC Practical",
    "description": "Foundations of computational problem solving using Python. Data types, loops, functions, file handling, and modular programming.",
    "topics": [
      "Computational Logic & Flowcharts",
      "Control Flow & Nested Loops",
      "Lists, Dictionaries & Tuples",
      "File Processing & Modules"
    ],
    "experimentsCount": 8,
    "completedExperiments": 1,
    "progressPercentage": 13,
    "imageKey": "UCEST105",
    "experiments": [
      {
        "id": "ucest105-exp01",
        "expNumber": 1,
        "title": "Algorithms, Flowcharts & Basic I/O",
        "question": "Write a Python program to read a student's name, admission number, and marks in 5 subjects, compute the total, percentage, and grade using conditional branching, and print a formatted mark sheet.",
        "durationMinutes": 45,
        "environment": "Python 3.12 Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of algorithms, flowcharts & basic i/o",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python 3",
            "tag": "Syntax",
            "iconType": "python"
          },
          {
            "name": "Control Flow",
            "tag": "Logic",
            "iconType": "code"
          },
          {
            "name": "Algorithms",
            "tag": "Core",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Algorithms, Flowcharts & Basic I/O",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Python toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python file (.py)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for UCEST105 Algorithms, Flowcharts & Basic I/O",
          "acceptedFormats": ".py,.png,.jpg"
        },
        "sampleStarterCode": "#!/usr/bin/env python3\\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\\n\\ndef main():\\n    print(\"CampusLab Python 3.12 Sandbox Ready\")\\n\\nif __name__ == \"__main__\":\\n    main()\\n",
        "initialExecutionCmd": "python3 solution.py",
        "initialExecutionOutput": "Python 3.12.3 [Ubuntu Linux]\\nExecuting solution.py...\\nInput processed: [Success]\\nOutput: Solution verified for all KTU test vectors.\\nExit code: 0",
        "status": "Completed"
      },
      {
        "id": "ucest105-exp02",
        "expNumber": 2,
        "title": "Control Structures & Number Theory",
        "question": "Implement a menu-driven Python program to check whether a number is prime, Armstrong, or palindrome, and generate the Fibonacci sequence up to N terms.",
        "durationMinutes": 45,
        "environment": "Python 3.12 Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of control structures & number theory",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python 3",
            "tag": "Syntax",
            "iconType": "python"
          },
          {
            "name": "Control Flow",
            "tag": "Logic",
            "iconType": "code"
          },
          {
            "name": "Algorithms",
            "tag": "Core",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Control Structures & Number Theory",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Python toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python file (.py)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for UCEST105 Control Structures & Number Theory",
          "acceptedFormats": ".py,.png,.jpg"
        },
        "sampleStarterCode": "#!/usr/bin/env python3\\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\\n\\ndef main():\\n    print(\"CampusLab Python 3.12 Sandbox Ready\")\\n\\nif __name__ == \"__main__\":\\n    main()\\n",
        "initialExecutionCmd": "python3 solution.py",
        "initialExecutionOutput": "Python 3.12.3 [Ubuntu Linux]\\nExecuting solution.py...\\nInput processed: [Success]\\nOutput: Solution verified for all KTU test vectors.\\nExit code: 0",
        "status": "In Progress"
      },
      {
        "id": "ucest105-exp03",
        "expNumber": 3,
        "title": "Functions & Modular Problem Solving",
        "question": "Write Python functions to compute nCr (combinations) and GCD/LCM of two integers without using built-in math library helpers.",
        "durationMinutes": 45,
        "environment": "Python 3.12 Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of functions & modular problem solving",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python 3",
            "tag": "Syntax",
            "iconType": "python"
          },
          {
            "name": "Control Flow",
            "tag": "Logic",
            "iconType": "code"
          },
          {
            "name": "Algorithms",
            "tag": "Core",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Functions & Modular Problem Solving",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Python toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python file (.py)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for UCEST105 Functions & Modular Problem Solving",
          "acceptedFormats": ".py,.png,.jpg"
        },
        "sampleStarterCode": "#!/usr/bin/env python3\\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\\n\\ndef main():\\n    print(\"CampusLab Python 3.12 Sandbox Ready\")\\n\\nif __name__ == \"__main__\":\\n    main()\\n",
        "initialExecutionCmd": "python3 solution.py",
        "initialExecutionOutput": "Python 3.12.3 [Ubuntu Linux]\\nExecuting solution.py...\\nInput processed: [Success]\\nOutput: Solution verified for all KTU test vectors.\\nExit code: 0",
        "status": "Ready"
      },
      {
        "id": "ucest105-exp04",
        "expNumber": 4,
        "title": "String Manipulation & Pattern Matching",
        "question": "Given a paragraph of text, write a Python script to count vowels, consonants, digits, and word frequencies, and check whether each word is a palindrome.",
        "durationMinutes": 45,
        "environment": "Python 3.12 Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of string manipulation & pattern matching",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python 3",
            "tag": "Syntax",
            "iconType": "python"
          },
          {
            "name": "Control Flow",
            "tag": "Logic",
            "iconType": "code"
          },
          {
            "name": "Algorithms",
            "tag": "Core",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for String Manipulation & Pattern Matching",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Python toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python file (.py)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for UCEST105 String Manipulation & Pattern Matching",
          "acceptedFormats": ".py,.png,.jpg"
        },
        "sampleStarterCode": "#!/usr/bin/env python3\\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\\n\\ndef main():\\n    print(\"CampusLab Python 3.12 Sandbox Ready\")\\n\\nif __name__ == \"__main__\":\\n    main()\\n",
        "initialExecutionCmd": "python3 solution.py",
        "initialExecutionOutput": "Python 3.12.3 [Ubuntu Linux]\\nExecuting solution.py...\\nInput processed: [Success]\\nOutput: Solution verified for all KTU test vectors.\\nExit code: 0",
        "status": "Ready"
      },
      {
        "id": "ucest105-exp05",
        "expNumber": 5,
        "title": "Lists, Tuples & Searching/Sorting",
        "question": "Implement Linear Search, Binary Search, and Bubble Sort on a list of integer roll numbers. Display step-by-step pass results.",
        "durationMinutes": 45,
        "environment": "Python 3.12 Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of lists, tuples & searching/sorting",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python 3",
            "tag": "Syntax",
            "iconType": "python"
          },
          {
            "name": "Control Flow",
            "tag": "Logic",
            "iconType": "code"
          },
          {
            "name": "Algorithms",
            "tag": "Core",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Lists, Tuples & Searching/Sorting",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Python toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python file (.py)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for UCEST105 Lists, Tuples & Searching/Sorting",
          "acceptedFormats": ".py,.png,.jpg"
        },
        "sampleStarterCode": "#!/usr/bin/env python3\\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\\n\\ndef main():\\n    print(\"CampusLab Python 3.12 Sandbox Ready\")\\n\\nif __name__ == \"__main__\":\\n    main()\\n",
        "initialExecutionCmd": "python3 solution.py",
        "initialExecutionOutput": "Python 3.12.3 [Ubuntu Linux]\\nExecuting solution.py...\\nInput processed: [Success]\\nOutput: Solution verified for all KTU test vectors.\\nExit code: 0",
        "status": "Ready"
      },
      {
        "id": "ucest105-exp06",
        "expNumber": 6,
        "title": "Sets & Dictionaries",
        "question": "Build a mini student attendance tracker using Python dictionaries and sets to find students present in all lab sessions and students absent in at least one session.",
        "durationMinutes": 45,
        "environment": "Python 3.12 Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of sets & dictionaries",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python 3",
            "tag": "Syntax",
            "iconType": "python"
          },
          {
            "name": "Control Flow",
            "tag": "Logic",
            "iconType": "code"
          },
          {
            "name": "Algorithms",
            "tag": "Core",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Sets & Dictionaries",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Python toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python file (.py)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for UCEST105 Sets & Dictionaries",
          "acceptedFormats": ".py,.png,.jpg"
        },
        "sampleStarterCode": "#!/usr/bin/env python3\\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\\n\\ndef main():\\n    print(\"CampusLab Python 3.12 Sandbox Ready\")\\n\\nif __name__ == \"__main__\":\\n    main()\\n",
        "initialExecutionCmd": "python3 solution.py",
        "initialExecutionOutput": "Python 3.12.3 [Ubuntu Linux]\\nExecuting solution.py...\\nInput processed: [Success]\\nOutput: Solution verified for all KTU test vectors.\\nExit code: 0",
        "status": "Ready"
      },
      {
        "id": "ucest105-exp07",
        "expNumber": 7,
        "title": "Recursive Thinking",
        "question": "Write recursive Python functions for Tower of Hanoi (N disks), factorial, and binary search, and trace the recursion call depth.",
        "durationMinutes": 45,
        "environment": "Python 3.12 Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of recursive thinking",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python 3",
            "tag": "Syntax",
            "iconType": "python"
          },
          {
            "name": "Control Flow",
            "tag": "Logic",
            "iconType": "code"
          },
          {
            "name": "Algorithms",
            "tag": "Core",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Recursive Thinking",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Python toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python file (.py)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for UCEST105 Recursive Thinking",
          "acceptedFormats": ".py,.png,.jpg"
        },
        "sampleStarterCode": "#!/usr/bin/env python3\\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\\n\\ndef main():\\n    print(\"CampusLab Python 3.12 Sandbox Ready\")\\n\\nif __name__ == \"__main__\":\\n    main()\\n",
        "initialExecutionCmd": "python3 solution.py",
        "initialExecutionOutput": "Python 3.12.3 [Ubuntu Linux]\\nExecuting solution.py...\\nInput processed: [Success]\\nOutput: Solution verified for all KTU test vectors.\\nExit code: 0",
        "status": "Ready"
      },
      {
        "id": "ucest105-exp08",
        "expNumber": 8,
        "title": "File Handling & Exception Safety",
        "question": "Read student records from a CSV/text file, compute average marks, handle missing/invalid records with try-except blocks, and write the summary report to output.txt.",
        "durationMinutes": 45,
        "environment": "Python 3.12 Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of file handling & exception safety",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python 3",
            "tag": "Syntax",
            "iconType": "python"
          },
          {
            "name": "Control Flow",
            "tag": "Logic",
            "iconType": "code"
          },
          {
            "name": "Algorithms",
            "tag": "Core",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for File Handling & Exception Safety",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Python toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python file (.py)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for UCEST105 File Handling & Exception Safety",
          "acceptedFormats": ".py,.png,.jpg"
        },
        "sampleStarterCode": "#!/usr/bin/env python3\\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\\n\\ndef main():\\n    print(\"CampusLab Python 3.12 Sandbox Ready\")\\n\\nif __name__ == \"__main__\":\\n    main()\\n",
        "initialExecutionCmd": "python3 solution.py",
        "initialExecutionOutput": "Python 3.12.3 [Ubuntu Linux]\\nExecuting solution.py...\\nInput processed: [Success]\\nOutput: Solution verified for all KTU test vectors.\\nExit code: 0",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "GXESL106",
    "title": "Basic Electrical & Electronics Engineering Workshop",
    "semester": "S1",
    "credits": 1,
    "ltpr": "0-0-2-0",
    "evaluation": "CIA 50 / ESE 50",
    "category": "ESC Practical",
    "description": "Hands-on training in basic electrical wiring, electronic soldering, circuit breadboarding, measuring instruments, and component testing.",
    "topics": [
      "Staircase & Godown Wiring",
      "Soldering Practice & PCB",
      "Multimeter & CRO Operation",
      "Electronic Component Testing"
    ],
    "experimentsCount": 7,
    "completedExperiments": 1,
    "progressPercentage": 14,
    "imageKey": "GXESL106",
    "experiments": [
      {
        "id": "gxesl106-exp01",
        "expNumber": 1,
        "title": "Familiarization of Electrical Wiring Tools & Safety",
        "question": "Identify standard electrical wiring tools, MCB, ELCB/RCCB, fuses, and earthing components. Document ratings and safety precautions.",
        "durationMinutes": 45,
        "environment": "Electrical & Electronics Virtual Lab Bench",
        "objectives": [
          "Understand theoretical principles of familiarization of electrical wiring tools & safety",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Circuit Wiring",
            "tag": "SPDT/Godown",
            "iconType": "cpu"
          },
          {
            "name": "Multimeter & CRO",
            "tag": "Instrumentation",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Familiarization of Electrical Wiring Tools & Safety",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Electrical toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Schematic Diagram (.png/.pdf)",
            "Observations & Readings (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for GXESL106 Familiarization of Electrical Wiring Tools & Safety",
          "acceptedFormats": ".png,.pdf,.txt"
        },
        "sampleStarterCode": "# Circuit Schematic & Wiring Observations\\n# Supply Voltage: 230V AC, 50Hz\\n# Switch 1: SPDT (Staircase position A)\\n# Switch 2: SPDT (Staircase position B)\\n",
        "initialExecutionCmd": "./run_circuit_sim --check",
        "initialExecutionOutput": "[Virtual Bench] Checking SPDT wiring continuity...\\nCircuit Path: Node A -> Node B (Closed)\\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\\nSafety Ground Check: OK",
        "status": "Completed"
      },
      {
        "id": "gxesl106-exp02",
        "expNumber": 2,
        "title": "One Lamp Controlled by One Switch & Staircase Wiring",
        "question": "Wire and test (a) one lamp controlled by a single-pole switch and (b) two-way staircase wiring using two SPDT switches.",
        "durationMinutes": 45,
        "environment": "Electrical & Electronics Virtual Lab Bench",
        "objectives": [
          "Understand theoretical principles of one lamp controlled by one switch & staircase wiring",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Circuit Wiring",
            "tag": "SPDT/Godown",
            "iconType": "cpu"
          },
          {
            "name": "Multimeter & CRO",
            "tag": "Instrumentation",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for One Lamp Controlled by One Switch & Staircase Wiring",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Electrical toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Schematic Diagram (.png/.pdf)",
            "Observations & Readings (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for GXESL106 One Lamp Controlled by One Switch & Staircase Wiring",
          "acceptedFormats": ".png,.pdf,.txt"
        },
        "sampleStarterCode": "# Circuit Schematic & Wiring Observations\\n# Supply Voltage: 230V AC, 50Hz\\n# Switch 1: SPDT (Staircase position A)\\n# Switch 2: SPDT (Staircase position B)\\n",
        "initialExecutionCmd": "./run_circuit_sim --check",
        "initialExecutionOutput": "[Virtual Bench] Checking SPDT wiring continuity...\\nCircuit Path: Node A -> Node B (Closed)\\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\\nSafety Ground Check: OK",
        "status": "In Progress"
      },
      {
        "id": "gxesl106-exp03",
        "expNumber": 3,
        "title": "Fluorescent / LED Tube & Energy Meter Connection",
        "question": "Connect a single-phase energy meter with an incandescent/LED load, measure power consumption, and verify voltage/current using a multimeter.",
        "durationMinutes": 45,
        "environment": "Electrical & Electronics Virtual Lab Bench",
        "objectives": [
          "Understand theoretical principles of fluorescent / led tube & energy meter connection",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Circuit Wiring",
            "tag": "SPDT/Godown",
            "iconType": "cpu"
          },
          {
            "name": "Multimeter & CRO",
            "tag": "Instrumentation",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Fluorescent / LED Tube & Energy Meter Connection",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Electrical toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Schematic Diagram (.png/.pdf)",
            "Observations & Readings (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for GXESL106 Fluorescent / LED Tube & Energy Meter Connection",
          "acceptedFormats": ".png,.pdf,.txt"
        },
        "sampleStarterCode": "# Circuit Schematic & Wiring Observations\\n# Supply Voltage: 230V AC, 50Hz\\n# Switch 1: SPDT (Staircase position A)\\n# Switch 2: SPDT (Staircase position B)\\n",
        "initialExecutionCmd": "./run_circuit_sim --check",
        "initialExecutionOutput": "[Virtual Bench] Checking SPDT wiring continuity...\\nCircuit Path: Node A -> Node B (Closed)\\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\\nSafety Ground Check: OK",
        "status": "Ready"
      },
      {
        "id": "gxesl106-exp04",
        "expNumber": 4,
        "title": "Resistor Color Coding & Breadboard Familiarization",
        "question": "Determine resistor values using 4-band/5-band color codes, verify with a digital multimeter, and assemble series/parallel circuits on a breadboard.",
        "durationMinutes": 45,
        "environment": "Electrical & Electronics Virtual Lab Bench",
        "objectives": [
          "Understand theoretical principles of resistor color coding & breadboard familiarization",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Circuit Wiring",
            "tag": "SPDT/Godown",
            "iconType": "cpu"
          },
          {
            "name": "Multimeter & CRO",
            "tag": "Instrumentation",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Resistor Color Coding & Breadboard Familiarization",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Electrical toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Schematic Diagram (.png/.pdf)",
            "Observations & Readings (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for GXESL106 Resistor Color Coding & Breadboard Familiarization",
          "acceptedFormats": ".png,.pdf,.txt"
        },
        "sampleStarterCode": "# Circuit Schematic & Wiring Observations\\n# Supply Voltage: 230V AC, 50Hz\\n# Switch 1: SPDT (Staircase position A)\\n# Switch 2: SPDT (Staircase position B)\\n",
        "initialExecutionCmd": "./run_circuit_sim --check",
        "initialExecutionOutput": "[Virtual Bench] Checking SPDT wiring continuity...\\nCircuit Path: Node A -> Node B (Closed)\\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\\nSafety Ground Check: OK",
        "status": "Ready"
      },
      {
        "id": "gxesl106-exp05",
        "expNumber": 5,
        "title": "PN Junction Diode & Zener Diode Characteristics",
        "question": "Plot the forward and reverse V-I characteristics of a PN junction diode and verify voltage regulation using a Zener diode.",
        "durationMinutes": 45,
        "environment": "Electrical & Electronics Virtual Lab Bench",
        "objectives": [
          "Understand theoretical principles of pn junction diode & zener diode characteristics",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Circuit Wiring",
            "tag": "SPDT/Godown",
            "iconType": "cpu"
          },
          {
            "name": "Multimeter & CRO",
            "tag": "Instrumentation",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for PN Junction Diode & Zener Diode Characteristics",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Electrical toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Schematic Diagram (.png/.pdf)",
            "Observations & Readings (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for GXESL106 PN Junction Diode & Zener Diode Characteristics",
          "acceptedFormats": ".png,.pdf,.txt"
        },
        "sampleStarterCode": "# Circuit Schematic & Wiring Observations\\n# Supply Voltage: 230V AC, 50Hz\\n# Switch 1: SPDT (Staircase position A)\\n# Switch 2: SPDT (Staircase position B)\\n",
        "initialExecutionCmd": "./run_circuit_sim --check",
        "initialExecutionOutput": "[Virtual Bench] Checking SPDT wiring continuity...\\nCircuit Path: Node A -> Node B (Closed)\\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\\nSafety Ground Check: OK",
        "status": "Ready"
      },
      {
        "id": "gxesl106-exp06",
        "expNumber": 6,
        "title": "Half-Wave & Full-Wave Bridge Rectifier",
        "question": "Assemble a bridge rectifier circuit on a breadboard, observe the input/output waveforms on a CRO/DSO, and measure ripple factor with and without a capacitor filter.",
        "durationMinutes": 45,
        "environment": "Electrical & Electronics Virtual Lab Bench",
        "objectives": [
          "Understand theoretical principles of half-wave & full-wave bridge rectifier",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Circuit Wiring",
            "tag": "SPDT/Godown",
            "iconType": "cpu"
          },
          {
            "name": "Multimeter & CRO",
            "tag": "Instrumentation",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Half-Wave & Full-Wave Bridge Rectifier",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Electrical toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Schematic Diagram (.png/.pdf)",
            "Observations & Readings (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for GXESL106 Half-Wave & Full-Wave Bridge Rectifier",
          "acceptedFormats": ".png,.pdf,.txt"
        },
        "sampleStarterCode": "# Circuit Schematic & Wiring Observations\\n# Supply Voltage: 230V AC, 50Hz\\n# Switch 1: SPDT (Staircase position A)\\n# Switch 2: SPDT (Staircase position B)\\n",
        "initialExecutionCmd": "./run_circuit_sim --check",
        "initialExecutionOutput": "[Virtual Bench] Checking SPDT wiring continuity...\\nCircuit Path: Node A -> Node B (Closed)\\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\\nSafety Ground Check: OK",
        "status": "Ready"
      },
      {
        "id": "gxesl106-exp07",
        "expNumber": 7,
        "title": "Soldering & PCB Assembly Practice",
        "question": "Solder a simple LED-resistor indicator circuit onto a general-purpose PCB and test continuity.",
        "durationMinutes": 45,
        "environment": "Electrical & Electronics Virtual Lab Bench",
        "objectives": [
          "Understand theoretical principles of soldering & pcb assembly practice",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Circuit Wiring",
            "tag": "SPDT/Godown",
            "iconType": "cpu"
          },
          {
            "name": "Multimeter & CRO",
            "tag": "Instrumentation",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Soldering & PCB Assembly Practice",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Electrical toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Schematic Diagram (.png/.pdf)",
            "Observations & Readings (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for GXESL106 Soldering & PCB Assembly Practice",
          "acceptedFormats": ".png,.pdf,.txt"
        },
        "sampleStarterCode": "# Circuit Schematic & Wiring Observations\\n# Supply Voltage: 230V AC, 50Hz\\n# Switch 1: SPDT (Staircase position A)\\n# Switch 2: SPDT (Staircase position B)\\n",
        "initialExecutionCmd": "./run_circuit_sim --check",
        "initialExecutionOutput": "[Virtual Bench] Checking SPDT wiring continuity...\\nCircuit Path: Node A -> Node B (Closed)\\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\\nSafety Ground Check: OK",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "GXEST204",
    "title": "Programming in C",
    "semester": "S2",
    "credits": 2,
    "ltpr": "0-0-2-0",
    "evaluation": "CIA 50 / ESE 50",
    "category": "ESC Practical",
    "description": "Low-level imperative programming with C. Pointers, memory allocation, structures, bitwise manipulation, and standard libraries.",
    "topics": [
      "Pointers & Dynamic Memory",
      "Structures & Unions",
      "File Handling & Streams",
      "Command-Line Arguments"
    ],
    "experimentsCount": 8,
    "completedExperiments": 1,
    "progressPercentage": 13,
    "imageKey": "GXEST204",
    "experiments": [
      {
        "id": "gxest204-exp01",
        "expNumber": 1,
        "title": "Operators, Expressions & Branching",
        "question": "Write a C program to solve a quadratic equation (ax^2 + bx + c = 0) handling real, equal, and complex roots using switch/if-else statements.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Ubuntu 24.04)",
        "objectives": [
          "Understand theoretical principles of operators, expressions & branching",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Pointers & Memory",
            "tag": "Pointers",
            "iconType": "cpu"
          },
          {
            "name": "Data Structures",
            "tag": "Structs",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Operators, Expressions & Branching",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for GXEST204 Operators, Expressions & Branching",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\nint main() {\\n    printf(\"KTU 2024 CSE - GXEST204 Programming in C\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc -Wall -O2 solution.c -o solution && ./solution",
        "initialExecutionOutput": "student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\\nInput values processed successfully.\\nResult matches expected KTU test vector.\\nAll test cases passed.",
        "status": "Completed"
      },
      {
        "id": "gxest204-exp02",
        "expNumber": 2,
        "title": "Loops & Number Patterns",
        "question": "Write a C program to print Pascal's triangle up to N rows and find all prime numbers within a user-specified range [L, R].",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Ubuntu 24.04)",
        "objectives": [
          "Understand theoretical principles of loops & number patterns",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Pointers & Memory",
            "tag": "Pointers",
            "iconType": "cpu"
          },
          {
            "name": "Data Structures",
            "tag": "Structs",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Loops & Number Patterns",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for GXEST204 Loops & Number Patterns",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\nint main() {\\n    printf(\"KTU 2024 CSE - GXEST204 Programming in C\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc -Wall -O2 solution.c -o solution && ./solution",
        "initialExecutionOutput": "student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\\nInput values processed successfully.\\nResult matches expected KTU test vector.\\nAll test cases passed.",
        "status": "In Progress"
      },
      {
        "id": "gxest204-exp03",
        "expNumber": 3,
        "title": "1D & 2D Arrays (Matrix Operations)",
        "question": "Implement a menu-driven C program to perform Matrix Addition, Matrix Multiplication, and Transpose using functions.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Ubuntu 24.04)",
        "objectives": [
          "Understand theoretical principles of 1d & 2d arrays (matrix operations)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Pointers & Memory",
            "tag": "Pointers",
            "iconType": "cpu"
          },
          {
            "name": "Data Structures",
            "tag": "Structs",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for 1D & 2D Arrays (Matrix Operations)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for GXEST204 1D & 2D Arrays (Matrix Operations)",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\nint main() {\\n    printf(\"KTU 2024 CSE - GXEST204 Programming in C\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc -Wall -O2 solution.c -o solution && ./solution",
        "initialExecutionOutput": "student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\\nInput values processed successfully.\\nResult matches expected KTU test vector.\\nAll test cases passed.",
        "status": "Ready"
      },
      {
        "id": "gxest204-exp04",
        "expNumber": 4,
        "title": "Strings Without Built-in Functions",
        "question": "Write C functions (without using <string.h>) to find string length, concatenate two strings, reverse a string, and check for palindrome.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Ubuntu 24.04)",
        "objectives": [
          "Understand theoretical principles of strings without built-in functions",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Pointers & Memory",
            "tag": "Pointers",
            "iconType": "cpu"
          },
          {
            "name": "Data Structures",
            "tag": "Structs",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Strings Without Built-in Functions",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for GXEST204 Strings Without Built-in Functions",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\nint main() {\\n    printf(\"KTU 2024 CSE - GXEST204 Programming in C\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc -Wall -O2 solution.c -o solution && ./solution",
        "initialExecutionOutput": "student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\\nInput values processed successfully.\\nResult matches expected KTU test vector.\\nAll test cases passed.",
        "status": "Ready"
      },
      {
        "id": "gxest204-exp05",
        "expNumber": 5,
        "title": "Structures & Student Record Management",
        "question": "Define a struct Student (roll_no, name, marks[3], total). Read N student records, sort them in descending order of total marks, and display the rank list.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Ubuntu 24.04)",
        "objectives": [
          "Understand theoretical principles of structures & student record management",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Pointers & Memory",
            "tag": "Pointers",
            "iconType": "cpu"
          },
          {
            "name": "Data Structures",
            "tag": "Structs",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Structures & Student Record Management",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for GXEST204 Structures & Student Record Management",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\nint main() {\\n    printf(\"KTU 2024 CSE - GXEST204 Programming in C\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc -Wall -O2 solution.c -o solution && ./solution",
        "initialExecutionOutput": "student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\\nInput values processed successfully.\\nResult matches expected KTU test vector.\\nAll test cases passed.",
        "status": "Ready"
      },
      {
        "id": "gxest204-exp06",
        "expNumber": 6,
        "title": "Pointers & Dynamic Memory Allocation",
        "question": "Write a C program using pointers and malloc()/calloc() to swap two arrays, find the largest element, and compute the sum of elements.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Ubuntu 24.04)",
        "objectives": [
          "Understand theoretical principles of pointers & dynamic memory allocation",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Pointers & Memory",
            "tag": "Pointers",
            "iconType": "cpu"
          },
          {
            "name": "Data Structures",
            "tag": "Structs",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Pointers & Dynamic Memory Allocation",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for GXEST204 Pointers & Dynamic Memory Allocation",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\nint main() {\\n    printf(\"KTU 2024 CSE - GXEST204 Programming in C\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc -Wall -O2 solution.c -o solution && ./solution",
        "initialExecutionOutput": "student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\\nInput values processed successfully.\\nResult matches expected KTU test vector.\\nAll test cases passed.",
        "status": "Ready"
      },
      {
        "id": "gxest204-exp07",
        "expNumber": 7,
        "title": "Recursion in C",
        "question": "Implement recursive functions in C to compute the nth Fibonacci number, sum of digits, and reverse an integer.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Ubuntu 24.04)",
        "objectives": [
          "Understand theoretical principles of recursion in c",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Pointers & Memory",
            "tag": "Pointers",
            "iconType": "cpu"
          },
          {
            "name": "Data Structures",
            "tag": "Structs",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Recursion in C",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for GXEST204 Recursion in C",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\nint main() {\\n    printf(\"KTU 2024 CSE - GXEST204 Programming in C\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc -Wall -O2 solution.c -o solution && ./solution",
        "initialExecutionOutput": "student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\\nInput values processed successfully.\\nResult matches expected KTU test vector.\\nAll test cases passed.",
        "status": "Ready"
      },
      {
        "id": "gxest204-exp08",
        "expNumber": 8,
        "title": "File I/O in C",
        "question": "Write a C program to read an input text file, count lines, words, and characters, convert lowercase letters to uppercase, and save the result to a new file.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Ubuntu 24.04)",
        "objectives": [
          "Understand theoretical principles of file i/o in c",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Pointers & Memory",
            "tag": "Pointers",
            "iconType": "cpu"
          },
          {
            "name": "Data Structures",
            "tag": "Structs",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for File I/O in C",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for GXEST204 File I/O in C",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\nint main() {\\n    printf(\"KTU 2024 CSE - GXEST204 Programming in C\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc -Wall -O2 solution.c -o solution && ./solution",
        "initialExecutionOutput": "student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\\nInput values processed successfully.\\nResult matches expected KTU test vector.\\nAll test cases passed.",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "GXESL208",
    "title": "IT Workshop",
    "semester": "S2",
    "credits": 1,
    "ltpr": "0-0-2-0",
    "evaluation": "CIA 50 / ESE 50",
    "category": "ESC Practical",
    "description": "PC hardware diagnostics, Linux CLI mastery, Git version control, bash scripting, and software deployment pipelines.",
    "topics": [
      "Hardware Disassembly & Assembly",
      "Linux Shell & Command Mastery",
      "Git Version Control & Branching",
      "Bash Shell Scripting"
    ],
    "experimentsCount": 8,
    "completedExperiments": 1,
    "progressPercentage": 13,
    "imageKey": "GXESL208",
    "experiments": [
      {
        "id": "gxesl208-exp01",
        "expNumber": 1,
        "title": "Computer Hardware & Boot Process Familiarization",
        "question": "Identify motherboard components (CPU socket, RAM slots, chipset, SATA/NVMe, SMPS, NIC, BIOS/UEFI) and document the POST and boot sequence.",
        "durationMinutes": 45,
        "environment": "Ubuntu 24.04 LTS CLI & Git Sandbox",
        "objectives": [
          "Understand theoretical principles of computer hardware & boot process familiarization",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Linux CLI",
            "tag": "Bash",
            "iconType": "terminal"
          },
          {
            "name": "Git Version Control",
            "tag": "Git",
            "iconType": "code"
          },
          {
            "name": "Hardware Diagnostics",
            "tag": "SysInfo",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Computer Hardware & Boot Process Familiarization",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Ubuntu toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Bash Script (.sh)",
            "Terminal transcript (.txt)"
          ],
          "description": "Upload required source files and execution logs for GXESL208 Computer Hardware & Boot Process Familiarization",
          "acceptedFormats": ".sh,.txt"
        },
        "sampleStarterCode": "#!/bin/bash\\n# KTU 2024 Scheme - GXESL208 IT Workshop\\n\\necho \"Running system diagnostics...\"\\nuname -a\\n",
        "initialExecutionCmd": "./diagnose.sh",
        "initialExecutionOutput": "Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\\nGit repository status: clean, on branch master",
        "status": "Completed"
      },
      {
        "id": "gxesl208-exp02",
        "expNumber": 2,
        "title": "Basic Linux Commands & File Permissions",
        "question": "Practice ls, mkdir, cp, mv, rm, grep, find, chmod, chown, ps, uname, df, du, and history in a Linux terminal. Create a directory tree and set 750 permissions.",
        "durationMinutes": 45,
        "environment": "Ubuntu 24.04 LTS CLI & Git Sandbox",
        "objectives": [
          "Understand theoretical principles of basic linux commands & file permissions",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Linux CLI",
            "tag": "Bash",
            "iconType": "terminal"
          },
          {
            "name": "Git Version Control",
            "tag": "Git",
            "iconType": "code"
          },
          {
            "name": "Hardware Diagnostics",
            "tag": "SysInfo",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Basic Linux Commands & File Permissions",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Ubuntu toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Bash Script (.sh)",
            "Terminal transcript (.txt)"
          ],
          "description": "Upload required source files and execution logs for GXESL208 Basic Linux Commands & File Permissions",
          "acceptedFormats": ".sh,.txt"
        },
        "sampleStarterCode": "#!/bin/bash\\n# KTU 2024 Scheme - GXESL208 IT Workshop\\n\\necho \"Running system diagnostics...\"\\nuname -a\\n",
        "initialExecutionCmd": "./diagnose.sh",
        "initialExecutionOutput": "Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\\nGit repository status: clean, on branch master",
        "status": "In Progress"
      },
      {
        "id": "gxesl208-exp03",
        "expNumber": 3,
        "title": "Shell Scripting in Bash",
        "question": "Write a Bash script that accepts a directory path, counts files and subdirectories, backs up all .txt files into a dated archive, and logs the summary.",
        "durationMinutes": 45,
        "environment": "Ubuntu 24.04 LTS CLI & Git Sandbox",
        "objectives": [
          "Understand theoretical principles of shell scripting in bash",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Linux CLI",
            "tag": "Bash",
            "iconType": "terminal"
          },
          {
            "name": "Git Version Control",
            "tag": "Git",
            "iconType": "code"
          },
          {
            "name": "Hardware Diagnostics",
            "tag": "SysInfo",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Shell Scripting in Bash",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Ubuntu toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Bash Script (.sh)",
            "Terminal transcript (.txt)"
          ],
          "description": "Upload required source files and execution logs for GXESL208 Shell Scripting in Bash",
          "acceptedFormats": ".sh,.txt"
        },
        "sampleStarterCode": "#!/bin/bash\\n# KTU 2024 Scheme - GXESL208 IT Workshop\\n\\necho \"Running system diagnostics...\"\\nuname -a\\n",
        "initialExecutionCmd": "./diagnose.sh",
        "initialExecutionOutput": "Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\\nGit repository status: clean, on branch master",
        "status": "Ready"
      },
      {
        "id": "gxesl208-exp04",
        "expNumber": 4,
        "title": "Networking Hardware & Diagnostic Commands",
        "question": "Test network connectivity and inspect interfaces using ip/ifconfig, ping, traceroute, nslookup/dig, ss/netstat, and curl. Document observed latency and DNS resolution.",
        "durationMinutes": 45,
        "environment": "Ubuntu 24.04 LTS CLI & Git Sandbox",
        "objectives": [
          "Understand theoretical principles of networking hardware & diagnostic commands",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Linux CLI",
            "tag": "Bash",
            "iconType": "terminal"
          },
          {
            "name": "Git Version Control",
            "tag": "Git",
            "iconType": "code"
          },
          {
            "name": "Hardware Diagnostics",
            "tag": "SysInfo",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Networking Hardware & Diagnostic Commands",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Ubuntu toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Bash Script (.sh)",
            "Terminal transcript (.txt)"
          ],
          "description": "Upload required source files and execution logs for GXESL208 Networking Hardware & Diagnostic Commands",
          "acceptedFormats": ".sh,.txt"
        },
        "sampleStarterCode": "#!/bin/bash\\n# KTU 2024 Scheme - GXESL208 IT Workshop\\n\\necho \"Running system diagnostics...\"\\nuname -a\\n",
        "initialExecutionCmd": "./diagnose.sh",
        "initialExecutionOutput": "Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\\nGit repository status: clean, on branch master",
        "status": "Ready"
      },
      {
        "id": "gxesl208-exp05",
        "expNumber": 5,
        "title": "Version Control with Git",
        "question": "Initialize a Git repository, create a feature branch, stage and commit files, merge back to main, resolve a simulated merge conflict, and inspect git log --graph.",
        "durationMinutes": 45,
        "environment": "Ubuntu 24.04 LTS CLI & Git Sandbox",
        "objectives": [
          "Understand theoretical principles of version control with git",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Linux CLI",
            "tag": "Bash",
            "iconType": "terminal"
          },
          {
            "name": "Git Version Control",
            "tag": "Git",
            "iconType": "code"
          },
          {
            "name": "Hardware Diagnostics",
            "tag": "SysInfo",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Version Control with Git",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Ubuntu toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Bash Script (.sh)",
            "Terminal transcript (.txt)"
          ],
          "description": "Upload required source files and execution logs for GXESL208 Version Control with Git",
          "acceptedFormats": ".sh,.txt"
        },
        "sampleStarterCode": "#!/bin/bash\\n# KTU 2024 Scheme - GXESL208 IT Workshop\\n\\necho \"Running system diagnostics...\"\\nuname -a\\n",
        "initialExecutionCmd": "./diagnose.sh",
        "initialExecutionOutput": "Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\\nGit repository status: clean, on branch master",
        "status": "Ready"
      },
      {
        "id": "gxesl208-exp06",
        "expNumber": 6,
        "title": "Responsive Web Page (HTML5 & CSS3)",
        "question": "Build a clean personal/college lab profile webpage using semantic HTML5 tags, Flexbox/Grid layout, and responsive media queries.",
        "durationMinutes": 45,
        "environment": "Ubuntu 24.04 LTS CLI & Git Sandbox",
        "objectives": [
          "Understand theoretical principles of responsive web page (html5 & css3)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Linux CLI",
            "tag": "Bash",
            "iconType": "terminal"
          },
          {
            "name": "Git Version Control",
            "tag": "Git",
            "iconType": "code"
          },
          {
            "name": "Hardware Diagnostics",
            "tag": "SysInfo",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Responsive Web Page (HTML5 & CSS3)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Ubuntu toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Bash Script (.sh)",
            "Terminal transcript (.txt)"
          ],
          "description": "Upload required source files and execution logs for GXESL208 Responsive Web Page (HTML5 & CSS3)",
          "acceptedFormats": ".sh,.txt"
        },
        "sampleStarterCode": "#!/bin/bash\\n# KTU 2024 Scheme - GXESL208 IT Workshop\\n\\necho \"Running system diagnostics...\"\\nuname -a\\n",
        "initialExecutionCmd": "./diagnose.sh",
        "initialExecutionOutput": "Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\\nGit repository status: clean, on branch master",
        "status": "Ready"
      },
      {
        "id": "gxesl208-exp07",
        "expNumber": 7,
        "title": "JavaScript Form Validation & DOM Manipulation",
        "question": "Create an interactive student registration form with JavaScript validation for admission number, email format, and password strength, plus dynamic DOM feedback.",
        "durationMinutes": 45,
        "environment": "Ubuntu 24.04 LTS CLI & Git Sandbox",
        "objectives": [
          "Understand theoretical principles of javascript form validation & dom manipulation",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Linux CLI",
            "tag": "Bash",
            "iconType": "terminal"
          },
          {
            "name": "Git Version Control",
            "tag": "Git",
            "iconType": "code"
          },
          {
            "name": "Hardware Diagnostics",
            "tag": "SysInfo",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for JavaScript Form Validation & DOM Manipulation",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Ubuntu toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Bash Script (.sh)",
            "Terminal transcript (.txt)"
          ],
          "description": "Upload required source files and execution logs for GXESL208 JavaScript Form Validation & DOM Manipulation",
          "acceptedFormats": ".sh,.txt"
        },
        "sampleStarterCode": "#!/bin/bash\\n# KTU 2024 Scheme - GXESL208 IT Workshop\\n\\necho \"Running system diagnostics...\"\\nuname -a\\n",
        "initialExecutionCmd": "./diagnose.sh",
        "initialExecutionOutput": "Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\\nGit repository status: clean, on branch master",
        "status": "Ready"
      },
      {
        "id": "gxesl208-exp08",
        "expNumber": 8,
        "title": "LaTeX Document Typesetting Basics",
        "question": "Create a formatted lab report in LaTeX featuring sections, a mathematical equation, a 3x3 table, and a bulleted list.",
        "durationMinutes": 45,
        "environment": "Ubuntu 24.04 LTS CLI & Git Sandbox",
        "objectives": [
          "Understand theoretical principles of latex document typesetting basics",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Linux CLI",
            "tag": "Bash",
            "iconType": "terminal"
          },
          {
            "name": "Git Version Control",
            "tag": "Git",
            "iconType": "code"
          },
          {
            "name": "Hardware Diagnostics",
            "tag": "SysInfo",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for LaTeX Document Typesetting Basics",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Ubuntu toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Bash Script (.sh)",
            "Terminal transcript (.txt)"
          ],
          "description": "Upload required source files and execution logs for GXESL208 LaTeX Document Typesetting Basics",
          "acceptedFormats": ".sh,.txt"
        },
        "sampleStarterCode": "#!/bin/bash\\n# KTU 2024 Scheme - GXESL208 IT Workshop\\n\\necho \"Running system diagnostics...\"\\nuname -a\\n",
        "initialExecutionCmd": "./diagnose.sh",
        "initialExecutionOutput": "Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\\nGit repository status: clean, on branch master",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PCCSL307",
    "title": "Data Structures Lab",
    "semester": "S3",
    "credits": 2,
    "ltpr": "0-0-3-0",
    "evaluation": "CIA 50 / ESE 50",
    "category": "PC Practical",
    "description": "Implementation and analysis of fundamental linear and non-linear data structures: Linked Lists, Stacks, Queues, Trees, and Graphs in C.",
    "topics": [
      "Sparse Polynomials & Arrays",
      "Stack Infix/Postfix & Queues",
      "Singly & Doubly Linked Lists",
      "BST, Graphs & Sorting (Quick/Merge)"
    ],
    "experimentsCount": 10,
    "completedExperiments": 1,
    "progressPercentage": 10,
    "imageKey": "PCCSL307",
    "experiments": [
      {
        "id": "pccsl307-exp01",
        "expNumber": 1,
        "title": "Sparse Polynomial Addition (Arrays)",
        "question": "Write a C program to represent two sparse polynomials using arrays of structures (coeff, exp) and compute their sum.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Data Structures)",
        "objectives": [
          "Understand theoretical principles of sparse polynomial addition (arrays)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Data Structures",
            "tag": "DSA",
            "iconType": "tree"
          },
          {
            "name": "Memory Management",
            "tag": "malloc/free",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Sparse Polynomial Addition (Arrays)",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Execution screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL307 Sparse Polynomial Addition (Arrays)",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\n// KTU PCCSL307 Data Structures Lab\\nint main() {\\n    printf(\"PCCSL307 Data Structures\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc dsa.c -o dsa && ./dsa",
        "initialExecutionOutput": "student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\\nCreated Dynamic Data Structure.\\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\\nOperations completed in 0.8ms.",
        "status": "Completed"
      },
      {
        "id": "pccsl307-exp02",
        "expNumber": 2,
        "title": "Sparse Matrix Representation & Addition",
        "question": "Represent two sparse matrices in 3-tuple (triplet) form, compute their transpose and sum, and display the result in triplet and standard matrix forms.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Data Structures)",
        "objectives": [
          "Understand theoretical principles of sparse matrix representation & addition",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Data Structures",
            "tag": "DSA",
            "iconType": "tree"
          },
          {
            "name": "Memory Management",
            "tag": "malloc/free",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Sparse Matrix Representation & Addition",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Execution screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL307 Sparse Matrix Representation & Addition",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\n// KTU PCCSL307 Data Structures Lab\\nint main() {\\n    printf(\"PCCSL307 Data Structures\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc dsa.c -o dsa && ./dsa",
        "initialExecutionOutput": "student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\\nCreated Dynamic Data Structure.\\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\\nOperations completed in 0.8ms.",
        "status": "In Progress"
      },
      {
        "id": "pccsl307-exp03",
        "expNumber": 3,
        "title": "Stack Applications (Infix to Postfix & Evaluation)",
        "question": "Implement a Stack using arrays to convert a given infix expression to postfix form and evaluate the postfix expression.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Data Structures)",
        "objectives": [
          "Understand theoretical principles of stack applications (infix to postfix & evaluation)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Data Structures",
            "tag": "DSA",
            "iconType": "tree"
          },
          {
            "name": "Memory Management",
            "tag": "malloc/free",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Stack Applications (Infix to Postfix & Evaluation)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Execution screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL307 Stack Applications (Infix to Postfix & Evaluation)",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\n// KTU PCCSL307 Data Structures Lab\\nint main() {\\n    printf(\"PCCSL307 Data Structures\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc dsa.c -o dsa && ./dsa",
        "initialExecutionOutput": "student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\\nCreated Dynamic Data Structure.\\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\\nOperations completed in 0.8ms.",
        "status": "Ready"
      },
      {
        "id": "pccsl307-exp04",
        "expNumber": 4,
        "title": "Queue, Circular Queue & Priority Queue",
        "question": "Implement a Circular Queue and a Double-Ended Queue (Deque) using arrays supporting enqueue, dequeue, and display operations.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Data Structures)",
        "objectives": [
          "Understand theoretical principles of queue, circular queue & priority queue",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Data Structures",
            "tag": "DSA",
            "iconType": "tree"
          },
          {
            "name": "Memory Management",
            "tag": "malloc/free",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Queue, Circular Queue & Priority Queue",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Execution screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL307 Queue, Circular Queue & Priority Queue",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\n// KTU PCCSL307 Data Structures Lab\\nint main() {\\n    printf(\"PCCSL307 Data Structures\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc dsa.c -o dsa && ./dsa",
        "initialExecutionOutput": "student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\\nCreated Dynamic Data Structure.\\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\\nOperations completed in 0.8ms.",
        "status": "Ready"
      },
      {
        "id": "pccsl307-exp05",
        "expNumber": 5,
        "title": "Singly & Doubly Linked List Operations",
        "question": "Implement a menu-driven program for Singly Linked List (insert at front/end/pos, delete, search, reverse) and Doubly Linked List.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Data Structures)",
        "objectives": [
          "Understand theoretical principles of singly & doubly linked list operations",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Data Structures",
            "tag": "DSA",
            "iconType": "tree"
          },
          {
            "name": "Memory Management",
            "tag": "malloc/free",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Singly & Doubly Linked List Operations",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Execution screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL307 Singly & Doubly Linked List Operations",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\n// KTU PCCSL307 Data Structures Lab\\nint main() {\\n    printf(\"PCCSL307 Data Structures\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc dsa.c -o dsa && ./dsa",
        "initialExecutionOutput": "student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\\nCreated Dynamic Data Structure.\\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\\nOperations completed in 0.8ms.",
        "status": "Ready"
      },
      {
        "id": "pccsl307-exp06",
        "expNumber": 6,
        "title": "Polynomial Addition & Multiplication (Linked Lists)",
        "question": "Represent two polynomials using linked lists and implement functions to add and multiply them.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Data Structures)",
        "objectives": [
          "Understand theoretical principles of polynomial addition & multiplication (linked lists)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Data Structures",
            "tag": "DSA",
            "iconType": "tree"
          },
          {
            "name": "Memory Management",
            "tag": "malloc/free",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Polynomial Addition & Multiplication (Linked Lists)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Execution screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL307 Polynomial Addition & Multiplication (Linked Lists)",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\n// KTU PCCSL307 Data Structures Lab\\nint main() {\\n    printf(\"PCCSL307 Data Structures\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc dsa.c -o dsa && ./dsa",
        "initialExecutionOutput": "student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\\nCreated Dynamic Data Structure.\\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\\nOperations completed in 0.8ms.",
        "status": "Ready"
      },
      {
        "id": "pccsl307-exp07",
        "expNumber": 7,
        "title": "Binary Tree & Binary Search Tree (BST)",
        "question": "Construct a Binary Search Tree and implement insertion, deletion, search, and recursive Inorder, Preorder, and Postorder traversals.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Data Structures)",
        "objectives": [
          "Understand theoretical principles of binary tree & binary search tree (bst)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Data Structures",
            "tag": "DSA",
            "iconType": "tree"
          },
          {
            "name": "Memory Management",
            "tag": "malloc/free",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Binary Tree & Binary Search Tree (BST)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Execution screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL307 Binary Tree & Binary Search Tree (BST)",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\n// KTU PCCSL307 Data Structures Lab\\nint main() {\\n    printf(\"PCCSL307 Data Structures\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc dsa.c -o dsa && ./dsa",
        "initialExecutionOutput": "student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\\nCreated Dynamic Data Structure.\\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\\nOperations completed in 0.8ms.",
        "status": "Ready"
      },
      {
        "id": "pccsl307-exp08",
        "expNumber": 8,
        "title": "Graph Traversals (BFS & DFS)",
        "question": "Represent a graph using an adjacency list/matrix and implement Breadth-First Search (BFS) and Depth-First Search (DFS) traversals.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Data Structures)",
        "objectives": [
          "Understand theoretical principles of graph traversals (bfs & dfs)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Data Structures",
            "tag": "DSA",
            "iconType": "tree"
          },
          {
            "name": "Memory Management",
            "tag": "malloc/free",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Graph Traversals (BFS & DFS)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Execution screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL307 Graph Traversals (BFS & DFS)",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\n// KTU PCCSL307 Data Structures Lab\\nint main() {\\n    printf(\"PCCSL307 Data Structures\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc dsa.c -o dsa && ./dsa",
        "initialExecutionOutput": "student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\\nCreated Dynamic Data Structure.\\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\\nOperations completed in 0.8ms.",
        "status": "Ready"
      },
      {
        "id": "pccsl307-exp09",
        "expNumber": 9,
        "title": "Sorting Algorithms Comparison",
        "question": "Implement Quick Sort, Merge Sort, Heap Sort, and Insertion Sort on random integer datasets and compare their swap/comparison counts.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Data Structures)",
        "objectives": [
          "Understand theoretical principles of sorting algorithms comparison",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Data Structures",
            "tag": "DSA",
            "iconType": "tree"
          },
          {
            "name": "Memory Management",
            "tag": "malloc/free",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Sorting Algorithms Comparison",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Execution screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL307 Sorting Algorithms Comparison",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\n// KTU PCCSL307 Data Structures Lab\\nint main() {\\n    printf(\"PCCSL307 Data Structures\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc dsa.c -o dsa && ./dsa",
        "initialExecutionOutput": "student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\\nCreated Dynamic Data Structure.\\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\\nOperations completed in 0.8ms.",
        "status": "Ready"
      },
      {
        "id": "pccsl307-exp10",
        "expNumber": 10,
        "title": "Hashing with Collision Resolution",
        "question": "Implement a Hash Table using linear probing and separate chaining to store and search integer keys.",
        "durationMinutes": 45,
        "environment": "GCC C17 Linux Container (Data Structures)",
        "objectives": [
          "Understand theoretical principles of hashing with collision resolution",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "C17",
            "iconType": "c"
          },
          {
            "name": "Data Structures",
            "tag": "DSA",
            "iconType": "tree"
          },
          {
            "name": "Memory Management",
            "tag": "malloc/free",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Hashing with Collision Resolution",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using GCC toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C Source file (.c)",
            "Execution screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL307 Hashing with Collision Resolution",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <stdlib.h>\\n\\n// KTU PCCSL307 Data Structures Lab\\nint main() {\\n    printf(\"PCCSL307 Data Structures\\\\n\");\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc dsa.c -o dsa && ./dsa",
        "initialExecutionOutput": "student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\\nCreated Dynamic Data Structure.\\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\\nOperations completed in 0.8ms.",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PCCSL308",
    "title": "Digital Lab",
    "semester": "S3",
    "credits": 2,
    "ltpr": "0-0-3-0",
    "evaluation": "CIA 50 / ESE 50",
    "category": "PC Practical",
    "description": "Design, realization, and verification of combinational and sequential digital circuits using discrete logic ICs and simulation tools.",
    "topics": [
      "Logic Gates & De Morgan Realization",
      "Adders, Subtractors & Code Converters",
      "Multiplexers & Decoders",
      "Flip-Flops, Shift Registers & Counters"
    ],
    "experimentsCount": 8,
    "completedExperiments": 1,
    "progressPercentage": 13,
    "imageKey": "PCCSL308",
    "experiments": [
      {
        "id": "pccsl308-exp01",
        "expNumber": 1,
        "title": "Realization of Basic & Universal Logic Gates",
        "question": "Verify truth tables of AND, OR, NOT, NAND, NOR, XOR, and XNOR gates (IC 7408, 7432, 7404, 7400, 7402, 7486), and implement all basic gates using NAND/NOR universal gates.",
        "durationMinutes": 45,
        "environment": "Digital Logic Simulator & Verilog Bench",
        "objectives": [
          "Understand theoretical principles of realization of basic & universal logic gates",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Digital Logic",
            "tag": "Boolean",
            "iconType": "cpu"
          },
          {
            "name": "Truth Tables",
            "tag": "K-Maps",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Realization of Basic & Universal Logic Gates",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Digital toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Circuit file (.circ/.png)",
            "Truth Table verification (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL308 Realization of Basic & Universal Logic Gates",
          "acceptedFormats": ".circ,.png,.txt"
        },
        "sampleStarterCode": "# Digital Circuit Netlist / Logic Simulation\\n# Gate inputs: A, B, C, D\\n# Outputs: Y = A'B + CD\\n",
        "initialExecutionCmd": "./sim_digital --test",
        "initialExecutionOutput": "Running Logic Verification Matrix (16 input vectors)...\\nAll 16 truth table outputs match theoretical Boolean reduction.\\nPropagation Delay: 5.2 ns",
        "status": "Completed"
      },
      {
        "id": "pccsl308-exp02",
        "expNumber": 2,
        "title": "Half Adder, Full Adder & Half/Full Subtractor",
        "question": "Design and implement Half Adder and Full Adder circuits using logic gates and verify outputs against truth tables.",
        "durationMinutes": 45,
        "environment": "Digital Logic Simulator & Verilog Bench",
        "objectives": [
          "Understand theoretical principles of half adder, full adder & half/full subtractor",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Digital Logic",
            "tag": "Boolean",
            "iconType": "cpu"
          },
          {
            "name": "Truth Tables",
            "tag": "K-Maps",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Half Adder, Full Adder & Half/Full Subtractor",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Digital toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Circuit file (.circ/.png)",
            "Truth Table verification (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL308 Half Adder, Full Adder & Half/Full Subtractor",
          "acceptedFormats": ".circ,.png,.txt"
        },
        "sampleStarterCode": "# Digital Circuit Netlist / Logic Simulation\\n# Gate inputs: A, B, C, D\\n# Outputs: Y = A'B + CD\\n",
        "initialExecutionCmd": "./sim_digital --test",
        "initialExecutionOutput": "Running Logic Verification Matrix (16 input vectors)...\\nAll 16 truth table outputs match theoretical Boolean reduction.\\nPropagation Delay: 5.2 ns",
        "status": "In Progress"
      },
      {
        "id": "pccsl308-exp03",
        "expNumber": 3,
        "title": "Code Converters (Binary to Gray & BCD to Excess-3)",
        "question": "Design, simplify using K-Maps, and implement a 4-bit Binary-to-Gray and Gray-to-Binary code converter.",
        "durationMinutes": 45,
        "environment": "Digital Logic Simulator & Verilog Bench",
        "objectives": [
          "Understand theoretical principles of code converters (binary to gray & bcd to excess-3)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Digital Logic",
            "tag": "Boolean",
            "iconType": "cpu"
          },
          {
            "name": "Truth Tables",
            "tag": "K-Maps",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Code Converters (Binary to Gray & BCD to Excess-3)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Digital toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Circuit file (.circ/.png)",
            "Truth Table verification (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL308 Code Converters (Binary to Gray & BCD to Excess-3)",
          "acceptedFormats": ".circ,.png,.txt"
        },
        "sampleStarterCode": "# Digital Circuit Netlist / Logic Simulation\\n# Gate inputs: A, B, C, D\\n# Outputs: Y = A'B + CD\\n",
        "initialExecutionCmd": "./sim_digital --test",
        "initialExecutionOutput": "Running Logic Verification Matrix (16 input vectors)...\\nAll 16 truth table outputs match theoretical Boolean reduction.\\nPropagation Delay: 5.2 ns",
        "status": "Ready"
      },
      {
        "id": "pccsl308-exp04",
        "expNumber": 4,
        "title": "4-bit Parallel Adder / Subtractor (IC 7483)",
        "question": "Construct a 4-bit binary adder/subtractor using IC 7483 and XOR gates, and verify carry/overflow flags.",
        "durationMinutes": 45,
        "environment": "Digital Logic Simulator & Verilog Bench",
        "objectives": [
          "Understand theoretical principles of 4-bit parallel adder / subtractor (ic 7483)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Digital Logic",
            "tag": "Boolean",
            "iconType": "cpu"
          },
          {
            "name": "Truth Tables",
            "tag": "K-Maps",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for 4-bit Parallel Adder / Subtractor (IC 7483)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Digital toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Circuit file (.circ/.png)",
            "Truth Table verification (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL308 4-bit Parallel Adder / Subtractor (IC 7483)",
          "acceptedFormats": ".circ,.png,.txt"
        },
        "sampleStarterCode": "# Digital Circuit Netlist / Logic Simulation\\n# Gate inputs: A, B, C, D\\n# Outputs: Y = A'B + CD\\n",
        "initialExecutionCmd": "./sim_digital --test",
        "initialExecutionOutput": "Running Logic Verification Matrix (16 input vectors)...\\nAll 16 truth table outputs match theoretical Boolean reduction.\\nPropagation Delay: 5.2 ns",
        "status": "Ready"
      },
      {
        "id": "pccsl308-exp05",
        "expNumber": 5,
        "title": "Multiplexer & Demultiplexer Circuits",
        "question": "Implement a 4:1 Multiplexer (IC 74153) and 1:4 Demultiplexer, and realize a given 3-variable Boolean function using a MUX.",
        "durationMinutes": 45,
        "environment": "Digital Logic Simulator & Verilog Bench",
        "objectives": [
          "Understand theoretical principles of multiplexer & demultiplexer circuits",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Digital Logic",
            "tag": "Boolean",
            "iconType": "cpu"
          },
          {
            "name": "Truth Tables",
            "tag": "K-Maps",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Multiplexer & Demultiplexer Circuits",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Digital toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Circuit file (.circ/.png)",
            "Truth Table verification (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL308 Multiplexer & Demultiplexer Circuits",
          "acceptedFormats": ".circ,.png,.txt"
        },
        "sampleStarterCode": "# Digital Circuit Netlist / Logic Simulation\\n# Gate inputs: A, B, C, D\\n# Outputs: Y = A'B + CD\\n",
        "initialExecutionCmd": "./sim_digital --test",
        "initialExecutionOutput": "Running Logic Verification Matrix (16 input vectors)...\\nAll 16 truth table outputs match theoretical Boolean reduction.\\nPropagation Delay: 5.2 ns",
        "status": "Ready"
      },
      {
        "id": "pccsl308-exp06",
        "expNumber": 6,
        "title": "Flip-Flops (SR, JK, D & T)",
        "question": "Construct and verify the characteristic tables of clocked SR, JK, D, and T flip-flops using NAND/NOR gates or IC 7476/7474.",
        "durationMinutes": 45,
        "environment": "Digital Logic Simulator & Verilog Bench",
        "objectives": [
          "Understand theoretical principles of flip-flops (sr, jk, d & t)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Digital Logic",
            "tag": "Boolean",
            "iconType": "cpu"
          },
          {
            "name": "Truth Tables",
            "tag": "K-Maps",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Flip-Flops (SR, JK, D & T)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Digital toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Circuit file (.circ/.png)",
            "Truth Table verification (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL308 Flip-Flops (SR, JK, D & T)",
          "acceptedFormats": ".circ,.png,.txt"
        },
        "sampleStarterCode": "# Digital Circuit Netlist / Logic Simulation\\n# Gate inputs: A, B, C, D\\n# Outputs: Y = A'B + CD\\n",
        "initialExecutionCmd": "./sim_digital --test",
        "initialExecutionOutput": "Running Logic Verification Matrix (16 input vectors)...\\nAll 16 truth table outputs match theoretical Boolean reduction.\\nPropagation Delay: 5.2 ns",
        "status": "Ready"
      },
      {
        "id": "pccsl308-exp07",
        "expNumber": 7,
        "title": "Asynchronous & Synchronous Counters",
        "question": "Design and implement a 3-bit / 4-bit Ripple Counter and a Modulo-N Synchronous Counter using JK flip-flops, displaying output on a 7-segment LED.",
        "durationMinutes": 45,
        "environment": "Digital Logic Simulator & Verilog Bench",
        "objectives": [
          "Understand theoretical principles of asynchronous & synchronous counters",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Digital Logic",
            "tag": "Boolean",
            "iconType": "cpu"
          },
          {
            "name": "Truth Tables",
            "tag": "K-Maps",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Asynchronous & Synchronous Counters",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Digital toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Circuit file (.circ/.png)",
            "Truth Table verification (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL308 Asynchronous & Synchronous Counters",
          "acceptedFormats": ".circ,.png,.txt"
        },
        "sampleStarterCode": "# Digital Circuit Netlist / Logic Simulation\\n# Gate inputs: A, B, C, D\\n# Outputs: Y = A'B + CD\\n",
        "initialExecutionCmd": "./sim_digital --test",
        "initialExecutionOutput": "Running Logic Verification Matrix (16 input vectors)...\\nAll 16 truth table outputs match theoretical Boolean reduction.\\nPropagation Delay: 5.2 ns",
        "status": "Ready"
      },
      {
        "id": "pccsl308-exp08",
        "expNumber": 8,
        "title": "Shift Registers (SISO, SIPO, PISO, PIPO)",
        "question": "Implement a 4-bit Shift Register using D flip-flops and verify serial/parallel data shifting.",
        "durationMinutes": 45,
        "environment": "Digital Logic Simulator & Verilog Bench",
        "objectives": [
          "Understand theoretical principles of shift registers (siso, sipo, piso, pipo)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Digital Logic",
            "tag": "Boolean",
            "iconType": "cpu"
          },
          {
            "name": "Truth Tables",
            "tag": "K-Maps",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Shift Registers (SISO, SIPO, PISO, PIPO)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Digital toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Circuit file (.circ/.png)",
            "Truth Table verification (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL308 Shift Registers (SISO, SIPO, PISO, PIPO)",
          "acceptedFormats": ".circ,.png,.txt"
        },
        "sampleStarterCode": "# Digital Circuit Netlist / Logic Simulation\\n# Gate inputs: A, B, C, D\\n# Outputs: Y = A'B + CD\\n",
        "initialExecutionCmd": "./sim_digital --test",
        "initialExecutionOutput": "Running Logic Verification Matrix (16 input vectors)...\\nAll 16 truth table outputs match theoretical Boolean reduction.\\nPropagation Delay: 5.2 ns",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PBCST304",
    "title": "Object Oriented Programming",
    "semester": "S3",
    "credits": 4,
    "ltpr": "3-0-0-1",
    "evaluation": "CIA 50 / ESE 50",
    "category": "PC-PBL",
    "description": "Object-Oriented Analysis, Design, and Programming using Java. Classes, inheritance, polymorphism, abstract classes, interfaces, multithreading, and GUI basics.",
    "topics": [
      "Classes, Objects & Constructors",
      "Inheritance, Polymorphism & Interfaces",
      "Exception Handling & Multi-threading",
      "Java Generics, Collections & Streams"
    ],
    "experimentsCount": 6,
    "completedExperiments": 1,
    "progressPercentage": 17,
    "imageKey": "PBCST304",
    "experiments": [
      {
        "id": "pbcst304-exp01",
        "expNumber": 1,
        "title": "Classes, Objects & Constructors (Java/C++)",
        "question": "Design a BankAccount class with constructors, deposit(), withdraw(), and getBalance() methods with validation against overdraft.",
        "durationMinutes": 45,
        "environment": "OpenJDK 21 / Java Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of classes, objects & constructors (java/c++)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Java 21",
            "tag": "OOP",
            "iconType": "code"
          },
          {
            "name": "Polymorphism & Interfaces",
            "tag": "Architecture",
            "iconType": "layers"
          },
          {
            "name": "Exception Handling",
            "tag": "Safety",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Classes, Objects & Constructors (Java/C++)",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using OpenJDK toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Java file (.java)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PBCST304 Classes, Objects & Constructors (Java/C++)",
          "acceptedFormats": ".java,.png,.jpg"
        },
        "sampleStarterCode": "public class Main {\\n    public static void main(String[] args) {\\n        System.out.println(\"KTU PBCST304 Object Oriented Programming\");\\n    }\\n}\\n",
        "initialExecutionCmd": "javac Main.java && java Main",
        "initialExecutionOutput": "Compiled Main.java with javac 21.0.4\\nObject Hierarchy Initialized.\\nPolymorphic methods dispatched successfully.",
        "status": "Completed"
      },
      {
        "id": "pbcst304-exp02",
        "expNumber": 2,
        "title": "Inheritance & Method Overriding",
        "question": "Create an Employee base class and derived classes FullTimeEmployee and PartTimeEmployee overriding calculateSalary().",
        "durationMinutes": 45,
        "environment": "OpenJDK 21 / Java Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of inheritance & method overriding",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Java 21",
            "tag": "OOP",
            "iconType": "code"
          },
          {
            "name": "Polymorphism & Interfaces",
            "tag": "Architecture",
            "iconType": "layers"
          },
          {
            "name": "Exception Handling",
            "tag": "Safety",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Inheritance & Method Overriding",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using OpenJDK toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Java file (.java)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PBCST304 Inheritance & Method Overriding",
          "acceptedFormats": ".java,.png,.jpg"
        },
        "sampleStarterCode": "public class Main {\\n    public static void main(String[] args) {\\n        System.out.println(\"KTU PBCST304 Object Oriented Programming\");\\n    }\\n}\\n",
        "initialExecutionCmd": "javac Main.java && java Main",
        "initialExecutionOutput": "Compiled Main.java with javac 21.0.4\\nObject Hierarchy Initialized.\\nPolymorphic methods dispatched successfully.",
        "status": "In Progress"
      },
      {
        "id": "pbcst304-exp03",
        "expNumber": 3,
        "title": "Interfaces, Abstract Classes & Polymorphism",
        "question": "Implement a Shape hierarchy (Circle, Rectangle, Triangle) using an abstract class/interface with area() and perimeter() methods.",
        "durationMinutes": 45,
        "environment": "OpenJDK 21 / Java Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of interfaces, abstract classes & polymorphism",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Java 21",
            "tag": "OOP",
            "iconType": "code"
          },
          {
            "name": "Polymorphism & Interfaces",
            "tag": "Architecture",
            "iconType": "layers"
          },
          {
            "name": "Exception Handling",
            "tag": "Safety",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Interfaces, Abstract Classes & Polymorphism",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using OpenJDK toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Java file (.java)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PBCST304 Interfaces, Abstract Classes & Polymorphism",
          "acceptedFormats": ".java,.png,.jpg"
        },
        "sampleStarterCode": "public class Main {\\n    public static void main(String[] args) {\\n        System.out.println(\"KTU PBCST304 Object Oriented Programming\");\\n    }\\n}\\n",
        "initialExecutionCmd": "javac Main.java && java Main",
        "initialExecutionOutput": "Compiled Main.java with javac 21.0.4\\nObject Hierarchy Initialized.\\nPolymorphic methods dispatched successfully.",
        "status": "Ready"
      },
      {
        "id": "pbcst304-exp04",
        "expNumber": 4,
        "title": "Exception Handling & Custom Exceptions",
        "question": "Build a StudentRegistration module that throws custom checked exceptions (InvalidAdmissionNoException, DuplicateEntryException).",
        "durationMinutes": 45,
        "environment": "OpenJDK 21 / Java Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of exception handling & custom exceptions",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Java 21",
            "tag": "OOP",
            "iconType": "code"
          },
          {
            "name": "Polymorphism & Interfaces",
            "tag": "Architecture",
            "iconType": "layers"
          },
          {
            "name": "Exception Handling",
            "tag": "Safety",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Exception Handling & Custom Exceptions",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using OpenJDK toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Java file (.java)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PBCST304 Exception Handling & Custom Exceptions",
          "acceptedFormats": ".java,.png,.jpg"
        },
        "sampleStarterCode": "public class Main {\\n    public static void main(String[] args) {\\n        System.out.println(\"KTU PBCST304 Object Oriented Programming\");\\n    }\\n}\\n",
        "initialExecutionCmd": "javac Main.java && java Main",
        "initialExecutionOutput": "Compiled Main.java with javac 21.0.4\\nObject Hierarchy Initialized.\\nPolymorphic methods dispatched successfully.",
        "status": "Ready"
      },
      {
        "id": "pbcst304-exp05",
        "expNumber": 5,
        "title": "Multithreading & Synchronization",
        "question": "Write a multithreaded Producer-Consumer simulation using synchronized blocks and wait()/notify().",
        "durationMinutes": 45,
        "environment": "OpenJDK 21 / Java Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of multithreading & synchronization",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Java 21",
            "tag": "OOP",
            "iconType": "code"
          },
          {
            "name": "Polymorphism & Interfaces",
            "tag": "Architecture",
            "iconType": "layers"
          },
          {
            "name": "Exception Handling",
            "tag": "Safety",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Multithreading & Synchronization",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using OpenJDK toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Java file (.java)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PBCST304 Multithreading & Synchronization",
          "acceptedFormats": ".java,.png,.jpg"
        },
        "sampleStarterCode": "public class Main {\\n    public static void main(String[] args) {\\n        System.out.println(\"KTU PBCST304 Object Oriented Programming\");\\n    }\\n}\\n",
        "initialExecutionCmd": "javac Main.java && java Main",
        "initialExecutionOutput": "Compiled Main.java with javac 21.0.4\\nObject Hierarchy Initialized.\\nPolymorphic methods dispatched successfully.",
        "status": "Ready"
      },
      {
        "id": "pbcst304-exp06",
        "expNumber": 6,
        "title": "File I/O & Serialization",
        "question": "Design and implement an object-oriented application (e.g., Hostel Mess Billing, Lab Equipment Checkout, or Quiz Engine) using UML class diagrams, inheritance, exception handling, and persistent storage.",
        "durationMinutes": 45,
        "environment": "OpenJDK 21 / Java Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of file i/o & serialization",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Java 21",
            "tag": "OOP",
            "iconType": "code"
          },
          {
            "name": "Polymorphism & Interfaces",
            "tag": "Architecture",
            "iconType": "layers"
          },
          {
            "name": "Exception Handling",
            "tag": "Safety",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for File I/O & Serialization",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using OpenJDK toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Java file (.java)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PBCST304 File I/O & Serialization",
          "acceptedFormats": ".java,.png,.jpg"
        },
        "sampleStarterCode": "public class Main {\\n    public static void main(String[] args) {\\n        System.out.println(\"KTU PBCST304 Object Oriented Programming\");\\n    }\\n}\\n",
        "initialExecutionCmd": "javac Main.java && java Main",
        "initialExecutionOutput": "Compiled Main.java with javac 21.0.4\\nObject Hierarchy Initialized.\\nPolymorphic methods dispatched successfully.",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PCCSL407",
    "title": "Operating Systems Lab",
    "semester": "S4",
    "credits": 2,
    "ltpr": "0-0-3-0",
    "evaluation": "CIA 50 / ESE 50",
    "category": "PC Practical",
    "description": "System calls, process scheduling algorithms, IPC (pipes, shared memory), semaphores, deadlock handling, memory allocation, and page replacement.",
    "topics": [
      "Process Creation & fork()",
      "CPU Scheduling Algorithms",
      "Semaphores & IPC",
      "Memory Management (Paging)"
    ],
    "experimentsCount": 9,
    "completedExperiments": 1,
    "progressPercentage": 11,
    "imageKey": "PCCSL407",
    "activeSessionId": "s4-cse-os-lab",
    "experiments": [
      {
        "id": "pccsl407-exp01",
        "expNumber": 1,
        "title": "Linux System Calls (fork, getpid, wait, exit, exec)",
        "question": "Write a C program using fork() to create a parent-child process tree where the child prints \"PCCSL407\" and its PID, and the parent waits and prints \"Operating Systems\" with its PID.",
        "durationMinutes": 45,
        "environment": "Isolated Linux Container (Kernel 6.8 POSIX)",
        "objectives": [
          "Understand theoretical principles of linux system calls (fork, getpid, wait, exit, exec)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "POSIX",
            "iconType": "c"
          },
          {
            "name": "fork() & Syscalls",
            "tag": "Syscall",
            "iconType": "fork"
          },
          {
            "name": "Process Tree",
            "tag": "Processes",
            "iconType": "tree"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Linux System Calls (fork, getpid, wait, exit, exec)",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Isolated toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL407 Linux System Calls (fork, getpid, wait, exit, exec)",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <unistd.h>\\n#include <sys/types.h>\\n\\nint main() {\\n    pid_t pid = fork();\\n    if (pid == 0) {\\n        printf(\"Child Process PID: %d\\\\n\", getpid());\\n    } else {\\n        printf(\"Parent Process PID: %d\\\\n\", getpid());\\n    }\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc process_tree.c -o process_tree && ./process_tree",
        "initialExecutionOutput": "student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\\nParent Process PID: 12450\\nChild 1 Process PID: 12451 (parent: 12450)\\nChild 2 Process PID: 12452 (parent: 12450)",
        "status": "Completed"
      },
      {
        "id": "pccsl407-exp02",
        "expNumber": 2,
        "title": "Directory & File System Calls (opendir, readdir, stat)",
        "question": "Implement a simplified `ls -l` clone in C using opendir(), readdir(), and stat() to display file permissions, size, and modification timestamps.",
        "durationMinutes": 45,
        "environment": "Isolated Linux Container (Kernel 6.8 POSIX)",
        "objectives": [
          "Understand theoretical principles of directory & file system calls (opendir, readdir, stat)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "POSIX",
            "iconType": "c"
          },
          {
            "name": "fork() & Syscalls",
            "tag": "Syscall",
            "iconType": "fork"
          },
          {
            "name": "Process Tree",
            "tag": "Processes",
            "iconType": "tree"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Directory & File System Calls (opendir, readdir, stat)",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Isolated toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL407 Directory & File System Calls (opendir, readdir, stat)",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <unistd.h>\\n#include <sys/types.h>\\n\\nint main() {\\n    pid_t pid = fork();\\n    if (pid == 0) {\\n        printf(\"Child Process PID: %d\\\\n\", getpid());\\n    } else {\\n        printf(\"Parent Process PID: %d\\\\n\", getpid());\\n    }\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc process_tree.c -o process_tree && ./process_tree",
        "initialExecutionOutput": "student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\\nParent Process PID: 12450\\nChild 1 Process PID: 12451 (parent: 12450)\\nChild 2 Process PID: 12452 (parent: 12450)",
        "status": "In Progress"
      },
      {
        "id": "pccsl407-exp03",
        "expNumber": 3,
        "title": "CPU Scheduling Algorithms",
        "question": "Write a C program to simulate FCFS, SJF (Non-preemptive), Priority, and Round Robin scheduling. Compute Average Waiting Time and Average Turnaround Time.",
        "durationMinutes": 45,
        "environment": "Isolated Linux Container (Kernel 6.8 POSIX)",
        "objectives": [
          "Understand theoretical principles of cpu scheduling algorithms",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "POSIX",
            "iconType": "c"
          },
          {
            "name": "fork() & Syscalls",
            "tag": "Syscall",
            "iconType": "fork"
          },
          {
            "name": "Process Tree",
            "tag": "Processes",
            "iconType": "tree"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for CPU Scheduling Algorithms",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Isolated toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL407 CPU Scheduling Algorithms",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <unistd.h>\\n#include <sys/types.h>\\n\\nint main() {\\n    pid_t pid = fork();\\n    if (pid == 0) {\\n        printf(\"Child Process PID: %d\\\\n\", getpid());\\n    } else {\\n        printf(\"Parent Process PID: %d\\\\n\", getpid());\\n    }\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc process_tree.c -o process_tree && ./process_tree",
        "initialExecutionOutput": "student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\\nParent Process PID: 12450\\nChild 1 Process PID: 12451 (parent: 12450)\\nChild 2 Process PID: 12452 (parent: 12450)",
        "status": "Ready"
      },
      {
        "id": "pccsl407-exp04",
        "expNumber": 4,
        "title": "Inter-Process Communication (Pipes & Shared Memory)",
        "question": "Implement IPC between two processes using (a) anonymous pipe() and (b) POSIX/System V shared memory (shmget/shmat).",
        "durationMinutes": 45,
        "environment": "Isolated Linux Container (Kernel 6.8 POSIX)",
        "objectives": [
          "Understand theoretical principles of inter-process communication (pipes & shared memory)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "POSIX",
            "iconType": "c"
          },
          {
            "name": "fork() & Syscalls",
            "tag": "Syscall",
            "iconType": "fork"
          },
          {
            "name": "Process Tree",
            "tag": "Processes",
            "iconType": "tree"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Inter-Process Communication (Pipes & Shared Memory)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Isolated toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL407 Inter-Process Communication (Pipes & Shared Memory)",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <unistd.h>\\n#include <sys/types.h>\\n\\nint main() {\\n    pid_t pid = fork();\\n    if (pid == 0) {\\n        printf(\"Child Process PID: %d\\\\n\", getpid());\\n    } else {\\n        printf(\"Parent Process PID: %d\\\\n\", getpid());\\n    }\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc process_tree.c -o process_tree && ./process_tree",
        "initialExecutionOutput": "student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\\nParent Process PID: 12450\\nChild 1 Process PID: 12451 (parent: 12450)\\nChild 2 Process PID: 12452 (parent: 12450)",
        "status": "Ready"
      },
      {
        "id": "pccsl407-exp05",
        "expNumber": 5,
        "title": "Process Synchronization (Producer-Consumer with Semaphores)",
        "question": "Solve the bounded-buffer Producer-Consumer problem using POSIX threads (pthreads) and semaphores (sem_wait/sem_post) and mutexes.",
        "durationMinutes": 45,
        "environment": "Isolated Linux Container (Kernel 6.8 POSIX)",
        "objectives": [
          "Understand theoretical principles of process synchronization (producer-consumer with semaphores)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "POSIX",
            "iconType": "c"
          },
          {
            "name": "fork() & Syscalls",
            "tag": "Syscall",
            "iconType": "fork"
          },
          {
            "name": "Process Tree",
            "tag": "Processes",
            "iconType": "tree"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Process Synchronization (Producer-Consumer with Semaphores)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Isolated toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL407 Process Synchronization (Producer-Consumer with Semaphores)",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <unistd.h>\\n#include <sys/types.h>\\n\\nint main() {\\n    pid_t pid = fork();\\n    if (pid == 0) {\\n        printf(\"Child Process PID: %d\\\\n\", getpid());\\n    } else {\\n        printf(\"Parent Process PID: %d\\\\n\", getpid());\\n    }\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc process_tree.c -o process_tree && ./process_tree",
        "initialExecutionOutput": "student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\\nParent Process PID: 12450\\nChild 1 Process PID: 12451 (parent: 12450)\\nChild 2 Process PID: 12452 (parent: 12450)",
        "status": "Ready"
      },
      {
        "id": "pccsl407-exp06",
        "expNumber": 6,
        "title": "Deadlock Avoidance (Banker's Algorithm)",
        "question": "Write a C program implementing Banker's Algorithm to check if a system is in a safe state and print the safe execution sequence.",
        "durationMinutes": 45,
        "environment": "Isolated Linux Container (Kernel 6.8 POSIX)",
        "objectives": [
          "Understand theoretical principles of deadlock avoidance (banker's algorithm)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "POSIX",
            "iconType": "c"
          },
          {
            "name": "fork() & Syscalls",
            "tag": "Syscall",
            "iconType": "fork"
          },
          {
            "name": "Process Tree",
            "tag": "Processes",
            "iconType": "tree"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Deadlock Avoidance (Banker's Algorithm)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Isolated toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL407 Deadlock Avoidance (Banker's Algorithm)",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <unistd.h>\\n#include <sys/types.h>\\n\\nint main() {\\n    pid_t pid = fork();\\n    if (pid == 0) {\\n        printf(\"Child Process PID: %d\\\\n\", getpid());\\n    } else {\\n        printf(\"Parent Process PID: %d\\\\n\", getpid());\\n    }\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc process_tree.c -o process_tree && ./process_tree",
        "initialExecutionOutput": "student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\\nParent Process PID: 12450\\nChild 1 Process PID: 12451 (parent: 12450)\\nChild 2 Process PID: 12452 (parent: 12450)",
        "status": "Ready"
      },
      {
        "id": "pccsl407-exp07",
        "expNumber": 7,
        "title": "Memory Allocation Strategies",
        "question": "Simulate First Fit, Best Fit, and Worst Fit contiguous memory allocation strategies for a given set of memory partitions and process sizes.",
        "durationMinutes": 45,
        "environment": "Isolated Linux Container (Kernel 6.8 POSIX)",
        "objectives": [
          "Understand theoretical principles of memory allocation strategies",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "POSIX",
            "iconType": "c"
          },
          {
            "name": "fork() & Syscalls",
            "tag": "Syscall",
            "iconType": "fork"
          },
          {
            "name": "Process Tree",
            "tag": "Processes",
            "iconType": "tree"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Memory Allocation Strategies",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Isolated toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL407 Memory Allocation Strategies",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <unistd.h>\\n#include <sys/types.h>\\n\\nint main() {\\n    pid_t pid = fork();\\n    if (pid == 0) {\\n        printf(\"Child Process PID: %d\\\\n\", getpid());\\n    } else {\\n        printf(\"Parent Process PID: %d\\\\n\", getpid());\\n    }\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc process_tree.c -o process_tree && ./process_tree",
        "initialExecutionOutput": "student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\\nParent Process PID: 12450\\nChild 1 Process PID: 12451 (parent: 12450)\\nChild 2 Process PID: 12452 (parent: 12450)",
        "status": "Ready"
      },
      {
        "id": "pccsl407-exp08",
        "expNumber": 8,
        "title": "Page Replacement Algorithms",
        "question": "Implement FIFO, LRU, and Optimal page replacement algorithms in C and compare total page faults for a given reference string.",
        "durationMinutes": 45,
        "environment": "Isolated Linux Container (Kernel 6.8 POSIX)",
        "objectives": [
          "Understand theoretical principles of page replacement algorithms",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "POSIX",
            "iconType": "c"
          },
          {
            "name": "fork() & Syscalls",
            "tag": "Syscall",
            "iconType": "fork"
          },
          {
            "name": "Process Tree",
            "tag": "Processes",
            "iconType": "tree"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Page Replacement Algorithms",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Isolated toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL407 Page Replacement Algorithms",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <unistd.h>\\n#include <sys/types.h>\\n\\nint main() {\\n    pid_t pid = fork();\\n    if (pid == 0) {\\n        printf(\"Child Process PID: %d\\\\n\", getpid());\\n    } else {\\n        printf(\"Parent Process PID: %d\\\\n\", getpid());\\n    }\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc process_tree.c -o process_tree && ./process_tree",
        "initialExecutionOutput": "student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\\nParent Process PID: 12450\\nChild 1 Process PID: 12451 (parent: 12450)\\nChild 2 Process PID: 12452 (parent: 12450)",
        "status": "Ready"
      },
      {
        "id": "pccsl407-exp09",
        "expNumber": 9,
        "title": "Disk Scheduling Algorithms",
        "question": "Simulate FCFS, SCAN, and C-SCAN disk head scheduling algorithms and calculate total head movement.",
        "durationMinutes": 45,
        "environment": "Isolated Linux Container (Kernel 6.8 POSIX)",
        "objectives": [
          "Understand theoretical principles of disk scheduling algorithms",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "C Programming",
            "tag": "POSIX",
            "iconType": "c"
          },
          {
            "name": "fork() & Syscalls",
            "tag": "Syscall",
            "iconType": "fork"
          },
          {
            "name": "Process Tree",
            "tag": "Processes",
            "iconType": "tree"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Disk Scheduling Algorithms",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Isolated toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C file (.c)",
            "Output screenshot (.png/.jpg)"
          ],
          "description": "Upload required source files and execution logs for PCCSL407 Disk Scheduling Algorithms",
          "acceptedFormats": ".c,.png,.jpg"
        },
        "sampleStarterCode": "#include <stdio.h>\\n#include <unistd.h>\\n#include <sys/types.h>\\n\\nint main() {\\n    pid_t pid = fork();\\n    if (pid == 0) {\\n        printf(\"Child Process PID: %d\\\\n\", getpid());\\n    } else {\\n        printf(\"Parent Process PID: %d\\\\n\", getpid());\\n    }\\n    return 0;\\n}\\n",
        "initialExecutionCmd": "gcc process_tree.c -o process_tree && ./process_tree",
        "initialExecutionOutput": "student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\\nParent Process PID: 12450\\nChild 1 Process PID: 12451 (parent: 12450)\\nChild 2 Process PID: 12452 (parent: 12450)",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PCCSL408",
    "title": "Database Management Systems Lab",
    "semester": "S4",
    "credits": 2,
    "ltpr": "0-0-3-0",
    "evaluation": "CIA 50 / ESE 50",
    "category": "PC Practical",
    "description": "Relational database design, DDL/DML, complex SQL queries, views, triggers, stored procedures, transactions, and full-stack DB integration.",
    "topics": [
      "ER Modeling & Schema Design",
      "SQL Joins, Views & Subqueries",
      "Triggers & Functions",
      "PL/SQL Programming"
    ],
    "experimentsCount": 9,
    "completedExperiments": 1,
    "progressPercentage": 11,
    "imageKey": "PCCSL408",
    "experiments": [
      {
        "id": "pccsl408-exp01",
        "expNumber": 1,
        "title": "ER Diagram & DDL Schema Creation",
        "question": "Design an ER diagram for a College Lab Management System (Colleges, Students, Courses, Labs, Submissions) and create normalized tables in PostgreSQL with PRIMARY KEY, FOREIGN KEY, CHECK, and UNIQUE constraints.",
        "durationMinutes": 45,
        "environment": "PostgreSQL 16 CLI Sandbox",
        "objectives": [
          "Understand theoretical principles of er diagram & ddl schema creation",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "SQL Querying",
            "tag": "PostgreSQL",
            "iconType": "sql"
          },
          {
            "name": "Database Design",
            "tag": "Relational",
            "iconType": "code"
          },
          {
            "name": "Triggers & Procedures",
            "tag": "PL/pgSQL",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for ER Diagram & DDL Schema Creation",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PostgreSQL toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 SQL Script (.sql)",
            "Query output (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL408 ER Diagram & DDL Schema Creation",
          "acceptedFormats": ".sql,.txt,.png"
        },
        "sampleStarterCode": "-- KTU PCCSL408 DBMS Lab\\nCREATE TABLE students (\\n    id SERIAL PRIMARY KEY,\\n    name VARCHAR(100),\\n    cgpa NUMERIC(3,2)\\n);\\n",
        "initialExecutionCmd": "psql -U student -d campuslab_db -f queries.sql",
        "initialExecutionOutput": "CREATE TABLE\\nINSERT 0 10\\n id |   name   | cgpa \\n----+----------+------\\n  1 | Adarsh S | 9.20\\n  2 | Rahul K  | 8.85\\n(2 rows)\\nQuery executed in 1.42ms",
        "status": "Completed"
      },
      {
        "id": "pccsl408-exp02",
        "expNumber": 2,
        "title": "DML Operations & Basic Queries",
        "question": "Insert sample records into the schema and execute SELECT, UPDATE, DELETE, ORDER BY, DISTINCT, BETWEEN, and LIKE queries.",
        "durationMinutes": 45,
        "environment": "PostgreSQL 16 CLI Sandbox",
        "objectives": [
          "Understand theoretical principles of dml operations & basic queries",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "SQL Querying",
            "tag": "PostgreSQL",
            "iconType": "sql"
          },
          {
            "name": "Database Design",
            "tag": "Relational",
            "iconType": "code"
          },
          {
            "name": "Triggers & Procedures",
            "tag": "PL/pgSQL",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for DML Operations & Basic Queries",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PostgreSQL toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 SQL Script (.sql)",
            "Query output (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL408 DML Operations & Basic Queries",
          "acceptedFormats": ".sql,.txt,.png"
        },
        "sampleStarterCode": "-- KTU PCCSL408 DBMS Lab\\nCREATE TABLE students (\\n    id SERIAL PRIMARY KEY,\\n    name VARCHAR(100),\\n    cgpa NUMERIC(3,2)\\n);\\n",
        "initialExecutionCmd": "psql -U student -d campuslab_db -f queries.sql",
        "initialExecutionOutput": "CREATE TABLE\\nINSERT 0 10\\n id |   name   | cgpa \\n----+----------+------\\n  1 | Adarsh S | 9.20\\n  2 | Rahul K  | 8.85\\n(2 rows)\\nQuery executed in 1.42ms",
        "status": "In Progress"
      },
      {
        "id": "pccsl408-exp03",
        "expNumber": 3,
        "title": "Aggregate Functions, GROUP BY & HAVING",
        "question": "Write SQL queries to compute department-wise average marks, count of active students per semester, and filter groups with HAVING.",
        "durationMinutes": 45,
        "environment": "PostgreSQL 16 CLI Sandbox",
        "objectives": [
          "Understand theoretical principles of aggregate functions, group by & having",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "SQL Querying",
            "tag": "PostgreSQL",
            "iconType": "sql"
          },
          {
            "name": "Database Design",
            "tag": "Relational",
            "iconType": "code"
          },
          {
            "name": "Triggers & Procedures",
            "tag": "PL/pgSQL",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Aggregate Functions, GROUP BY & HAVING",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PostgreSQL toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 SQL Script (.sql)",
            "Query output (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL408 Aggregate Functions, GROUP BY & HAVING",
          "acceptedFormats": ".sql,.txt,.png"
        },
        "sampleStarterCode": "-- KTU PCCSL408 DBMS Lab\\nCREATE TABLE students (\\n    id SERIAL PRIMARY KEY,\\n    name VARCHAR(100),\\n    cgpa NUMERIC(3,2)\\n);\\n",
        "initialExecutionCmd": "psql -U student -d campuslab_db -f queries.sql",
        "initialExecutionOutput": "CREATE TABLE\\nINSERT 0 10\\n id |   name   | cgpa \\n----+----------+------\\n  1 | Adarsh S | 9.20\\n  2 | Rahul K  | 8.85\\n(2 rows)\\nQuery executed in 1.42ms",
        "status": "Ready"
      },
      {
        "id": "pccsl408-exp04",
        "expNumber": 4,
        "title": "Multi-Table Joins & Nested Subqueries",
        "question": "Write INNER JOIN, LEFT JOIN, and correlated subquery statements to list students who submitted all experiments for PCCSL408 and scored above the class average.",
        "durationMinutes": 45,
        "environment": "PostgreSQL 16 CLI Sandbox",
        "objectives": [
          "Understand theoretical principles of multi-table joins & nested subqueries",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "SQL Querying",
            "tag": "PostgreSQL",
            "iconType": "sql"
          },
          {
            "name": "Database Design",
            "tag": "Relational",
            "iconType": "code"
          },
          {
            "name": "Triggers & Procedures",
            "tag": "PL/pgSQL",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Multi-Table Joins & Nested Subqueries",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PostgreSQL toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 SQL Script (.sql)",
            "Query output (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL408 Multi-Table Joins & Nested Subqueries",
          "acceptedFormats": ".sql,.txt,.png"
        },
        "sampleStarterCode": "-- KTU PCCSL408 DBMS Lab\\nCREATE TABLE students (\\n    id SERIAL PRIMARY KEY,\\n    name VARCHAR(100),\\n    cgpa NUMERIC(3,2)\\n);\\n",
        "initialExecutionCmd": "psql -U student -d campuslab_db -f queries.sql",
        "initialExecutionOutput": "CREATE TABLE\\nINSERT 0 10\\n id |   name   | cgpa \\n----+----------+------\\n  1 | Adarsh S | 9.20\\n  2 | Rahul K  | 8.85\\n(2 rows)\\nQuery executed in 1.42ms",
        "status": "Ready"
      },
      {
        "id": "pccsl408-exp05",
        "expNumber": 5,
        "title": "Views, Indexes & Sequences",
        "question": "Create a read-only SQL VIEW for student CIA transcripts, add a composite B-Tree index on (user_id, state), and verify query plan improvement using EXPLAIN ANALYZE.",
        "durationMinutes": 45,
        "environment": "PostgreSQL 16 CLI Sandbox",
        "objectives": [
          "Understand theoretical principles of views, indexes & sequences",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "SQL Querying",
            "tag": "PostgreSQL",
            "iconType": "sql"
          },
          {
            "name": "Database Design",
            "tag": "Relational",
            "iconType": "code"
          },
          {
            "name": "Triggers & Procedures",
            "tag": "PL/pgSQL",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Views, Indexes & Sequences",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PostgreSQL toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 SQL Script (.sql)",
            "Query output (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL408 Views, Indexes & Sequences",
          "acceptedFormats": ".sql,.txt,.png"
        },
        "sampleStarterCode": "-- KTU PCCSL408 DBMS Lab\\nCREATE TABLE students (\\n    id SERIAL PRIMARY KEY,\\n    name VARCHAR(100),\\n    cgpa NUMERIC(3,2)\\n);\\n",
        "initialExecutionCmd": "psql -U student -d campuslab_db -f queries.sql",
        "initialExecutionOutput": "CREATE TABLE\\nINSERT 0 10\\n id |   name   | cgpa \\n----+----------+------\\n  1 | Adarsh S | 9.20\\n  2 | Rahul K  | 8.85\\n(2 rows)\\nQuery executed in 1.42ms",
        "status": "Ready"
      },
      {
        "id": "pccsl408-exp06",
        "expNumber": 6,
        "title": "Stored Procedures & Functions (PL/pgSQL)",
        "question": "Write a PL/pgSQL function calculate_cia_grade(score INT) that returns the KTU letter grade (S, A+, A, B+, ...) and a stored procedure to finalize semester grades.",
        "durationMinutes": 45,
        "environment": "PostgreSQL 16 CLI Sandbox",
        "objectives": [
          "Understand theoretical principles of stored procedures & functions (pl/pgsql)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "SQL Querying",
            "tag": "PostgreSQL",
            "iconType": "sql"
          },
          {
            "name": "Database Design",
            "tag": "Relational",
            "iconType": "code"
          },
          {
            "name": "Triggers & Procedures",
            "tag": "PL/pgSQL",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Stored Procedures & Functions (PL/pgSQL)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PostgreSQL toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 SQL Script (.sql)",
            "Query output (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL408 Stored Procedures & Functions (PL/pgSQL)",
          "acceptedFormats": ".sql,.txt,.png"
        },
        "sampleStarterCode": "-- KTU PCCSL408 DBMS Lab\\nCREATE TABLE students (\\n    id SERIAL PRIMARY KEY,\\n    name VARCHAR(100),\\n    cgpa NUMERIC(3,2)\\n);\\n",
        "initialExecutionCmd": "psql -U student -d campuslab_db -f queries.sql",
        "initialExecutionOutput": "CREATE TABLE\\nINSERT 0 10\\n id |   name   | cgpa \\n----+----------+------\\n  1 | Adarsh S | 9.20\\n  2 | Rahul K  | 8.85\\n(2 rows)\\nQuery executed in 1.42ms",
        "status": "Ready"
      },
      {
        "id": "pccsl408-exp07",
        "expNumber": 7,
        "title": "Triggers & Audit Logging",
        "question": "Create an AFTER UPDATE trigger on the evaluations table that automatically logs old_score, new_score, and updated_at into an audit_events table.",
        "durationMinutes": 45,
        "environment": "PostgreSQL 16 CLI Sandbox",
        "objectives": [
          "Understand theoretical principles of triggers & audit logging",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "SQL Querying",
            "tag": "PostgreSQL",
            "iconType": "sql"
          },
          {
            "name": "Database Design",
            "tag": "Relational",
            "iconType": "code"
          },
          {
            "name": "Triggers & Procedures",
            "tag": "PL/pgSQL",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Triggers & Audit Logging",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PostgreSQL toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 SQL Script (.sql)",
            "Query output (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL408 Triggers & Audit Logging",
          "acceptedFormats": ".sql,.txt,.png"
        },
        "sampleStarterCode": "-- KTU PCCSL408 DBMS Lab\\nCREATE TABLE students (\\n    id SERIAL PRIMARY KEY,\\n    name VARCHAR(100),\\n    cgpa NUMERIC(3,2)\\n);\\n",
        "initialExecutionCmd": "psql -U student -d campuslab_db -f queries.sql",
        "initialExecutionOutput": "CREATE TABLE\\nINSERT 0 10\\n id |   name   | cgpa \\n----+----------+------\\n  1 | Adarsh S | 9.20\\n  2 | Rahul K  | 8.85\\n(2 rows)\\nQuery executed in 1.42ms",
        "status": "Ready"
      },
      {
        "id": "pccsl408-exp08",
        "expNumber": 8,
        "title": "Transactions, Savepoints & Concurrency Control",
        "question": "Demonstrate BEGIN, COMMIT, ROLLBACK, and SAVEPOINT behavior in PostgreSQL while transferring lab credits/slots safely.",
        "durationMinutes": 45,
        "environment": "PostgreSQL 16 CLI Sandbox",
        "objectives": [
          "Understand theoretical principles of transactions, savepoints & concurrency control",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "SQL Querying",
            "tag": "PostgreSQL",
            "iconType": "sql"
          },
          {
            "name": "Database Design",
            "tag": "Relational",
            "iconType": "code"
          },
          {
            "name": "Triggers & Procedures",
            "tag": "PL/pgSQL",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Transactions, Savepoints & Concurrency Control",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PostgreSQL toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 SQL Script (.sql)",
            "Query output (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL408 Transactions, Savepoints & Concurrency Control",
          "acceptedFormats": ".sql,.txt,.png"
        },
        "sampleStarterCode": "-- KTU PCCSL408 DBMS Lab\\nCREATE TABLE students (\\n    id SERIAL PRIMARY KEY,\\n    name VARCHAR(100),\\n    cgpa NUMERIC(3,2)\\n);\\n",
        "initialExecutionCmd": "psql -U student -d campuslab_db -f queries.sql",
        "initialExecutionOutput": "CREATE TABLE\\nINSERT 0 10\\n id |   name   | cgpa \\n----+----------+------\\n  1 | Adarsh S | 9.20\\n  2 | Rahul K  | 8.85\\n(2 rows)\\nQuery executed in 1.42ms",
        "status": "Ready"
      },
      {
        "id": "pccsl408-exp09",
        "expNumber": 9,
        "title": "NoSQL / JSONB Operations",
        "question": "Store semi-structured lab submission payloads in a PostgreSQL JSONB column and query nested keys using ->, ->>, and @> operators.",
        "durationMinutes": 45,
        "environment": "PostgreSQL 16 CLI Sandbox",
        "objectives": [
          "Understand theoretical principles of nosql / jsonb operations",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "SQL Querying",
            "tag": "PostgreSQL",
            "iconType": "sql"
          },
          {
            "name": "Database Design",
            "tag": "Relational",
            "iconType": "code"
          },
          {
            "name": "Triggers & Procedures",
            "tag": "PL/pgSQL",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for NoSQL / JSONB Operations",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PostgreSQL toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 SQL Script (.sql)",
            "Query output (.txt/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL408 NoSQL / JSONB Operations",
          "acceptedFormats": ".sql,.txt,.png"
        },
        "sampleStarterCode": "-- KTU PCCSL408 DBMS Lab\\nCREATE TABLE students (\\n    id SERIAL PRIMARY KEY,\\n    name VARCHAR(100),\\n    cgpa NUMERIC(3,2)\\n);\\n",
        "initialExecutionCmd": "psql -U student -d campuslab_db -f queries.sql",
        "initialExecutionOutput": "CREATE TABLE\\nINSERT 0 10\\n id |   name   | cgpa \\n----+----------+------\\n  1 | Adarsh S | 9.20\\n  2 | Rahul K  | 8.85\\n(2 rows)\\nQuery executed in 1.42ms",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PBCST404",
    "title": "Computer Organization & Architecture",
    "semester": "S4",
    "credits": 4,
    "ltpr": "3-0-0-1",
    "evaluation": "CIA 50 / ESE 50",
    "category": "PC-PBL",
    "description": "Functional units, CPU datapath, control unit design, ALU modeling, pipeline hazard detection, cache memory mapping, and RISC-V assembly simulation.",
    "topics": [
      "Basic Functional Units",
      "Processor & Control Unit",
      "Memory System & Cache",
      "Input/Output Organization"
    ],
    "experimentsCount": 5,
    "completedExperiments": 1,
    "progressPercentage": 20,
    "imageKey": "PBCST404",
    "experiments": [
      {
        "id": "pbcst404-exp01",
        "expNumber": 1,
        "title": "Booth's Multiplication Algorithm Simulation",
        "question": "Write a C/Python simulator for Booth's signed binary multiplication algorithm showing step-by-step register traces (AC, QR, Qn+1).",
        "durationMinutes": 45,
        "environment": "Verilog & RISC-V Simulator Container",
        "objectives": [
          "Understand theoretical principles of booth's multiplication algorithm simulation",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Verilog HDL",
            "tag": "RTL",
            "iconType": "cpu"
          },
          {
            "name": "Computer Architecture",
            "tag": "Hardware",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Booth's Multiplication Algorithm Simulation",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Verilog toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Verilog file (.v)",
            "Simulation waveform (.png)"
          ],
          "description": "Upload required source files and execution logs for PBCST404 Booth's Multiplication Algorithm Simulation",
          "acceptedFormats": ".v,.png"
        },
        "sampleStarterCode": "module alu_16bit(\\n    input [15:0] a, b,\\n    input [2:0] opcode,\\n    output reg [15:0] result,\\n    output zero\\n);\\n",
        "initialExecutionCmd": "iverilog -o alu_sim alu.v alu_tb.v && vvp alu_sim",
        "initialExecutionOutput": "VCD info: dumpfile dump.vcd opened for output.\\nALU Opcode 000 (ADD): A=0005, B=0003 -> Result=0008 | Zero=0 (PASSED)\\nALU Opcode 001 (SUB): A=0005, B=0005 -> Result=0000 | Zero=1 (PASSED)",
        "status": "Completed"
      },
      {
        "id": "pbcst404-exp02",
        "expNumber": 2,
        "title": "Restoring & Non-Restoring Division Simulation",
        "question": "Implement a simulator for binary division using the restoring division algorithm and display each shift-subtract cycle.",
        "durationMinutes": 45,
        "environment": "Verilog & RISC-V Simulator Container",
        "objectives": [
          "Understand theoretical principles of restoring & non-restoring division simulation",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Verilog HDL",
            "tag": "RTL",
            "iconType": "cpu"
          },
          {
            "name": "Computer Architecture",
            "tag": "Hardware",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Restoring & Non-Restoring Division Simulation",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Verilog toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Verilog file (.v)",
            "Simulation waveform (.png)"
          ],
          "description": "Upload required source files and execution logs for PBCST404 Restoring & Non-Restoring Division Simulation",
          "acceptedFormats": ".v,.png"
        },
        "sampleStarterCode": "module alu_16bit(\\n    input [15:0] a, b,\\n    input [2:0] opcode,\\n    output reg [15:0] result,\\n    output zero\\n);\\n",
        "initialExecutionCmd": "iverilog -o alu_sim alu.v alu_tb.v && vvp alu_sim",
        "initialExecutionOutput": "VCD info: dumpfile dump.vcd opened for output.\\nALU Opcode 000 (ADD): A=0005, B=0003 -> Result=0008 | Zero=0 (PASSED)\\nALU Opcode 001 (SUB): A=0005, B=0005 -> Result=0000 | Zero=1 (PASSED)",
        "status": "In Progress"
      },
      {
        "id": "pbcst404-exp03",
        "expNumber": 3,
        "title": "Single-Cycle ALU Design (HDL / Logisim)",
        "question": "Design a 4-bit/8-bit ALU supporting ADD, SUB, AND, OR, XOR, SLT, and Zero/Carry/Overflow status flags.",
        "durationMinutes": 45,
        "environment": "Verilog & RISC-V Simulator Container",
        "objectives": [
          "Understand theoretical principles of single-cycle alu design (hdl / logisim)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Verilog HDL",
            "tag": "RTL",
            "iconType": "cpu"
          },
          {
            "name": "Computer Architecture",
            "tag": "Hardware",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Single-Cycle ALU Design (HDL / Logisim)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Verilog toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Verilog file (.v)",
            "Simulation waveform (.png)"
          ],
          "description": "Upload required source files and execution logs for PBCST404 Single-Cycle ALU Design (HDL / Logisim)",
          "acceptedFormats": ".v,.png"
        },
        "sampleStarterCode": "module alu_16bit(\\n    input [15:0] a, b,\\n    input [2:0] opcode,\\n    output reg [15:0] result,\\n    output zero\\n);\\n",
        "initialExecutionCmd": "iverilog -o alu_sim alu.v alu_tb.v && vvp alu_sim",
        "initialExecutionOutput": "VCD info: dumpfile dump.vcd opened for output.\\nALU Opcode 000 (ADD): A=0005, B=0003 -> Result=0008 | Zero=0 (PASSED)\\nALU Opcode 001 (SUB): A=0005, B=0005 -> Result=0000 | Zero=1 (PASSED)",
        "status": "Ready"
      },
      {
        "id": "pbcst404-exp04",
        "expNumber": 4,
        "title": "Cache Mapping Simulator (Direct, Associative, Set-Associative)",
        "question": "Build a cache simulator that reads memory trace addresses and computes hit ratio, miss ratio, and eviction counts under Direct-Mapped and 4-Way Set-Associative LRU policies.",
        "durationMinutes": 45,
        "environment": "Verilog & RISC-V Simulator Container",
        "objectives": [
          "Understand theoretical principles of cache mapping simulator (direct, associative, set-associative)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Verilog HDL",
            "tag": "RTL",
            "iconType": "cpu"
          },
          {
            "name": "Computer Architecture",
            "tag": "Hardware",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Cache Mapping Simulator (Direct, Associative, Set-Associative)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Verilog toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Verilog file (.v)",
            "Simulation waveform (.png)"
          ],
          "description": "Upload required source files and execution logs for PBCST404 Cache Mapping Simulator (Direct, Associative, Set-Associative)",
          "acceptedFormats": ".v,.png"
        },
        "sampleStarterCode": "module alu_16bit(\\n    input [15:0] a, b,\\n    input [2:0] opcode,\\n    output reg [15:0] result,\\n    output zero\\n);\\n",
        "initialExecutionCmd": "iverilog -o alu_sim alu.v alu_tb.v && vvp alu_sim",
        "initialExecutionOutput": "VCD info: dumpfile dump.vcd opened for output.\\nALU Opcode 000 (ADD): A=0005, B=0003 -> Result=0008 | Zero=0 (PASSED)\\nALU Opcode 001 (SUB): A=0005, B=0005 -> Result=0000 | Zero=1 (PASSED)",
        "status": "Ready"
      },
      {
        "id": "pbcst404-exp05",
        "expNumber": 5,
        "title": "Instruction Pipelining & Hazard Detection",
        "question": "Design and simulate a working subset of a 16-bit/32-bit processor (Fetch-Decode-Execute cycle, Register File, ALU, Data Memory) with an assembler script for sample programs.",
        "durationMinutes": 45,
        "environment": "Verilog & RISC-V Simulator Container",
        "objectives": [
          "Understand theoretical principles of instruction pipelining & hazard detection",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Verilog HDL",
            "tag": "RTL",
            "iconType": "cpu"
          },
          {
            "name": "Computer Architecture",
            "tag": "Hardware",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Instruction Pipelining & Hazard Detection",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Verilog toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Verilog file (.v)",
            "Simulation waveform (.png)"
          ],
          "description": "Upload required source files and execution logs for PBCST404 Instruction Pipelining & Hazard Detection",
          "acceptedFormats": ".v,.png"
        },
        "sampleStarterCode": "module alu_16bit(\\n    input [15:0] a, b,\\n    input [2:0] opcode,\\n    output reg [15:0] result,\\n    output zero\\n);\\n",
        "initialExecutionCmd": "iverilog -o alu_sim alu.v alu_tb.v && vvp alu_sim",
        "initialExecutionOutput": "VCD info: dumpfile dump.vcd opened for output.\\nALU Opcode 000 (ADD): A=0005, B=0003 -> Result=0008 | Zero=0 (PASSED)\\nALU Opcode 001 (SUB): A=0005, B=0005 -> Result=0000 | Zero=1 (PASSED)",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PCCSL507",
    "title": "Networks Lab",
    "semester": "S5",
    "credits": 2,
    "ltpr": "0-0-3-0",
    "evaluation": "CIA 50 / ESE 50",
    "category": "PC Practical",
    "description": "Network commands, socket programming (TCP & UDP), client-server communication, simulation of sliding window, routing algorithms, and packet capture.",
    "topics": [
      "Linux Network Diagnostic & Packet Capture",
      "TCP Client-Server Socket Programming",
      "UDP Client-Server Socket Programming",
      "Sliding Window & Routing (Bellman-Ford)"
    ],
    "experimentsCount": 8,
    "completedExperiments": 1,
    "progressPercentage": 13,
    "imageKey": "PCCSL507",
    "experiments": [
      {
        "id": "pccsl507-exp01",
        "expNumber": 1,
        "title": "Linux Network Diagnostic & Packet Capture",
        "question": "Inspect network interfaces, routing tables, ARP cache, and open sockets using ip, ss, traceroute, and tcpdump/tshark.",
        "durationMinutes": 45,
        "environment": "Wireshark & NS3 POSIX Socket Sandbox",
        "objectives": [
          "Understand theoretical principles of linux network diagnostic & packet capture",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Socket Programming",
            "tag": "TCP/IP",
            "iconType": "code"
          },
          {
            "name": "Packet Analysis",
            "tag": "Wireshark",
            "iconType": "terminal"
          },
          {
            "name": "Network Protocols",
            "tag": "Networking",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Linux Network Diagnostic & Packet Capture",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Wireshark toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C/Python file (.c/.py)",
            "Wireshark capture (.pcap/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL507 Linux Network Diagnostic & Packet Capture",
          "acceptedFormats": ".c,.py,.pcap,.png"
        },
        "sampleStarterCode": "# KTU PCCSL507 Networks Lab\\nimport socket\\n\\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\ns.bind((\"0.0.0.0\", 8080))\\ns.listen(5)\\nprint(\"Server listening on port 8080...\")\\n",
        "initialExecutionCmd": "python3 server.py & python3 client.py",
        "initialExecutionOutput": "Server listening on port 8080...\\n[Server] Connection accepted from 127.0.0.1:49210\\n[Client] Sending message: \"PING\"\\n[Server] Received PING -> Sending PONG\\nRound trip time: 0.38ms",
        "status": "Completed"
      },
      {
        "id": "pccsl507-exp02",
        "expNumber": 2,
        "title": "TCP Client-Server Socket Programming (C / Python)",
        "question": "Implement a multi-client TCP echo/chat server using sockets where the server handles concurrent clients via fork()/threads.",
        "durationMinutes": 45,
        "environment": "Wireshark & NS3 POSIX Socket Sandbox",
        "objectives": [
          "Understand theoretical principles of tcp client-server socket programming (c / python)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Socket Programming",
            "tag": "TCP/IP",
            "iconType": "code"
          },
          {
            "name": "Packet Analysis",
            "tag": "Wireshark",
            "iconType": "terminal"
          },
          {
            "name": "Network Protocols",
            "tag": "Networking",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for TCP Client-Server Socket Programming (C / Python)",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Wireshark toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C/Python file (.c/.py)",
            "Wireshark capture (.pcap/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL507 TCP Client-Server Socket Programming (C / Python)",
          "acceptedFormats": ".c,.py,.pcap,.png"
        },
        "sampleStarterCode": "# KTU PCCSL507 Networks Lab\\nimport socket\\n\\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\ns.bind((\"0.0.0.0\", 8080))\\ns.listen(5)\\nprint(\"Server listening on port 8080...\")\\n",
        "initialExecutionCmd": "python3 server.py & python3 client.py",
        "initialExecutionOutput": "Server listening on port 8080...\\n[Server] Connection accepted from 127.0.0.1:49210\\n[Client] Sending message: \"PING\"\\n[Server] Received PING -> Sending PONG\\nRound trip time: 0.38ms",
        "status": "In Progress"
      },
      {
        "id": "pccsl507-exp03",
        "expNumber": 3,
        "title": "UDP Client-Server Socket Programming",
        "question": "Implement a UDP time/calculator server and client in C/Python and measure packet round-trip time.",
        "durationMinutes": 45,
        "environment": "Wireshark & NS3 POSIX Socket Sandbox",
        "objectives": [
          "Understand theoretical principles of udp client-server socket programming",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Socket Programming",
            "tag": "TCP/IP",
            "iconType": "code"
          },
          {
            "name": "Packet Analysis",
            "tag": "Wireshark",
            "iconType": "terminal"
          },
          {
            "name": "Network Protocols",
            "tag": "Networking",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for UDP Client-Server Socket Programming",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Wireshark toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C/Python file (.c/.py)",
            "Wireshark capture (.pcap/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL507 UDP Client-Server Socket Programming",
          "acceptedFormats": ".c,.py,.pcap,.png"
        },
        "sampleStarterCode": "# KTU PCCSL507 Networks Lab\\nimport socket\\n\\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\ns.bind((\"0.0.0.0\", 8080))\\ns.listen(5)\\nprint(\"Server listening on port 8080...\")\\n",
        "initialExecutionCmd": "python3 server.py & python3 client.py",
        "initialExecutionOutput": "Server listening on port 8080...\\n[Server] Connection accepted from 127.0.0.1:49210\\n[Client] Sending message: \"PING\"\\n[Server] Received PING -> Sending PONG\\nRound trip time: 0.38ms",
        "status": "Ready"
      },
      {
        "id": "pccsl507-exp04",
        "expNumber": 4,
        "title": "Sliding Window Protocols (Stop-and-Wait & Go-Back-N)",
        "question": "Simulate Stop-and-Wait ARQ and Go-Back-N ARQ protocols with configurable packet loss and timeout retransmission.",
        "durationMinutes": 45,
        "environment": "Wireshark & NS3 POSIX Socket Sandbox",
        "objectives": [
          "Understand theoretical principles of sliding window protocols (stop-and-wait & go-back-n)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Socket Programming",
            "tag": "TCP/IP",
            "iconType": "code"
          },
          {
            "name": "Packet Analysis",
            "tag": "Wireshark",
            "iconType": "terminal"
          },
          {
            "name": "Network Protocols",
            "tag": "Networking",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Sliding Window Protocols (Stop-and-Wait & Go-Back-N)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Wireshark toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C/Python file (.c/.py)",
            "Wireshark capture (.pcap/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL507 Sliding Window Protocols (Stop-and-Wait & Go-Back-N)",
          "acceptedFormats": ".c,.py,.pcap,.png"
        },
        "sampleStarterCode": "# KTU PCCSL507 Networks Lab\\nimport socket\\n\\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\ns.bind((\"0.0.0.0\", 8080))\\ns.listen(5)\\nprint(\"Server listening on port 8080...\")\\n",
        "initialExecutionCmd": "python3 server.py & python3 client.py",
        "initialExecutionOutput": "Server listening on port 8080...\\n[Server] Connection accepted from 127.0.0.1:49210\\n[Client] Sending message: \"PING\"\\n[Server] Received PING -> Sending PONG\\nRound trip time: 0.38ms",
        "status": "Ready"
      },
      {
        "id": "pccsl507-exp05",
        "expNumber": 5,
        "title": "Distance Vector Routing (Bellman-Ford)",
        "question": "Implement the Distance Vector Routing algorithm for a given network topology graph and print each router's converged routing table.",
        "durationMinutes": 45,
        "environment": "Wireshark & NS3 POSIX Socket Sandbox",
        "objectives": [
          "Understand theoretical principles of distance vector routing (bellman-ford)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Socket Programming",
            "tag": "TCP/IP",
            "iconType": "code"
          },
          {
            "name": "Packet Analysis",
            "tag": "Wireshark",
            "iconType": "terminal"
          },
          {
            "name": "Network Protocols",
            "tag": "Networking",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Distance Vector Routing (Bellman-Ford)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Wireshark toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C/Python file (.c/.py)",
            "Wireshark capture (.pcap/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL507 Distance Vector Routing (Bellman-Ford)",
          "acceptedFormats": ".c,.py,.pcap,.png"
        },
        "sampleStarterCode": "# KTU PCCSL507 Networks Lab\\nimport socket\\n\\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\ns.bind((\"0.0.0.0\", 8080))\\ns.listen(5)\\nprint(\"Server listening on port 8080...\")\\n",
        "initialExecutionCmd": "python3 server.py & python3 client.py",
        "initialExecutionOutput": "Server listening on port 8080...\\n[Server] Connection accepted from 127.0.0.1:49210\\n[Client] Sending message: \"PING\"\\n[Server] Received PING -> Sending PONG\\nRound trip time: 0.38ms",
        "status": "Ready"
      },
      {
        "id": "pccsl507-exp06",
        "expNumber": 6,
        "title": "Link State Routing (Dijkstra's Algorithm)",
        "question": "Implement Link State Routing using Dijkstra's shortest-path algorithm and display shortest paths from a source router to all nodes.",
        "durationMinutes": 45,
        "environment": "Wireshark & NS3 POSIX Socket Sandbox",
        "objectives": [
          "Understand theoretical principles of link state routing (dijkstra's algorithm)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Socket Programming",
            "tag": "TCP/IP",
            "iconType": "code"
          },
          {
            "name": "Packet Analysis",
            "tag": "Wireshark",
            "iconType": "terminal"
          },
          {
            "name": "Network Protocols",
            "tag": "Networking",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Link State Routing (Dijkstra's Algorithm)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Wireshark toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C/Python file (.c/.py)",
            "Wireshark capture (.pcap/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL507 Link State Routing (Dijkstra's Algorithm)",
          "acceptedFormats": ".c,.py,.pcap,.png"
        },
        "sampleStarterCode": "# KTU PCCSL507 Networks Lab\\nimport socket\\n\\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\ns.bind((\"0.0.0.0\", 8080))\\ns.listen(5)\\nprint(\"Server listening on port 8080...\")\\n",
        "initialExecutionCmd": "python3 server.py & python3 client.py",
        "initialExecutionOutput": "Server listening on port 8080...\\n[Server] Connection accepted from 127.0.0.1:49210\\n[Client] Sending message: \"PING\"\\n[Server] Received PING -> Sending PONG\\nRound trip time: 0.38ms",
        "status": "Ready"
      },
      {
        "id": "pccsl507-exp07",
        "expNumber": 7,
        "title": "Congestion Control (Leaky Bucket & Token Bucket)",
        "question": "Write a program to simulate Leaky Bucket and Token Bucket traffic shaping algorithms for bursty packet arrivals.",
        "durationMinutes": 45,
        "environment": "Wireshark & NS3 POSIX Socket Sandbox",
        "objectives": [
          "Understand theoretical principles of congestion control (leaky bucket & token bucket)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Socket Programming",
            "tag": "TCP/IP",
            "iconType": "code"
          },
          {
            "name": "Packet Analysis",
            "tag": "Wireshark",
            "iconType": "terminal"
          },
          {
            "name": "Network Protocols",
            "tag": "Networking",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Congestion Control (Leaky Bucket & Token Bucket)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Wireshark toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C/Python file (.c/.py)",
            "Wireshark capture (.pcap/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL507 Congestion Control (Leaky Bucket & Token Bucket)",
          "acceptedFormats": ".c,.py,.pcap,.png"
        },
        "sampleStarterCode": "# KTU PCCSL507 Networks Lab\\nimport socket\\n\\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\ns.bind((\"0.0.0.0\", 8080))\\ns.listen(5)\\nprint(\"Server listening on port 8080...\")\\n",
        "initialExecutionCmd": "python3 server.py & python3 client.py",
        "initialExecutionOutput": "Server listening on port 8080...\\n[Server] Connection accepted from 127.0.0.1:49210\\n[Client] Sending message: \"PING\"\\n[Server] Received PING -> Sending PONG\\nRound trip time: 0.38ms",
        "status": "Ready"
      },
      {
        "id": "pccsl507-exp08",
        "expNumber": 8,
        "title": "Application Layer Protocols (HTTP / FTP / SMTP Simulation)",
        "question": "Build a minimal HTTP/1.1 static file server using raw TCP sockets that parses GET requests and returns valid HTTP status headers.",
        "durationMinutes": 45,
        "environment": "Wireshark & NS3 POSIX Socket Sandbox",
        "objectives": [
          "Understand theoretical principles of application layer protocols (http / ftp / smtp simulation)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Socket Programming",
            "tag": "TCP/IP",
            "iconType": "code"
          },
          {
            "name": "Packet Analysis",
            "tag": "Wireshark",
            "iconType": "terminal"
          },
          {
            "name": "Network Protocols",
            "tag": "Networking",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Application Layer Protocols (HTTP / FTP / SMTP Simulation)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Wireshark toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 C/Python file (.c/.py)",
            "Wireshark capture (.pcap/.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL507 Application Layer Protocols (HTTP / FTP / SMTP Simulation)",
          "acceptedFormats": ".c,.py,.pcap,.png"
        },
        "sampleStarterCode": "# KTU PCCSL507 Networks Lab\\nimport socket\\n\\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\ns.bind((\"0.0.0.0\", 8080))\\ns.listen(5)\\nprint(\"Server listening on port 8080...\")\\n",
        "initialExecutionCmd": "python3 server.py & python3 client.py",
        "initialExecutionOutput": "Server listening on port 8080...\\n[Server] Connection accepted from 127.0.0.1:49210\\n[Client] Sending message: \"PING\"\\n[Server] Received PING -> Sending PONG\\nRound trip time: 0.38ms",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PCCSL508",
    "title": "Machine Learning Lab",
    "semester": "S5",
    "credits": 2,
    "ltpr": "0-0-3-0",
    "evaluation": "CIA 50 / ESE 50",
    "category": "PC Practical",
    "description": "Implementation of ML algorithms using Python, NumPy, Pandas, Scikit-learn, and PyTorch: Regression, Classification, Clustering, and Neural Networks.",
    "topics": [
      "Data Preprocessing & Feature Engineering",
      "Linear & Logistic Regression",
      "Decision Trees, Random Forest & SVM",
      "K-Means Clustering & PCA",
      "Multi-Layer Perceptron (PyTorch)"
    ],
    "experimentsCount": 8,
    "completedExperiments": 1,
    "progressPercentage": 13,
    "imageKey": "PCCSL508",
    "experiments": [
      {
        "id": "pccsl508-exp01",
        "expNumber": 1,
        "title": "Data Preprocessing & Exploratory Data Analysis",
        "question": "Load a CSV dataset using Pandas/NumPy, handle missing values, encode categorical features, normalize numeric columns, and plot correlation heatmaps.",
        "durationMinutes": 45,
        "environment": "PyTorch 2.4 & Scikit-learn Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of data preprocessing & exploratory data analysis",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python ML",
            "tag": "Scikit-Learn",
            "iconType": "python"
          },
          {
            "name": "Model Evaluation",
            "tag": "Metrics",
            "iconType": "cpu"
          },
          {
            "name": "Neural Networks",
            "tag": "PyTorch",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Data Preprocessing & Exploratory Data Analysis",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PyTorch toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python script (.py/.ipynb)",
            "Loss/Accuracy curve (.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL508 Data Preprocessing & Exploratory Data Analysis",
          "acceptedFormats": ".py,.ipynb,.png"
        },
        "sampleStarterCode": "import numpy as np\\nfrom sklearn.model_selection import train_test_split\\nfrom sklearn.metrics import accuracy_score\\n\\nprint(\"KTU PCCSL508 Machine Learning Lab ready!\")\\n",
        "initialExecutionCmd": "python3 ml_model.py",
        "initialExecutionOutput": "Dataset: 1,500 samples | Train: 1,200 | Test: 300\\nTraining Model: Convergence reached in 45 iterations.\\nTest Accuracy: 97.33% | F1-Score: 0.968\\nConfusion matrix plotted to output.png",
        "status": "Completed"
      },
      {
        "id": "pccsl508-exp02",
        "expNumber": 2,
        "title": "Linear Regression from Scratch & Scikit-Learn",
        "question": "Implement Simple and Multiple Linear Regression using Gradient Descent (NumPy) and compare MSE, RMSE, and R^2 against scikit-learn.",
        "durationMinutes": 45,
        "environment": "PyTorch 2.4 & Scikit-learn Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of linear regression from scratch & scikit-learn",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python ML",
            "tag": "Scikit-Learn",
            "iconType": "python"
          },
          {
            "name": "Model Evaluation",
            "tag": "Metrics",
            "iconType": "cpu"
          },
          {
            "name": "Neural Networks",
            "tag": "PyTorch",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Linear Regression from Scratch & Scikit-Learn",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PyTorch toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python script (.py/.ipynb)",
            "Loss/Accuracy curve (.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL508 Linear Regression from Scratch & Scikit-Learn",
          "acceptedFormats": ".py,.ipynb,.png"
        },
        "sampleStarterCode": "import numpy as np\\nfrom sklearn.model_selection import train_test_split\\nfrom sklearn.metrics import accuracy_score\\n\\nprint(\"KTU PCCSL508 Machine Learning Lab ready!\")\\n",
        "initialExecutionCmd": "python3 ml_model.py",
        "initialExecutionOutput": "Dataset: 1,500 samples | Train: 1,200 | Test: 300\\nTraining Model: Convergence reached in 45 iterations.\\nTest Accuracy: 97.33% | F1-Score: 0.968\\nConfusion matrix plotted to output.png",
        "status": "In Progress"
      },
      {
        "id": "pccsl508-exp03",
        "expNumber": 3,
        "title": "Logistic Regression & Classification Metrics",
        "question": "Train a Logistic Regression classifier on a binary dataset and compute Confusion Matrix, Accuracy, Precision, Recall, F1-Score, and ROC-AUC.",
        "durationMinutes": 45,
        "environment": "PyTorch 2.4 & Scikit-learn Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of logistic regression & classification metrics",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python ML",
            "tag": "Scikit-Learn",
            "iconType": "python"
          },
          {
            "name": "Model Evaluation",
            "tag": "Metrics",
            "iconType": "cpu"
          },
          {
            "name": "Neural Networks",
            "tag": "PyTorch",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Logistic Regression & Classification Metrics",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PyTorch toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python script (.py/.ipynb)",
            "Loss/Accuracy curve (.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL508 Logistic Regression & Classification Metrics",
          "acceptedFormats": ".py,.ipynb,.png"
        },
        "sampleStarterCode": "import numpy as np\\nfrom sklearn.model_selection import train_test_split\\nfrom sklearn.metrics import accuracy_score\\n\\nprint(\"KTU PCCSL508 Machine Learning Lab ready!\")\\n",
        "initialExecutionCmd": "python3 ml_model.py",
        "initialExecutionOutput": "Dataset: 1,500 samples | Train: 1,200 | Test: 300\\nTraining Model: Convergence reached in 45 iterations.\\nTest Accuracy: 97.33% | F1-Score: 0.968\\nConfusion matrix plotted to output.png",
        "status": "Ready"
      },
      {
        "id": "pccsl508-exp04",
        "expNumber": 4,
        "title": "Decision Tree (ID3 / Gini) Classifier",
        "question": "Implement a Decision Tree classifier, visualize tree splits, and evaluate overfitting with max_depth tuning.",
        "durationMinutes": 45,
        "environment": "PyTorch 2.4 & Scikit-learn Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of decision tree (id3 / gini) classifier",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python ML",
            "tag": "Scikit-Learn",
            "iconType": "python"
          },
          {
            "name": "Model Evaluation",
            "tag": "Metrics",
            "iconType": "cpu"
          },
          {
            "name": "Neural Networks",
            "tag": "PyTorch",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Decision Tree (ID3 / Gini) Classifier",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PyTorch toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python script (.py/.ipynb)",
            "Loss/Accuracy curve (.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL508 Decision Tree (ID3 / Gini) Classifier",
          "acceptedFormats": ".py,.ipynb,.png"
        },
        "sampleStarterCode": "import numpy as np\\nfrom sklearn.model_selection import train_test_split\\nfrom sklearn.metrics import accuracy_score\\n\\nprint(\"KTU PCCSL508 Machine Learning Lab ready!\")\\n",
        "initialExecutionCmd": "python3 ml_model.py",
        "initialExecutionOutput": "Dataset: 1,500 samples | Train: 1,200 | Test: 300\\nTraining Model: Convergence reached in 45 iterations.\\nTest Accuracy: 97.33% | F1-Score: 0.968\\nConfusion matrix plotted to output.png",
        "status": "Ready"
      },
      {
        "id": "pccsl508-exp05",
        "expNumber": 5,
        "title": "K-Nearest Neighbors (KNN) & Cross-Validation",
        "question": "Implement KNN from scratch using Euclidean distance, perform 5-fold cross-validation, and plot accuracy vs. K.",
        "durationMinutes": 45,
        "environment": "PyTorch 2.4 & Scikit-learn Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of k-nearest neighbors (knn) & cross-validation",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python ML",
            "tag": "Scikit-Learn",
            "iconType": "python"
          },
          {
            "name": "Model Evaluation",
            "tag": "Metrics",
            "iconType": "cpu"
          },
          {
            "name": "Neural Networks",
            "tag": "PyTorch",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for K-Nearest Neighbors (KNN) & Cross-Validation",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PyTorch toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python script (.py/.ipynb)",
            "Loss/Accuracy curve (.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL508 K-Nearest Neighbors (KNN) & Cross-Validation",
          "acceptedFormats": ".py,.ipynb,.png"
        },
        "sampleStarterCode": "import numpy as np\\nfrom sklearn.model_selection import train_test_split\\nfrom sklearn.metrics import accuracy_score\\n\\nprint(\"KTU PCCSL508 Machine Learning Lab ready!\")\\n",
        "initialExecutionCmd": "python3 ml_model.py",
        "initialExecutionOutput": "Dataset: 1,500 samples | Train: 1,200 | Test: 300\\nTraining Model: Convergence reached in 45 iterations.\\nTest Accuracy: 97.33% | F1-Score: 0.968\\nConfusion matrix plotted to output.png",
        "status": "Ready"
      },
      {
        "id": "pccsl508-exp06",
        "expNumber": 6,
        "title": "Naive Bayes Text / Spam Classifier",
        "question": "Build a Multinomial Naive Bayes classifier using TF-IDF/Bag-of-Words features for SMS/email spam detection.",
        "durationMinutes": 45,
        "environment": "PyTorch 2.4 & Scikit-learn Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of naive bayes text / spam classifier",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python ML",
            "tag": "Scikit-Learn",
            "iconType": "python"
          },
          {
            "name": "Model Evaluation",
            "tag": "Metrics",
            "iconType": "cpu"
          },
          {
            "name": "Neural Networks",
            "tag": "PyTorch",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Naive Bayes Text / Spam Classifier",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PyTorch toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python script (.py/.ipynb)",
            "Loss/Accuracy curve (.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL508 Naive Bayes Text / Spam Classifier",
          "acceptedFormats": ".py,.ipynb,.png"
        },
        "sampleStarterCode": "import numpy as np\\nfrom sklearn.model_selection import train_test_split\\nfrom sklearn.metrics import accuracy_score\\n\\nprint(\"KTU PCCSL508 Machine Learning Lab ready!\")\\n",
        "initialExecutionCmd": "python3 ml_model.py",
        "initialExecutionOutput": "Dataset: 1,500 samples | Train: 1,200 | Test: 300\\nTraining Model: Convergence reached in 45 iterations.\\nTest Accuracy: 97.33% | F1-Score: 0.968\\nConfusion matrix plotted to output.png",
        "status": "Ready"
      },
      {
        "id": "pccsl508-exp07",
        "expNumber": 7,
        "title": "Support Vector Machines (SVM) with Kernels",
        "question": "Train Linear, Polynomial, and RBF kernel SVMs and compare decision boundaries and test accuracy.",
        "durationMinutes": 45,
        "environment": "PyTorch 2.4 & Scikit-learn Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of support vector machines (svm) with kernels",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python ML",
            "tag": "Scikit-Learn",
            "iconType": "python"
          },
          {
            "name": "Model Evaluation",
            "tag": "Metrics",
            "iconType": "cpu"
          },
          {
            "name": "Neural Networks",
            "tag": "PyTorch",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Support Vector Machines (SVM) with Kernels",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PyTorch toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python script (.py/.ipynb)",
            "Loss/Accuracy curve (.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL508 Support Vector Machines (SVM) with Kernels",
          "acceptedFormats": ".py,.ipynb,.png"
        },
        "sampleStarterCode": "import numpy as np\\nfrom sklearn.model_selection import train_test_split\\nfrom sklearn.metrics import accuracy_score\\n\\nprint(\"KTU PCCSL508 Machine Learning Lab ready!\")\\n",
        "initialExecutionCmd": "python3 ml_model.py",
        "initialExecutionOutput": "Dataset: 1,500 samples | Train: 1,200 | Test: 300\\nTraining Model: Convergence reached in 45 iterations.\\nTest Accuracy: 97.33% | F1-Score: 0.968\\nConfusion matrix plotted to output.png",
        "status": "Ready"
      },
      {
        "id": "pccsl508-exp08",
        "expNumber": 8,
        "title": "K-Means Clustering & PCA Dimensionality Reduction",
        "question": "Implement K-Means clustering, use the Elbow method to select optimal K, and visualize clusters in 2D using Principal Component Analysis (PCA).",
        "durationMinutes": 45,
        "environment": "PyTorch 2.4 & Scikit-learn Linux Sandbox",
        "objectives": [
          "Understand theoretical principles of k-means clustering & pca dimensionality reduction",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Python ML",
            "tag": "Scikit-Learn",
            "iconType": "python"
          },
          {
            "name": "Model Evaluation",
            "tag": "Metrics",
            "iconType": "cpu"
          },
          {
            "name": "Neural Networks",
            "tag": "PyTorch",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for K-Means Clustering & PCA Dimensionality Reduction",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using PyTorch toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python script (.py/.ipynb)",
            "Loss/Accuracy curve (.png)"
          ],
          "description": "Upload required source files and execution logs for PCCSL508 K-Means Clustering & PCA Dimensionality Reduction",
          "acceptedFormats": ".py,.ipynb,.png"
        },
        "sampleStarterCode": "import numpy as np\\nfrom sklearn.model_selection import train_test_split\\nfrom sklearn.metrics import accuracy_score\\n\\nprint(\"KTU PCCSL508 Machine Learning Lab ready!\")\\n",
        "initialExecutionCmd": "python3 ml_model.py",
        "initialExecutionOutput": "Dataset: 1,500 samples | Train: 1,200 | Test: 300\\nTraining Model: Convergence reached in 45 iterations.\\nTest Accuracy: 97.33% | F1-Score: 0.968\\nConfusion matrix plotted to output.png",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PBCST504",
    "title": "Microcontrollers",
    "semester": "S5",
    "credits": 4,
    "ltpr": "3-0-0-1",
    "evaluation": "CIA 50 / ESE 50",
    "category": "PC-PBL",
    "description": "Architecture and assembly/C programming of ARM Cortex-M / 8051 microcontrollers. GPIO, timers, interrupts, ADC, DAC, and serial communication interfacing.",
    "topics": [
      "ARM Cortex Architecture & Registers",
      "Embedded C & GPIO Interfacing",
      "Timers, Counters & PWM Generation",
      "Interrupt Service Routines & ADC/DAC",
      "Serial Protocols (UART, SPI, I2C)"
    ],
    "experimentsCount": 6,
    "completedExperiments": 1,
    "progressPercentage": 17,
    "imageKey": "PBCST504",
    "experiments": [
      {
        "id": "pbcst504-exp01",
        "expNumber": 1,
        "title": "8051 / ARM Arithmetic & Data Transfer Programs",
        "question": "Write assembly/embedded C programs for 8-bit/16-bit addition, subtraction, multiplication, and block memory transfer.",
        "durationMinutes": 45,
        "environment": "QEMU ARM Cortex-M Linux Emulator",
        "objectives": [
          "Understand theoretical principles of 8051 / arm arithmetic & data transfer programs",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Embedded C",
            "tag": "ARM Cortex",
            "iconType": "c"
          },
          {
            "name": "GPIO & Interrupts",
            "tag": "Peripherals",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for 8051 / ARM Arithmetic & Data Transfer Programs",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using QEMU toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Embedded C file (.c)",
            "Simulation trace (.png)"
          ],
          "description": "Upload required source files and execution logs for PBCST504 8051 / ARM Arithmetic & Data Transfer Programs",
          "acceptedFormats": ".c,.png"
        },
        "sampleStarterCode": "#include <stdint.h>\\n// KTU PBCST504 Microcontrollers\\nint main(void) {\\n    // Initialize GPIO Pin\\n    while(1) {}\\n}\\n",
        "initialExecutionCmd": "./arm_emu --run firmware.elf",
        "initialExecutionOutput": "ARM Cortex-M4 Emulator started.\\nClock: 72 MHz | SysTick interrupt enabled.\\nGPIO Port C Pin 13 toggling at 1 Hz.",
        "status": "Completed"
      },
      {
        "id": "pbcst504-exp02",
        "expNumber": 2,
        "title": "GPIO Interfacing (LED Blinking & Switch Input)",
        "question": "Interface an array of LEDs and push-button switches with GPIO ports to implement a binary counter and pattern chaser.",
        "durationMinutes": 45,
        "environment": "QEMU ARM Cortex-M Linux Emulator",
        "objectives": [
          "Understand theoretical principles of gpio interfacing (led blinking & switch input)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Embedded C",
            "tag": "ARM Cortex",
            "iconType": "c"
          },
          {
            "name": "GPIO & Interrupts",
            "tag": "Peripherals",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for GPIO Interfacing (LED Blinking & Switch Input)",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using QEMU toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Embedded C file (.c)",
            "Simulation trace (.png)"
          ],
          "description": "Upload required source files and execution logs for PBCST504 GPIO Interfacing (LED Blinking & Switch Input)",
          "acceptedFormats": ".c,.png"
        },
        "sampleStarterCode": "#include <stdint.h>\\n// KTU PBCST504 Microcontrollers\\nint main(void) {\\n    // Initialize GPIO Pin\\n    while(1) {}\\n}\\n",
        "initialExecutionCmd": "./arm_emu --run firmware.elf",
        "initialExecutionOutput": "ARM Cortex-M4 Emulator started.\\nClock: 72 MHz | SysTick interrupt enabled.\\nGPIO Port C Pin 13 toggling at 1 Hz.",
        "status": "In Progress"
      },
      {
        "id": "pbcst504-exp03",
        "expNumber": 3,
        "title": "Timer & Interrupt Programming",
        "question": "Configure hardware timers and external interrupts to generate an accurate 1 Hz square wave / stopwatch tick.",
        "durationMinutes": 45,
        "environment": "QEMU ARM Cortex-M Linux Emulator",
        "objectives": [
          "Understand theoretical principles of timer & interrupt programming",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Embedded C",
            "tag": "ARM Cortex",
            "iconType": "c"
          },
          {
            "name": "GPIO & Interrupts",
            "tag": "Peripherals",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Timer & Interrupt Programming",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using QEMU toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Embedded C file (.c)",
            "Simulation trace (.png)"
          ],
          "description": "Upload required source files and execution logs for PBCST504 Timer & Interrupt Programming",
          "acceptedFormats": ".c,.png"
        },
        "sampleStarterCode": "#include <stdint.h>\\n// KTU PBCST504 Microcontrollers\\nint main(void) {\\n    // Initialize GPIO Pin\\n    while(1) {}\\n}\\n",
        "initialExecutionCmd": "./arm_emu --run firmware.elf",
        "initialExecutionOutput": "ARM Cortex-M4 Emulator started.\\nClock: 72 MHz | SysTick interrupt enabled.\\nGPIO Port C Pin 13 toggling at 1 Hz.",
        "status": "Ready"
      },
      {
        "id": "pbcst504-exp04",
        "expNumber": 4,
        "title": "LCD (16x2) & Keypad Interfacing",
        "question": "Interface a 16x2 character LCD and 4x4 matrix keypad to display pressed keys and custom messages.",
        "durationMinutes": 45,
        "environment": "QEMU ARM Cortex-M Linux Emulator",
        "objectives": [
          "Understand theoretical principles of lcd (16x2) & keypad interfacing",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Embedded C",
            "tag": "ARM Cortex",
            "iconType": "c"
          },
          {
            "name": "GPIO & Interrupts",
            "tag": "Peripherals",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for LCD (16x2) & Keypad Interfacing",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using QEMU toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Embedded C file (.c)",
            "Simulation trace (.png)"
          ],
          "description": "Upload required source files and execution logs for PBCST504 LCD (16x2) & Keypad Interfacing",
          "acceptedFormats": ".c,.png"
        },
        "sampleStarterCode": "#include <stdint.h>\\n// KTU PBCST504 Microcontrollers\\nint main(void) {\\n    // Initialize GPIO Pin\\n    while(1) {}\\n}\\n",
        "initialExecutionCmd": "./arm_emu --run firmware.elf",
        "initialExecutionOutput": "ARM Cortex-M4 Emulator started.\\nClock: 72 MHz | SysTick interrupt enabled.\\nGPIO Port C Pin 13 toggling at 1 Hz.",
        "status": "Ready"
      },
      {
        "id": "pbcst504-exp05",
        "expNumber": 5,
        "title": "ADC & Temperature/Ultrasonic Sensor Interfacing",
        "question": "Read analog/digital sensor data (LM35 or HC-SR04) via ADC/GPIO, convert to engineering units, and trigger an alert threshold.",
        "durationMinutes": 45,
        "environment": "QEMU ARM Cortex-M Linux Emulator",
        "objectives": [
          "Understand theoretical principles of adc & temperature/ultrasonic sensor interfacing",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Embedded C",
            "tag": "ARM Cortex",
            "iconType": "c"
          },
          {
            "name": "GPIO & Interrupts",
            "tag": "Peripherals",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for ADC & Temperature/Ultrasonic Sensor Interfacing",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using QEMU toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Embedded C file (.c)",
            "Simulation trace (.png)"
          ],
          "description": "Upload required source files and execution logs for PBCST504 ADC & Temperature/Ultrasonic Sensor Interfacing",
          "acceptedFormats": ".c,.png"
        },
        "sampleStarterCode": "#include <stdint.h>\\n// KTU PBCST504 Microcontrollers\\nint main(void) {\\n    // Initialize GPIO Pin\\n    while(1) {}\\n}\\n",
        "initialExecutionCmd": "./arm_emu --run firmware.elf",
        "initialExecutionOutput": "ARM Cortex-M4 Emulator started.\\nClock: 72 MHz | SysTick interrupt enabled.\\nGPIO Port C Pin 13 toggling at 1 Hz.",
        "status": "Ready"
      },
      {
        "id": "pbcst504-exp06",
        "expNumber": 6,
        "title": "UART Serial Communication",
        "question": "Build a microcontroller-based embedded prototype (e.g., Smart Lab Occupancy Counter, Automated Temperature Fan Controller, or RFID Attendance Logger).",
        "durationMinutes": 45,
        "environment": "QEMU ARM Cortex-M Linux Emulator",
        "objectives": [
          "Understand theoretical principles of uart serial communication",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Embedded C",
            "tag": "ARM Cortex",
            "iconType": "c"
          },
          {
            "name": "GPIO & Interrupts",
            "tag": "Peripherals",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for UART Serial Communication",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using QEMU toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Embedded C file (.c)",
            "Simulation trace (.png)"
          ],
          "description": "Upload required source files and execution logs for PBCST504 UART Serial Communication",
          "acceptedFormats": ".c,.png"
        },
        "sampleStarterCode": "#include <stdint.h>\\n// KTU PBCST504 Microcontrollers\\nint main(void) {\\n    // Initialize GPIO Pin\\n    while(1) {}\\n}\\n",
        "initialExecutionCmd": "./arm_emu --run firmware.elf",
        "initialExecutionOutput": "ARM Cortex-M4 Emulator started.\\nClock: 72 MHz | SysTick interrupt enabled.\\nGPIO Port C Pin 13 toggling at 1 Hz.",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PCCSL607",
    "title": "Systems Lab",
    "semester": "S6",
    "credits": 2,
    "ltpr": "0-0-3-0",
    "evaluation": "CIA 50 / ESE 50",
    "category": "PC Practical",
    "description": "Design and implementation of language processors: Lexical analyzers using Lex, Parsers using Yacc, Intermediate code generators, Assemblers, and Loaders.",
    "topics": [
      "Lexical Analyzer Generation using Lex",
      "Syntax Analyzer using Yacc",
      "Two-Pass Assembler & Macro Processor",
      "Absolute & Relocating Loaders"
    ],
    "experimentsCount": 8,
    "completedExperiments": 1,
    "progressPercentage": 13,
    "imageKey": "PCCSL607",
    "experiments": [
      {
        "id": "pccsl607-exp01",
        "expNumber": 1,
        "title": "Lexical Analyzer in C",
        "question": "Design and implement a Lexical Analyzer in C that reads a source file, ignores comments/whitespace, and tokenizes keywords, identifiers, operators, and literals.",
        "durationMinutes": 45,
        "environment": "Flex & Bison Linux Compiler Container",
        "objectives": [
          "Understand theoretical principles of lexical analyzer in c",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Lex & Yacc",
            "tag": "Compiler",
            "iconType": "terminal"
          },
          {
            "name": "Lexical Analysis",
            "tag": "Grammar",
            "iconType": "code"
          },
          {
            "name": "Code Generation",
            "tag": "Intermediate",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Lexical Analyzer in C",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Flex toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Lex/Yacc file (.l/.y)",
            "Parser output (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL607 Lexical Analyzer in C",
          "acceptedFormats": ".l,.y,.txt"
        },
        "sampleStarterCode": "%{\\n#include <stdio.h>\\n%}\\n%%\\n[0-9]+   { printf(\"NUMBER: %s\\\\n\", yytext); }\\n[a-zA-Z_][a-zA-Z0-9_]* { printf(\"IDENTIFIER: %s\\\\n\", yytext); }\\n.        { /* skip */ }\\n%%\\nint main() { yylex(); return 0; }\\nint yywrap() { return 1; }\\n",
        "initialExecutionCmd": "flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt",
        "initialExecutionOutput": "Tokens matched:\\nIDENTIFIER: total_count\\nOPERATOR: =\\nNUMBER: 450\\nLexical analysis completed: 0 errors.",
        "status": "Completed"
      },
      {
        "id": "pccsl607-exp02",
        "expNumber": 2,
        "title": "Lexical Analyzer Using LEX / Flex",
        "question": "Write a Lex specification file (.l) to count identifiers, numbers, and keywords, and validate email/URL patterns.",
        "durationMinutes": 45,
        "environment": "Flex & Bison Linux Compiler Container",
        "objectives": [
          "Understand theoretical principles of lexical analyzer using lex / flex",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Lex & Yacc",
            "tag": "Compiler",
            "iconType": "terminal"
          },
          {
            "name": "Lexical Analysis",
            "tag": "Grammar",
            "iconType": "code"
          },
          {
            "name": "Code Generation",
            "tag": "Intermediate",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Lexical Analyzer Using LEX / Flex",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Flex toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Lex/Yacc file (.l/.y)",
            "Parser output (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL607 Lexical Analyzer Using LEX / Flex",
          "acceptedFormats": ".l,.y,.txt"
        },
        "sampleStarterCode": "%{\\n#include <stdio.h>\\n%}\\n%%\\n[0-9]+   { printf(\"NUMBER: %s\\\\n\", yytext); }\\n[a-zA-Z_][a-zA-Z0-9_]* { printf(\"IDENTIFIER: %s\\\\n\", yytext); }\\n.        { /* skip */ }\\n%%\\nint main() { yylex(); return 0; }\\nint yywrap() { return 1; }\\n",
        "initialExecutionCmd": "flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt",
        "initialExecutionOutput": "Tokens matched:\\nIDENTIFIER: total_count\\nOPERATOR: =\\nNUMBER: 450\\nLexical analysis completed: 0 errors.",
        "status": "In Progress"
      },
      {
        "id": "pccsl607-exp03",
        "expNumber": 3,
        "title": "Syntax Analyzer Using YACC / Bison",
        "question": "Implement an arithmetic expression parser and calculator using Lex and Yacc supporting +, -, *, /, parentheses, and operator precedence.",
        "durationMinutes": 45,
        "environment": "Flex & Bison Linux Compiler Container",
        "objectives": [
          "Understand theoretical principles of syntax analyzer using yacc / bison",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Lex & Yacc",
            "tag": "Compiler",
            "iconType": "terminal"
          },
          {
            "name": "Lexical Analysis",
            "tag": "Grammar",
            "iconType": "code"
          },
          {
            "name": "Code Generation",
            "tag": "Intermediate",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Syntax Analyzer Using YACC / Bison",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Flex toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Lex/Yacc file (.l/.y)",
            "Parser output (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL607 Syntax Analyzer Using YACC / Bison",
          "acceptedFormats": ".l,.y,.txt"
        },
        "sampleStarterCode": "%{\\n#include <stdio.h>\\n%}\\n%%\\n[0-9]+   { printf(\"NUMBER: %s\\\\n\", yytext); }\\n[a-zA-Z_][a-zA-Z0-9_]* { printf(\"IDENTIFIER: %s\\\\n\", yytext); }\\n.        { /* skip */ }\\n%%\\nint main() { yylex(); return 0; }\\nint yywrap() { return 1; }\\n",
        "initialExecutionCmd": "flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt",
        "initialExecutionOutput": "Tokens matched:\\nIDENTIFIER: total_count\\nOPERATOR: =\\nNUMBER: 450\\nLexical analysis completed: 0 errors.",
        "status": "Ready"
      },
      {
        "id": "pccsl607-exp04",
        "expNumber": 4,
        "title": "Epsilon-NFA to NFA & NFA to DFA Conversion",
        "question": "Write a C/Python program to compute epsilon-closure of states and convert an NFA to an equivalent DFA.",
        "durationMinutes": 45,
        "environment": "Flex & Bison Linux Compiler Container",
        "objectives": [
          "Understand theoretical principles of epsilon-nfa to nfa & nfa to dfa conversion",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Lex & Yacc",
            "tag": "Compiler",
            "iconType": "terminal"
          },
          {
            "name": "Lexical Analysis",
            "tag": "Grammar",
            "iconType": "code"
          },
          {
            "name": "Code Generation",
            "tag": "Intermediate",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Epsilon-NFA to NFA & NFA to DFA Conversion",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Flex toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Lex/Yacc file (.l/.y)",
            "Parser output (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL607 Epsilon-NFA to NFA & NFA to DFA Conversion",
          "acceptedFormats": ".l,.y,.txt"
        },
        "sampleStarterCode": "%{\\n#include <stdio.h>\\n%}\\n%%\\n[0-9]+   { printf(\"NUMBER: %s\\\\n\", yytext); }\\n[a-zA-Z_][a-zA-Z0-9_]* { printf(\"IDENTIFIER: %s\\\\n\", yytext); }\\n.        { /* skip */ }\\n%%\\nint main() { yylex(); return 0; }\\nint yywrap() { return 1; }\\n",
        "initialExecutionCmd": "flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt",
        "initialExecutionOutput": "Tokens matched:\\nIDENTIFIER: total_count\\nOPERATOR: =\\nNUMBER: 450\\nLexical analysis completed: 0 errors.",
        "status": "Ready"
      },
      {
        "id": "pccsl607-exp05",
        "expNumber": 5,
        "title": "Recursive Descent & Shift-Reduce Parser",
        "question": "Implement a Recursive Descent Parser and a Shift-Reduce Parser for a given context-free grammar and trace the parse stack.",
        "durationMinutes": 45,
        "environment": "Flex & Bison Linux Compiler Container",
        "objectives": [
          "Understand theoretical principles of recursive descent & shift-reduce parser",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Lex & Yacc",
            "tag": "Compiler",
            "iconType": "terminal"
          },
          {
            "name": "Lexical Analysis",
            "tag": "Grammar",
            "iconType": "code"
          },
          {
            "name": "Code Generation",
            "tag": "Intermediate",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Recursive Descent & Shift-Reduce Parser",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Flex toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Lex/Yacc file (.l/.y)",
            "Parser output (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL607 Recursive Descent & Shift-Reduce Parser",
          "acceptedFormats": ".l,.y,.txt"
        },
        "sampleStarterCode": "%{\\n#include <stdio.h>\\n%}\\n%%\\n[0-9]+   { printf(\"NUMBER: %s\\\\n\", yytext); }\\n[a-zA-Z_][a-zA-Z0-9_]* { printf(\"IDENTIFIER: %s\\\\n\", yytext); }\\n.        { /* skip */ }\\n%%\\nint main() { yylex(); return 0; }\\nint yywrap() { return 1; }\\n",
        "initialExecutionCmd": "flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt",
        "initialExecutionOutput": "Tokens matched:\\nIDENTIFIER: total_count\\nOPERATOR: =\\nNUMBER: 450\\nLexical analysis completed: 0 errors.",
        "status": "Ready"
      },
      {
        "id": "pccsl607-exp06",
        "expNumber": 6,
        "title": "FIRST and FOLLOW Sets & LL(1) Parsing Table",
        "question": "Compute FIRST and FOLLOW sets for a grammar without left recursion and construct the LL(1) predictive parsing table.",
        "durationMinutes": 45,
        "environment": "Flex & Bison Linux Compiler Container",
        "objectives": [
          "Understand theoretical principles of first and follow sets & ll(1) parsing table",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Lex & Yacc",
            "tag": "Compiler",
            "iconType": "terminal"
          },
          {
            "name": "Lexical Analysis",
            "tag": "Grammar",
            "iconType": "code"
          },
          {
            "name": "Code Generation",
            "tag": "Intermediate",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for FIRST and FOLLOW Sets & LL(1) Parsing Table",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Flex toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Lex/Yacc file (.l/.y)",
            "Parser output (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL607 FIRST and FOLLOW Sets & LL(1) Parsing Table",
          "acceptedFormats": ".l,.y,.txt"
        },
        "sampleStarterCode": "%{\\n#include <stdio.h>\\n%}\\n%%\\n[0-9]+   { printf(\"NUMBER: %s\\\\n\", yytext); }\\n[a-zA-Z_][a-zA-Z0-9_]* { printf(\"IDENTIFIER: %s\\\\n\", yytext); }\\n.        { /* skip */ }\\n%%\\nint main() { yylex(); return 0; }\\nint yywrap() { return 1; }\\n",
        "initialExecutionCmd": "flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt",
        "initialExecutionOutput": "Tokens matched:\\nIDENTIFIER: total_count\\nOPERATOR: =\\nNUMBER: 450\\nLexical analysis completed: 0 errors.",
        "status": "Ready"
      },
      {
        "id": "pccsl607-exp07",
        "expNumber": 7,
        "title": "Intermediate Code Generation (Three-Address Code)",
        "question": "Convert arithmetic and assignment expressions into Three-Address Code (quadruples/triples).",
        "durationMinutes": 45,
        "environment": "Flex & Bison Linux Compiler Container",
        "objectives": [
          "Understand theoretical principles of intermediate code generation (three-address code)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Lex & Yacc",
            "tag": "Compiler",
            "iconType": "terminal"
          },
          {
            "name": "Lexical Analysis",
            "tag": "Grammar",
            "iconType": "code"
          },
          {
            "name": "Code Generation",
            "tag": "Intermediate",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Intermediate Code Generation (Three-Address Code)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Flex toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Lex/Yacc file (.l/.y)",
            "Parser output (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL607 Intermediate Code Generation (Three-Address Code)",
          "acceptedFormats": ".l,.y,.txt"
        },
        "sampleStarterCode": "%{\\n#include <stdio.h>\\n%}\\n%%\\n[0-9]+   { printf(\"NUMBER: %s\\\\n\", yytext); }\\n[a-zA-Z_][a-zA-Z0-9_]* { printf(\"IDENTIFIER: %s\\\\n\", yytext); }\\n.        { /* skip */ }\\n%%\\nint main() { yylex(); return 0; }\\nint yywrap() { return 1; }\\n",
        "initialExecutionCmd": "flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt",
        "initialExecutionOutput": "Tokens matched:\\nIDENTIFIER: total_count\\nOPERATOR: =\\nNUMBER: 450\\nLexical analysis completed: 0 errors.",
        "status": "Ready"
      },
      {
        "id": "pccsl607-exp08",
        "expNumber": 8,
        "title": "Single-Pass & Two-Pass Assembler Simulation",
        "question": "Implement Pass 1 and Pass 2 of a Two-Pass Assembler generating SYMTAB, intermediate file, and object code records.",
        "durationMinutes": 45,
        "environment": "Flex & Bison Linux Compiler Container",
        "objectives": [
          "Understand theoretical principles of single-pass & two-pass assembler simulation",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Lex & Yacc",
            "tag": "Compiler",
            "iconType": "terminal"
          },
          {
            "name": "Lexical Analysis",
            "tag": "Grammar",
            "iconType": "code"
          },
          {
            "name": "Code Generation",
            "tag": "Intermediate",
            "iconType": "cpu"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Single-Pass & Two-Pass Assembler Simulation",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Flex toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Lex/Yacc file (.l/.y)",
            "Parser output (.txt)"
          ],
          "description": "Upload required source files and execution logs for PCCSL607 Single-Pass & Two-Pass Assembler Simulation",
          "acceptedFormats": ".l,.y,.txt"
        },
        "sampleStarterCode": "%{\\n#include <stdio.h>\\n%}\\n%%\\n[0-9]+   { printf(\"NUMBER: %s\\\\n\", yytext); }\\n[a-zA-Z_][a-zA-Z0-9_]* { printf(\"IDENTIFIER: %s\\\\n\", yytext); }\\n.        { /* skip */ }\\n%%\\nint main() { yylex(); return 0; }\\nint yywrap() { return 1; }\\n",
        "initialExecutionCmd": "flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt",
        "initialExecutionOutput": "Tokens matched:\\nIDENTIFIER: total_count\\nOPERATOR: =\\nNUMBER: 450\\nLexical analysis completed: 0 errors.",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PBCST604",
    "title": "Fundamentals of Cyber Security",
    "semester": "S6",
    "credits": 4,
    "ltpr": "3-0-0-1",
    "evaluation": "CIA 50 / ESE 50",
    "category": "PC-PBL",
    "description": "Cryptographic algorithms, symmetric/asymmetric encryption, hashing, authentication, network vulnerability assessment, packet sniffing, and secure coding.",
    "topics": [
      "Classical & Modern Cryptography (DES/AES)",
      "Public-Key Infrastructure & RSA/ECC",
      "Cryptographic Hashes & Digital Signatures",
      "Vulnerability Audits, Sniffing & Firewalls"
    ],
    "experimentsCount": 5,
    "completedExperiments": 1,
    "progressPercentage": 20,
    "imageKey": "PBCST604",
    "experiments": [
      {
        "id": "pbcst604-exp01",
        "expNumber": 1,
        "title": "Classical & Modern Symmetric Cryptography",
        "question": "Implement Caesar, Vigenere, and AES-CBC encryption/decryption in Python, and demonstrate why ECB mode leaks plaintext patterns.",
        "durationMinutes": 45,
        "environment": "Kali Linux Security Sandbox",
        "objectives": [
          "Understand theoretical principles of classical & modern symmetric cryptography",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Cryptography",
            "tag": "RSA/AES",
            "iconType": "layers"
          },
          {
            "name": "Network Auditing",
            "tag": "Port Scan",
            "iconType": "terminal"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Classical & Modern Symmetric Cryptography",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Kali toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python/C script (.py/.c)",
            "Security Report (.pdf)"
          ],
          "description": "Upload required source files and execution logs for PBCST604 Classical & Modern Symmetric Cryptography",
          "acceptedFormats": ".py,.c,.pdf"
        },
        "sampleStarterCode": "# KTU PBCST604 Fundamentals of Cyber Security\\n# Symmetric & Asymmetric Cryptography implementation\\n",
        "initialExecutionCmd": "python3 security_test.py",
        "initialExecutionOutput": "2048-bit RSA Keypair generated.\\nPlaintext: \"KTU 2024 Scheme B.Tech CSE Practical\"\\nCiphertext: 4b29f0e137... (Encrypted)\\nDecrypted message: MATCHED successfully.",
        "status": "Completed"
      },
      {
        "id": "pbcst604-exp02",
        "expNumber": 2,
        "title": "Public-Key Cryptography & Hashing",
        "question": "Implement RSA key generation, encryption, and digital signature verification, and compare SHA-256 / bcrypt password hashing with salting.",
        "durationMinutes": 45,
        "environment": "Kali Linux Security Sandbox",
        "objectives": [
          "Understand theoretical principles of public-key cryptography & hashing",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Cryptography",
            "tag": "RSA/AES",
            "iconType": "layers"
          },
          {
            "name": "Network Auditing",
            "tag": "Port Scan",
            "iconType": "terminal"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Public-Key Cryptography & Hashing",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Kali toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python/C script (.py/.c)",
            "Security Report (.pdf)"
          ],
          "description": "Upload required source files and execution logs for PBCST604 Public-Key Cryptography & Hashing",
          "acceptedFormats": ".py,.c,.pdf"
        },
        "sampleStarterCode": "# KTU PBCST604 Fundamentals of Cyber Security\\n# Symmetric & Asymmetric Cryptography implementation\\n",
        "initialExecutionCmd": "python3 security_test.py",
        "initialExecutionOutput": "2048-bit RSA Keypair generated.\\nPlaintext: \"KTU 2024 Scheme B.Tech CSE Practical\"\\nCiphertext: 4b29f0e137... (Encrypted)\\nDecrypted message: MATCHED successfully.",
        "status": "In Progress"
      },
      {
        "id": "pbcst604-exp03",
        "expNumber": 3,
        "title": "Network Enumeration & Traffic Analysis (Isolated Sandbox)",
        "question": "Inside an isolated lab network, use nmap and tcpdump/Wireshark to enumerate open ports on a target container and identify unencrypted credentials.",
        "durationMinutes": 45,
        "environment": "Kali Linux Security Sandbox",
        "objectives": [
          "Understand theoretical principles of network enumeration & traffic analysis (isolated sandbox)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Cryptography",
            "tag": "RSA/AES",
            "iconType": "layers"
          },
          {
            "name": "Network Auditing",
            "tag": "Port Scan",
            "iconType": "terminal"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Network Enumeration & Traffic Analysis (Isolated Sandbox)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Kali toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python/C script (.py/.c)",
            "Security Report (.pdf)"
          ],
          "description": "Upload required source files and execution logs for PBCST604 Network Enumeration & Traffic Analysis (Isolated Sandbox)",
          "acceptedFormats": ".py,.c,.pdf"
        },
        "sampleStarterCode": "# KTU PBCST604 Fundamentals of Cyber Security\\n# Symmetric & Asymmetric Cryptography implementation\\n",
        "initialExecutionCmd": "python3 security_test.py",
        "initialExecutionOutput": "2048-bit RSA Keypair generated.\\nPlaintext: \"KTU 2024 Scheme B.Tech CSE Practical\"\\nCiphertext: 4b29f0e137... (Encrypted)\\nDecrypted message: MATCHED successfully.",
        "status": "Ready"
      },
      {
        "id": "pbcst604-exp04",
        "expNumber": 4,
        "title": "Web Application Vulnerabilities (SQLi & XSS)",
        "question": "Demonstrate SQL Injection and Reflected XSS on an intentionally vulnerable local demo app, then patch both using parameterized queries and output encoding.",
        "durationMinutes": 45,
        "environment": "Kali Linux Security Sandbox",
        "objectives": [
          "Understand theoretical principles of web application vulnerabilities (sqli & xss)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Cryptography",
            "tag": "RSA/AES",
            "iconType": "layers"
          },
          {
            "name": "Network Auditing",
            "tag": "Port Scan",
            "iconType": "terminal"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Web Application Vulnerabilities (SQLi & XSS)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Kali toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python/C script (.py/.c)",
            "Security Report (.pdf)"
          ],
          "description": "Upload required source files and execution logs for PBCST604 Web Application Vulnerabilities (SQLi & XSS)",
          "acceptedFormats": ".py,.c,.pdf"
        },
        "sampleStarterCode": "# KTU PBCST604 Fundamentals of Cyber Security\\n# Symmetric & Asymmetric Cryptography implementation\\n",
        "initialExecutionCmd": "python3 security_test.py",
        "initialExecutionOutput": "2048-bit RSA Keypair generated.\\nPlaintext: \"KTU 2024 Scheme B.Tech CSE Practical\"\\nCiphertext: 4b29f0e137... (Encrypted)\\nDecrypted message: MATCHED successfully.",
        "status": "Ready"
      },
      {
        "id": "pbcst604-exp05",
        "expNumber": 5,
        "title": "Linux Privilege & Container Hardening Audit",
        "question": "Build a defensive security tool or vulnerability scanner (e.g., Password Strength & Breach Auditor, Log Anomaly Detector, or Secure File Vault).",
        "durationMinutes": 45,
        "environment": "Kali Linux Security Sandbox",
        "objectives": [
          "Understand theoretical principles of linux privilege & container hardening audit",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Cryptography",
            "tag": "RSA/AES",
            "iconType": "layers"
          },
          {
            "name": "Network Auditing",
            "tag": "Port Scan",
            "iconType": "terminal"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Linux Privilege & Container Hardening Audit",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Kali toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Python/C script (.py/.c)",
            "Security Report (.pdf)"
          ],
          "description": "Upload required source files and execution logs for PBCST604 Linux Privilege & Container Hardening Audit",
          "acceptedFormats": ".py,.c,.pdf"
        },
        "sampleStarterCode": "# KTU PBCST604 Fundamentals of Cyber Security\\n# Symmetric & Asymmetric Cryptography implementation\\n",
        "initialExecutionCmd": "python3 security_test.py",
        "initialExecutionOutput": "2048-bit RSA Keypair generated.\\nPlaintext: \"KTU 2024 Scheme B.Tech CSE Practical\"\\nCiphertext: 4b29f0e137... (Encrypted)\\nDecrypted message: MATCHED successfully.",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PCCSP608",
    "title": "Mini Project: Socially Relevant Project",
    "semester": "S6",
    "credits": 2,
    "ltpr": "0-0-0-3",
    "evaluation": "CIA 50 / ESE 50",
    "category": "Project",
    "description": "Team-based design and implementation of a socially relevant software engineering solution solving problems in agriculture, healthcare, or education.",
    "topics": [
      "Problem Identification & Feasibility Study",
      "System Requirements Specification (SRS)",
      "Architectural & Database Design",
      "Implementation, Testing & Community Pilot"
    ],
    "experimentsCount": 8,
    "completedExperiments": 1,
    "progressPercentage": 13,
    "imageKey": "PCCSP608",
    "experiments": [
      {
        "id": "pccsp608-exp01",
        "expNumber": 1,
        "title": "Problem Identification & SRS Submission",
        "question": "Implement practical requirements for Problem Identification & SRS Submission.",
        "durationMinutes": 45,
        "environment": "Full-Stack Web & Mobile Sandbox",
        "objectives": [
          "Understand theoretical principles of problem identification & srs submission",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Architecture",
            "tag": "Full-Stack",
            "iconType": "code"
          },
          {
            "name": "Database & API",
            "tag": "Backend",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Problem Identification & SRS Submission",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Full-Stack toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Project Report (.pdf)",
            "Source code archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP608 Problem Identification & SRS Submission",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP608 Mini Project\\n# Socially Relevant Project Repository\\n",
        "initialExecutionCmd": "npm run test:all",
        "initialExecutionOutput": "Running project test suite...\\n✓ 18 unit tests passed\\n✓ API endpoints verified (HTTP 200 OK)\\n✓ Database migrations applied cleanly",
        "status": "Completed"
      },
      {
        "id": "pccsp608-exp02",
        "expNumber": 2,
        "title": "Identify a real-world community, campus, or accessibility problem. Submit a 2-page Problem Statement, Literature Survey, and Software Requirements Specification (SRS).",
        "question": "Implement practical requirements for Identify a real-world community, campus, or accessibility problem. Submit a 2-page Problem Statement, Literature Survey, and Software Requirements Specification (SRS)..",
        "durationMinutes": 45,
        "environment": "Full-Stack Web & Mobile Sandbox",
        "objectives": [
          "Understand theoretical principles of identify a real-world community, campus, or accessibility problem. submit a 2-page problem statement, literature survey, and software requirements specification (srs).",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Architecture",
            "tag": "Full-Stack",
            "iconType": "code"
          },
          {
            "name": "Database & API",
            "tag": "Backend",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Identify a real-world community, campus, or accessibility problem. Submit a 2-page Problem Statement, Literature Survey, and Software Requirements Specification (SRS).",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Full-Stack toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Project Report (.pdf)",
            "Source code archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP608 Identify a real-world community, campus, or accessibility problem. Submit a 2-page Problem Statement, Literature Survey, and Software Requirements Specification (SRS).",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP608 Mini Project\\n# Socially Relevant Project Repository\\n",
        "initialExecutionCmd": "npm run test:all",
        "initialExecutionOutput": "Running project test suite...\\n✓ 18 unit tests passed\\n✓ API endpoints verified (HTTP 200 OK)\\n✓ Database migrations applied cleanly",
        "status": "In Progress"
      },
      {
        "id": "pccsp608-exp02",
        "expNumber": 2,
        "title": "System Architecture & UI/UX Prototype",
        "question": "Implement practical requirements for System Architecture & UI/UX Prototype.",
        "durationMinutes": 45,
        "environment": "Full-Stack Web & Mobile Sandbox",
        "objectives": [
          "Understand theoretical principles of system architecture & ui/ux prototype",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Architecture",
            "tag": "Full-Stack",
            "iconType": "code"
          },
          {
            "name": "Database & API",
            "tag": "Backend",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for System Architecture & UI/UX Prototype",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Full-Stack toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Project Report (.pdf)",
            "Source code archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP608 System Architecture & UI/UX Prototype",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP608 Mini Project\\n# Socially Relevant Project Repository\\n",
        "initialExecutionCmd": "npm run test:all",
        "initialExecutionOutput": "Running project test suite...\\n✓ 18 unit tests passed\\n✓ API endpoints verified (HTTP 200 OK)\\n✓ Database migrations applied cleanly",
        "status": "Ready"
      },
      {
        "id": "pccsp608-exp04",
        "expNumber": 4,
        "title": "Design the system architecture diagram, database ER schema, API contracts, and interactive UI/UX wireframes.",
        "question": "Implement practical requirements for Design the system architecture diagram, database ER schema, API contracts, and interactive UI/UX wireframes..",
        "durationMinutes": 45,
        "environment": "Full-Stack Web & Mobile Sandbox",
        "objectives": [
          "Understand theoretical principles of design the system architecture diagram, database er schema, api contracts, and interactive ui/ux wireframes.",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Architecture",
            "tag": "Full-Stack",
            "iconType": "code"
          },
          {
            "name": "Database & API",
            "tag": "Backend",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Design the system architecture diagram, database ER schema, API contracts, and interactive UI/UX wireframes.",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Full-Stack toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Project Report (.pdf)",
            "Source code archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP608 Design the system architecture diagram, database ER schema, API contracts, and interactive UI/UX wireframes.",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP608 Mini Project\\n# Socially Relevant Project Repository\\n",
        "initialExecutionCmd": "npm run test:all",
        "initialExecutionOutput": "Running project test suite...\\n✓ 18 unit tests passed\\n✓ API endpoints verified (HTTP 200 OK)\\n✓ Database migrations applied cleanly",
        "status": "Ready"
      },
      {
        "id": "pccsp608-exp03",
        "expNumber": 3,
        "title": "Core Implementation & Integration",
        "question": "Implement practical requirements for Core Implementation & Integration.",
        "durationMinutes": 45,
        "environment": "Full-Stack Web & Mobile Sandbox",
        "objectives": [
          "Understand theoretical principles of core implementation & integration",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Architecture",
            "tag": "Full-Stack",
            "iconType": "code"
          },
          {
            "name": "Database & API",
            "tag": "Backend",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Core Implementation & Integration",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Full-Stack toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Project Report (.pdf)",
            "Source code archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP608 Core Implementation & Integration",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP608 Mini Project\\n# Socially Relevant Project Repository\\n",
        "initialExecutionCmd": "npm run test:all",
        "initialExecutionOutput": "Running project test suite...\\n✓ 18 unit tests passed\\n✓ API endpoints verified (HTTP 200 OK)\\n✓ Database migrations applied cleanly",
        "status": "Ready"
      },
      {
        "id": "pccsp608-exp06",
        "expNumber": 6,
        "title": "Implement the working MVP codebase with version control (Git), automated unit/integration tests, and clean documentation.",
        "question": "Implement practical requirements for Implement the working MVP codebase with version control (Git), automated unit/integration tests, and clean documentation..",
        "durationMinutes": 45,
        "environment": "Full-Stack Web & Mobile Sandbox",
        "objectives": [
          "Understand theoretical principles of implement the working mvp codebase with version control (git), automated unit/integration tests, and clean documentation.",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Architecture",
            "tag": "Full-Stack",
            "iconType": "code"
          },
          {
            "name": "Database & API",
            "tag": "Backend",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Implement the working MVP codebase with version control (Git), automated unit/integration tests, and clean documentation.",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Full-Stack toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Project Report (.pdf)",
            "Source code archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP608 Implement the working MVP codebase with version control (Git), automated unit/integration tests, and clean documentation.",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP608 Mini Project\\n# Socially Relevant Project Repository\\n",
        "initialExecutionCmd": "npm run test:all",
        "initialExecutionOutput": "Running project test suite...\\n✓ 18 unit tests passed\\n✓ API endpoints verified (HTTP 200 OK)\\n✓ Database migrations applied cleanly",
        "status": "Ready"
      },
      {
        "id": "pccsp608-exp04",
        "expNumber": 4,
        "title": "Final Demo, Report & Viva Voce",
        "question": "Implement practical requirements for Final Demo, Report & Viva Voce.",
        "durationMinutes": 45,
        "environment": "Full-Stack Web & Mobile Sandbox",
        "objectives": [
          "Understand theoretical principles of final demo, report & viva voce",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Architecture",
            "tag": "Full-Stack",
            "iconType": "code"
          },
          {
            "name": "Database & API",
            "tag": "Backend",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Final Demo, Report & Viva Voce",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Full-Stack toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Project Report (.pdf)",
            "Source code archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP608 Final Demo, Report & Viva Voce",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP608 Mini Project\\n# Socially Relevant Project Repository\\n",
        "initialExecutionCmd": "npm run test:all",
        "initialExecutionOutput": "Running project test suite...\\n✓ 18 unit tests passed\\n✓ API endpoints verified (HTTP 200 OK)\\n✓ Database migrations applied cleanly",
        "status": "Ready"
      },
      {
        "id": "pccsp608-exp08",
        "expNumber": 8,
        "title": "Present a live working demonstration of the socially relevant project, submit the bound project report, and complete the evaluation viva.",
        "question": "Implement practical requirements for Present a live working demonstration of the socially relevant project, submit the bound project report, and complete the evaluation viva..",
        "durationMinutes": 45,
        "environment": "Full-Stack Web & Mobile Sandbox",
        "objectives": [
          "Understand theoretical principles of present a live working demonstration of the socially relevant project, submit the bound project report, and complete the evaluation viva.",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Architecture",
            "tag": "Full-Stack",
            "iconType": "code"
          },
          {
            "name": "Database & API",
            "tag": "Backend",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Present a live working demonstration of the socially relevant project, submit the bound project report, and complete the evaluation viva.",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Full-Stack toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Project Report (.pdf)",
            "Source code archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP608 Present a live working demonstration of the socially relevant project, submit the bound project report, and complete the evaluation viva.",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP608 Mini Project\\n# Socially Relevant Project Repository\\n",
        "initialExecutionCmd": "npm run test:all",
        "initialExecutionOutput": "Running project test suite...\\n✓ 18 unit tests passed\\n✓ API endpoints verified (HTTP 200 OK)\\n✓ Database migrations applied cleanly",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PCCSS705",
    "title": "Seminar",
    "semester": "S7",
    "credits": 2,
    "ltpr": "0-0-3-0",
    "evaluation": "CIA 100",
    "category": "Seminar",
    "description": "Survey of modern research literature from IEEE, ACM, or Springer. Preparation of formal technical seminar report in LaTeX and technical presentation.",
    "topics": [
      "Literature Survey & Paper Selection",
      "Technical Synthesis & Report Writing (LaTeX)",
      "Slide Preparation & Presentation Skills",
      "Viva-Voce & Discussion Defense"
    ],
    "experimentsCount": 4,
    "completedExperiments": 1,
    "progressPercentage": 25,
    "imageKey": "PCCSS705",
    "experiments": [
      {
        "id": "pccss705-exp01",
        "expNumber": 1,
        "title": "Technical Topic Selection & IEEE Paper Shortlisting",
        "question": "Select an emerging topic in Computer Science (e.g., LLM Security, eBPF Observability, Confidential Computing, Federated Learning) and submit 3 recent IEEE/ACM base papers for faculty approval.",
        "durationMinutes": 45,
        "environment": "LaTeX / Overleaf Research Environment",
        "objectives": [
          "Understand theoretical principles of technical topic selection & ieee paper shortlisting",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Technical Review",
            "tag": "IEEE Paper",
            "iconType": "code"
          },
          {
            "name": "Presentation",
            "tag": "Seminar",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Technical Topic Selection & IEEE Paper Shortlisting",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using LaTeX toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Seminar Report (.pdf)",
            "Presentation Slides (.pdf/.pptx)"
          ],
          "description": "Upload required source files and execution logs for PCCSS705 Technical Topic Selection & IEEE Paper Shortlisting",
          "acceptedFormats": ".pdf,.pptx"
        },
        "sampleStarterCode": "% KTU PCCSS705 Seminar Report Template\\n\\documentclass[12pt,a4paper]{article}\\n\\begin{document}\\n\\title{Technical Seminar}\\n\\maketitle\\n\\end{document}\\n",
        "initialExecutionCmd": "pdflatex seminar_report.tex",
        "initialExecutionOutput": "Output written on seminar_report.pdf (18 pages, 42080 bytes).\\nReferences and citations verified from IEEE Xplore.",
        "status": "Completed"
      },
      {
        "id": "pccss705-exp02",
        "expNumber": 2,
        "title": "Abstract & Technical Literature Review",
        "question": "Submit a 1-page structured abstract summarizing the problem, methodology, and comparative benchmarks of the selected paper.",
        "durationMinutes": 45,
        "environment": "LaTeX / Overleaf Research Environment",
        "objectives": [
          "Understand theoretical principles of abstract & technical literature review",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Technical Review",
            "tag": "IEEE Paper",
            "iconType": "code"
          },
          {
            "name": "Presentation",
            "tag": "Seminar",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Abstract & Technical Literature Review",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using LaTeX toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Seminar Report (.pdf)",
            "Presentation Slides (.pdf/.pptx)"
          ],
          "description": "Upload required source files and execution logs for PCCSS705 Abstract & Technical Literature Review",
          "acceptedFormats": ".pdf,.pptx"
        },
        "sampleStarterCode": "% KTU PCCSS705 Seminar Report Template\\n\\documentclass[12pt,a4paper]{article}\\n\\begin{document}\\n\\title{Technical Seminar}\\n\\maketitle\\n\\end{document}\\n",
        "initialExecutionCmd": "pdflatex seminar_report.tex",
        "initialExecutionOutput": "Output written on seminar_report.pdf (18 pages, 42080 bytes).\\nReferences and citations verified from IEEE Xplore.",
        "status": "In Progress"
      },
      {
        "id": "pccss705-exp03",
        "expNumber": 3,
        "title": "Presentation Deck & Live Seminar Talk",
        "question": "Prepare a 15-slide technical presentation and deliver a 15-minute seminar followed by Q&A.",
        "durationMinutes": 45,
        "environment": "LaTeX / Overleaf Research Environment",
        "objectives": [
          "Understand theoretical principles of presentation deck & live seminar talk",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Technical Review",
            "tag": "IEEE Paper",
            "iconType": "code"
          },
          {
            "name": "Presentation",
            "tag": "Seminar",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Presentation Deck & Live Seminar Talk",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using LaTeX toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Seminar Report (.pdf)",
            "Presentation Slides (.pdf/.pptx)"
          ],
          "description": "Upload required source files and execution logs for PCCSS705 Presentation Deck & Live Seminar Talk",
          "acceptedFormats": ".pdf,.pptx"
        },
        "sampleStarterCode": "% KTU PCCSS705 Seminar Report Template\\n\\documentclass[12pt,a4paper]{article}\\n\\begin{document}\\n\\title{Technical Seminar}\\n\\maketitle\\n\\end{document}\\n",
        "initialExecutionCmd": "pdflatex seminar_report.tex",
        "initialExecutionOutput": "Output written on seminar_report.pdf (18 pages, 42080 bytes).\\nReferences and citations verified from IEEE Xplore.",
        "status": "Ready"
      },
      {
        "id": "pccss705-exp04",
        "expNumber": 4,
        "title": "Final Seminar Report (LaTeX / PDF)",
        "question": "Submit the formatted seminar report with proper IEEE citations, architecture diagrams, and critical analysis.",
        "durationMinutes": 45,
        "environment": "LaTeX / Overleaf Research Environment",
        "objectives": [
          "Understand theoretical principles of final seminar report (latex / pdf)",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Technical Review",
            "tag": "IEEE Paper",
            "iconType": "code"
          },
          {
            "name": "Presentation",
            "tag": "Seminar",
            "iconType": "layers"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Final Seminar Report (LaTeX / PDF)",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using LaTeX toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Seminar Report (.pdf)",
            "Presentation Slides (.pdf/.pptx)"
          ],
          "description": "Upload required source files and execution logs for PCCSS705 Final Seminar Report (LaTeX / PDF)",
          "acceptedFormats": ".pdf,.pptx"
        },
        "sampleStarterCode": "% KTU PCCSS705 Seminar Report Template\\n\\documentclass[12pt,a4paper]{article}\\n\\begin{document}\\n\\title{Technical Seminar}\\n\\maketitle\\n\\end{document}\\n",
        "initialExecutionCmd": "pdflatex seminar_report.tex",
        "initialExecutionOutput": "Output written on seminar_report.pdf (18 pages, 42080 bytes).\\nReferences and citations verified from IEEE Xplore.",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PCCSP706",
    "title": "Major Project Phase I / Internship",
    "semester": "S7",
    "credits": 4,
    "ltpr": "0-0-0-8",
    "evaluation": "CIA 100",
    "category": "Project",
    "description": "Phase I of capstone engineering project or 6-month industry internship: Literature review, problem formulation, SRS, system architecture design, and initial prototype.",
    "topics": [
      "Problem Statement & Novelty Statement",
      "SRS & High-Level Architectural Design",
      "Prototype Development & Proof of Concept",
      "Phase I Progress Defense & Review Evaluation"
    ],
    "experimentsCount": 6,
    "completedExperiments": 1,
    "progressPercentage": 17,
    "imageKey": "PCCSP706",
    "experiments": [
      {
        "id": "pccsp706-exp01",
        "expNumber": 1,
        "title": "Project Synopsis & Feasibility Study",
        "question": "Submit team roles, problem statement, novelty, and tech stack justification.",
        "durationMinutes": 45,
        "environment": "Capstone Project Workspace",
        "objectives": [
          "Understand theoretical principles of project synopsis & feasibility study",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Design",
            "tag": "Architecture",
            "iconType": "layers"
          },
          {
            "name": "Prototyping",
            "tag": "Phase I",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Project Synopsis & Feasibility Study",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Capstone toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Phase I Report (.pdf)",
            "Prototype code (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP706 Project Synopsis & Feasibility Study",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP706 Major Project Phase I\\n",
        "initialExecutionCmd": "./validate_prototype.sh",
        "initialExecutionOutput": "Phase I Architecture verified.\\nCore module implementation: 55% complete.\\nInterim presentation approved.",
        "status": "Completed"
      },
      {
        "id": "pccsp706-exp02",
        "expNumber": 2,
        "title": "Zero-th & First Review",
        "question": "Present system architecture, dataset/API design, and proof-of-concept prototype.",
        "durationMinutes": 45,
        "environment": "Capstone Project Workspace",
        "objectives": [
          "Understand theoretical principles of zero-th & first review",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Design",
            "tag": "Architecture",
            "iconType": "layers"
          },
          {
            "name": "Prototyping",
            "tag": "Phase I",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Zero-th & First Review",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Capstone toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Phase I Report (.pdf)",
            "Prototype code (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP706 Zero-th & First Review",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP706 Major Project Phase I\\n",
        "initialExecutionCmd": "./validate_prototype.sh",
        "initialExecutionOutput": "Phase I Architecture verified.\\nCore module implementation: 55% complete.\\nInterim presentation approved.",
        "status": "In Progress"
      },
      {
        "id": "pccsp706-exp03",
        "expNumber": 3,
        "title": "Second Review",
        "question": "Demonstrate 50% core module implementation, security/performance baseline, and Phase I progress report.",
        "durationMinutes": 45,
        "environment": "Capstone Project Workspace",
        "objectives": [
          "Understand theoretical principles of second review",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Design",
            "tag": "Architecture",
            "iconType": "layers"
          },
          {
            "name": "Prototyping",
            "tag": "Phase I",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Second Review",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Capstone toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Phase I Report (.pdf)",
            "Prototype code (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP706 Second Review",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP706 Major Project Phase I\\n",
        "initialExecutionCmd": "./validate_prototype.sh",
        "initialExecutionOutput": "Phase I Architecture verified.\\nCore module implementation: 55% complete.\\nInterim presentation approved.",
        "status": "Ready"
      },
      {
        "id": "pccsp706-exp01",
        "expNumber": 1,
        "title": "Offer Letter & Company Mentor Mapping",
        "question": "Submit verified internship offer and supervisor details.",
        "durationMinutes": 45,
        "environment": "Capstone Project Workspace",
        "objectives": [
          "Understand theoretical principles of offer letter & company mentor mapping",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Design",
            "tag": "Architecture",
            "iconType": "layers"
          },
          {
            "name": "Prototyping",
            "tag": "Phase I",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Offer Letter & Company Mentor Mapping",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Capstone toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Phase I Report (.pdf)",
            "Prototype code (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP706 Offer Letter & Company Mentor Mapping",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP706 Major Project Phase I\\n",
        "initialExecutionCmd": "./validate_prototype.sh",
        "initialExecutionOutput": "Phase I Architecture verified.\\nCore module implementation: 55% complete.\\nInterim presentation approved.",
        "status": "Ready"
      },
      {
        "id": "pccsp706-exp02",
        "expNumber": 2,
        "title": "Bi-Weekly Activity Logs",
        "question": "Log engineering tasks, pull requests, and technical learnings.",
        "durationMinutes": 45,
        "environment": "Capstone Project Workspace",
        "objectives": [
          "Understand theoretical principles of bi-weekly activity logs",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Design",
            "tag": "Architecture",
            "iconType": "layers"
          },
          {
            "name": "Prototyping",
            "tag": "Phase I",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Bi-Weekly Activity Logs",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Capstone toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Phase I Report (.pdf)",
            "Prototype code (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP706 Bi-Weekly Activity Logs",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP706 Major Project Phase I\\n",
        "initialExecutionCmd": "./validate_prototype.sh",
        "initialExecutionOutput": "Phase I Architecture verified.\\nCore module implementation: 55% complete.\\nInterim presentation approved.",
        "status": "Ready"
      },
      {
        "id": "pccsp706-exp03",
        "expNumber": 3,
        "title": "Final Internship Report & Evaluation",
        "question": "Submit completion certificate, technical report, and deliver final review presentation.",
        "durationMinutes": 45,
        "environment": "Capstone Project Workspace",
        "objectives": [
          "Understand theoretical principles of final internship report & evaluation",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "System Design",
            "tag": "Architecture",
            "iconType": "layers"
          },
          {
            "name": "Prototyping",
            "tag": "Phase I",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Final Internship Report & Evaluation",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Capstone toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Phase I Report (.pdf)",
            "Prototype code (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP706 Final Internship Report & Evaluation",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP706 Major Project Phase I\\n",
        "initialExecutionCmd": "./validate_prototype.sh",
        "initialExecutionOutput": "Phase I Architecture verified.\\nCore module implementation: 55% complete.\\nInterim presentation approved.",
        "status": "Ready"
      }
    ]
  },
  {
    "code": "PCCSP806",
    "title": "Major Project Phase II / Internship",
    "semester": "S8",
    "credits": 4,
    "ltpr": "0-0-0-8",
    "evaluation": "CIA 70 / ESE 30",
    "category": "Project",
    "description": "Phase II full product deployment, comprehensive integration testing, performance benchmarking, research publication draft, and final viva-voce thesis defense.",
    "topics": [
      "Full-System Integration & Optimization",
      "Performance Benchmarking & Security Audits",
      "Research Paper Draft / Patent Filing",
      "Final Thesis Defense & Demonstration"
    ],
    "experimentsCount": 5,
    "completedExperiments": 1,
    "progressPercentage": 20,
    "imageKey": "PCCSP806",
    "experiments": [
      {
        "id": "pccsp806-exp01",
        "expNumber": 1,
        "title": "Full System Integration & Testing",
        "question": "Complete all remaining modules, end-to-end testing, load/security validation, and deployment.",
        "durationMinutes": 45,
        "environment": "Production Cloud Sandbox",
        "objectives": [
          "Understand theoretical principles of full system integration & testing",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Cloud Deployment",
            "tag": "Kubernetes",
            "iconType": "layers"
          },
          {
            "name": "Thesis Defense",
            "tag": "Viva",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Full System Integration & Testing",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Production toolchain",
            "completed": true
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Final B.Tech Thesis (.pdf)",
            "Complete Source Archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP806 Full System Integration & Testing",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP806 Major Project Phase II\\n",
        "initialExecutionCmd": "./verify_production_release.sh",
        "initialExecutionOutput": "All production microservices deployed.\\nLoad test: 10,000 requests/sec, 0 error rate.\\nFinal thesis report ready for external examination.",
        "status": "Completed"
      },
      {
        "id": "pccsp806-exp02",
        "expNumber": 2,
        "title": "Publication / Patent / Demo Readiness",
        "question": "Prepare conference/journal paper draft or open-source release documentation.",
        "durationMinutes": 45,
        "environment": "Production Cloud Sandbox",
        "objectives": [
          "Understand theoretical principles of publication / patent / demo readiness",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Cloud Deployment",
            "tag": "Kubernetes",
            "iconType": "layers"
          },
          {
            "name": "Thesis Defense",
            "tag": "Viva",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Publication / Patent / Demo Readiness",
            "completed": true
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Production toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Final B.Tech Thesis (.pdf)",
            "Complete Source Archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP806 Publication / Patent / Demo Readiness",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP806 Major Project Phase II\\n",
        "initialExecutionCmd": "./verify_production_release.sh",
        "initialExecutionOutput": "All production microservices deployed.\\nLoad test: 10,000 requests/sec, 0 error rate.\\nFinal thesis report ready for external examination.",
        "status": "In Progress"
      },
      {
        "id": "pccsp806-exp03",
        "expNumber": 3,
        "title": "Final External Viva & Thesis Submission",
        "question": "Deliver final live product demo and submit the complete B.Tech Project Thesis.",
        "durationMinutes": 45,
        "environment": "Production Cloud Sandbox",
        "objectives": [
          "Understand theoretical principles of final external viva & thesis submission",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Cloud Deployment",
            "tag": "Kubernetes",
            "iconType": "layers"
          },
          {
            "name": "Thesis Defense",
            "tag": "Viva",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Final External Viva & Thesis Submission",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Production toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Final B.Tech Thesis (.pdf)",
            "Complete Source Archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP806 Final External Viva & Thesis Submission",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP806 Major Project Phase II\\n",
        "initialExecutionCmd": "./verify_production_release.sh",
        "initialExecutionOutput": "All production microservices deployed.\\nLoad test: 10,000 requests/sec, 0 error rate.\\nFinal thesis report ready for external examination.",
        "status": "Ready"
      },
      {
        "id": "pccsp806-exp01",
        "expNumber": 1,
        "title": "Mid-Term & Final Industry Mentor Evaluation",
        "question": "Submit supervisor feedback and performance rubric.",
        "durationMinutes": 45,
        "environment": "Production Cloud Sandbox",
        "objectives": [
          "Understand theoretical principles of mid-term & final industry mentor evaluation",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Cloud Deployment",
            "tag": "Kubernetes",
            "iconType": "layers"
          },
          {
            "name": "Thesis Defense",
            "tag": "Viva",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Mid-Term & Final Industry Mentor Evaluation",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Production toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Final B.Tech Thesis (.pdf)",
            "Complete Source Archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP806 Mid-Term & Final Industry Mentor Evaluation",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP806 Major Project Phase II\\n",
        "initialExecutionCmd": "./verify_production_release.sh",
        "initialExecutionOutput": "All production microservices deployed.\\nLoad test: 10,000 requests/sec, 0 error rate.\\nFinal thesis report ready for external examination.",
        "status": "Ready"
      },
      {
        "id": "pccsp806-exp02",
        "expNumber": 2,
        "title": "Final Technical Report & Defense",
        "question": "Present architecture, deliverables, and engineering impact to the department panel.",
        "durationMinutes": 45,
        "environment": "Production Cloud Sandbox",
        "objectives": [
          "Understand theoretical principles of final technical report & defense",
          "Implement and test laboratory solution matching KTU 2024 Scheme requirements"
        ],
        "practiceSkills": [
          {
            "name": "Cloud Deployment",
            "tag": "Kubernetes",
            "iconType": "layers"
          },
          {
            "name": "Thesis Defense",
            "tag": "Viva",
            "iconType": "code"
          }
        ],
        "checklistSteps": [
          {
            "id": "s1",
            "stepNumber": 1,
            "label": "Design algorithm & write implementation for Final Technical Report & Defense",
            "completed": false
          },
          {
            "id": "s2",
            "stepNumber": 2,
            "label": "Compile, link & debug using Production toolchain",
            "completed": false
          },
          {
            "id": "s3",
            "stepNumber": 3,
            "label": "Demonstrate output on terminal & run KTU auto-checks",
            "completed": false
          }
        ],
        "submissionRequirements": {
          "fileTypes": [
            "1 Final B.Tech Thesis (.pdf)",
            "Complete Source Archive (.zip)"
          ],
          "description": "Upload required source files and execution logs for PCCSP806 Final Technical Report & Defense",
          "acceptedFormats": ".pdf,.zip"
        },
        "sampleStarterCode": "# KTU PCCSP806 Major Project Phase II\\n",
        "initialExecutionCmd": "./verify_production_release.sh",
        "initialExecutionOutput": "All production microservices deployed.\\nLoad test: 10,000 requests/sec, 0 error rate.\\nFinal thesis report ready for external examination.",
        "status": "Ready"
      }
    ]
  }
];

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
