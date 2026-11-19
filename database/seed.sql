-- ==============================================================================
-- CampusLab Automated PostgreSQL Seed Script
-- APJ Abdul Kalam Technological University (KTU) 2024 Scheme - B.Tech CSE
-- ==============================================================================

-- 1. DEMO USERS
INSERT INTO users (id, admission_number, ktu_reg_id, email, hashed_password, name, role, current_semester, department, college_id)
VALUES ('11111111-1111-1111-1111-111111111111', '24CS0142', 'TVE24CS042', 'adarsh.s@campuslab.edu', 'pbkdf2:sha256:100000$campuslab_salt_ktu2024$73d28206f0c33301c49a659c6267b1c062106b1deca668deb47ca5049fc6066e', 'Adarsh S', 'student'::user_role_enum, 'S4'::semester_enum, 'Computer Science & Engineering', 'CET_KTU')
ON CONFLICT (admission_number) DO UPDATE SET hashed_password = EXCLUDED.hashed_password, name = EXCLUDED.name, email = EXCLUDED.email;

INSERT INTO users (id, admission_number, ktu_reg_id, email, hashed_password, name, role, current_semester, department, college_id)
VALUES ('22222222-2222-2222-2222-222222222222', 'FAC081', 'KTUFAC081', 'priya.k@campuslab.edu', 'pbkdf2:sha256:100000$campuslab_salt_ktu2024$73d28206f0c33301c49a659c6267b1c062106b1deca668deb47ca5049fc6066e', 'Dr. Priya K.', 'faculty'::user_role_enum, 'S4'::semester_enum, 'Computer Science & Engineering', 'CET_KTU')
ON CONFLICT (admission_number) DO UPDATE SET hashed_password = EXCLUDED.hashed_password, name = EXCLUDED.name, email = EXCLUDED.email;

INSERT INTO users (id, admission_number, ktu_reg_id, email, hashed_password, name, role, current_semester, department, college_id)
VALUES ('33333333-3333-3333-3333-333333333333', 'ADM001', 'KTUADM001', 'admin@campuslab.edu', 'pbkdf2:sha256:100000$campuslab_salt_ktu2024$fbb49c2d6d33751b2eb7d2ac67f0d69094c15c611028e34d0d73d2bca254e99f', 'CampusLab Administrator', 'admin'::user_role_enum, 'S4'::semester_enum, 'Computer Science & Engineering', 'CET_KTU')
ON CONFLICT (admission_number) DO UPDATE SET hashed_password = EXCLUDED.hashed_password, name = EXCLUDED.name, email = EXCLUDED.email;

-- 2. USER SETTINGS
INSERT INTO user_settings (user_id, terminal_theme, font_size, auto_reconnect, copy_on_select, deadline_reminders, grade_alerts)
VALUES ('11111111-1111-1111-1111-111111111111', 'campusslate', 14, TRUE, TRUE, TRUE, TRUE)
ON CONFLICT (user_id) DO NOTHING;

-- 3. WORKER NODES
INSERT INTO worker_nodes (id, hostname, ip_address, port, status, active_containers, max_containers, cpu_utilization_pct, memory_utilization_pct)
VALUES ('44444444-4444-4444-4444-444444444444', 'worker-ec2-ap-south-1a.internal', '10.0.2.45', 8001, 'HEALTHY', 1, 30, 18.5, 34.2)
ON CONFLICT (hostname) DO NOTHING;

-- 4. COURSES & EXPERIMENTS
INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('3595b96e-fb6e-5da1-864e-52d0c3c48287', 'UCEST105', 'Algorithmic Thinking with Python', 'S1'::semester_enum, 2, '0-0-2-0', 'CIA 50 / ESE 50', 'ESC Practical', 'Foundations of computational problem solving using Python. Data types, loops, functions, file handling, and modular programming.', '["Computational Logic & Flowcharts", "Control Flow & Nested Loops", "Lists, Dictionaries & Tuples", "File Processing & Modules"]'::jsonb, 'UCEST105')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '484aaefe-04ea-53e8-a131-ea7c598c5675', '3595b96e-fb6e-5da1-864e-52d0c3c48287', 'ucest105-exp01', 1,
    'Algorithms, Flowcharts & Basic I/O', 'Write a Python program to read a student''s name, admission number, and marks in 5 subjects, compute the total, percentage, and grade using conditional branching, and print a formatted mark sheet.', 45, 'Python 3.12 Linux Sandbox',
    '["Understand theoretical principles of algorithms, flowcharts & basic i/o", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python 3", "tag": "Syntax", "iconType": "python"}, {"name": "Control Flow", "tag": "Logic", "iconType": "code"}, {"name": "Algorithms", "tag": "Core", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Algorithms, Flowcharts & Basic I/O", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Python toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python file (.py)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for UCEST105 Algorithms, Flowcharts & Basic I/O", "acceptedFormats": ".py,.png,.jpg"}'::jsonb,
    '#!/usr/bin/env python3\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\n\ndef main():\n    print("CampusLab Python 3.12 Sandbox Ready")\n\nif __name__ == "__main__":\n    main()\n', 'python3 solution.py', 'Python 3.12.3 [Ubuntu Linux]\nExecuting solution.py...\nInput processed: [Success]\nOutput: Solution verified for all KTU test vectors.\nExit code: 0', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '765d5e4c-6b46-5825-b50d-02f9b4efff79', '3595b96e-fb6e-5da1-864e-52d0c3c48287', 'ucest105-exp02', 2,
    'Control Structures & Number Theory', 'Implement a menu-driven Python program to check whether a number is prime, Armstrong, or palindrome, and generate the Fibonacci sequence up to N terms.', 45, 'Python 3.12 Linux Sandbox',
    '["Understand theoretical principles of control structures & number theory", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python 3", "tag": "Syntax", "iconType": "python"}, {"name": "Control Flow", "tag": "Logic", "iconType": "code"}, {"name": "Algorithms", "tag": "Core", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Control Structures & Number Theory", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Python toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python file (.py)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for UCEST105 Control Structures & Number Theory", "acceptedFormats": ".py,.png,.jpg"}'::jsonb,
    '#!/usr/bin/env python3\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\n\ndef main():\n    print("CampusLab Python 3.12 Sandbox Ready")\n\nif __name__ == "__main__":\n    main()\n', 'python3 solution.py', 'Python 3.12.3 [Ubuntu Linux]\nExecuting solution.py...\nInput processed: [Success]\nOutput: Solution verified for all KTU test vectors.\nExit code: 0', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '08e0ffe0-9d70-546d-9ede-b11a85e5fac2', '3595b96e-fb6e-5da1-864e-52d0c3c48287', 'ucest105-exp03', 3,
    'Functions & Modular Problem Solving', 'Write Python functions to compute nCr (combinations) and GCD/LCM of two integers without using built-in math library helpers.', 45, 'Python 3.12 Linux Sandbox',
    '["Understand theoretical principles of functions & modular problem solving", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python 3", "tag": "Syntax", "iconType": "python"}, {"name": "Control Flow", "tag": "Logic", "iconType": "code"}, {"name": "Algorithms", "tag": "Core", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Functions & Modular Problem Solving", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Python toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python file (.py)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for UCEST105 Functions & Modular Problem Solving", "acceptedFormats": ".py,.png,.jpg"}'::jsonb,
    '#!/usr/bin/env python3\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\n\ndef main():\n    print("CampusLab Python 3.12 Sandbox Ready")\n\nif __name__ == "__main__":\n    main()\n', 'python3 solution.py', 'Python 3.12.3 [Ubuntu Linux]\nExecuting solution.py...\nInput processed: [Success]\nOutput: Solution verified for all KTU test vectors.\nExit code: 0', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'd4bd59fc-e549-51fe-a0e4-8d26003e1e33', '3595b96e-fb6e-5da1-864e-52d0c3c48287', 'ucest105-exp04', 4,
    'String Manipulation & Pattern Matching', 'Given a paragraph of text, write a Python script to count vowels, consonants, digits, and word frequencies, and check whether each word is a palindrome.', 45, 'Python 3.12 Linux Sandbox',
    '["Understand theoretical principles of string manipulation & pattern matching", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python 3", "tag": "Syntax", "iconType": "python"}, {"name": "Control Flow", "tag": "Logic", "iconType": "code"}, {"name": "Algorithms", "tag": "Core", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for String Manipulation & Pattern Matching", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Python toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python file (.py)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for UCEST105 String Manipulation & Pattern Matching", "acceptedFormats": ".py,.png,.jpg"}'::jsonb,
    '#!/usr/bin/env python3\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\n\ndef main():\n    print("CampusLab Python 3.12 Sandbox Ready")\n\nif __name__ == "__main__":\n    main()\n', 'python3 solution.py', 'Python 3.12.3 [Ubuntu Linux]\nExecuting solution.py...\nInput processed: [Success]\nOutput: Solution verified for all KTU test vectors.\nExit code: 0', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '02c4da3e-99ac-5b9d-9ea7-224bfe42f7d9', '3595b96e-fb6e-5da1-864e-52d0c3c48287', 'ucest105-exp05', 5,
    'Lists, Tuples & Searching/Sorting', 'Implement Linear Search, Binary Search, and Bubble Sort on a list of integer roll numbers. Display step-by-step pass results.', 45, 'Python 3.12 Linux Sandbox',
    '["Understand theoretical principles of lists, tuples & searching/sorting", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python 3", "tag": "Syntax", "iconType": "python"}, {"name": "Control Flow", "tag": "Logic", "iconType": "code"}, {"name": "Algorithms", "tag": "Core", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Lists, Tuples & Searching/Sorting", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Python toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python file (.py)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for UCEST105 Lists, Tuples & Searching/Sorting", "acceptedFormats": ".py,.png,.jpg"}'::jsonb,
    '#!/usr/bin/env python3\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\n\ndef main():\n    print("CampusLab Python 3.12 Sandbox Ready")\n\nif __name__ == "__main__":\n    main()\n', 'python3 solution.py', 'Python 3.12.3 [Ubuntu Linux]\nExecuting solution.py...\nInput processed: [Success]\nOutput: Solution verified for all KTU test vectors.\nExit code: 0', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '6b0daa1a-5aef-5241-8ae0-0c5026bf7d88', '3595b96e-fb6e-5da1-864e-52d0c3c48287', 'ucest105-exp06', 6,
    'Sets & Dictionaries', 'Build a mini student attendance tracker using Python dictionaries and sets to find students present in all lab sessions and students absent in at least one session.', 45, 'Python 3.12 Linux Sandbox',
    '["Understand theoretical principles of sets & dictionaries", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python 3", "tag": "Syntax", "iconType": "python"}, {"name": "Control Flow", "tag": "Logic", "iconType": "code"}, {"name": "Algorithms", "tag": "Core", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Sets & Dictionaries", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Python toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python file (.py)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for UCEST105 Sets & Dictionaries", "acceptedFormats": ".py,.png,.jpg"}'::jsonb,
    '#!/usr/bin/env python3\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\n\ndef main():\n    print("CampusLab Python 3.12 Sandbox Ready")\n\nif __name__ == "__main__":\n    main()\n', 'python3 solution.py', 'Python 3.12.3 [Ubuntu Linux]\nExecuting solution.py...\nInput processed: [Success]\nOutput: Solution verified for all KTU test vectors.\nExit code: 0', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'ccaad554-1362-57c7-a235-9496286eafa4', '3595b96e-fb6e-5da1-864e-52d0c3c48287', 'ucest105-exp07', 7,
    'Recursive Thinking', 'Write recursive Python functions for Tower of Hanoi (N disks), factorial, and binary search, and trace the recursion call depth.', 45, 'Python 3.12 Linux Sandbox',
    '["Understand theoretical principles of recursive thinking", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python 3", "tag": "Syntax", "iconType": "python"}, {"name": "Control Flow", "tag": "Logic", "iconType": "code"}, {"name": "Algorithms", "tag": "Core", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Recursive Thinking", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Python toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python file (.py)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for UCEST105 Recursive Thinking", "acceptedFormats": ".py,.png,.jpg"}'::jsonb,
    '#!/usr/bin/env python3\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\n\ndef main():\n    print("CampusLab Python 3.12 Sandbox Ready")\n\nif __name__ == "__main__":\n    main()\n', 'python3 solution.py', 'Python 3.12.3 [Ubuntu Linux]\nExecuting solution.py...\nInput processed: [Success]\nOutput: Solution verified for all KTU test vectors.\nExit code: 0', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '39795933-3abb-5ef2-b36d-42ef8ecfcef3', '3595b96e-fb6e-5da1-864e-52d0c3c48287', 'ucest105-exp08', 8,
    'File Handling & Exception Safety', 'Read student records from a CSV/text file, compute average marks, handle missing/invalid records with try-except blocks, and write the summary report to output.txt.', 45, 'Python 3.12 Linux Sandbox',
    '["Understand theoretical principles of file handling & exception safety", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python 3", "tag": "Syntax", "iconType": "python"}, {"name": "Control Flow", "tag": "Logic", "iconType": "code"}, {"name": "Algorithms", "tag": "Core", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for File Handling & Exception Safety", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Python toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python file (.py)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for UCEST105 File Handling & Exception Safety", "acceptedFormats": ".py,.png,.jpg"}'::jsonb,
    '#!/usr/bin/env python3\n# KTU 2024 Scheme - UCEST105 Algorithmic Thinking with Python\n\ndef main():\n    print("CampusLab Python 3.12 Sandbox Ready")\n\nif __name__ == "__main__":\n    main()\n', 'python3 solution.py', 'Python 3.12.3 [Ubuntu Linux]\nExecuting solution.py...\nInput processed: [Success]\nOutput: Solution verified for all KTU test vectors.\nExit code: 0', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('3520ebf6-687a-582e-a5fc-f6d080eb47f4', 'GXESL106', 'Basic Electrical & Electronics Engineering Workshop', 'S1'::semester_enum, 1, '0-0-2-0', 'CIA 50 / ESE 50', 'ESC Practical', 'Hands-on training in basic electrical wiring, electronic soldering, circuit breadboarding, measuring instruments, and component testing.', '["Staircase & Godown Wiring", "Soldering Practice & PCB", "Multimeter & CRO Operation", "Electronic Component Testing"]'::jsonb, 'GXESL106')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '8b4111f1-c19d-5553-9f6b-fda5264f0183', '3520ebf6-687a-582e-a5fc-f6d080eb47f4', 'gxesl106-exp01', 1,
    'Familiarization of Electrical Wiring Tools & Safety', 'Identify standard electrical wiring tools, MCB, ELCB/RCCB, fuses, and earthing components. Document ratings and safety precautions.', 45, 'Electrical & Electronics Virtual Lab Bench',
    '["Understand theoretical principles of familiarization of electrical wiring tools & safety", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Circuit Wiring", "tag": "SPDT/Godown", "iconType": "cpu"}, {"name": "Multimeter & CRO", "tag": "Instrumentation", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Familiarization of Electrical Wiring Tools & Safety", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Electrical toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Schematic Diagram (.png/.pdf)", "Observations & Readings (.txt/.png)"], "description": "Upload required source files and execution logs for GXESL106 Familiarization of Electrical Wiring Tools & Safety", "acceptedFormats": ".png,.pdf,.txt"}'::jsonb,
    '# Circuit Schematic & Wiring Observations\n# Supply Voltage: 230V AC, 50Hz\n# Switch 1: SPDT (Staircase position A)\n# Switch 2: SPDT (Staircase position B)\n', './run_circuit_sim --check', '[Virtual Bench] Checking SPDT wiring continuity...\nCircuit Path: Node A -> Node B (Closed)\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\nSafety Ground Check: OK', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '7b79cf2b-e539-5dd6-8681-440f18b96da0', '3520ebf6-687a-582e-a5fc-f6d080eb47f4', 'gxesl106-exp02', 2,
    'One Lamp Controlled by One Switch & Staircase Wiring', 'Wire and test (a) one lamp controlled by a single-pole switch and (b) two-way staircase wiring using two SPDT switches.', 45, 'Electrical & Electronics Virtual Lab Bench',
    '["Understand theoretical principles of one lamp controlled by one switch & staircase wiring", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Circuit Wiring", "tag": "SPDT/Godown", "iconType": "cpu"}, {"name": "Multimeter & CRO", "tag": "Instrumentation", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for One Lamp Controlled by One Switch & Staircase Wiring", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Electrical toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Schematic Diagram (.png/.pdf)", "Observations & Readings (.txt/.png)"], "description": "Upload required source files and execution logs for GXESL106 One Lamp Controlled by One Switch & Staircase Wiring", "acceptedFormats": ".png,.pdf,.txt"}'::jsonb,
    '# Circuit Schematic & Wiring Observations\n# Supply Voltage: 230V AC, 50Hz\n# Switch 1: SPDT (Staircase position A)\n# Switch 2: SPDT (Staircase position B)\n', './run_circuit_sim --check', '[Virtual Bench] Checking SPDT wiring continuity...\nCircuit Path: Node A -> Node B (Closed)\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\nSafety Ground Check: OK', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '7b5e81cd-6468-5330-a902-70896b4ed33d', '3520ebf6-687a-582e-a5fc-f6d080eb47f4', 'gxesl106-exp03', 3,
    'Fluorescent / LED Tube & Energy Meter Connection', 'Connect a single-phase energy meter with an incandescent/LED load, measure power consumption, and verify voltage/current using a multimeter.', 45, 'Electrical & Electronics Virtual Lab Bench',
    '["Understand theoretical principles of fluorescent / led tube & energy meter connection", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Circuit Wiring", "tag": "SPDT/Godown", "iconType": "cpu"}, {"name": "Multimeter & CRO", "tag": "Instrumentation", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Fluorescent / LED Tube & Energy Meter Connection", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Electrical toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Schematic Diagram (.png/.pdf)", "Observations & Readings (.txt/.png)"], "description": "Upload required source files and execution logs for GXESL106 Fluorescent / LED Tube & Energy Meter Connection", "acceptedFormats": ".png,.pdf,.txt"}'::jsonb,
    '# Circuit Schematic & Wiring Observations\n# Supply Voltage: 230V AC, 50Hz\n# Switch 1: SPDT (Staircase position A)\n# Switch 2: SPDT (Staircase position B)\n', './run_circuit_sim --check', '[Virtual Bench] Checking SPDT wiring continuity...\nCircuit Path: Node A -> Node B (Closed)\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\nSafety Ground Check: OK', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'dc3f2120-d36e-55a9-8e2f-aa9b96a1baf2', '3520ebf6-687a-582e-a5fc-f6d080eb47f4', 'gxesl106-exp04', 4,
    'Resistor Color Coding & Breadboard Familiarization', 'Determine resistor values using 4-band/5-band color codes, verify with a digital multimeter, and assemble series/parallel circuits on a breadboard.', 45, 'Electrical & Electronics Virtual Lab Bench',
    '["Understand theoretical principles of resistor color coding & breadboard familiarization", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Circuit Wiring", "tag": "SPDT/Godown", "iconType": "cpu"}, {"name": "Multimeter & CRO", "tag": "Instrumentation", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Resistor Color Coding & Breadboard Familiarization", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Electrical toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Schematic Diagram (.png/.pdf)", "Observations & Readings (.txt/.png)"], "description": "Upload required source files and execution logs for GXESL106 Resistor Color Coding & Breadboard Familiarization", "acceptedFormats": ".png,.pdf,.txt"}'::jsonb,
    '# Circuit Schematic & Wiring Observations\n# Supply Voltage: 230V AC, 50Hz\n# Switch 1: SPDT (Staircase position A)\n# Switch 2: SPDT (Staircase position B)\n', './run_circuit_sim --check', '[Virtual Bench] Checking SPDT wiring continuity...\nCircuit Path: Node A -> Node B (Closed)\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\nSafety Ground Check: OK', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '51ff2ee3-f8ff-57f4-97de-2f239f8ccc67', '3520ebf6-687a-582e-a5fc-f6d080eb47f4', 'gxesl106-exp05', 5,
    'PN Junction Diode & Zener Diode Characteristics', 'Plot the forward and reverse V-I characteristics of a PN junction diode and verify voltage regulation using a Zener diode.', 45, 'Electrical & Electronics Virtual Lab Bench',
    '["Understand theoretical principles of pn junction diode & zener diode characteristics", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Circuit Wiring", "tag": "SPDT/Godown", "iconType": "cpu"}, {"name": "Multimeter & CRO", "tag": "Instrumentation", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for PN Junction Diode & Zener Diode Characteristics", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Electrical toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Schematic Diagram (.png/.pdf)", "Observations & Readings (.txt/.png)"], "description": "Upload required source files and execution logs for GXESL106 PN Junction Diode & Zener Diode Characteristics", "acceptedFormats": ".png,.pdf,.txt"}'::jsonb,
    '# Circuit Schematic & Wiring Observations\n# Supply Voltage: 230V AC, 50Hz\n# Switch 1: SPDT (Staircase position A)\n# Switch 2: SPDT (Staircase position B)\n', './run_circuit_sim --check', '[Virtual Bench] Checking SPDT wiring continuity...\nCircuit Path: Node A -> Node B (Closed)\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\nSafety Ground Check: OK', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'e937730e-31ae-5a7d-9fd7-1c0c816642a7', '3520ebf6-687a-582e-a5fc-f6d080eb47f4', 'gxesl106-exp06', 6,
    'Half-Wave & Full-Wave Bridge Rectifier', 'Assemble a bridge rectifier circuit on a breadboard, observe the input/output waveforms on a CRO/DSO, and measure ripple factor with and without a capacitor filter.', 45, 'Electrical & Electronics Virtual Lab Bench',
    '["Understand theoretical principles of half-wave & full-wave bridge rectifier", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Circuit Wiring", "tag": "SPDT/Godown", "iconType": "cpu"}, {"name": "Multimeter & CRO", "tag": "Instrumentation", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Half-Wave & Full-Wave Bridge Rectifier", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Electrical toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Schematic Diagram (.png/.pdf)", "Observations & Readings (.txt/.png)"], "description": "Upload required source files and execution logs for GXESL106 Half-Wave & Full-Wave Bridge Rectifier", "acceptedFormats": ".png,.pdf,.txt"}'::jsonb,
    '# Circuit Schematic & Wiring Observations\n# Supply Voltage: 230V AC, 50Hz\n# Switch 1: SPDT (Staircase position A)\n# Switch 2: SPDT (Staircase position B)\n', './run_circuit_sim --check', '[Virtual Bench] Checking SPDT wiring continuity...\nCircuit Path: Node A -> Node B (Closed)\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\nSafety Ground Check: OK', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '7847de6c-a158-545b-8150-0e49b06b6d59', '3520ebf6-687a-582e-a5fc-f6d080eb47f4', 'gxesl106-exp07', 7,
    'Soldering & PCB Assembly Practice', 'Solder a simple LED-resistor indicator circuit onto a general-purpose PCB and test continuity.', 45, 'Electrical & Electronics Virtual Lab Bench',
    '["Understand theoretical principles of soldering & pcb assembly practice", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Circuit Wiring", "tag": "SPDT/Godown", "iconType": "cpu"}, {"name": "Multimeter & CRO", "tag": "Instrumentation", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Soldering & PCB Assembly Practice", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Electrical toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Schematic Diagram (.png/.pdf)", "Observations & Readings (.txt/.png)"], "description": "Upload required source files and execution logs for GXESL106 Soldering & PCB Assembly Practice", "acceptedFormats": ".png,.pdf,.txt"}'::jsonb,
    '# Circuit Schematic & Wiring Observations\n# Supply Voltage: 230V AC, 50Hz\n# Switch 1: SPDT (Staircase position A)\n# Switch 2: SPDT (Staircase position B)\n', './run_circuit_sim --check', '[Virtual Bench] Checking SPDT wiring continuity...\nCircuit Path: Node A -> Node B (Closed)\nLamp Status: ILLUMINATED (Power: 60W, Current: 0.26A)\nSafety Ground Check: OK', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('e412ae58-0a0d-54aa-b1a9-ffd6245945ff', 'GXEST204', 'Programming in C', 'S2'::semester_enum, 2, '0-0-2-0', 'CIA 50 / ESE 50', 'ESC Practical', 'Low-level imperative programming with C. Pointers, memory allocation, structures, bitwise manipulation, and standard libraries.', '["Pointers & Dynamic Memory", "Structures & Unions", "File Handling & Streams", "Command-Line Arguments"]'::jsonb, 'GXEST204')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'f64e7355-8d23-5226-b59d-0e2393a94e73', 'e412ae58-0a0d-54aa-b1a9-ffd6245945ff', 'gxest204-exp01', 1,
    'Operators, Expressions & Branching', 'Write a C program to solve a quadratic equation (ax^2 + bx + c = 0) handling real, equal, and complex roots using switch/if-else statements.', 45, 'GCC C17 Linux Container (Ubuntu 24.04)',
    '["Understand theoretical principles of operators, expressions & branching", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Pointers & Memory", "tag": "Pointers", "iconType": "cpu"}, {"name": "Data Structures", "tag": "Structs", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Operators, Expressions & Branching", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for GXEST204 Operators, Expressions & Branching", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    printf("KTU 2024 CSE - GXEST204 Programming in C\\n");\n    return 0;\n}\n', 'gcc -Wall -O2 solution.c -o solution && ./solution', 'student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\nInput values processed successfully.\nResult matches expected KTU test vector.\nAll test cases passed.', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '77cd39ed-f233-509b-b250-9f243eeb2321', 'e412ae58-0a0d-54aa-b1a9-ffd6245945ff', 'gxest204-exp02', 2,
    'Loops & Number Patterns', 'Write a C program to print Pascal''s triangle up to N rows and find all prime numbers within a user-specified range [L, R].', 45, 'GCC C17 Linux Container (Ubuntu 24.04)',
    '["Understand theoretical principles of loops & number patterns", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Pointers & Memory", "tag": "Pointers", "iconType": "cpu"}, {"name": "Data Structures", "tag": "Structs", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Loops & Number Patterns", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for GXEST204 Loops & Number Patterns", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    printf("KTU 2024 CSE - GXEST204 Programming in C\\n");\n    return 0;\n}\n', 'gcc -Wall -O2 solution.c -o solution && ./solution', 'student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\nInput values processed successfully.\nResult matches expected KTU test vector.\nAll test cases passed.', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '85dae3b9-a243-517f-af90-3acb42ac93b8', 'e412ae58-0a0d-54aa-b1a9-ffd6245945ff', 'gxest204-exp03', 3,
    '1D & 2D Arrays (Matrix Operations)', 'Implement a menu-driven C program to perform Matrix Addition, Matrix Multiplication, and Transpose using functions.', 45, 'GCC C17 Linux Container (Ubuntu 24.04)',
    '["Understand theoretical principles of 1d & 2d arrays (matrix operations)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Pointers & Memory", "tag": "Pointers", "iconType": "cpu"}, {"name": "Data Structures", "tag": "Structs", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for 1D & 2D Arrays (Matrix Operations)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for GXEST204 1D & 2D Arrays (Matrix Operations)", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    printf("KTU 2024 CSE - GXEST204 Programming in C\\n");\n    return 0;\n}\n', 'gcc -Wall -O2 solution.c -o solution && ./solution', 'student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\nInput values processed successfully.\nResult matches expected KTU test vector.\nAll test cases passed.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'b67d9cb6-6cc2-5ed0-8772-d0c0d8364bbd', 'e412ae58-0a0d-54aa-b1a9-ffd6245945ff', 'gxest204-exp04', 4,
    'Strings Without Built-in Functions', 'Write C functions (without using <string.h>) to find string length, concatenate two strings, reverse a string, and check for palindrome.', 45, 'GCC C17 Linux Container (Ubuntu 24.04)',
    '["Understand theoretical principles of strings without built-in functions", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Pointers & Memory", "tag": "Pointers", "iconType": "cpu"}, {"name": "Data Structures", "tag": "Structs", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Strings Without Built-in Functions", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for GXEST204 Strings Without Built-in Functions", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    printf("KTU 2024 CSE - GXEST204 Programming in C\\n");\n    return 0;\n}\n', 'gcc -Wall -O2 solution.c -o solution && ./solution', 'student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\nInput values processed successfully.\nResult matches expected KTU test vector.\nAll test cases passed.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '3b34b976-3796-5c01-9341-3d3a382ba541', 'e412ae58-0a0d-54aa-b1a9-ffd6245945ff', 'gxest204-exp05', 5,
    'Structures & Student Record Management', 'Define a struct Student (roll_no, name, marks[3], total). Read N student records, sort them in descending order of total marks, and display the rank list.', 45, 'GCC C17 Linux Container (Ubuntu 24.04)',
    '["Understand theoretical principles of structures & student record management", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Pointers & Memory", "tag": "Pointers", "iconType": "cpu"}, {"name": "Data Structures", "tag": "Structs", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Structures & Student Record Management", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for GXEST204 Structures & Student Record Management", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    printf("KTU 2024 CSE - GXEST204 Programming in C\\n");\n    return 0;\n}\n', 'gcc -Wall -O2 solution.c -o solution && ./solution', 'student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\nInput values processed successfully.\nResult matches expected KTU test vector.\nAll test cases passed.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'f0ddee70-b8e5-586a-9d27-ea85317cf874', 'e412ae58-0a0d-54aa-b1a9-ffd6245945ff', 'gxest204-exp06', 6,
    'Pointers & Dynamic Memory Allocation', 'Write a C program using pointers and malloc()/calloc() to swap two arrays, find the largest element, and compute the sum of elements.', 45, 'GCC C17 Linux Container (Ubuntu 24.04)',
    '["Understand theoretical principles of pointers & dynamic memory allocation", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Pointers & Memory", "tag": "Pointers", "iconType": "cpu"}, {"name": "Data Structures", "tag": "Structs", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Pointers & Dynamic Memory Allocation", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for GXEST204 Pointers & Dynamic Memory Allocation", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    printf("KTU 2024 CSE - GXEST204 Programming in C\\n");\n    return 0;\n}\n', 'gcc -Wall -O2 solution.c -o solution && ./solution', 'student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\nInput values processed successfully.\nResult matches expected KTU test vector.\nAll test cases passed.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '44808035-de0f-5b4f-b0d2-afabc5bbe356', 'e412ae58-0a0d-54aa-b1a9-ffd6245945ff', 'gxest204-exp07', 7,
    'Recursion in C', 'Implement recursive functions in C to compute the nth Fibonacci number, sum of digits, and reverse an integer.', 45, 'GCC C17 Linux Container (Ubuntu 24.04)',
    '["Understand theoretical principles of recursion in c", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Pointers & Memory", "tag": "Pointers", "iconType": "cpu"}, {"name": "Data Structures", "tag": "Structs", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Recursion in C", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for GXEST204 Recursion in C", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    printf("KTU 2024 CSE - GXEST204 Programming in C\\n");\n    return 0;\n}\n', 'gcc -Wall -O2 solution.c -o solution && ./solution', 'student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\nInput values processed successfully.\nResult matches expected KTU test vector.\nAll test cases passed.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '84c1ecb0-094c-5a61-bdac-bd2e9d276ea1', 'e412ae58-0a0d-54aa-b1a9-ffd6245945ff', 'gxest204-exp08', 8,
    'File I/O in C', 'Write a C program to read an input text file, count lines, words, and characters, convert lowercase letters to uppercase, and save the result to a new file.', 45, 'GCC C17 Linux Container (Ubuntu 24.04)',
    '["Understand theoretical principles of file i/o in c", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Pointers & Memory", "tag": "Pointers", "iconType": "cpu"}, {"name": "Data Structures", "tag": "Structs", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for File I/O in C", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for GXEST204 File I/O in C", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    printf("KTU 2024 CSE - GXEST204 Programming in C\\n");\n    return 0;\n}\n', 'gcc -Wall -O2 solution.c -o solution && ./solution', 'student@ktu-s2-c:~$ gcc -Wall -O2 solution.c -o solution && ./solution\nInput values processed successfully.\nResult matches expected KTU test vector.\nAll test cases passed.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('1ed87b66-9de3-55ea-b148-a82cc5ec3ce7', 'GXESL208', 'IT Workshop', 'S2'::semester_enum, 1, '0-0-2-0', 'CIA 50 / ESE 50', 'ESC Practical', 'PC hardware diagnostics, Linux CLI mastery, Git version control, bash scripting, and software deployment pipelines.', '["Hardware Disassembly & Assembly", "Linux Shell & Command Mastery", "Git Version Control & Branching", "Bash Shell Scripting"]'::jsonb, 'GXESL208')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '6c514ae8-c666-5c75-99bf-7c8dea3e28f0', '1ed87b66-9de3-55ea-b148-a82cc5ec3ce7', 'gxesl208-exp01', 1,
    'Computer Hardware & Boot Process Familiarization', 'Identify motherboard components (CPU socket, RAM slots, chipset, SATA/NVMe, SMPS, NIC, BIOS/UEFI) and document the POST and boot sequence.', 45, 'Ubuntu 24.04 LTS CLI & Git Sandbox',
    '["Understand theoretical principles of computer hardware & boot process familiarization", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Linux CLI", "tag": "Bash", "iconType": "terminal"}, {"name": "Git Version Control", "tag": "Git", "iconType": "code"}, {"name": "Hardware Diagnostics", "tag": "SysInfo", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Computer Hardware & Boot Process Familiarization", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Ubuntu toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Bash Script (.sh)", "Terminal transcript (.txt)"], "description": "Upload required source files and execution logs for GXESL208 Computer Hardware & Boot Process Familiarization", "acceptedFormats": ".sh,.txt"}'::jsonb,
    '#!/bin/bash\n# KTU 2024 Scheme - GXESL208 IT Workshop\n\necho "Running system diagnostics..."\nuname -a\n', './diagnose.sh', 'Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\nGit repository status: clean, on branch master', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'c3dcf3d2-78fb-5afe-986f-222ed652232a', '1ed87b66-9de3-55ea-b148-a82cc5ec3ce7', 'gxesl208-exp02', 2,
    'Basic Linux Commands & File Permissions', 'Practice ls, mkdir, cp, mv, rm, grep, find, chmod, chown, ps, uname, df, du, and history in a Linux terminal. Create a directory tree and set 750 permissions.', 45, 'Ubuntu 24.04 LTS CLI & Git Sandbox',
    '["Understand theoretical principles of basic linux commands & file permissions", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Linux CLI", "tag": "Bash", "iconType": "terminal"}, {"name": "Git Version Control", "tag": "Git", "iconType": "code"}, {"name": "Hardware Diagnostics", "tag": "SysInfo", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Basic Linux Commands & File Permissions", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Ubuntu toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Bash Script (.sh)", "Terminal transcript (.txt)"], "description": "Upload required source files and execution logs for GXESL208 Basic Linux Commands & File Permissions", "acceptedFormats": ".sh,.txt"}'::jsonb,
    '#!/bin/bash\n# KTU 2024 Scheme - GXESL208 IT Workshop\n\necho "Running system diagnostics..."\nuname -a\n', './diagnose.sh', 'Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\nGit repository status: clean, on branch master', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'a69e4838-bb74-51b3-9a8f-f1a5a7b3e6c3', '1ed87b66-9de3-55ea-b148-a82cc5ec3ce7', 'gxesl208-exp03', 3,
    'Shell Scripting in Bash', 'Write a Bash script that accepts a directory path, counts files and subdirectories, backs up all .txt files into a dated archive, and logs the summary.', 45, 'Ubuntu 24.04 LTS CLI & Git Sandbox',
    '["Understand theoretical principles of shell scripting in bash", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Linux CLI", "tag": "Bash", "iconType": "terminal"}, {"name": "Git Version Control", "tag": "Git", "iconType": "code"}, {"name": "Hardware Diagnostics", "tag": "SysInfo", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Shell Scripting in Bash", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Ubuntu toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Bash Script (.sh)", "Terminal transcript (.txt)"], "description": "Upload required source files and execution logs for GXESL208 Shell Scripting in Bash", "acceptedFormats": ".sh,.txt"}'::jsonb,
    '#!/bin/bash\n# KTU 2024 Scheme - GXESL208 IT Workshop\n\necho "Running system diagnostics..."\nuname -a\n', './diagnose.sh', 'Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\nGit repository status: clean, on branch master', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'b4df9cdc-5794-5ed9-8440-3649265110ed', '1ed87b66-9de3-55ea-b148-a82cc5ec3ce7', 'gxesl208-exp04', 4,
    'Networking Hardware & Diagnostic Commands', 'Test network connectivity and inspect interfaces using ip/ifconfig, ping, traceroute, nslookup/dig, ss/netstat, and curl. Document observed latency and DNS resolution.', 45, 'Ubuntu 24.04 LTS CLI & Git Sandbox',
    '["Understand theoretical principles of networking hardware & diagnostic commands", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Linux CLI", "tag": "Bash", "iconType": "terminal"}, {"name": "Git Version Control", "tag": "Git", "iconType": "code"}, {"name": "Hardware Diagnostics", "tag": "SysInfo", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Networking Hardware & Diagnostic Commands", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Ubuntu toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Bash Script (.sh)", "Terminal transcript (.txt)"], "description": "Upload required source files and execution logs for GXESL208 Networking Hardware & Diagnostic Commands", "acceptedFormats": ".sh,.txt"}'::jsonb,
    '#!/bin/bash\n# KTU 2024 Scheme - GXESL208 IT Workshop\n\necho "Running system diagnostics..."\nuname -a\n', './diagnose.sh', 'Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\nGit repository status: clean, on branch master', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'bbfbbb85-f9b0-545a-b931-f2bb790b5250', '1ed87b66-9de3-55ea-b148-a82cc5ec3ce7', 'gxesl208-exp05', 5,
    'Version Control with Git', 'Initialize a Git repository, create a feature branch, stage and commit files, merge back to main, resolve a simulated merge conflict, and inspect git log --graph.', 45, 'Ubuntu 24.04 LTS CLI & Git Sandbox',
    '["Understand theoretical principles of version control with git", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Linux CLI", "tag": "Bash", "iconType": "terminal"}, {"name": "Git Version Control", "tag": "Git", "iconType": "code"}, {"name": "Hardware Diagnostics", "tag": "SysInfo", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Version Control with Git", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Ubuntu toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Bash Script (.sh)", "Terminal transcript (.txt)"], "description": "Upload required source files and execution logs for GXESL208 Version Control with Git", "acceptedFormats": ".sh,.txt"}'::jsonb,
    '#!/bin/bash\n# KTU 2024 Scheme - GXESL208 IT Workshop\n\necho "Running system diagnostics..."\nuname -a\n', './diagnose.sh', 'Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\nGit repository status: clean, on branch master', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'c763e3c0-4ba2-5983-9cac-b799b3c44b91', '1ed87b66-9de3-55ea-b148-a82cc5ec3ce7', 'gxesl208-exp06', 6,
    'Responsive Web Page (HTML5 & CSS3)', 'Build a clean personal/college lab profile webpage using semantic HTML5 tags, Flexbox/Grid layout, and responsive media queries.', 45, 'Ubuntu 24.04 LTS CLI & Git Sandbox',
    '["Understand theoretical principles of responsive web page (html5 & css3)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Linux CLI", "tag": "Bash", "iconType": "terminal"}, {"name": "Git Version Control", "tag": "Git", "iconType": "code"}, {"name": "Hardware Diagnostics", "tag": "SysInfo", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Responsive Web Page (HTML5 & CSS3)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Ubuntu toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Bash Script (.sh)", "Terminal transcript (.txt)"], "description": "Upload required source files and execution logs for GXESL208 Responsive Web Page (HTML5 & CSS3)", "acceptedFormats": ".sh,.txt"}'::jsonb,
    '#!/bin/bash\n# KTU 2024 Scheme - GXESL208 IT Workshop\n\necho "Running system diagnostics..."\nuname -a\n', './diagnose.sh', 'Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\nGit repository status: clean, on branch master', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'c124e0b3-6ebb-5db0-a227-5a45e76fd714', '1ed87b66-9de3-55ea-b148-a82cc5ec3ce7', 'gxesl208-exp07', 7,
    'JavaScript Form Validation & DOM Manipulation', 'Create an interactive student registration form with JavaScript validation for admission number, email format, and password strength, plus dynamic DOM feedback.', 45, 'Ubuntu 24.04 LTS CLI & Git Sandbox',
    '["Understand theoretical principles of javascript form validation & dom manipulation", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Linux CLI", "tag": "Bash", "iconType": "terminal"}, {"name": "Git Version Control", "tag": "Git", "iconType": "code"}, {"name": "Hardware Diagnostics", "tag": "SysInfo", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for JavaScript Form Validation & DOM Manipulation", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Ubuntu toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Bash Script (.sh)", "Terminal transcript (.txt)"], "description": "Upload required source files and execution logs for GXESL208 JavaScript Form Validation & DOM Manipulation", "acceptedFormats": ".sh,.txt"}'::jsonb,
    '#!/bin/bash\n# KTU 2024 Scheme - GXESL208 IT Workshop\n\necho "Running system diagnostics..."\nuname -a\n', './diagnose.sh', 'Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\nGit repository status: clean, on branch master', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'a22f486d-282c-5a2f-b153-1088cbc518a7', '1ed87b66-9de3-55ea-b148-a82cc5ec3ce7', 'gxesl208-exp08', 8,
    'LaTeX Document Typesetting Basics', 'Create a formatted lab report in LaTeX featuring sections, a mathematical equation, a 3x3 table, and a bulleted list.', 45, 'Ubuntu 24.04 LTS CLI & Git Sandbox',
    '["Understand theoretical principles of latex document typesetting basics", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Linux CLI", "tag": "Bash", "iconType": "terminal"}, {"name": "Git Version Control", "tag": "Git", "iconType": "code"}, {"name": "Hardware Diagnostics", "tag": "SysInfo", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for LaTeX Document Typesetting Basics", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Ubuntu toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Bash Script (.sh)", "Terminal transcript (.txt)"], "description": "Upload required source files and execution logs for GXESL208 LaTeX Document Typesetting Basics", "acceptedFormats": ".sh,.txt"}'::jsonb,
    '#!/bin/bash\n# KTU 2024 Scheme - GXESL208 IT Workshop\n\necho "Running system diagnostics..."\nuname -a\n', './diagnose.sh', 'Linux ktu-s2-itworkshop 6.8.0-generic x86_64 GNU/Linux\nCPU: 8 vCPUs | RAM: 16384 MB | Disk: 100 GB ext4\nGit repository status: clean, on branch master', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('b486b332-cba4-5c18-8320-cc6bdda01e38', 'PCCSL307', 'Data Structures Lab', 'S3'::semester_enum, 2, '0-0-3-0', 'CIA 50 / ESE 50', 'PC Practical', 'Implementation and analysis of fundamental linear and non-linear data structures: Linked Lists, Stacks, Queues, Trees, and Graphs in C.', '["Sparse Polynomials & Arrays", "Stack Infix/Postfix & Queues", "Singly & Doubly Linked Lists", "BST, Graphs & Sorting (Quick/Merge)"]'::jsonb, 'PCCSL307')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '72199e46-aa4a-5562-94ad-649d56fd5a80', 'b486b332-cba4-5c18-8320-cc6bdda01e38', 'pccsl307-exp01', 1,
    'Sparse Polynomial Addition (Arrays)', 'Write a C program to represent two sparse polynomials using arrays of structures (coeff, exp) and compute their sum.', 45, 'GCC C17 Linux Container (Data Structures)',
    '["Understand theoretical principles of sparse polynomial addition (arrays)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Data Structures", "tag": "DSA", "iconType": "tree"}, {"name": "Memory Management", "tag": "malloc/free", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Sparse Polynomial Addition (Arrays)", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Execution screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL307 Sparse Polynomial Addition (Arrays)", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\n// KTU PCCSL307 Data Structures Lab\nint main() {\n    printf("PCCSL307 Data Structures\\n");\n    return 0;\n}\n', 'gcc dsa.c -o dsa && ./dsa', 'student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\nCreated Dynamic Data Structure.\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\nOperations completed in 0.8ms.', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '3b1351fd-a5a9-5ca3-a298-61c27fa06667', 'b486b332-cba4-5c18-8320-cc6bdda01e38', 'pccsl307-exp02', 2,
    'Sparse Matrix Representation & Addition', 'Represent two sparse matrices in 3-tuple (triplet) form, compute their transpose and sum, and display the result in triplet and standard matrix forms.', 45, 'GCC C17 Linux Container (Data Structures)',
    '["Understand theoretical principles of sparse matrix representation & addition", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Data Structures", "tag": "DSA", "iconType": "tree"}, {"name": "Memory Management", "tag": "malloc/free", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Sparse Matrix Representation & Addition", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Execution screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL307 Sparse Matrix Representation & Addition", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\n// KTU PCCSL307 Data Structures Lab\nint main() {\n    printf("PCCSL307 Data Structures\\n");\n    return 0;\n}\n', 'gcc dsa.c -o dsa && ./dsa', 'student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\nCreated Dynamic Data Structure.\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\nOperations completed in 0.8ms.', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '279f2561-529c-5041-9ffa-b90094e18da0', 'b486b332-cba4-5c18-8320-cc6bdda01e38', 'pccsl307-exp03', 3,
    'Stack Applications (Infix to Postfix & Evaluation)', 'Implement a Stack using arrays to convert a given infix expression to postfix form and evaluate the postfix expression.', 45, 'GCC C17 Linux Container (Data Structures)',
    '["Understand theoretical principles of stack applications (infix to postfix & evaluation)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Data Structures", "tag": "DSA", "iconType": "tree"}, {"name": "Memory Management", "tag": "malloc/free", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Stack Applications (Infix to Postfix & Evaluation)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Execution screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL307 Stack Applications (Infix to Postfix & Evaluation)", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\n// KTU PCCSL307 Data Structures Lab\nint main() {\n    printf("PCCSL307 Data Structures\\n");\n    return 0;\n}\n', 'gcc dsa.c -o dsa && ./dsa', 'student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\nCreated Dynamic Data Structure.\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\nOperations completed in 0.8ms.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'da64c231-f572-59df-b224-53c7008eb39e', 'b486b332-cba4-5c18-8320-cc6bdda01e38', 'pccsl307-exp04', 4,
    'Queue, Circular Queue & Priority Queue', 'Implement a Circular Queue and a Double-Ended Queue (Deque) using arrays supporting enqueue, dequeue, and display operations.', 45, 'GCC C17 Linux Container (Data Structures)',
    '["Understand theoretical principles of queue, circular queue & priority queue", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Data Structures", "tag": "DSA", "iconType": "tree"}, {"name": "Memory Management", "tag": "malloc/free", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Queue, Circular Queue & Priority Queue", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Execution screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL307 Queue, Circular Queue & Priority Queue", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\n// KTU PCCSL307 Data Structures Lab\nint main() {\n    printf("PCCSL307 Data Structures\\n");\n    return 0;\n}\n', 'gcc dsa.c -o dsa && ./dsa', 'student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\nCreated Dynamic Data Structure.\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\nOperations completed in 0.8ms.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'de385828-cad4-5d89-b044-193f1173a927', 'b486b332-cba4-5c18-8320-cc6bdda01e38', 'pccsl307-exp05', 5,
    'Singly & Doubly Linked List Operations', 'Implement a menu-driven program for Singly Linked List (insert at front/end/pos, delete, search, reverse) and Doubly Linked List.', 45, 'GCC C17 Linux Container (Data Structures)',
    '["Understand theoretical principles of singly & doubly linked list operations", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Data Structures", "tag": "DSA", "iconType": "tree"}, {"name": "Memory Management", "tag": "malloc/free", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Singly & Doubly Linked List Operations", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Execution screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL307 Singly & Doubly Linked List Operations", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\n// KTU PCCSL307 Data Structures Lab\nint main() {\n    printf("PCCSL307 Data Structures\\n");\n    return 0;\n}\n', 'gcc dsa.c -o dsa && ./dsa', 'student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\nCreated Dynamic Data Structure.\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\nOperations completed in 0.8ms.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '6a3b22ef-f2fa-5a61-9312-1ad6be42131e', 'b486b332-cba4-5c18-8320-cc6bdda01e38', 'pccsl307-exp06', 6,
    'Polynomial Addition & Multiplication (Linked Lists)', 'Represent two polynomials using linked lists and implement functions to add and multiply them.', 45, 'GCC C17 Linux Container (Data Structures)',
    '["Understand theoretical principles of polynomial addition & multiplication (linked lists)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Data Structures", "tag": "DSA", "iconType": "tree"}, {"name": "Memory Management", "tag": "malloc/free", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Polynomial Addition & Multiplication (Linked Lists)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Execution screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL307 Polynomial Addition & Multiplication (Linked Lists)", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\n// KTU PCCSL307 Data Structures Lab\nint main() {\n    printf("PCCSL307 Data Structures\\n");\n    return 0;\n}\n', 'gcc dsa.c -o dsa && ./dsa', 'student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\nCreated Dynamic Data Structure.\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\nOperations completed in 0.8ms.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '1cea35a4-1e1f-56fc-8459-2d3ab9749088', 'b486b332-cba4-5c18-8320-cc6bdda01e38', 'pccsl307-exp07', 7,
    'Binary Tree & Binary Search Tree (BST)', 'Construct a Binary Search Tree and implement insertion, deletion, search, and recursive Inorder, Preorder, and Postorder traversals.', 45, 'GCC C17 Linux Container (Data Structures)',
    '["Understand theoretical principles of binary tree & binary search tree (bst)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Data Structures", "tag": "DSA", "iconType": "tree"}, {"name": "Memory Management", "tag": "malloc/free", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Binary Tree & Binary Search Tree (BST)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Execution screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL307 Binary Tree & Binary Search Tree (BST)", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\n// KTU PCCSL307 Data Structures Lab\nint main() {\n    printf("PCCSL307 Data Structures\\n");\n    return 0;\n}\n', 'gcc dsa.c -o dsa && ./dsa', 'student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\nCreated Dynamic Data Structure.\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\nOperations completed in 0.8ms.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'c7afd362-0459-5bda-8282-89481a0066dc', 'b486b332-cba4-5c18-8320-cc6bdda01e38', 'pccsl307-exp08', 8,
    'Graph Traversals (BFS & DFS)', 'Represent a graph using an adjacency list/matrix and implement Breadth-First Search (BFS) and Depth-First Search (DFS) traversals.', 45, 'GCC C17 Linux Container (Data Structures)',
    '["Understand theoretical principles of graph traversals (bfs & dfs)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Data Structures", "tag": "DSA", "iconType": "tree"}, {"name": "Memory Management", "tag": "malloc/free", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Graph Traversals (BFS & DFS)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Execution screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL307 Graph Traversals (BFS & DFS)", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\n// KTU PCCSL307 Data Structures Lab\nint main() {\n    printf("PCCSL307 Data Structures\\n");\n    return 0;\n}\n', 'gcc dsa.c -o dsa && ./dsa', 'student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\nCreated Dynamic Data Structure.\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\nOperations completed in 0.8ms.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '98cb47df-7358-54d1-abe0-b52e0ebc01cb', 'b486b332-cba4-5c18-8320-cc6bdda01e38', 'pccsl307-exp09', 9,
    'Sorting Algorithms Comparison', 'Implement Quick Sort, Merge Sort, Heap Sort, and Insertion Sort on random integer datasets and compare their swap/comparison counts.', 45, 'GCC C17 Linux Container (Data Structures)',
    '["Understand theoretical principles of sorting algorithms comparison", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Data Structures", "tag": "DSA", "iconType": "tree"}, {"name": "Memory Management", "tag": "malloc/free", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Sorting Algorithms Comparison", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Execution screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL307 Sorting Algorithms Comparison", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\n// KTU PCCSL307 Data Structures Lab\nint main() {\n    printf("PCCSL307 Data Structures\\n");\n    return 0;\n}\n', 'gcc dsa.c -o dsa && ./dsa', 'student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\nCreated Dynamic Data Structure.\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\nOperations completed in 0.8ms.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '9551774e-8b35-56dc-b3fa-fdcb479993f6', 'b486b332-cba4-5c18-8320-cc6bdda01e38', 'pccsl307-exp10', 10,
    'Hashing with Collision Resolution', 'Implement a Hash Table using linear probing and separate chaining to store and search integer keys.', 45, 'GCC C17 Linux Container (Data Structures)',
    '["Understand theoretical principles of hashing with collision resolution", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "C17", "iconType": "c"}, {"name": "Data Structures", "tag": "DSA", "iconType": "tree"}, {"name": "Memory Management", "tag": "malloc/free", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Hashing with Collision Resolution", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using GCC toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C Source file (.c)", "Execution screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL307 Hashing with Collision Resolution", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <stdlib.h>\n\n// KTU PCCSL307 Data Structures Lab\nint main() {\n    printf("PCCSL307 Data Structures\\n");\n    return 0;\n}\n', 'gcc dsa.c -o dsa && ./dsa', 'student@ktu-s3-dsa:~$ gcc dsa.c -o dsa && ./dsa\nCreated Dynamic Data Structure.\nInserted elements: [12, 25, 33, 48, 50, 72, 90]\nOperations completed in 0.8ms.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('47d18281-1cf7-5227-9bae-6f2d52dbd7d5', 'PCCSL308', 'Digital Lab', 'S3'::semester_enum, 2, '0-0-3-0', 'CIA 50 / ESE 50', 'PC Practical', 'Design, realization, and verification of combinational and sequential digital circuits using discrete logic ICs and simulation tools.', '["Logic Gates & De Morgan Realization", "Adders, Subtractors & Code Converters", "Multiplexers & Decoders", "Flip-Flops, Shift Registers & Counters"]'::jsonb, 'PCCSL308')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '3261181a-b0d5-5b20-b6eb-7da324118cd3', '47d18281-1cf7-5227-9bae-6f2d52dbd7d5', 'pccsl308-exp01', 1,
    'Realization of Basic & Universal Logic Gates', 'Verify truth tables of AND, OR, NOT, NAND, NOR, XOR, and XNOR gates (IC 7408, 7432, 7404, 7400, 7402, 7486), and implement all basic gates using NAND/NOR universal gates.', 45, 'Digital Logic Simulator & Verilog Bench',
    '["Understand theoretical principles of realization of basic & universal logic gates", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Digital Logic", "tag": "Boolean", "iconType": "cpu"}, {"name": "Truth Tables", "tag": "K-Maps", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Realization of Basic & Universal Logic Gates", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Digital toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Circuit file (.circ/.png)", "Truth Table verification (.txt)"], "description": "Upload required source files and execution logs for PCCSL308 Realization of Basic & Universal Logic Gates", "acceptedFormats": ".circ,.png,.txt"}'::jsonb,
    '# Digital Circuit Netlist / Logic Simulation\n# Gate inputs: A, B, C, D\n# Outputs: Y = A''B + CD\n', './sim_digital --test', 'Running Logic Verification Matrix (16 input vectors)...\nAll 16 truth table outputs match theoretical Boolean reduction.\nPropagation Delay: 5.2 ns', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '568e5351-7eec-5468-a83c-12077323ab57', '47d18281-1cf7-5227-9bae-6f2d52dbd7d5', 'pccsl308-exp02', 2,
    'Half Adder, Full Adder & Half/Full Subtractor', 'Design and implement Half Adder and Full Adder circuits using logic gates and verify outputs against truth tables.', 45, 'Digital Logic Simulator & Verilog Bench',
    '["Understand theoretical principles of half adder, full adder & half/full subtractor", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Digital Logic", "tag": "Boolean", "iconType": "cpu"}, {"name": "Truth Tables", "tag": "K-Maps", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Half Adder, Full Adder & Half/Full Subtractor", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Digital toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Circuit file (.circ/.png)", "Truth Table verification (.txt)"], "description": "Upload required source files and execution logs for PCCSL308 Half Adder, Full Adder & Half/Full Subtractor", "acceptedFormats": ".circ,.png,.txt"}'::jsonb,
    '# Digital Circuit Netlist / Logic Simulation\n# Gate inputs: A, B, C, D\n# Outputs: Y = A''B + CD\n', './sim_digital --test', 'Running Logic Verification Matrix (16 input vectors)...\nAll 16 truth table outputs match theoretical Boolean reduction.\nPropagation Delay: 5.2 ns', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '2daecd25-be6f-5ae5-a0cf-f34ee893a5a6', '47d18281-1cf7-5227-9bae-6f2d52dbd7d5', 'pccsl308-exp03', 3,
    'Code Converters (Binary to Gray & BCD to Excess-3)', 'Design, simplify using K-Maps, and implement a 4-bit Binary-to-Gray and Gray-to-Binary code converter.', 45, 'Digital Logic Simulator & Verilog Bench',
    '["Understand theoretical principles of code converters (binary to gray & bcd to excess-3)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Digital Logic", "tag": "Boolean", "iconType": "cpu"}, {"name": "Truth Tables", "tag": "K-Maps", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Code Converters (Binary to Gray & BCD to Excess-3)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Digital toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Circuit file (.circ/.png)", "Truth Table verification (.txt)"], "description": "Upload required source files and execution logs for PCCSL308 Code Converters (Binary to Gray & BCD to Excess-3)", "acceptedFormats": ".circ,.png,.txt"}'::jsonb,
    '# Digital Circuit Netlist / Logic Simulation\n# Gate inputs: A, B, C, D\n# Outputs: Y = A''B + CD\n', './sim_digital --test', 'Running Logic Verification Matrix (16 input vectors)...\nAll 16 truth table outputs match theoretical Boolean reduction.\nPropagation Delay: 5.2 ns', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'ed26e59a-a0cd-5d1e-b60a-c567617d3fb4', '47d18281-1cf7-5227-9bae-6f2d52dbd7d5', 'pccsl308-exp04', 4,
    '4-bit Parallel Adder / Subtractor (IC 7483)', 'Construct a 4-bit binary adder/subtractor using IC 7483 and XOR gates, and verify carry/overflow flags.', 45, 'Digital Logic Simulator & Verilog Bench',
    '["Understand theoretical principles of 4-bit parallel adder / subtractor (ic 7483)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Digital Logic", "tag": "Boolean", "iconType": "cpu"}, {"name": "Truth Tables", "tag": "K-Maps", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for 4-bit Parallel Adder / Subtractor (IC 7483)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Digital toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Circuit file (.circ/.png)", "Truth Table verification (.txt)"], "description": "Upload required source files and execution logs for PCCSL308 4-bit Parallel Adder / Subtractor (IC 7483)", "acceptedFormats": ".circ,.png,.txt"}'::jsonb,
    '# Digital Circuit Netlist / Logic Simulation\n# Gate inputs: A, B, C, D\n# Outputs: Y = A''B + CD\n', './sim_digital --test', 'Running Logic Verification Matrix (16 input vectors)...\nAll 16 truth table outputs match theoretical Boolean reduction.\nPropagation Delay: 5.2 ns', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '7ae0787a-fa19-5ec5-9d67-00e05471bf55', '47d18281-1cf7-5227-9bae-6f2d52dbd7d5', 'pccsl308-exp05', 5,
    'Multiplexer & Demultiplexer Circuits', 'Implement a 4:1 Multiplexer (IC 74153) and 1:4 Demultiplexer, and realize a given 3-variable Boolean function using a MUX.', 45, 'Digital Logic Simulator & Verilog Bench',
    '["Understand theoretical principles of multiplexer & demultiplexer circuits", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Digital Logic", "tag": "Boolean", "iconType": "cpu"}, {"name": "Truth Tables", "tag": "K-Maps", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Multiplexer & Demultiplexer Circuits", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Digital toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Circuit file (.circ/.png)", "Truth Table verification (.txt)"], "description": "Upload required source files and execution logs for PCCSL308 Multiplexer & Demultiplexer Circuits", "acceptedFormats": ".circ,.png,.txt"}'::jsonb,
    '# Digital Circuit Netlist / Logic Simulation\n# Gate inputs: A, B, C, D\n# Outputs: Y = A''B + CD\n', './sim_digital --test', 'Running Logic Verification Matrix (16 input vectors)...\nAll 16 truth table outputs match theoretical Boolean reduction.\nPropagation Delay: 5.2 ns', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '87538f56-7fe8-559e-a87a-5251ad56b845', '47d18281-1cf7-5227-9bae-6f2d52dbd7d5', 'pccsl308-exp06', 6,
    'Flip-Flops (SR, JK, D & T)', 'Construct and verify the characteristic tables of clocked SR, JK, D, and T flip-flops using NAND/NOR gates or IC 7476/7474.', 45, 'Digital Logic Simulator & Verilog Bench',
    '["Understand theoretical principles of flip-flops (sr, jk, d & t)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Digital Logic", "tag": "Boolean", "iconType": "cpu"}, {"name": "Truth Tables", "tag": "K-Maps", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Flip-Flops (SR, JK, D & T)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Digital toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Circuit file (.circ/.png)", "Truth Table verification (.txt)"], "description": "Upload required source files and execution logs for PCCSL308 Flip-Flops (SR, JK, D & T)", "acceptedFormats": ".circ,.png,.txt"}'::jsonb,
    '# Digital Circuit Netlist / Logic Simulation\n# Gate inputs: A, B, C, D\n# Outputs: Y = A''B + CD\n', './sim_digital --test', 'Running Logic Verification Matrix (16 input vectors)...\nAll 16 truth table outputs match theoretical Boolean reduction.\nPropagation Delay: 5.2 ns', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '0efc2769-778f-5df3-8340-9d358d7e5a5f', '47d18281-1cf7-5227-9bae-6f2d52dbd7d5', 'pccsl308-exp07', 7,
    'Asynchronous & Synchronous Counters', 'Design and implement a 3-bit / 4-bit Ripple Counter and a Modulo-N Synchronous Counter using JK flip-flops, displaying output on a 7-segment LED.', 45, 'Digital Logic Simulator & Verilog Bench',
    '["Understand theoretical principles of asynchronous & synchronous counters", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Digital Logic", "tag": "Boolean", "iconType": "cpu"}, {"name": "Truth Tables", "tag": "K-Maps", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Asynchronous & Synchronous Counters", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Digital toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Circuit file (.circ/.png)", "Truth Table verification (.txt)"], "description": "Upload required source files and execution logs for PCCSL308 Asynchronous & Synchronous Counters", "acceptedFormats": ".circ,.png,.txt"}'::jsonb,
    '# Digital Circuit Netlist / Logic Simulation\n# Gate inputs: A, B, C, D\n# Outputs: Y = A''B + CD\n', './sim_digital --test', 'Running Logic Verification Matrix (16 input vectors)...\nAll 16 truth table outputs match theoretical Boolean reduction.\nPropagation Delay: 5.2 ns', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '45384dc7-11eb-5905-9d78-14f76ef138ad', '47d18281-1cf7-5227-9bae-6f2d52dbd7d5', 'pccsl308-exp08', 8,
    'Shift Registers (SISO, SIPO, PISO, PIPO)', 'Implement a 4-bit Shift Register using D flip-flops and verify serial/parallel data shifting.', 45, 'Digital Logic Simulator & Verilog Bench',
    '["Understand theoretical principles of shift registers (siso, sipo, piso, pipo)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Digital Logic", "tag": "Boolean", "iconType": "cpu"}, {"name": "Truth Tables", "tag": "K-Maps", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Shift Registers (SISO, SIPO, PISO, PIPO)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Digital toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Circuit file (.circ/.png)", "Truth Table verification (.txt)"], "description": "Upload required source files and execution logs for PCCSL308 Shift Registers (SISO, SIPO, PISO, PIPO)", "acceptedFormats": ".circ,.png,.txt"}'::jsonb,
    '# Digital Circuit Netlist / Logic Simulation\n# Gate inputs: A, B, C, D\n# Outputs: Y = A''B + CD\n', './sim_digital --test', 'Running Logic Verification Matrix (16 input vectors)...\nAll 16 truth table outputs match theoretical Boolean reduction.\nPropagation Delay: 5.2 ns', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('e9408a52-97fb-517c-b0d7-58529f7fcb83', 'PBCST304', 'Object Oriented Programming', 'S3'::semester_enum, 4, '3-0-0-1', 'CIA 50 / ESE 50', 'PC-PBL', 'Object-Oriented Analysis, Design, and Programming using Java. Classes, inheritance, polymorphism, abstract classes, interfaces, multithreading, and GUI basics.', '["Classes, Objects & Constructors", "Inheritance, Polymorphism & Interfaces", "Exception Handling & Multi-threading", "Java Generics, Collections & Streams"]'::jsonb, 'PBCST304')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '7c73a49c-4008-568a-9c0f-9a696d94d12a', 'e9408a52-97fb-517c-b0d7-58529f7fcb83', 'pbcst304-exp01', 1,
    'Classes, Objects & Constructors (Java/C++)', 'Design a BankAccount class with constructors, deposit(), withdraw(), and getBalance() methods with validation against overdraft.', 45, 'OpenJDK 21 / Java Linux Sandbox',
    '["Understand theoretical principles of classes, objects & constructors (java/c++)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Java 21", "tag": "OOP", "iconType": "code"}, {"name": "Polymorphism & Interfaces", "tag": "Architecture", "iconType": "layers"}, {"name": "Exception Handling", "tag": "Safety", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Classes, Objects & Constructors (Java/C++)", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using OpenJDK toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Java file (.java)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PBCST304 Classes, Objects & Constructors (Java/C++)", "acceptedFormats": ".java,.png,.jpg"}'::jsonb,
    'public class Main {\n    public static void main(String[] args) {\n        System.out.println("KTU PBCST304 Object Oriented Programming");\n    }\n}\n', 'javac Main.java && java Main', 'Compiled Main.java with javac 21.0.4\nObject Hierarchy Initialized.\nPolymorphic methods dispatched successfully.', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '0c6faa8f-bb6d-5404-b1a5-afb7c9187c73', 'e9408a52-97fb-517c-b0d7-58529f7fcb83', 'pbcst304-exp02', 2,
    'Inheritance & Method Overriding', 'Create an Employee base class and derived classes FullTimeEmployee and PartTimeEmployee overriding calculateSalary().', 45, 'OpenJDK 21 / Java Linux Sandbox',
    '["Understand theoretical principles of inheritance & method overriding", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Java 21", "tag": "OOP", "iconType": "code"}, {"name": "Polymorphism & Interfaces", "tag": "Architecture", "iconType": "layers"}, {"name": "Exception Handling", "tag": "Safety", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Inheritance & Method Overriding", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using OpenJDK toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Java file (.java)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PBCST304 Inheritance & Method Overriding", "acceptedFormats": ".java,.png,.jpg"}'::jsonb,
    'public class Main {\n    public static void main(String[] args) {\n        System.out.println("KTU PBCST304 Object Oriented Programming");\n    }\n}\n', 'javac Main.java && java Main', 'Compiled Main.java with javac 21.0.4\nObject Hierarchy Initialized.\nPolymorphic methods dispatched successfully.', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '0d0c2967-86a0-5c78-b564-1bc775a5838e', 'e9408a52-97fb-517c-b0d7-58529f7fcb83', 'pbcst304-exp03', 3,
    'Interfaces, Abstract Classes & Polymorphism', 'Implement a Shape hierarchy (Circle, Rectangle, Triangle) using an abstract class/interface with area() and perimeter() methods.', 45, 'OpenJDK 21 / Java Linux Sandbox',
    '["Understand theoretical principles of interfaces, abstract classes & polymorphism", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Java 21", "tag": "OOP", "iconType": "code"}, {"name": "Polymorphism & Interfaces", "tag": "Architecture", "iconType": "layers"}, {"name": "Exception Handling", "tag": "Safety", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Interfaces, Abstract Classes & Polymorphism", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using OpenJDK toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Java file (.java)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PBCST304 Interfaces, Abstract Classes & Polymorphism", "acceptedFormats": ".java,.png,.jpg"}'::jsonb,
    'public class Main {\n    public static void main(String[] args) {\n        System.out.println("KTU PBCST304 Object Oriented Programming");\n    }\n}\n', 'javac Main.java && java Main', 'Compiled Main.java with javac 21.0.4\nObject Hierarchy Initialized.\nPolymorphic methods dispatched successfully.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '61407b43-350a-5f7a-b9c5-9528c4f1bfc5', 'e9408a52-97fb-517c-b0d7-58529f7fcb83', 'pbcst304-exp04', 4,
    'Exception Handling & Custom Exceptions', 'Build a StudentRegistration module that throws custom checked exceptions (InvalidAdmissionNoException, DuplicateEntryException).', 45, 'OpenJDK 21 / Java Linux Sandbox',
    '["Understand theoretical principles of exception handling & custom exceptions", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Java 21", "tag": "OOP", "iconType": "code"}, {"name": "Polymorphism & Interfaces", "tag": "Architecture", "iconType": "layers"}, {"name": "Exception Handling", "tag": "Safety", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Exception Handling & Custom Exceptions", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using OpenJDK toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Java file (.java)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PBCST304 Exception Handling & Custom Exceptions", "acceptedFormats": ".java,.png,.jpg"}'::jsonb,
    'public class Main {\n    public static void main(String[] args) {\n        System.out.println("KTU PBCST304 Object Oriented Programming");\n    }\n}\n', 'javac Main.java && java Main', 'Compiled Main.java with javac 21.0.4\nObject Hierarchy Initialized.\nPolymorphic methods dispatched successfully.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '10621753-1a6a-5d56-bdd7-6a9102e63c7b', 'e9408a52-97fb-517c-b0d7-58529f7fcb83', 'pbcst304-exp05', 5,
    'Multithreading & Synchronization', 'Write a multithreaded Producer-Consumer simulation using synchronized blocks and wait()/notify().', 45, 'OpenJDK 21 / Java Linux Sandbox',
    '["Understand theoretical principles of multithreading & synchronization", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Java 21", "tag": "OOP", "iconType": "code"}, {"name": "Polymorphism & Interfaces", "tag": "Architecture", "iconType": "layers"}, {"name": "Exception Handling", "tag": "Safety", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Multithreading & Synchronization", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using OpenJDK toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Java file (.java)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PBCST304 Multithreading & Synchronization", "acceptedFormats": ".java,.png,.jpg"}'::jsonb,
    'public class Main {\n    public static void main(String[] args) {\n        System.out.println("KTU PBCST304 Object Oriented Programming");\n    }\n}\n', 'javac Main.java && java Main', 'Compiled Main.java with javac 21.0.4\nObject Hierarchy Initialized.\nPolymorphic methods dispatched successfully.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '68b7db6b-b17f-510f-8000-e291f15a8bf1', 'e9408a52-97fb-517c-b0d7-58529f7fcb83', 'pbcst304-exp06', 6,
    'File I/O & Serialization', 'Design and implement an object-oriented application (e.g., Hostel Mess Billing, Lab Equipment Checkout, or Quiz Engine) using UML class diagrams, inheritance, exception handling, and persistent storage.', 45, 'OpenJDK 21 / Java Linux Sandbox',
    '["Understand theoretical principles of file i/o & serialization", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Java 21", "tag": "OOP", "iconType": "code"}, {"name": "Polymorphism & Interfaces", "tag": "Architecture", "iconType": "layers"}, {"name": "Exception Handling", "tag": "Safety", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for File I/O & Serialization", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using OpenJDK toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Java file (.java)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PBCST304 File I/O & Serialization", "acceptedFormats": ".java,.png,.jpg"}'::jsonb,
    'public class Main {\n    public static void main(String[] args) {\n        System.out.println("KTU PBCST304 Object Oriented Programming");\n    }\n}\n', 'javac Main.java && java Main', 'Compiled Main.java with javac 21.0.4\nObject Hierarchy Initialized.\nPolymorphic methods dispatched successfully.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('d9dc8eb0-b34d-5ae9-a0d2-0b97da789028', 'PCCSL407', 'Operating Systems Lab', 'S4'::semester_enum, 2, '0-0-3-0', 'CIA 50 / ESE 50', 'PC Practical', 'System calls, process scheduling algorithms, IPC (pipes, shared memory), semaphores, deadlock handling, memory allocation, and page replacement.', '["Process Creation & fork()", "CPU Scheduling Algorithms", "Semaphores & IPC", "Memory Management (Paging)"]'::jsonb, 'PCCSL407')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '511cdbf6-0123-57c7-a155-37a3921f321a', 'd9dc8eb0-b34d-5ae9-a0d2-0b97da789028', 'pccsl407-exp01', 1,
    'Linux System Calls (fork, getpid, wait, exit, exec)', 'Write a C program using fork() to create a parent-child process tree where the child prints "PCCSL407" and its PID, and the parent waits and prints "Operating Systems" with its PID.', 45, 'Isolated Linux Container (Kernel 6.8 POSIX)',
    '["Understand theoretical principles of linux system calls (fork, getpid, wait, exit, exec)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "POSIX", "iconType": "c"}, {"name": "fork() & Syscalls", "tag": "Syscall", "iconType": "fork"}, {"name": "Process Tree", "tag": "Processes", "iconType": "tree"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Linux System Calls (fork, getpid, wait, exit, exec)", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Isolated toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL407 Linux System Calls (fork, getpid, wait, exit, exec)", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    pid_t pid = fork();\n    if (pid == 0) {\n        printf("Child Process PID: %d\\n", getpid());\n    } else {\n        printf("Parent Process PID: %d\\n", getpid());\n    }\n    return 0;\n}\n', 'gcc process_tree.c -o process_tree && ./process_tree', 'student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\nParent Process PID: 12450\nChild 1 Process PID: 12451 (parent: 12450)\nChild 2 Process PID: 12452 (parent: 12450)', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '77c8ff18-cf9b-573b-9ac2-b5bba6e8da1d', 'd9dc8eb0-b34d-5ae9-a0d2-0b97da789028', 'pccsl407-exp02', 2,
    'Directory & File System Calls (opendir, readdir, stat)', 'Implement a simplified `ls -l` clone in C using opendir(), readdir(), and stat() to display file permissions, size, and modification timestamps.', 45, 'Isolated Linux Container (Kernel 6.8 POSIX)',
    '["Understand theoretical principles of directory & file system calls (opendir, readdir, stat)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "POSIX", "iconType": "c"}, {"name": "fork() & Syscalls", "tag": "Syscall", "iconType": "fork"}, {"name": "Process Tree", "tag": "Processes", "iconType": "tree"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Directory & File System Calls (opendir, readdir, stat)", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Isolated toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL407 Directory & File System Calls (opendir, readdir, stat)", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    pid_t pid = fork();\n    if (pid == 0) {\n        printf("Child Process PID: %d\\n", getpid());\n    } else {\n        printf("Parent Process PID: %d\\n", getpid());\n    }\n    return 0;\n}\n', 'gcc process_tree.c -o process_tree && ./process_tree', 'student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\nParent Process PID: 12450\nChild 1 Process PID: 12451 (parent: 12450)\nChild 2 Process PID: 12452 (parent: 12450)', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '93ad2698-9c55-5819-a930-0133f3d38c57', 'd9dc8eb0-b34d-5ae9-a0d2-0b97da789028', 'pccsl407-exp03', 3,
    'CPU Scheduling Algorithms', 'Write a C program to simulate FCFS, SJF (Non-preemptive), Priority, and Round Robin scheduling. Compute Average Waiting Time and Average Turnaround Time.', 45, 'Isolated Linux Container (Kernel 6.8 POSIX)',
    '["Understand theoretical principles of cpu scheduling algorithms", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "POSIX", "iconType": "c"}, {"name": "fork() & Syscalls", "tag": "Syscall", "iconType": "fork"}, {"name": "Process Tree", "tag": "Processes", "iconType": "tree"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for CPU Scheduling Algorithms", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Isolated toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL407 CPU Scheduling Algorithms", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    pid_t pid = fork();\n    if (pid == 0) {\n        printf("Child Process PID: %d\\n", getpid());\n    } else {\n        printf("Parent Process PID: %d\\n", getpid());\n    }\n    return 0;\n}\n', 'gcc process_tree.c -o process_tree && ./process_tree', 'student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\nParent Process PID: 12450\nChild 1 Process PID: 12451 (parent: 12450)\nChild 2 Process PID: 12452 (parent: 12450)', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'f4e91798-4b46-5c42-940b-9f85b6697378', 'd9dc8eb0-b34d-5ae9-a0d2-0b97da789028', 'pccsl407-exp04', 4,
    'Inter-Process Communication (Pipes & Shared Memory)', 'Implement IPC between two processes using (a) anonymous pipe() and (b) POSIX/System V shared memory (shmget/shmat).', 45, 'Isolated Linux Container (Kernel 6.8 POSIX)',
    '["Understand theoretical principles of inter-process communication (pipes & shared memory)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "POSIX", "iconType": "c"}, {"name": "fork() & Syscalls", "tag": "Syscall", "iconType": "fork"}, {"name": "Process Tree", "tag": "Processes", "iconType": "tree"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Inter-Process Communication (Pipes & Shared Memory)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Isolated toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL407 Inter-Process Communication (Pipes & Shared Memory)", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    pid_t pid = fork();\n    if (pid == 0) {\n        printf("Child Process PID: %d\\n", getpid());\n    } else {\n        printf("Parent Process PID: %d\\n", getpid());\n    }\n    return 0;\n}\n', 'gcc process_tree.c -o process_tree && ./process_tree', 'student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\nParent Process PID: 12450\nChild 1 Process PID: 12451 (parent: 12450)\nChild 2 Process PID: 12452 (parent: 12450)', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '40da54c7-27bc-51cf-b82c-81dfa2562bab', 'd9dc8eb0-b34d-5ae9-a0d2-0b97da789028', 'pccsl407-exp05', 5,
    'Process Synchronization (Producer-Consumer with Semaphores)', 'Solve the bounded-buffer Producer-Consumer problem using POSIX threads (pthreads) and semaphores (sem_wait/sem_post) and mutexes.', 45, 'Isolated Linux Container (Kernel 6.8 POSIX)',
    '["Understand theoretical principles of process synchronization (producer-consumer with semaphores)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "POSIX", "iconType": "c"}, {"name": "fork() & Syscalls", "tag": "Syscall", "iconType": "fork"}, {"name": "Process Tree", "tag": "Processes", "iconType": "tree"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Process Synchronization (Producer-Consumer with Semaphores)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Isolated toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL407 Process Synchronization (Producer-Consumer with Semaphores)", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    pid_t pid = fork();\n    if (pid == 0) {\n        printf("Child Process PID: %d\\n", getpid());\n    } else {\n        printf("Parent Process PID: %d\\n", getpid());\n    }\n    return 0;\n}\n', 'gcc process_tree.c -o process_tree && ./process_tree', 'student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\nParent Process PID: 12450\nChild 1 Process PID: 12451 (parent: 12450)\nChild 2 Process PID: 12452 (parent: 12450)', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '2900958b-466c-55d3-9191-95cc54d548b7', 'd9dc8eb0-b34d-5ae9-a0d2-0b97da789028', 'pccsl407-exp06', 6,
    'Deadlock Avoidance (Banker''s Algorithm)', 'Write a C program implementing Banker''s Algorithm to check if a system is in a safe state and print the safe execution sequence.', 45, 'Isolated Linux Container (Kernel 6.8 POSIX)',
    '["Understand theoretical principles of deadlock avoidance (banker''s algorithm)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "POSIX", "iconType": "c"}, {"name": "fork() & Syscalls", "tag": "Syscall", "iconType": "fork"}, {"name": "Process Tree", "tag": "Processes", "iconType": "tree"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Deadlock Avoidance (Banker''s Algorithm)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Isolated toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL407 Deadlock Avoidance (Banker''s Algorithm)", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    pid_t pid = fork();\n    if (pid == 0) {\n        printf("Child Process PID: %d\\n", getpid());\n    } else {\n        printf("Parent Process PID: %d\\n", getpid());\n    }\n    return 0;\n}\n', 'gcc process_tree.c -o process_tree && ./process_tree', 'student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\nParent Process PID: 12450\nChild 1 Process PID: 12451 (parent: 12450)\nChild 2 Process PID: 12452 (parent: 12450)', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'd5a12d36-1063-5bd9-ba8d-7d7a4790f0e5', 'd9dc8eb0-b34d-5ae9-a0d2-0b97da789028', 'pccsl407-exp07', 7,
    'Memory Allocation Strategies', 'Simulate First Fit, Best Fit, and Worst Fit contiguous memory allocation strategies for a given set of memory partitions and process sizes.', 45, 'Isolated Linux Container (Kernel 6.8 POSIX)',
    '["Understand theoretical principles of memory allocation strategies", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "POSIX", "iconType": "c"}, {"name": "fork() & Syscalls", "tag": "Syscall", "iconType": "fork"}, {"name": "Process Tree", "tag": "Processes", "iconType": "tree"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Memory Allocation Strategies", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Isolated toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL407 Memory Allocation Strategies", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    pid_t pid = fork();\n    if (pid == 0) {\n        printf("Child Process PID: %d\\n", getpid());\n    } else {\n        printf("Parent Process PID: %d\\n", getpid());\n    }\n    return 0;\n}\n', 'gcc process_tree.c -o process_tree && ./process_tree', 'student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\nParent Process PID: 12450\nChild 1 Process PID: 12451 (parent: 12450)\nChild 2 Process PID: 12452 (parent: 12450)', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '9aac9722-6db9-5d54-830b-8f564737c05d', 'd9dc8eb0-b34d-5ae9-a0d2-0b97da789028', 'pccsl407-exp08', 8,
    'Page Replacement Algorithms', 'Implement FIFO, LRU, and Optimal page replacement algorithms in C and compare total page faults for a given reference string.', 45, 'Isolated Linux Container (Kernel 6.8 POSIX)',
    '["Understand theoretical principles of page replacement algorithms", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "POSIX", "iconType": "c"}, {"name": "fork() & Syscalls", "tag": "Syscall", "iconType": "fork"}, {"name": "Process Tree", "tag": "Processes", "iconType": "tree"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Page Replacement Algorithms", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Isolated toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL407 Page Replacement Algorithms", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    pid_t pid = fork();\n    if (pid == 0) {\n        printf("Child Process PID: %d\\n", getpid());\n    } else {\n        printf("Parent Process PID: %d\\n", getpid());\n    }\n    return 0;\n}\n', 'gcc process_tree.c -o process_tree && ./process_tree', 'student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\nParent Process PID: 12450\nChild 1 Process PID: 12451 (parent: 12450)\nChild 2 Process PID: 12452 (parent: 12450)', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '250bbc7c-d8b5-5fc1-a3b7-72b360886041', 'd9dc8eb0-b34d-5ae9-a0d2-0b97da789028', 'pccsl407-exp09', 9,
    'Disk Scheduling Algorithms', 'Simulate FCFS, SCAN, and C-SCAN disk head scheduling algorithms and calculate total head movement.', 45, 'Isolated Linux Container (Kernel 6.8 POSIX)',
    '["Understand theoretical principles of disk scheduling algorithms", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "C Programming", "tag": "POSIX", "iconType": "c"}, {"name": "fork() & Syscalls", "tag": "Syscall", "iconType": "fork"}, {"name": "Process Tree", "tag": "Processes", "iconType": "tree"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Disk Scheduling Algorithms", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Isolated toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C file (.c)", "Output screenshot (.png/.jpg)"], "description": "Upload required source files and execution logs for PCCSL407 Disk Scheduling Algorithms", "acceptedFormats": ".c,.png,.jpg"}'::jsonb,
    '#include <stdio.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    pid_t pid = fork();\n    if (pid == 0) {\n        printf("Child Process PID: %d\\n", getpid());\n    } else {\n        printf("Parent Process PID: %d\\n", getpid());\n    }\n    return 0;\n}\n', 'gcc process_tree.c -o process_tree && ./process_tree', 'student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree\nParent Process PID: 12450\nChild 1 Process PID: 12451 (parent: 12450)\nChild 2 Process PID: 12452 (parent: 12450)', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('725821bf-0039-5e71-a885-cd08b831b443', 'PCCSL408', 'Database Management Systems Lab', 'S4'::semester_enum, 2, '0-0-3-0', 'CIA 50 / ESE 50', 'PC Practical', 'Relational database design, DDL/DML, complex SQL queries, views, triggers, stored procedures, transactions, and full-stack DB integration.', '["ER Modeling & Schema Design", "SQL Joins, Views & Subqueries", "Triggers & Functions", "PL/SQL Programming"]'::jsonb, 'PCCSL408')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'a3ea7361-375a-5b09-b026-920902b99864', '725821bf-0039-5e71-a885-cd08b831b443', 'pccsl408-exp01', 1,
    'ER Diagram & DDL Schema Creation', 'Design an ER diagram for a College Lab Management System (Colleges, Students, Courses, Labs, Submissions) and create normalized tables in PostgreSQL with PRIMARY KEY, FOREIGN KEY, CHECK, and UNIQUE constraints.', 45, 'PostgreSQL 16 CLI Sandbox',
    '["Understand theoretical principles of er diagram & ddl schema creation", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "SQL Querying", "tag": "PostgreSQL", "iconType": "sql"}, {"name": "Database Design", "tag": "Relational", "iconType": "code"}, {"name": "Triggers & Procedures", "tag": "PL/pgSQL", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for ER Diagram & DDL Schema Creation", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PostgreSQL toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 SQL Script (.sql)", "Query output (.txt/.png)"], "description": "Upload required source files and execution logs for PCCSL408 ER Diagram & DDL Schema Creation", "acceptedFormats": ".sql,.txt,.png"}'::jsonb,
    '-- KTU PCCSL408 DBMS Lab\nCREATE TABLE students (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    cgpa NUMERIC(3,2)\n);\n', 'psql -U student -d campuslab_db -f queries.sql', 'CREATE TABLE\nINSERT 0 10\n id |   name   | cgpa \n----+----------+------\n  1 | Adarsh S | 9.20\n  2 | Rahul K  | 8.85\n(2 rows)\nQuery executed in 1.42ms', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '024bfbd5-528f-59a5-8e3d-4dc38e843a54', '725821bf-0039-5e71-a885-cd08b831b443', 'pccsl408-exp02', 2,
    'DML Operations & Basic Queries', 'Insert sample records into the schema and execute SELECT, UPDATE, DELETE, ORDER BY, DISTINCT, BETWEEN, and LIKE queries.', 45, 'PostgreSQL 16 CLI Sandbox',
    '["Understand theoretical principles of dml operations & basic queries", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "SQL Querying", "tag": "PostgreSQL", "iconType": "sql"}, {"name": "Database Design", "tag": "Relational", "iconType": "code"}, {"name": "Triggers & Procedures", "tag": "PL/pgSQL", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for DML Operations & Basic Queries", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PostgreSQL toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 SQL Script (.sql)", "Query output (.txt/.png)"], "description": "Upload required source files and execution logs for PCCSL408 DML Operations & Basic Queries", "acceptedFormats": ".sql,.txt,.png"}'::jsonb,
    '-- KTU PCCSL408 DBMS Lab\nCREATE TABLE students (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    cgpa NUMERIC(3,2)\n);\n', 'psql -U student -d campuslab_db -f queries.sql', 'CREATE TABLE\nINSERT 0 10\n id |   name   | cgpa \n----+----------+------\n  1 | Adarsh S | 9.20\n  2 | Rahul K  | 8.85\n(2 rows)\nQuery executed in 1.42ms', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'f0442411-7e0b-522e-a917-ce9baa0f44c3', '725821bf-0039-5e71-a885-cd08b831b443', 'pccsl408-exp03', 3,
    'Aggregate Functions, GROUP BY & HAVING', 'Write SQL queries to compute department-wise average marks, count of active students per semester, and filter groups with HAVING.', 45, 'PostgreSQL 16 CLI Sandbox',
    '["Understand theoretical principles of aggregate functions, group by & having", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "SQL Querying", "tag": "PostgreSQL", "iconType": "sql"}, {"name": "Database Design", "tag": "Relational", "iconType": "code"}, {"name": "Triggers & Procedures", "tag": "PL/pgSQL", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Aggregate Functions, GROUP BY & HAVING", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PostgreSQL toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 SQL Script (.sql)", "Query output (.txt/.png)"], "description": "Upload required source files and execution logs for PCCSL408 Aggregate Functions, GROUP BY & HAVING", "acceptedFormats": ".sql,.txt,.png"}'::jsonb,
    '-- KTU PCCSL408 DBMS Lab\nCREATE TABLE students (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    cgpa NUMERIC(3,2)\n);\n', 'psql -U student -d campuslab_db -f queries.sql', 'CREATE TABLE\nINSERT 0 10\n id |   name   | cgpa \n----+----------+------\n  1 | Adarsh S | 9.20\n  2 | Rahul K  | 8.85\n(2 rows)\nQuery executed in 1.42ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '431e8840-75e4-5a4e-8828-d09b5c14d681', '725821bf-0039-5e71-a885-cd08b831b443', 'pccsl408-exp04', 4,
    'Multi-Table Joins & Nested Subqueries', 'Write INNER JOIN, LEFT JOIN, and correlated subquery statements to list students who submitted all experiments for PCCSL408 and scored above the class average.', 45, 'PostgreSQL 16 CLI Sandbox',
    '["Understand theoretical principles of multi-table joins & nested subqueries", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "SQL Querying", "tag": "PostgreSQL", "iconType": "sql"}, {"name": "Database Design", "tag": "Relational", "iconType": "code"}, {"name": "Triggers & Procedures", "tag": "PL/pgSQL", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Multi-Table Joins & Nested Subqueries", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PostgreSQL toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 SQL Script (.sql)", "Query output (.txt/.png)"], "description": "Upload required source files and execution logs for PCCSL408 Multi-Table Joins & Nested Subqueries", "acceptedFormats": ".sql,.txt,.png"}'::jsonb,
    '-- KTU PCCSL408 DBMS Lab\nCREATE TABLE students (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    cgpa NUMERIC(3,2)\n);\n', 'psql -U student -d campuslab_db -f queries.sql', 'CREATE TABLE\nINSERT 0 10\n id |   name   | cgpa \n----+----------+------\n  1 | Adarsh S | 9.20\n  2 | Rahul K  | 8.85\n(2 rows)\nQuery executed in 1.42ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '2c18b6fe-e82a-533a-9c46-317bd1b8c232', '725821bf-0039-5e71-a885-cd08b831b443', 'pccsl408-exp05', 5,
    'Views, Indexes & Sequences', 'Create a read-only SQL VIEW for student CIA transcripts, add a composite B-Tree index on (user_id, state), and verify query plan improvement using EXPLAIN ANALYZE.', 45, 'PostgreSQL 16 CLI Sandbox',
    '["Understand theoretical principles of views, indexes & sequences", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "SQL Querying", "tag": "PostgreSQL", "iconType": "sql"}, {"name": "Database Design", "tag": "Relational", "iconType": "code"}, {"name": "Triggers & Procedures", "tag": "PL/pgSQL", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Views, Indexes & Sequences", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PostgreSQL toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 SQL Script (.sql)", "Query output (.txt/.png)"], "description": "Upload required source files and execution logs for PCCSL408 Views, Indexes & Sequences", "acceptedFormats": ".sql,.txt,.png"}'::jsonb,
    '-- KTU PCCSL408 DBMS Lab\nCREATE TABLE students (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    cgpa NUMERIC(3,2)\n);\n', 'psql -U student -d campuslab_db -f queries.sql', 'CREATE TABLE\nINSERT 0 10\n id |   name   | cgpa \n----+----------+------\n  1 | Adarsh S | 9.20\n  2 | Rahul K  | 8.85\n(2 rows)\nQuery executed in 1.42ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '085f2100-c6d0-58b3-bedb-906f4d25471b', '725821bf-0039-5e71-a885-cd08b831b443', 'pccsl408-exp06', 6,
    'Stored Procedures & Functions (PL/pgSQL)', 'Write a PL/pgSQL function calculate_cia_grade(score INT) that returns the KTU letter grade (S, A+, A, B+, ...) and a stored procedure to finalize semester grades.', 45, 'PostgreSQL 16 CLI Sandbox',
    '["Understand theoretical principles of stored procedures & functions (pl/pgsql)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "SQL Querying", "tag": "PostgreSQL", "iconType": "sql"}, {"name": "Database Design", "tag": "Relational", "iconType": "code"}, {"name": "Triggers & Procedures", "tag": "PL/pgSQL", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Stored Procedures & Functions (PL/pgSQL)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PostgreSQL toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 SQL Script (.sql)", "Query output (.txt/.png)"], "description": "Upload required source files and execution logs for PCCSL408 Stored Procedures & Functions (PL/pgSQL)", "acceptedFormats": ".sql,.txt,.png"}'::jsonb,
    '-- KTU PCCSL408 DBMS Lab\nCREATE TABLE students (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    cgpa NUMERIC(3,2)\n);\n', 'psql -U student -d campuslab_db -f queries.sql', 'CREATE TABLE\nINSERT 0 10\n id |   name   | cgpa \n----+----------+------\n  1 | Adarsh S | 9.20\n  2 | Rahul K  | 8.85\n(2 rows)\nQuery executed in 1.42ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '01f35d68-9371-55b5-b6b7-f1a013ed28e2', '725821bf-0039-5e71-a885-cd08b831b443', 'pccsl408-exp07', 7,
    'Triggers & Audit Logging', 'Create an AFTER UPDATE trigger on the evaluations table that automatically logs old_score, new_score, and updated_at into an audit_events table.', 45, 'PostgreSQL 16 CLI Sandbox',
    '["Understand theoretical principles of triggers & audit logging", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "SQL Querying", "tag": "PostgreSQL", "iconType": "sql"}, {"name": "Database Design", "tag": "Relational", "iconType": "code"}, {"name": "Triggers & Procedures", "tag": "PL/pgSQL", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Triggers & Audit Logging", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PostgreSQL toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 SQL Script (.sql)", "Query output (.txt/.png)"], "description": "Upload required source files and execution logs for PCCSL408 Triggers & Audit Logging", "acceptedFormats": ".sql,.txt,.png"}'::jsonb,
    '-- KTU PCCSL408 DBMS Lab\nCREATE TABLE students (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    cgpa NUMERIC(3,2)\n);\n', 'psql -U student -d campuslab_db -f queries.sql', 'CREATE TABLE\nINSERT 0 10\n id |   name   | cgpa \n----+----------+------\n  1 | Adarsh S | 9.20\n  2 | Rahul K  | 8.85\n(2 rows)\nQuery executed in 1.42ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '91630b4f-95c4-5b30-bb0a-b8d72f9e8806', '725821bf-0039-5e71-a885-cd08b831b443', 'pccsl408-exp08', 8,
    'Transactions, Savepoints & Concurrency Control', 'Demonstrate BEGIN, COMMIT, ROLLBACK, and SAVEPOINT behavior in PostgreSQL while transferring lab credits/slots safely.', 45, 'PostgreSQL 16 CLI Sandbox',
    '["Understand theoretical principles of transactions, savepoints & concurrency control", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "SQL Querying", "tag": "PostgreSQL", "iconType": "sql"}, {"name": "Database Design", "tag": "Relational", "iconType": "code"}, {"name": "Triggers & Procedures", "tag": "PL/pgSQL", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Transactions, Savepoints & Concurrency Control", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PostgreSQL toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 SQL Script (.sql)", "Query output (.txt/.png)"], "description": "Upload required source files and execution logs for PCCSL408 Transactions, Savepoints & Concurrency Control", "acceptedFormats": ".sql,.txt,.png"}'::jsonb,
    '-- KTU PCCSL408 DBMS Lab\nCREATE TABLE students (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    cgpa NUMERIC(3,2)\n);\n', 'psql -U student -d campuslab_db -f queries.sql', 'CREATE TABLE\nINSERT 0 10\n id |   name   | cgpa \n----+----------+------\n  1 | Adarsh S | 9.20\n  2 | Rahul K  | 8.85\n(2 rows)\nQuery executed in 1.42ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '7de394f4-ae49-52ff-8346-66430d6347c1', '725821bf-0039-5e71-a885-cd08b831b443', 'pccsl408-exp09', 9,
    'NoSQL / JSONB Operations', 'Store semi-structured lab submission payloads in a PostgreSQL JSONB column and query nested keys using ->, ->>, and @> operators.', 45, 'PostgreSQL 16 CLI Sandbox',
    '["Understand theoretical principles of nosql / jsonb operations", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "SQL Querying", "tag": "PostgreSQL", "iconType": "sql"}, {"name": "Database Design", "tag": "Relational", "iconType": "code"}, {"name": "Triggers & Procedures", "tag": "PL/pgSQL", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for NoSQL / JSONB Operations", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PostgreSQL toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 SQL Script (.sql)", "Query output (.txt/.png)"], "description": "Upload required source files and execution logs for PCCSL408 NoSQL / JSONB Operations", "acceptedFormats": ".sql,.txt,.png"}'::jsonb,
    '-- KTU PCCSL408 DBMS Lab\nCREATE TABLE students (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    cgpa NUMERIC(3,2)\n);\n', 'psql -U student -d campuslab_db -f queries.sql', 'CREATE TABLE\nINSERT 0 10\n id |   name   | cgpa \n----+----------+------\n  1 | Adarsh S | 9.20\n  2 | Rahul K  | 8.85\n(2 rows)\nQuery executed in 1.42ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('ee2c5832-2915-52c4-8972-28a58b7e6ec8', 'PBCST404', 'Computer Organization & Architecture', 'S4'::semester_enum, 4, '3-0-0-1', 'CIA 50 / ESE 50', 'PC-PBL', 'Functional units, CPU datapath, control unit design, ALU modeling, pipeline hazard detection, cache memory mapping, and RISC-V assembly simulation.', '["Basic Functional Units", "Processor & Control Unit", "Memory System & Cache", "Input/Output Organization"]'::jsonb, 'PBCST404')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '11861b53-a6bd-58af-8522-5ef264a134a5', 'ee2c5832-2915-52c4-8972-28a58b7e6ec8', 'pbcst404-exp01', 1,
    'Booth''s Multiplication Algorithm Simulation', 'Write a C/Python simulator for Booth''s signed binary multiplication algorithm showing step-by-step register traces (AC, QR, Qn+1).', 45, 'Verilog & RISC-V Simulator Container',
    '["Understand theoretical principles of booth''s multiplication algorithm simulation", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Verilog HDL", "tag": "RTL", "iconType": "cpu"}, {"name": "Computer Architecture", "tag": "Hardware", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Booth''s Multiplication Algorithm Simulation", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Verilog toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Verilog file (.v)", "Simulation waveform (.png)"], "description": "Upload required source files and execution logs for PBCST404 Booth''s Multiplication Algorithm Simulation", "acceptedFormats": ".v,.png"}'::jsonb,
    'module alu_16bit(\n    input [15:0] a, b,\n    input [2:0] opcode,\n    output reg [15:0] result,\n    output zero\n);\n', 'iverilog -o alu_sim alu.v alu_tb.v && vvp alu_sim', 'VCD info: dumpfile dump.vcd opened for output.\nALU Opcode 000 (ADD): A=0005, B=0003 -> Result=0008 | Zero=0 (PASSED)\nALU Opcode 001 (SUB): A=0005, B=0005 -> Result=0000 | Zero=1 (PASSED)', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '4cf03e0e-0b8b-5a02-a12c-4cb464a2bdf9', 'ee2c5832-2915-52c4-8972-28a58b7e6ec8', 'pbcst404-exp02', 2,
    'Restoring & Non-Restoring Division Simulation', 'Implement a simulator for binary division using the restoring division algorithm and display each shift-subtract cycle.', 45, 'Verilog & RISC-V Simulator Container',
    '["Understand theoretical principles of restoring & non-restoring division simulation", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Verilog HDL", "tag": "RTL", "iconType": "cpu"}, {"name": "Computer Architecture", "tag": "Hardware", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Restoring & Non-Restoring Division Simulation", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Verilog toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Verilog file (.v)", "Simulation waveform (.png)"], "description": "Upload required source files and execution logs for PBCST404 Restoring & Non-Restoring Division Simulation", "acceptedFormats": ".v,.png"}'::jsonb,
    'module alu_16bit(\n    input [15:0] a, b,\n    input [2:0] opcode,\n    output reg [15:0] result,\n    output zero\n);\n', 'iverilog -o alu_sim alu.v alu_tb.v && vvp alu_sim', 'VCD info: dumpfile dump.vcd opened for output.\nALU Opcode 000 (ADD): A=0005, B=0003 -> Result=0008 | Zero=0 (PASSED)\nALU Opcode 001 (SUB): A=0005, B=0005 -> Result=0000 | Zero=1 (PASSED)', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '49dca1e8-c15d-52e2-9193-14c0fe6ab2a6', 'ee2c5832-2915-52c4-8972-28a58b7e6ec8', 'pbcst404-exp03', 3,
    'Single-Cycle ALU Design (HDL / Logisim)', 'Design a 4-bit/8-bit ALU supporting ADD, SUB, AND, OR, XOR, SLT, and Zero/Carry/Overflow status flags.', 45, 'Verilog & RISC-V Simulator Container',
    '["Understand theoretical principles of single-cycle alu design (hdl / logisim)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Verilog HDL", "tag": "RTL", "iconType": "cpu"}, {"name": "Computer Architecture", "tag": "Hardware", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Single-Cycle ALU Design (HDL / Logisim)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Verilog toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Verilog file (.v)", "Simulation waveform (.png)"], "description": "Upload required source files and execution logs for PBCST404 Single-Cycle ALU Design (HDL / Logisim)", "acceptedFormats": ".v,.png"}'::jsonb,
    'module alu_16bit(\n    input [15:0] a, b,\n    input [2:0] opcode,\n    output reg [15:0] result,\n    output zero\n);\n', 'iverilog -o alu_sim alu.v alu_tb.v && vvp alu_sim', 'VCD info: dumpfile dump.vcd opened for output.\nALU Opcode 000 (ADD): A=0005, B=0003 -> Result=0008 | Zero=0 (PASSED)\nALU Opcode 001 (SUB): A=0005, B=0005 -> Result=0000 | Zero=1 (PASSED)', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'a1828155-0d19-5ee9-ab2b-199eb6691515', 'ee2c5832-2915-52c4-8972-28a58b7e6ec8', 'pbcst404-exp04', 4,
    'Cache Mapping Simulator (Direct, Associative, Set-Associative)', 'Build a cache simulator that reads memory trace addresses and computes hit ratio, miss ratio, and eviction counts under Direct-Mapped and 4-Way Set-Associative LRU policies.', 45, 'Verilog & RISC-V Simulator Container',
    '["Understand theoretical principles of cache mapping simulator (direct, associative, set-associative)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Verilog HDL", "tag": "RTL", "iconType": "cpu"}, {"name": "Computer Architecture", "tag": "Hardware", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Cache Mapping Simulator (Direct, Associative, Set-Associative)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Verilog toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Verilog file (.v)", "Simulation waveform (.png)"], "description": "Upload required source files and execution logs for PBCST404 Cache Mapping Simulator (Direct, Associative, Set-Associative)", "acceptedFormats": ".v,.png"}'::jsonb,
    'module alu_16bit(\n    input [15:0] a, b,\n    input [2:0] opcode,\n    output reg [15:0] result,\n    output zero\n);\n', 'iverilog -o alu_sim alu.v alu_tb.v && vvp alu_sim', 'VCD info: dumpfile dump.vcd opened for output.\nALU Opcode 000 (ADD): A=0005, B=0003 -> Result=0008 | Zero=0 (PASSED)\nALU Opcode 001 (SUB): A=0005, B=0005 -> Result=0000 | Zero=1 (PASSED)', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '16d811ed-62d0-5523-9d9c-2eecd35cefd1', 'ee2c5832-2915-52c4-8972-28a58b7e6ec8', 'pbcst404-exp05', 5,
    'Instruction Pipelining & Hazard Detection', 'Design and simulate a working subset of a 16-bit/32-bit processor (Fetch-Decode-Execute cycle, Register File, ALU, Data Memory) with an assembler script for sample programs.', 45, 'Verilog & RISC-V Simulator Container',
    '["Understand theoretical principles of instruction pipelining & hazard detection", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Verilog HDL", "tag": "RTL", "iconType": "cpu"}, {"name": "Computer Architecture", "tag": "Hardware", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Instruction Pipelining & Hazard Detection", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Verilog toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Verilog file (.v)", "Simulation waveform (.png)"], "description": "Upload required source files and execution logs for PBCST404 Instruction Pipelining & Hazard Detection", "acceptedFormats": ".v,.png"}'::jsonb,
    'module alu_16bit(\n    input [15:0] a, b,\n    input [2:0] opcode,\n    output reg [15:0] result,\n    output zero\n);\n', 'iverilog -o alu_sim alu.v alu_tb.v && vvp alu_sim', 'VCD info: dumpfile dump.vcd opened for output.\nALU Opcode 000 (ADD): A=0005, B=0003 -> Result=0008 | Zero=0 (PASSED)\nALU Opcode 001 (SUB): A=0005, B=0005 -> Result=0000 | Zero=1 (PASSED)', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('0274e59b-faac-5420-a3ee-239538a4f14d', 'PCCSL507', 'Networks Lab', 'S5'::semester_enum, 2, '0-0-3-0', 'CIA 50 / ESE 50', 'PC Practical', 'Network commands, socket programming (TCP & UDP), client-server communication, simulation of sliding window, routing algorithms, and packet capture.', '["Linux Network Diagnostic & Packet Capture", "TCP Client-Server Socket Programming", "UDP Client-Server Socket Programming", "Sliding Window & Routing (Bellman-Ford)"]'::jsonb, 'PCCSL507')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'ba340c99-3014-5134-968b-a9490798193f', '0274e59b-faac-5420-a3ee-239538a4f14d', 'pccsl507-exp01', 1,
    'Linux Network Diagnostic & Packet Capture', 'Inspect network interfaces, routing tables, ARP cache, and open sockets using ip, ss, traceroute, and tcpdump/tshark.', 45, 'Wireshark & NS3 POSIX Socket Sandbox',
    '["Understand theoretical principles of linux network diagnostic & packet capture", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Socket Programming", "tag": "TCP/IP", "iconType": "code"}, {"name": "Packet Analysis", "tag": "Wireshark", "iconType": "terminal"}, {"name": "Network Protocols", "tag": "Networking", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Linux Network Diagnostic & Packet Capture", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Wireshark toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C/Python file (.c/.py)", "Wireshark capture (.pcap/.png)"], "description": "Upload required source files and execution logs for PCCSL507 Linux Network Diagnostic & Packet Capture", "acceptedFormats": ".c,.py,.pcap,.png"}'::jsonb,
    '# KTU PCCSL507 Networks Lab\nimport socket\n\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.bind(("0.0.0.0", 8080))\ns.listen(5)\nprint("Server listening on port 8080...")\n', 'python3 server.py & python3 client.py', 'Server listening on port 8080...\n[Server] Connection accepted from 127.0.0.1:49210\n[Client] Sending message: "PING"\n[Server] Received PING -> Sending PONG\nRound trip time: 0.38ms', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '64dc0ec1-b499-5e9c-a7ab-388cc983e310', '0274e59b-faac-5420-a3ee-239538a4f14d', 'pccsl507-exp02', 2,
    'TCP Client-Server Socket Programming (C / Python)', 'Implement a multi-client TCP echo/chat server using sockets where the server handles concurrent clients via fork()/threads.', 45, 'Wireshark & NS3 POSIX Socket Sandbox',
    '["Understand theoretical principles of tcp client-server socket programming (c / python)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Socket Programming", "tag": "TCP/IP", "iconType": "code"}, {"name": "Packet Analysis", "tag": "Wireshark", "iconType": "terminal"}, {"name": "Network Protocols", "tag": "Networking", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for TCP Client-Server Socket Programming (C / Python)", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Wireshark toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C/Python file (.c/.py)", "Wireshark capture (.pcap/.png)"], "description": "Upload required source files and execution logs for PCCSL507 TCP Client-Server Socket Programming (C / Python)", "acceptedFormats": ".c,.py,.pcap,.png"}'::jsonb,
    '# KTU PCCSL507 Networks Lab\nimport socket\n\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.bind(("0.0.0.0", 8080))\ns.listen(5)\nprint("Server listening on port 8080...")\n', 'python3 server.py & python3 client.py', 'Server listening on port 8080...\n[Server] Connection accepted from 127.0.0.1:49210\n[Client] Sending message: "PING"\n[Server] Received PING -> Sending PONG\nRound trip time: 0.38ms', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '829c8c86-9faa-5a0c-906c-9b3b9c72430a', '0274e59b-faac-5420-a3ee-239538a4f14d', 'pccsl507-exp03', 3,
    'UDP Client-Server Socket Programming', 'Implement a UDP time/calculator server and client in C/Python and measure packet round-trip time.', 45, 'Wireshark & NS3 POSIX Socket Sandbox',
    '["Understand theoretical principles of udp client-server socket programming", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Socket Programming", "tag": "TCP/IP", "iconType": "code"}, {"name": "Packet Analysis", "tag": "Wireshark", "iconType": "terminal"}, {"name": "Network Protocols", "tag": "Networking", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for UDP Client-Server Socket Programming", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Wireshark toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C/Python file (.c/.py)", "Wireshark capture (.pcap/.png)"], "description": "Upload required source files and execution logs for PCCSL507 UDP Client-Server Socket Programming", "acceptedFormats": ".c,.py,.pcap,.png"}'::jsonb,
    '# KTU PCCSL507 Networks Lab\nimport socket\n\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.bind(("0.0.0.0", 8080))\ns.listen(5)\nprint("Server listening on port 8080...")\n', 'python3 server.py & python3 client.py', 'Server listening on port 8080...\n[Server] Connection accepted from 127.0.0.1:49210\n[Client] Sending message: "PING"\n[Server] Received PING -> Sending PONG\nRound trip time: 0.38ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'e12b9c6b-840a-5502-9dcb-27895f2c119b', '0274e59b-faac-5420-a3ee-239538a4f14d', 'pccsl507-exp04', 4,
    'Sliding Window Protocols (Stop-and-Wait & Go-Back-N)', 'Simulate Stop-and-Wait ARQ and Go-Back-N ARQ protocols with configurable packet loss and timeout retransmission.', 45, 'Wireshark & NS3 POSIX Socket Sandbox',
    '["Understand theoretical principles of sliding window protocols (stop-and-wait & go-back-n)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Socket Programming", "tag": "TCP/IP", "iconType": "code"}, {"name": "Packet Analysis", "tag": "Wireshark", "iconType": "terminal"}, {"name": "Network Protocols", "tag": "Networking", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Sliding Window Protocols (Stop-and-Wait & Go-Back-N)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Wireshark toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C/Python file (.c/.py)", "Wireshark capture (.pcap/.png)"], "description": "Upload required source files and execution logs for PCCSL507 Sliding Window Protocols (Stop-and-Wait & Go-Back-N)", "acceptedFormats": ".c,.py,.pcap,.png"}'::jsonb,
    '# KTU PCCSL507 Networks Lab\nimport socket\n\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.bind(("0.0.0.0", 8080))\ns.listen(5)\nprint("Server listening on port 8080...")\n', 'python3 server.py & python3 client.py', 'Server listening on port 8080...\n[Server] Connection accepted from 127.0.0.1:49210\n[Client] Sending message: "PING"\n[Server] Received PING -> Sending PONG\nRound trip time: 0.38ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'f7ea0d11-1786-5983-8cd0-369cb34e186a', '0274e59b-faac-5420-a3ee-239538a4f14d', 'pccsl507-exp05', 5,
    'Distance Vector Routing (Bellman-Ford)', 'Implement the Distance Vector Routing algorithm for a given network topology graph and print each router''s converged routing table.', 45, 'Wireshark & NS3 POSIX Socket Sandbox',
    '["Understand theoretical principles of distance vector routing (bellman-ford)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Socket Programming", "tag": "TCP/IP", "iconType": "code"}, {"name": "Packet Analysis", "tag": "Wireshark", "iconType": "terminal"}, {"name": "Network Protocols", "tag": "Networking", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Distance Vector Routing (Bellman-Ford)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Wireshark toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C/Python file (.c/.py)", "Wireshark capture (.pcap/.png)"], "description": "Upload required source files and execution logs for PCCSL507 Distance Vector Routing (Bellman-Ford)", "acceptedFormats": ".c,.py,.pcap,.png"}'::jsonb,
    '# KTU PCCSL507 Networks Lab\nimport socket\n\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.bind(("0.0.0.0", 8080))\ns.listen(5)\nprint("Server listening on port 8080...")\n', 'python3 server.py & python3 client.py', 'Server listening on port 8080...\n[Server] Connection accepted from 127.0.0.1:49210\n[Client] Sending message: "PING"\n[Server] Received PING -> Sending PONG\nRound trip time: 0.38ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'cfdf2293-69fa-5d91-99f4-d9f3dd155499', '0274e59b-faac-5420-a3ee-239538a4f14d', 'pccsl507-exp06', 6,
    'Link State Routing (Dijkstra''s Algorithm)', 'Implement Link State Routing using Dijkstra''s shortest-path algorithm and display shortest paths from a source router to all nodes.', 45, 'Wireshark & NS3 POSIX Socket Sandbox',
    '["Understand theoretical principles of link state routing (dijkstra''s algorithm)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Socket Programming", "tag": "TCP/IP", "iconType": "code"}, {"name": "Packet Analysis", "tag": "Wireshark", "iconType": "terminal"}, {"name": "Network Protocols", "tag": "Networking", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Link State Routing (Dijkstra''s Algorithm)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Wireshark toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C/Python file (.c/.py)", "Wireshark capture (.pcap/.png)"], "description": "Upload required source files and execution logs for PCCSL507 Link State Routing (Dijkstra''s Algorithm)", "acceptedFormats": ".c,.py,.pcap,.png"}'::jsonb,
    '# KTU PCCSL507 Networks Lab\nimport socket\n\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.bind(("0.0.0.0", 8080))\ns.listen(5)\nprint("Server listening on port 8080...")\n', 'python3 server.py & python3 client.py', 'Server listening on port 8080...\n[Server] Connection accepted from 127.0.0.1:49210\n[Client] Sending message: "PING"\n[Server] Received PING -> Sending PONG\nRound trip time: 0.38ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'b8358fce-2e16-50fa-8ebd-c6499dbee2d7', '0274e59b-faac-5420-a3ee-239538a4f14d', 'pccsl507-exp07', 7,
    'Congestion Control (Leaky Bucket & Token Bucket)', 'Write a program to simulate Leaky Bucket and Token Bucket traffic shaping algorithms for bursty packet arrivals.', 45, 'Wireshark & NS3 POSIX Socket Sandbox',
    '["Understand theoretical principles of congestion control (leaky bucket & token bucket)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Socket Programming", "tag": "TCP/IP", "iconType": "code"}, {"name": "Packet Analysis", "tag": "Wireshark", "iconType": "terminal"}, {"name": "Network Protocols", "tag": "Networking", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Congestion Control (Leaky Bucket & Token Bucket)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Wireshark toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C/Python file (.c/.py)", "Wireshark capture (.pcap/.png)"], "description": "Upload required source files and execution logs for PCCSL507 Congestion Control (Leaky Bucket & Token Bucket)", "acceptedFormats": ".c,.py,.pcap,.png"}'::jsonb,
    '# KTU PCCSL507 Networks Lab\nimport socket\n\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.bind(("0.0.0.0", 8080))\ns.listen(5)\nprint("Server listening on port 8080...")\n', 'python3 server.py & python3 client.py', 'Server listening on port 8080...\n[Server] Connection accepted from 127.0.0.1:49210\n[Client] Sending message: "PING"\n[Server] Received PING -> Sending PONG\nRound trip time: 0.38ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'd8496db3-fea5-5683-ab49-bfd4806f47ae', '0274e59b-faac-5420-a3ee-239538a4f14d', 'pccsl507-exp08', 8,
    'Application Layer Protocols (HTTP / FTP / SMTP Simulation)', 'Build a minimal HTTP/1.1 static file server using raw TCP sockets that parses GET requests and returns valid HTTP status headers.', 45, 'Wireshark & NS3 POSIX Socket Sandbox',
    '["Understand theoretical principles of application layer protocols (http / ftp / smtp simulation)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Socket Programming", "tag": "TCP/IP", "iconType": "code"}, {"name": "Packet Analysis", "tag": "Wireshark", "iconType": "terminal"}, {"name": "Network Protocols", "tag": "Networking", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Application Layer Protocols (HTTP / FTP / SMTP Simulation)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Wireshark toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 C/Python file (.c/.py)", "Wireshark capture (.pcap/.png)"], "description": "Upload required source files and execution logs for PCCSL507 Application Layer Protocols (HTTP / FTP / SMTP Simulation)", "acceptedFormats": ".c,.py,.pcap,.png"}'::jsonb,
    '# KTU PCCSL507 Networks Lab\nimport socket\n\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.bind(("0.0.0.0", 8080))\ns.listen(5)\nprint("Server listening on port 8080...")\n', 'python3 server.py & python3 client.py', 'Server listening on port 8080...\n[Server] Connection accepted from 127.0.0.1:49210\n[Client] Sending message: "PING"\n[Server] Received PING -> Sending PONG\nRound trip time: 0.38ms', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('b7e8e2b1-4b1e-5c94-ad1a-cd44712bc068', 'PCCSL508', 'Machine Learning Lab', 'S5'::semester_enum, 2, '0-0-3-0', 'CIA 50 / ESE 50', 'PC Practical', 'Implementation of ML algorithms using Python, NumPy, Pandas, Scikit-learn, and PyTorch: Regression, Classification, Clustering, and Neural Networks.', '["Data Preprocessing & Feature Engineering", "Linear & Logistic Regression", "Decision Trees, Random Forest & SVM", "K-Means Clustering & PCA", "Multi-Layer Perceptron (PyTorch)"]'::jsonb, 'PCCSL508')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '381ac98d-0b0b-5808-b49e-8110d5d348d9', 'b7e8e2b1-4b1e-5c94-ad1a-cd44712bc068', 'pccsl508-exp01', 1,
    'Data Preprocessing & Exploratory Data Analysis', 'Load a CSV dataset using Pandas/NumPy, handle missing values, encode categorical features, normalize numeric columns, and plot correlation heatmaps.', 45, 'PyTorch 2.4 & Scikit-learn Linux Sandbox',
    '["Understand theoretical principles of data preprocessing & exploratory data analysis", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python ML", "tag": "Scikit-Learn", "iconType": "python"}, {"name": "Model Evaluation", "tag": "Metrics", "iconType": "cpu"}, {"name": "Neural Networks", "tag": "PyTorch", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Data Preprocessing & Exploratory Data Analysis", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PyTorch toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python script (.py/.ipynb)", "Loss/Accuracy curve (.png)"], "description": "Upload required source files and execution logs for PCCSL508 Data Preprocessing & Exploratory Data Analysis", "acceptedFormats": ".py,.ipynb,.png"}'::jsonb,
    'import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\nprint("KTU PCCSL508 Machine Learning Lab ready!")\n', 'python3 ml_model.py', 'Dataset: 1,500 samples | Train: 1,200 | Test: 300\nTraining Model: Convergence reached in 45 iterations.\nTest Accuracy: 97.33% | F1-Score: 0.968\nConfusion matrix plotted to output.png', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '5e8eed70-dad8-509b-a155-4fccb1afd890', 'b7e8e2b1-4b1e-5c94-ad1a-cd44712bc068', 'pccsl508-exp02', 2,
    'Linear Regression from Scratch & Scikit-Learn', 'Implement Simple and Multiple Linear Regression using Gradient Descent (NumPy) and compare MSE, RMSE, and R^2 against scikit-learn.', 45, 'PyTorch 2.4 & Scikit-learn Linux Sandbox',
    '["Understand theoretical principles of linear regression from scratch & scikit-learn", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python ML", "tag": "Scikit-Learn", "iconType": "python"}, {"name": "Model Evaluation", "tag": "Metrics", "iconType": "cpu"}, {"name": "Neural Networks", "tag": "PyTorch", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Linear Regression from Scratch & Scikit-Learn", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PyTorch toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python script (.py/.ipynb)", "Loss/Accuracy curve (.png)"], "description": "Upload required source files and execution logs for PCCSL508 Linear Regression from Scratch & Scikit-Learn", "acceptedFormats": ".py,.ipynb,.png"}'::jsonb,
    'import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\nprint("KTU PCCSL508 Machine Learning Lab ready!")\n', 'python3 ml_model.py', 'Dataset: 1,500 samples | Train: 1,200 | Test: 300\nTraining Model: Convergence reached in 45 iterations.\nTest Accuracy: 97.33% | F1-Score: 0.968\nConfusion matrix plotted to output.png', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '1b735e65-157d-5dff-957f-3554f06e0896', 'b7e8e2b1-4b1e-5c94-ad1a-cd44712bc068', 'pccsl508-exp03', 3,
    'Logistic Regression & Classification Metrics', 'Train a Logistic Regression classifier on a binary dataset and compute Confusion Matrix, Accuracy, Precision, Recall, F1-Score, and ROC-AUC.', 45, 'PyTorch 2.4 & Scikit-learn Linux Sandbox',
    '["Understand theoretical principles of logistic regression & classification metrics", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python ML", "tag": "Scikit-Learn", "iconType": "python"}, {"name": "Model Evaluation", "tag": "Metrics", "iconType": "cpu"}, {"name": "Neural Networks", "tag": "PyTorch", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Logistic Regression & Classification Metrics", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PyTorch toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python script (.py/.ipynb)", "Loss/Accuracy curve (.png)"], "description": "Upload required source files and execution logs for PCCSL508 Logistic Regression & Classification Metrics", "acceptedFormats": ".py,.ipynb,.png"}'::jsonb,
    'import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\nprint("KTU PCCSL508 Machine Learning Lab ready!")\n', 'python3 ml_model.py', 'Dataset: 1,500 samples | Train: 1,200 | Test: 300\nTraining Model: Convergence reached in 45 iterations.\nTest Accuracy: 97.33% | F1-Score: 0.968\nConfusion matrix plotted to output.png', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'e30e4f86-f6b4-5817-b628-37e3a7e9b2b2', 'b7e8e2b1-4b1e-5c94-ad1a-cd44712bc068', 'pccsl508-exp04', 4,
    'Decision Tree (ID3 / Gini) Classifier', 'Implement a Decision Tree classifier, visualize tree splits, and evaluate overfitting with max_depth tuning.', 45, 'PyTorch 2.4 & Scikit-learn Linux Sandbox',
    '["Understand theoretical principles of decision tree (id3 / gini) classifier", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python ML", "tag": "Scikit-Learn", "iconType": "python"}, {"name": "Model Evaluation", "tag": "Metrics", "iconType": "cpu"}, {"name": "Neural Networks", "tag": "PyTorch", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Decision Tree (ID3 / Gini) Classifier", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PyTorch toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python script (.py/.ipynb)", "Loss/Accuracy curve (.png)"], "description": "Upload required source files and execution logs for PCCSL508 Decision Tree (ID3 / Gini) Classifier", "acceptedFormats": ".py,.ipynb,.png"}'::jsonb,
    'import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\nprint("KTU PCCSL508 Machine Learning Lab ready!")\n', 'python3 ml_model.py', 'Dataset: 1,500 samples | Train: 1,200 | Test: 300\nTraining Model: Convergence reached in 45 iterations.\nTest Accuracy: 97.33% | F1-Score: 0.968\nConfusion matrix plotted to output.png', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'ce3795fc-1be1-5f53-9639-405c01a041c9', 'b7e8e2b1-4b1e-5c94-ad1a-cd44712bc068', 'pccsl508-exp05', 5,
    'K-Nearest Neighbors (KNN) & Cross-Validation', 'Implement KNN from scratch using Euclidean distance, perform 5-fold cross-validation, and plot accuracy vs. K.', 45, 'PyTorch 2.4 & Scikit-learn Linux Sandbox',
    '["Understand theoretical principles of k-nearest neighbors (knn) & cross-validation", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python ML", "tag": "Scikit-Learn", "iconType": "python"}, {"name": "Model Evaluation", "tag": "Metrics", "iconType": "cpu"}, {"name": "Neural Networks", "tag": "PyTorch", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for K-Nearest Neighbors (KNN) & Cross-Validation", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PyTorch toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python script (.py/.ipynb)", "Loss/Accuracy curve (.png)"], "description": "Upload required source files and execution logs for PCCSL508 K-Nearest Neighbors (KNN) & Cross-Validation", "acceptedFormats": ".py,.ipynb,.png"}'::jsonb,
    'import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\nprint("KTU PCCSL508 Machine Learning Lab ready!")\n', 'python3 ml_model.py', 'Dataset: 1,500 samples | Train: 1,200 | Test: 300\nTraining Model: Convergence reached in 45 iterations.\nTest Accuracy: 97.33% | F1-Score: 0.968\nConfusion matrix plotted to output.png', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '676302eb-1900-52a6-a7f1-d3f737849a54', 'b7e8e2b1-4b1e-5c94-ad1a-cd44712bc068', 'pccsl508-exp06', 6,
    'Naive Bayes Text / Spam Classifier', 'Build a Multinomial Naive Bayes classifier using TF-IDF/Bag-of-Words features for SMS/email spam detection.', 45, 'PyTorch 2.4 & Scikit-learn Linux Sandbox',
    '["Understand theoretical principles of naive bayes text / spam classifier", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python ML", "tag": "Scikit-Learn", "iconType": "python"}, {"name": "Model Evaluation", "tag": "Metrics", "iconType": "cpu"}, {"name": "Neural Networks", "tag": "PyTorch", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Naive Bayes Text / Spam Classifier", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PyTorch toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python script (.py/.ipynb)", "Loss/Accuracy curve (.png)"], "description": "Upload required source files and execution logs for PCCSL508 Naive Bayes Text / Spam Classifier", "acceptedFormats": ".py,.ipynb,.png"}'::jsonb,
    'import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\nprint("KTU PCCSL508 Machine Learning Lab ready!")\n', 'python3 ml_model.py', 'Dataset: 1,500 samples | Train: 1,200 | Test: 300\nTraining Model: Convergence reached in 45 iterations.\nTest Accuracy: 97.33% | F1-Score: 0.968\nConfusion matrix plotted to output.png', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'b4a08b4c-b7ab-5655-b63e-e0dffb4b4807', 'b7e8e2b1-4b1e-5c94-ad1a-cd44712bc068', 'pccsl508-exp07', 7,
    'Support Vector Machines (SVM) with Kernels', 'Train Linear, Polynomial, and RBF kernel SVMs and compare decision boundaries and test accuracy.', 45, 'PyTorch 2.4 & Scikit-learn Linux Sandbox',
    '["Understand theoretical principles of support vector machines (svm) with kernels", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python ML", "tag": "Scikit-Learn", "iconType": "python"}, {"name": "Model Evaluation", "tag": "Metrics", "iconType": "cpu"}, {"name": "Neural Networks", "tag": "PyTorch", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Support Vector Machines (SVM) with Kernels", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PyTorch toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python script (.py/.ipynb)", "Loss/Accuracy curve (.png)"], "description": "Upload required source files and execution logs for PCCSL508 Support Vector Machines (SVM) with Kernels", "acceptedFormats": ".py,.ipynb,.png"}'::jsonb,
    'import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\nprint("KTU PCCSL508 Machine Learning Lab ready!")\n', 'python3 ml_model.py', 'Dataset: 1,500 samples | Train: 1,200 | Test: 300\nTraining Model: Convergence reached in 45 iterations.\nTest Accuracy: 97.33% | F1-Score: 0.968\nConfusion matrix plotted to output.png', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'c4f8a74f-3126-572f-b054-3acd6aef014e', 'b7e8e2b1-4b1e-5c94-ad1a-cd44712bc068', 'pccsl508-exp08', 8,
    'K-Means Clustering & PCA Dimensionality Reduction', 'Implement K-Means clustering, use the Elbow method to select optimal K, and visualize clusters in 2D using Principal Component Analysis (PCA).', 45, 'PyTorch 2.4 & Scikit-learn Linux Sandbox',
    '["Understand theoretical principles of k-means clustering & pca dimensionality reduction", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Python ML", "tag": "Scikit-Learn", "iconType": "python"}, {"name": "Model Evaluation", "tag": "Metrics", "iconType": "cpu"}, {"name": "Neural Networks", "tag": "PyTorch", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for K-Means Clustering & PCA Dimensionality Reduction", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using PyTorch toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python script (.py/.ipynb)", "Loss/Accuracy curve (.png)"], "description": "Upload required source files and execution logs for PCCSL508 K-Means Clustering & PCA Dimensionality Reduction", "acceptedFormats": ".py,.ipynb,.png"}'::jsonb,
    'import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\nprint("KTU PCCSL508 Machine Learning Lab ready!")\n', 'python3 ml_model.py', 'Dataset: 1,500 samples | Train: 1,200 | Test: 300\nTraining Model: Convergence reached in 45 iterations.\nTest Accuracy: 97.33% | F1-Score: 0.968\nConfusion matrix plotted to output.png', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('af81d2db-867a-5ff2-bd9a-719bfd9eccba', 'PBCST504', 'Microcontrollers', 'S5'::semester_enum, 4, '3-0-0-1', 'CIA 50 / ESE 50', 'PC-PBL', 'Architecture and assembly/C programming of ARM Cortex-M / 8051 microcontrollers. GPIO, timers, interrupts, ADC, DAC, and serial communication interfacing.', '["ARM Cortex Architecture & Registers", "Embedded C & GPIO Interfacing", "Timers, Counters & PWM Generation", "Interrupt Service Routines & ADC/DAC", "Serial Protocols (UART, SPI, I2C)"]'::jsonb, 'PBCST504')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '7cc8bace-f4d6-5fc0-b313-c3a38149b962', 'af81d2db-867a-5ff2-bd9a-719bfd9eccba', 'pbcst504-exp01', 1,
    '8051 / ARM Arithmetic & Data Transfer Programs', 'Write assembly/embedded C programs for 8-bit/16-bit addition, subtraction, multiplication, and block memory transfer.', 45, 'QEMU ARM Cortex-M Linux Emulator',
    '["Understand theoretical principles of 8051 / arm arithmetic & data transfer programs", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Embedded C", "tag": "ARM Cortex", "iconType": "c"}, {"name": "GPIO & Interrupts", "tag": "Peripherals", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for 8051 / ARM Arithmetic & Data Transfer Programs", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using QEMU toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Embedded C file (.c)", "Simulation trace (.png)"], "description": "Upload required source files and execution logs for PBCST504 8051 / ARM Arithmetic & Data Transfer Programs", "acceptedFormats": ".c,.png"}'::jsonb,
    '#include <stdint.h>\n// KTU PBCST504 Microcontrollers\nint main(void) {\n    // Initialize GPIO Pin\n    while(1) {}\n}\n', './arm_emu --run firmware.elf', 'ARM Cortex-M4 Emulator started.\nClock: 72 MHz | SysTick interrupt enabled.\nGPIO Port C Pin 13 toggling at 1 Hz.', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'b9454766-2612-5178-b3ec-6046d9ec3233', 'af81d2db-867a-5ff2-bd9a-719bfd9eccba', 'pbcst504-exp02', 2,
    'GPIO Interfacing (LED Blinking & Switch Input)', 'Interface an array of LEDs and push-button switches with GPIO ports to implement a binary counter and pattern chaser.', 45, 'QEMU ARM Cortex-M Linux Emulator',
    '["Understand theoretical principles of gpio interfacing (led blinking & switch input)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Embedded C", "tag": "ARM Cortex", "iconType": "c"}, {"name": "GPIO & Interrupts", "tag": "Peripherals", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for GPIO Interfacing (LED Blinking & Switch Input)", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using QEMU toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Embedded C file (.c)", "Simulation trace (.png)"], "description": "Upload required source files and execution logs for PBCST504 GPIO Interfacing (LED Blinking & Switch Input)", "acceptedFormats": ".c,.png"}'::jsonb,
    '#include <stdint.h>\n// KTU PBCST504 Microcontrollers\nint main(void) {\n    // Initialize GPIO Pin\n    while(1) {}\n}\n', './arm_emu --run firmware.elf', 'ARM Cortex-M4 Emulator started.\nClock: 72 MHz | SysTick interrupt enabled.\nGPIO Port C Pin 13 toggling at 1 Hz.', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'a0102318-0f8e-5725-a1f1-9d701ba327c5', 'af81d2db-867a-5ff2-bd9a-719bfd9eccba', 'pbcst504-exp03', 3,
    'Timer & Interrupt Programming', 'Configure hardware timers and external interrupts to generate an accurate 1 Hz square wave / stopwatch tick.', 45, 'QEMU ARM Cortex-M Linux Emulator',
    '["Understand theoretical principles of timer & interrupt programming", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Embedded C", "tag": "ARM Cortex", "iconType": "c"}, {"name": "GPIO & Interrupts", "tag": "Peripherals", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Timer & Interrupt Programming", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using QEMU toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Embedded C file (.c)", "Simulation trace (.png)"], "description": "Upload required source files and execution logs for PBCST504 Timer & Interrupt Programming", "acceptedFormats": ".c,.png"}'::jsonb,
    '#include <stdint.h>\n// KTU PBCST504 Microcontrollers\nint main(void) {\n    // Initialize GPIO Pin\n    while(1) {}\n}\n', './arm_emu --run firmware.elf', 'ARM Cortex-M4 Emulator started.\nClock: 72 MHz | SysTick interrupt enabled.\nGPIO Port C Pin 13 toggling at 1 Hz.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'deccb8ad-9468-5a39-8c2a-eda1a2e8144a', 'af81d2db-867a-5ff2-bd9a-719bfd9eccba', 'pbcst504-exp04', 4,
    'LCD (16x2) & Keypad Interfacing', 'Interface a 16x2 character LCD and 4x4 matrix keypad to display pressed keys and custom messages.', 45, 'QEMU ARM Cortex-M Linux Emulator',
    '["Understand theoretical principles of lcd (16x2) & keypad interfacing", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Embedded C", "tag": "ARM Cortex", "iconType": "c"}, {"name": "GPIO & Interrupts", "tag": "Peripherals", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for LCD (16x2) & Keypad Interfacing", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using QEMU toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Embedded C file (.c)", "Simulation trace (.png)"], "description": "Upload required source files and execution logs for PBCST504 LCD (16x2) & Keypad Interfacing", "acceptedFormats": ".c,.png"}'::jsonb,
    '#include <stdint.h>\n// KTU PBCST504 Microcontrollers\nint main(void) {\n    // Initialize GPIO Pin\n    while(1) {}\n}\n', './arm_emu --run firmware.elf', 'ARM Cortex-M4 Emulator started.\nClock: 72 MHz | SysTick interrupt enabled.\nGPIO Port C Pin 13 toggling at 1 Hz.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'ca16cc3f-6cd7-5689-b91c-11dc107890dc', 'af81d2db-867a-5ff2-bd9a-719bfd9eccba', 'pbcst504-exp05', 5,
    'ADC & Temperature/Ultrasonic Sensor Interfacing', 'Read analog/digital sensor data (LM35 or HC-SR04) via ADC/GPIO, convert to engineering units, and trigger an alert threshold.', 45, 'QEMU ARM Cortex-M Linux Emulator',
    '["Understand theoretical principles of adc & temperature/ultrasonic sensor interfacing", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Embedded C", "tag": "ARM Cortex", "iconType": "c"}, {"name": "GPIO & Interrupts", "tag": "Peripherals", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for ADC & Temperature/Ultrasonic Sensor Interfacing", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using QEMU toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Embedded C file (.c)", "Simulation trace (.png)"], "description": "Upload required source files and execution logs for PBCST504 ADC & Temperature/Ultrasonic Sensor Interfacing", "acceptedFormats": ".c,.png"}'::jsonb,
    '#include <stdint.h>\n// KTU PBCST504 Microcontrollers\nint main(void) {\n    // Initialize GPIO Pin\n    while(1) {}\n}\n', './arm_emu --run firmware.elf', 'ARM Cortex-M4 Emulator started.\nClock: 72 MHz | SysTick interrupt enabled.\nGPIO Port C Pin 13 toggling at 1 Hz.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '751170c3-0fc6-519c-a122-8c59deab52ac', 'af81d2db-867a-5ff2-bd9a-719bfd9eccba', 'pbcst504-exp06', 6,
    'UART Serial Communication', 'Build a microcontroller-based embedded prototype (e.g., Smart Lab Occupancy Counter, Automated Temperature Fan Controller, or RFID Attendance Logger).', 45, 'QEMU ARM Cortex-M Linux Emulator',
    '["Understand theoretical principles of uart serial communication", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Embedded C", "tag": "ARM Cortex", "iconType": "c"}, {"name": "GPIO & Interrupts", "tag": "Peripherals", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for UART Serial Communication", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using QEMU toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Embedded C file (.c)", "Simulation trace (.png)"], "description": "Upload required source files and execution logs for PBCST504 UART Serial Communication", "acceptedFormats": ".c,.png"}'::jsonb,
    '#include <stdint.h>\n// KTU PBCST504 Microcontrollers\nint main(void) {\n    // Initialize GPIO Pin\n    while(1) {}\n}\n', './arm_emu --run firmware.elf', 'ARM Cortex-M4 Emulator started.\nClock: 72 MHz | SysTick interrupt enabled.\nGPIO Port C Pin 13 toggling at 1 Hz.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('20ab56dd-1bf6-56f4-b60f-cea42e76238e', 'PCCSL607', 'Systems Lab', 'S6'::semester_enum, 2, '0-0-3-0', 'CIA 50 / ESE 50', 'PC Practical', 'Design and implementation of language processors: Lexical analyzers using Lex, Parsers using Yacc, Intermediate code generators, Assemblers, and Loaders.', '["Lexical Analyzer Generation using Lex", "Syntax Analyzer using Yacc", "Two-Pass Assembler & Macro Processor", "Absolute & Relocating Loaders"]'::jsonb, 'PCCSL607')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'bc51cebe-192c-5ed1-8b60-ff50a36f7b97', '20ab56dd-1bf6-56f4-b60f-cea42e76238e', 'pccsl607-exp01', 1,
    'Lexical Analyzer in C', 'Design and implement a Lexical Analyzer in C that reads a source file, ignores comments/whitespace, and tokenizes keywords, identifiers, operators, and literals.', 45, 'Flex & Bison Linux Compiler Container',
    '["Understand theoretical principles of lexical analyzer in c", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Lex & Yacc", "tag": "Compiler", "iconType": "terminal"}, {"name": "Lexical Analysis", "tag": "Grammar", "iconType": "code"}, {"name": "Code Generation", "tag": "Intermediate", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Lexical Analyzer in C", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Flex toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Lex/Yacc file (.l/.y)", "Parser output (.txt)"], "description": "Upload required source files and execution logs for PCCSL607 Lexical Analyzer in C", "acceptedFormats": ".l,.y,.txt"}'::jsonb,
    '%{\n#include <stdio.h>\n%}\n%%\n[0-9]+   { printf("NUMBER: %s\\n", yytext); }\n[a-zA-Z_][a-zA-Z0-9_]* { printf("IDENTIFIER: %s\\n", yytext); }\n.        { /* skip */ }\n%%\nint main() { yylex(); return 0; }\nint yywrap() { return 1; }\n', 'flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt', 'Tokens matched:\nIDENTIFIER: total_count\nOPERATOR: =\nNUMBER: 450\nLexical analysis completed: 0 errors.', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '7eea1861-bd58-5346-a537-efb9b31c4e61', '20ab56dd-1bf6-56f4-b60f-cea42e76238e', 'pccsl607-exp02', 2,
    'Lexical Analyzer Using LEX / Flex', 'Write a Lex specification file (.l) to count identifiers, numbers, and keywords, and validate email/URL patterns.', 45, 'Flex & Bison Linux Compiler Container',
    '["Understand theoretical principles of lexical analyzer using lex / flex", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Lex & Yacc", "tag": "Compiler", "iconType": "terminal"}, {"name": "Lexical Analysis", "tag": "Grammar", "iconType": "code"}, {"name": "Code Generation", "tag": "Intermediate", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Lexical Analyzer Using LEX / Flex", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Flex toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Lex/Yacc file (.l/.y)", "Parser output (.txt)"], "description": "Upload required source files and execution logs for PCCSL607 Lexical Analyzer Using LEX / Flex", "acceptedFormats": ".l,.y,.txt"}'::jsonb,
    '%{\n#include <stdio.h>\n%}\n%%\n[0-9]+   { printf("NUMBER: %s\\n", yytext); }\n[a-zA-Z_][a-zA-Z0-9_]* { printf("IDENTIFIER: %s\\n", yytext); }\n.        { /* skip */ }\n%%\nint main() { yylex(); return 0; }\nint yywrap() { return 1; }\n', 'flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt', 'Tokens matched:\nIDENTIFIER: total_count\nOPERATOR: =\nNUMBER: 450\nLexical analysis completed: 0 errors.', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '84bbc409-6c02-5cfb-9793-ab27a2e45e5e', '20ab56dd-1bf6-56f4-b60f-cea42e76238e', 'pccsl607-exp03', 3,
    'Syntax Analyzer Using YACC / Bison', 'Implement an arithmetic expression parser and calculator using Lex and Yacc supporting +, -, *, /, parentheses, and operator precedence.', 45, 'Flex & Bison Linux Compiler Container',
    '["Understand theoretical principles of syntax analyzer using yacc / bison", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Lex & Yacc", "tag": "Compiler", "iconType": "terminal"}, {"name": "Lexical Analysis", "tag": "Grammar", "iconType": "code"}, {"name": "Code Generation", "tag": "Intermediate", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Syntax Analyzer Using YACC / Bison", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Flex toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Lex/Yacc file (.l/.y)", "Parser output (.txt)"], "description": "Upload required source files and execution logs for PCCSL607 Syntax Analyzer Using YACC / Bison", "acceptedFormats": ".l,.y,.txt"}'::jsonb,
    '%{\n#include <stdio.h>\n%}\n%%\n[0-9]+   { printf("NUMBER: %s\\n", yytext); }\n[a-zA-Z_][a-zA-Z0-9_]* { printf("IDENTIFIER: %s\\n", yytext); }\n.        { /* skip */ }\n%%\nint main() { yylex(); return 0; }\nint yywrap() { return 1; }\n', 'flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt', 'Tokens matched:\nIDENTIFIER: total_count\nOPERATOR: =\nNUMBER: 450\nLexical analysis completed: 0 errors.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '9cd38d83-f61f-5ceb-bad7-47e3bc275301', '20ab56dd-1bf6-56f4-b60f-cea42e76238e', 'pccsl607-exp04', 4,
    'Epsilon-NFA to NFA & NFA to DFA Conversion', 'Write a C/Python program to compute epsilon-closure of states and convert an NFA to an equivalent DFA.', 45, 'Flex & Bison Linux Compiler Container',
    '["Understand theoretical principles of epsilon-nfa to nfa & nfa to dfa conversion", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Lex & Yacc", "tag": "Compiler", "iconType": "terminal"}, {"name": "Lexical Analysis", "tag": "Grammar", "iconType": "code"}, {"name": "Code Generation", "tag": "Intermediate", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Epsilon-NFA to NFA & NFA to DFA Conversion", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Flex toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Lex/Yacc file (.l/.y)", "Parser output (.txt)"], "description": "Upload required source files and execution logs for PCCSL607 Epsilon-NFA to NFA & NFA to DFA Conversion", "acceptedFormats": ".l,.y,.txt"}'::jsonb,
    '%{\n#include <stdio.h>\n%}\n%%\n[0-9]+   { printf("NUMBER: %s\\n", yytext); }\n[a-zA-Z_][a-zA-Z0-9_]* { printf("IDENTIFIER: %s\\n", yytext); }\n.        { /* skip */ }\n%%\nint main() { yylex(); return 0; }\nint yywrap() { return 1; }\n', 'flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt', 'Tokens matched:\nIDENTIFIER: total_count\nOPERATOR: =\nNUMBER: 450\nLexical analysis completed: 0 errors.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'e0f620f2-a68e-58f2-9e1e-3ff396232b72', '20ab56dd-1bf6-56f4-b60f-cea42e76238e', 'pccsl607-exp05', 5,
    'Recursive Descent & Shift-Reduce Parser', 'Implement a Recursive Descent Parser and a Shift-Reduce Parser for a given context-free grammar and trace the parse stack.', 45, 'Flex & Bison Linux Compiler Container',
    '["Understand theoretical principles of recursive descent & shift-reduce parser", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Lex & Yacc", "tag": "Compiler", "iconType": "terminal"}, {"name": "Lexical Analysis", "tag": "Grammar", "iconType": "code"}, {"name": "Code Generation", "tag": "Intermediate", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Recursive Descent & Shift-Reduce Parser", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Flex toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Lex/Yacc file (.l/.y)", "Parser output (.txt)"], "description": "Upload required source files and execution logs for PCCSL607 Recursive Descent & Shift-Reduce Parser", "acceptedFormats": ".l,.y,.txt"}'::jsonb,
    '%{\n#include <stdio.h>\n%}\n%%\n[0-9]+   { printf("NUMBER: %s\\n", yytext); }\n[a-zA-Z_][a-zA-Z0-9_]* { printf("IDENTIFIER: %s\\n", yytext); }\n.        { /* skip */ }\n%%\nint main() { yylex(); return 0; }\nint yywrap() { return 1; }\n', 'flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt', 'Tokens matched:\nIDENTIFIER: total_count\nOPERATOR: =\nNUMBER: 450\nLexical analysis completed: 0 errors.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '9cec7c41-d814-55c7-bedc-ebf7abfd2337', '20ab56dd-1bf6-56f4-b60f-cea42e76238e', 'pccsl607-exp06', 6,
    'FIRST and FOLLOW Sets & LL(1) Parsing Table', 'Compute FIRST and FOLLOW sets for a grammar without left recursion and construct the LL(1) predictive parsing table.', 45, 'Flex & Bison Linux Compiler Container',
    '["Understand theoretical principles of first and follow sets & ll(1) parsing table", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Lex & Yacc", "tag": "Compiler", "iconType": "terminal"}, {"name": "Lexical Analysis", "tag": "Grammar", "iconType": "code"}, {"name": "Code Generation", "tag": "Intermediate", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for FIRST and FOLLOW Sets & LL(1) Parsing Table", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Flex toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Lex/Yacc file (.l/.y)", "Parser output (.txt)"], "description": "Upload required source files and execution logs for PCCSL607 FIRST and FOLLOW Sets & LL(1) Parsing Table", "acceptedFormats": ".l,.y,.txt"}'::jsonb,
    '%{\n#include <stdio.h>\n%}\n%%\n[0-9]+   { printf("NUMBER: %s\\n", yytext); }\n[a-zA-Z_][a-zA-Z0-9_]* { printf("IDENTIFIER: %s\\n", yytext); }\n.        { /* skip */ }\n%%\nint main() { yylex(); return 0; }\nint yywrap() { return 1; }\n', 'flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt', 'Tokens matched:\nIDENTIFIER: total_count\nOPERATOR: =\nNUMBER: 450\nLexical analysis completed: 0 errors.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '933571f5-a848-5caf-87ca-26d5ddc802d8', '20ab56dd-1bf6-56f4-b60f-cea42e76238e', 'pccsl607-exp07', 7,
    'Intermediate Code Generation (Three-Address Code)', 'Convert arithmetic and assignment expressions into Three-Address Code (quadruples/triples).', 45, 'Flex & Bison Linux Compiler Container',
    '["Understand theoretical principles of intermediate code generation (three-address code)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Lex & Yacc", "tag": "Compiler", "iconType": "terminal"}, {"name": "Lexical Analysis", "tag": "Grammar", "iconType": "code"}, {"name": "Code Generation", "tag": "Intermediate", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Intermediate Code Generation (Three-Address Code)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Flex toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Lex/Yacc file (.l/.y)", "Parser output (.txt)"], "description": "Upload required source files and execution logs for PCCSL607 Intermediate Code Generation (Three-Address Code)", "acceptedFormats": ".l,.y,.txt"}'::jsonb,
    '%{\n#include <stdio.h>\n%}\n%%\n[0-9]+   { printf("NUMBER: %s\\n", yytext); }\n[a-zA-Z_][a-zA-Z0-9_]* { printf("IDENTIFIER: %s\\n", yytext); }\n.        { /* skip */ }\n%%\nint main() { yylex(); return 0; }\nint yywrap() { return 1; }\n', 'flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt', 'Tokens matched:\nIDENTIFIER: total_count\nOPERATOR: =\nNUMBER: 450\nLexical analysis completed: 0 errors.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '19ed1a24-cc83-5bfe-bba4-38dffd560c98', '20ab56dd-1bf6-56f4-b60f-cea42e76238e', 'pccsl607-exp08', 8,
    'Single-Pass & Two-Pass Assembler Simulation', 'Implement Pass 1 and Pass 2 of a Two-Pass Assembler generating SYMTAB, intermediate file, and object code records.', 45, 'Flex & Bison Linux Compiler Container',
    '["Understand theoretical principles of single-pass & two-pass assembler simulation", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Lex & Yacc", "tag": "Compiler", "iconType": "terminal"}, {"name": "Lexical Analysis", "tag": "Grammar", "iconType": "code"}, {"name": "Code Generation", "tag": "Intermediate", "iconType": "cpu"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Single-Pass & Two-Pass Assembler Simulation", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Flex toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Lex/Yacc file (.l/.y)", "Parser output (.txt)"], "description": "Upload required source files and execution logs for PCCSL607 Single-Pass & Two-Pass Assembler Simulation", "acceptedFormats": ".l,.y,.txt"}'::jsonb,
    '%{\n#include <stdio.h>\n%}\n%%\n[0-9]+   { printf("NUMBER: %s\\n", yytext); }\n[a-zA-Z_][a-zA-Z0-9_]* { printf("IDENTIFIER: %s\\n", yytext); }\n.        { /* skip */ }\n%%\nint main() { yylex(); return 0; }\nint yywrap() { return 1; }\n', 'flex lexer.l && gcc lex.yy.c -o lexer && ./lexer < input.txt', 'Tokens matched:\nIDENTIFIER: total_count\nOPERATOR: =\nNUMBER: 450\nLexical analysis completed: 0 errors.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('492b9761-1a3c-5682-93e0-b21bec881aa0', 'PBCST604', 'Fundamentals of Cyber Security', 'S6'::semester_enum, 4, '3-0-0-1', 'CIA 50 / ESE 50', 'PC-PBL', 'Cryptographic algorithms, symmetric/asymmetric encryption, hashing, authentication, network vulnerability assessment, packet sniffing, and secure coding.', '["Classical & Modern Cryptography (DES/AES)", "Public-Key Infrastructure & RSA/ECC", "Cryptographic Hashes & Digital Signatures", "Vulnerability Audits, Sniffing & Firewalls"]'::jsonb, 'PBCST604')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '665c3475-88da-59ef-8d74-d056406eb654', '492b9761-1a3c-5682-93e0-b21bec881aa0', 'pbcst604-exp01', 1,
    'Classical & Modern Symmetric Cryptography', 'Implement Caesar, Vigenere, and AES-CBC encryption/decryption in Python, and demonstrate why ECB mode leaks plaintext patterns.', 45, 'Kali Linux Security Sandbox',
    '["Understand theoretical principles of classical & modern symmetric cryptography", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Cryptography", "tag": "RSA/AES", "iconType": "layers"}, {"name": "Network Auditing", "tag": "Port Scan", "iconType": "terminal"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Classical & Modern Symmetric Cryptography", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Kali toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python/C script (.py/.c)", "Security Report (.pdf)"], "description": "Upload required source files and execution logs for PBCST604 Classical & Modern Symmetric Cryptography", "acceptedFormats": ".py,.c,.pdf"}'::jsonb,
    '# KTU PBCST604 Fundamentals of Cyber Security\n# Symmetric & Asymmetric Cryptography implementation\n', 'python3 security_test.py', '2048-bit RSA Keypair generated.\nPlaintext: "KTU 2024 Scheme B.Tech CSE Practical"\nCiphertext: 4b29f0e137... (Encrypted)\nDecrypted message: MATCHED successfully.', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '84f94eed-4565-5fc3-9315-65f30d7b312f', '492b9761-1a3c-5682-93e0-b21bec881aa0', 'pbcst604-exp02', 2,
    'Public-Key Cryptography & Hashing', 'Implement RSA key generation, encryption, and digital signature verification, and compare SHA-256 / bcrypt password hashing with salting.', 45, 'Kali Linux Security Sandbox',
    '["Understand theoretical principles of public-key cryptography & hashing", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Cryptography", "tag": "RSA/AES", "iconType": "layers"}, {"name": "Network Auditing", "tag": "Port Scan", "iconType": "terminal"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Public-Key Cryptography & Hashing", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Kali toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python/C script (.py/.c)", "Security Report (.pdf)"], "description": "Upload required source files and execution logs for PBCST604 Public-Key Cryptography & Hashing", "acceptedFormats": ".py,.c,.pdf"}'::jsonb,
    '# KTU PBCST604 Fundamentals of Cyber Security\n# Symmetric & Asymmetric Cryptography implementation\n', 'python3 security_test.py', '2048-bit RSA Keypair generated.\nPlaintext: "KTU 2024 Scheme B.Tech CSE Practical"\nCiphertext: 4b29f0e137... (Encrypted)\nDecrypted message: MATCHED successfully.', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '311ca6ca-2045-58ed-b37c-e200610f46bb', '492b9761-1a3c-5682-93e0-b21bec881aa0', 'pbcst604-exp03', 3,
    'Network Enumeration & Traffic Analysis (Isolated Sandbox)', 'Inside an isolated lab network, use nmap and tcpdump/Wireshark to enumerate open ports on a target container and identify unencrypted credentials.', 45, 'Kali Linux Security Sandbox',
    '["Understand theoretical principles of network enumeration & traffic analysis (isolated sandbox)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Cryptography", "tag": "RSA/AES", "iconType": "layers"}, {"name": "Network Auditing", "tag": "Port Scan", "iconType": "terminal"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Network Enumeration & Traffic Analysis (Isolated Sandbox)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Kali toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python/C script (.py/.c)", "Security Report (.pdf)"], "description": "Upload required source files and execution logs for PBCST604 Network Enumeration & Traffic Analysis (Isolated Sandbox)", "acceptedFormats": ".py,.c,.pdf"}'::jsonb,
    '# KTU PBCST604 Fundamentals of Cyber Security\n# Symmetric & Asymmetric Cryptography implementation\n', 'python3 security_test.py', '2048-bit RSA Keypair generated.\nPlaintext: "KTU 2024 Scheme B.Tech CSE Practical"\nCiphertext: 4b29f0e137... (Encrypted)\nDecrypted message: MATCHED successfully.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '030ad8f4-294e-5148-be36-55f7d197c0c3', '492b9761-1a3c-5682-93e0-b21bec881aa0', 'pbcst604-exp04', 4,
    'Web Application Vulnerabilities (SQLi & XSS)', 'Demonstrate SQL Injection and Reflected XSS on an intentionally vulnerable local demo app, then patch both using parameterized queries and output encoding.', 45, 'Kali Linux Security Sandbox',
    '["Understand theoretical principles of web application vulnerabilities (sqli & xss)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Cryptography", "tag": "RSA/AES", "iconType": "layers"}, {"name": "Network Auditing", "tag": "Port Scan", "iconType": "terminal"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Web Application Vulnerabilities (SQLi & XSS)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Kali toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python/C script (.py/.c)", "Security Report (.pdf)"], "description": "Upload required source files and execution logs for PBCST604 Web Application Vulnerabilities (SQLi & XSS)", "acceptedFormats": ".py,.c,.pdf"}'::jsonb,
    '# KTU PBCST604 Fundamentals of Cyber Security\n# Symmetric & Asymmetric Cryptography implementation\n', 'python3 security_test.py', '2048-bit RSA Keypair generated.\nPlaintext: "KTU 2024 Scheme B.Tech CSE Practical"\nCiphertext: 4b29f0e137... (Encrypted)\nDecrypted message: MATCHED successfully.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '3b5de9ed-7021-5e0e-81c2-761f7c2ac6ce', '492b9761-1a3c-5682-93e0-b21bec881aa0', 'pbcst604-exp05', 5,
    'Linux Privilege & Container Hardening Audit', 'Build a defensive security tool or vulnerability scanner (e.g., Password Strength & Breach Auditor, Log Anomaly Detector, or Secure File Vault).', 45, 'Kali Linux Security Sandbox',
    '["Understand theoretical principles of linux privilege & container hardening audit", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Cryptography", "tag": "RSA/AES", "iconType": "layers"}, {"name": "Network Auditing", "tag": "Port Scan", "iconType": "terminal"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Linux Privilege & Container Hardening Audit", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Kali toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Python/C script (.py/.c)", "Security Report (.pdf)"], "description": "Upload required source files and execution logs for PBCST604 Linux Privilege & Container Hardening Audit", "acceptedFormats": ".py,.c,.pdf"}'::jsonb,
    '# KTU PBCST604 Fundamentals of Cyber Security\n# Symmetric & Asymmetric Cryptography implementation\n', 'python3 security_test.py', '2048-bit RSA Keypair generated.\nPlaintext: "KTU 2024 Scheme B.Tech CSE Practical"\nCiphertext: 4b29f0e137... (Encrypted)\nDecrypted message: MATCHED successfully.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('7bc733b7-4753-520a-aaff-f6aea070c259', 'PCCSP608', 'Mini Project: Socially Relevant Project', 'S6'::semester_enum, 2, '0-0-0-3', 'CIA 50 / ESE 50', 'Project', 'Team-based design and implementation of a socially relevant software engineering solution solving problems in agriculture, healthcare, or education.', '["Problem Identification & Feasibility Study", "System Requirements Specification (SRS)", "Architectural & Database Design", "Implementation, Testing & Community Pilot"]'::jsonb, 'PCCSP608')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'e47341bc-d4ba-54ad-9b68-d58ed856d55e', '7bc733b7-4753-520a-aaff-f6aea070c259', 'pccsp608-exp01', 1,
    'Problem Identification & SRS Submission', 'Implement practical requirements for Problem Identification & SRS Submission.', 45, 'Full-Stack Web & Mobile Sandbox',
    '["Understand theoretical principles of problem identification & srs submission", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Architecture", "tag": "Full-Stack", "iconType": "code"}, {"name": "Database & API", "tag": "Backend", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Problem Identification & SRS Submission", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Full-Stack toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Project Report (.pdf)", "Source code archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP608 Problem Identification & SRS Submission", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP608 Mini Project\n# Socially Relevant Project Repository\n', 'npm run test:all', 'Running project test suite...\n✓ 18 unit tests passed\n✓ API endpoints verified (HTTP 200 OK)\n✓ Database migrations applied cleanly', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '6420e1f4-85a5-5c11-92ea-3a465b5fb9a6', '7bc733b7-4753-520a-aaff-f6aea070c259', 'pccsp608-exp02', 2,
    'Identify a real-world community, campus, or accessibility problem. Submit a 2-page Problem Statement, Literature Survey, and Software Requirements Specification (SRS).', 'Implement practical requirements for Identify a real-world community, campus, or accessibility problem. Submit a 2-page Problem Statement, Literature Survey, and Software Requirements Specification (SRS)..', 45, 'Full-Stack Web & Mobile Sandbox',
    '["Understand theoretical principles of identify a real-world community, campus, or accessibility problem. submit a 2-page problem statement, literature survey, and software requirements specification (srs).", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Architecture", "tag": "Full-Stack", "iconType": "code"}, {"name": "Database & API", "tag": "Backend", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Identify a real-world community, campus, or accessibility problem. Submit a 2-page Problem Statement, Literature Survey, and Software Requirements Specification (SRS).", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Full-Stack toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Project Report (.pdf)", "Source code archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP608 Identify a real-world community, campus, or accessibility problem. Submit a 2-page Problem Statement, Literature Survey, and Software Requirements Specification (SRS).", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP608 Mini Project\n# Socially Relevant Project Repository\n', 'npm run test:all', 'Running project test suite...\n✓ 18 unit tests passed\n✓ API endpoints verified (HTTP 200 OK)\n✓ Database migrations applied cleanly', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '6420e1f4-85a5-5c11-92ea-3a465b5fb9a6', '7bc733b7-4753-520a-aaff-f6aea070c259', 'pccsp608-exp02', 2,
    'System Architecture & UI/UX Prototype', 'Implement practical requirements for System Architecture & UI/UX Prototype.', 45, 'Full-Stack Web & Mobile Sandbox',
    '["Understand theoretical principles of system architecture & ui/ux prototype", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Architecture", "tag": "Full-Stack", "iconType": "code"}, {"name": "Database & API", "tag": "Backend", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for System Architecture & UI/UX Prototype", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Full-Stack toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Project Report (.pdf)", "Source code archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP608 System Architecture & UI/UX Prototype", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP608 Mini Project\n# Socially Relevant Project Repository\n', 'npm run test:all', 'Running project test suite...\n✓ 18 unit tests passed\n✓ API endpoints verified (HTTP 200 OK)\n✓ Database migrations applied cleanly', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '22251dcf-5991-5326-99a3-2c3a78b5be31', '7bc733b7-4753-520a-aaff-f6aea070c259', 'pccsp608-exp04', 4,
    'Design the system architecture diagram, database ER schema, API contracts, and interactive UI/UX wireframes.', 'Implement practical requirements for Design the system architecture diagram, database ER schema, API contracts, and interactive UI/UX wireframes..', 45, 'Full-Stack Web & Mobile Sandbox',
    '["Understand theoretical principles of design the system architecture diagram, database er schema, api contracts, and interactive ui/ux wireframes.", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Architecture", "tag": "Full-Stack", "iconType": "code"}, {"name": "Database & API", "tag": "Backend", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Design the system architecture diagram, database ER schema, API contracts, and interactive UI/UX wireframes.", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Full-Stack toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Project Report (.pdf)", "Source code archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP608 Design the system architecture diagram, database ER schema, API contracts, and interactive UI/UX wireframes.", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP608 Mini Project\n# Socially Relevant Project Repository\n', 'npm run test:all', 'Running project test suite...\n✓ 18 unit tests passed\n✓ API endpoints verified (HTTP 200 OK)\n✓ Database migrations applied cleanly', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'e1006680-ab84-5903-89f3-ec7a8f5e2b03', '7bc733b7-4753-520a-aaff-f6aea070c259', 'pccsp608-exp03', 3,
    'Core Implementation & Integration', 'Implement practical requirements for Core Implementation & Integration.', 45, 'Full-Stack Web & Mobile Sandbox',
    '["Understand theoretical principles of core implementation & integration", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Architecture", "tag": "Full-Stack", "iconType": "code"}, {"name": "Database & API", "tag": "Backend", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Core Implementation & Integration", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Full-Stack toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Project Report (.pdf)", "Source code archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP608 Core Implementation & Integration", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP608 Mini Project\n# Socially Relevant Project Repository\n', 'npm run test:all', 'Running project test suite...\n✓ 18 unit tests passed\n✓ API endpoints verified (HTTP 200 OK)\n✓ Database migrations applied cleanly', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'd9bafa9f-1480-53be-8185-58f35d049806', '7bc733b7-4753-520a-aaff-f6aea070c259', 'pccsp608-exp06', 6,
    'Implement the working MVP codebase with version control (Git), automated unit/integration tests, and clean documentation.', 'Implement practical requirements for Implement the working MVP codebase with version control (Git), automated unit/integration tests, and clean documentation..', 45, 'Full-Stack Web & Mobile Sandbox',
    '["Understand theoretical principles of implement the working mvp codebase with version control (git), automated unit/integration tests, and clean documentation.", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Architecture", "tag": "Full-Stack", "iconType": "code"}, {"name": "Database & API", "tag": "Backend", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Implement the working MVP codebase with version control (Git), automated unit/integration tests, and clean documentation.", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Full-Stack toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Project Report (.pdf)", "Source code archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP608 Implement the working MVP codebase with version control (Git), automated unit/integration tests, and clean documentation.", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP608 Mini Project\n# Socially Relevant Project Repository\n', 'npm run test:all', 'Running project test suite...\n✓ 18 unit tests passed\n✓ API endpoints verified (HTTP 200 OK)\n✓ Database migrations applied cleanly', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '22251dcf-5991-5326-99a3-2c3a78b5be31', '7bc733b7-4753-520a-aaff-f6aea070c259', 'pccsp608-exp04', 4,
    'Final Demo, Report & Viva Voce', 'Implement practical requirements for Final Demo, Report & Viva Voce.', 45, 'Full-Stack Web & Mobile Sandbox',
    '["Understand theoretical principles of final demo, report & viva voce", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Architecture", "tag": "Full-Stack", "iconType": "code"}, {"name": "Database & API", "tag": "Backend", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Final Demo, Report & Viva Voce", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Full-Stack toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Project Report (.pdf)", "Source code archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP608 Final Demo, Report & Viva Voce", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP608 Mini Project\n# Socially Relevant Project Repository\n', 'npm run test:all', 'Running project test suite...\n✓ 18 unit tests passed\n✓ API endpoints verified (HTTP 200 OK)\n✓ Database migrations applied cleanly', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'a22dae7c-96d9-567d-bec4-2a61ada5bbc5', '7bc733b7-4753-520a-aaff-f6aea070c259', 'pccsp608-exp08', 8,
    'Present a live working demonstration of the socially relevant project, submit the bound project report, and complete the evaluation viva.', 'Implement practical requirements for Present a live working demonstration of the socially relevant project, submit the bound project report, and complete the evaluation viva..', 45, 'Full-Stack Web & Mobile Sandbox',
    '["Understand theoretical principles of present a live working demonstration of the socially relevant project, submit the bound project report, and complete the evaluation viva.", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Architecture", "tag": "Full-Stack", "iconType": "code"}, {"name": "Database & API", "tag": "Backend", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Present a live working demonstration of the socially relevant project, submit the bound project report, and complete the evaluation viva.", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Full-Stack toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Project Report (.pdf)", "Source code archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP608 Present a live working demonstration of the socially relevant project, submit the bound project report, and complete the evaluation viva.", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP608 Mini Project\n# Socially Relevant Project Repository\n', 'npm run test:all', 'Running project test suite...\n✓ 18 unit tests passed\n✓ API endpoints verified (HTTP 200 OK)\n✓ Database migrations applied cleanly', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('a6609f7e-68b0-5599-9955-169d592fc978', 'PCCSS705', 'Seminar', 'S7'::semester_enum, 2, '0-0-3-0', 'CIA 100', 'Seminar', 'Survey of modern research literature from IEEE, ACM, or Springer. Preparation of formal technical seminar report in LaTeX and technical presentation.', '["Literature Survey & Paper Selection", "Technical Synthesis & Report Writing (LaTeX)", "Slide Preparation & Presentation Skills", "Viva-Voce & Discussion Defense"]'::jsonb, 'PCCSS705')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '4ee7153d-b9a9-5521-bb3c-9a7881aa3f6f', 'a6609f7e-68b0-5599-9955-169d592fc978', 'pccss705-exp01', 1,
    'Technical Topic Selection & IEEE Paper Shortlisting', 'Select an emerging topic in Computer Science (e.g., LLM Security, eBPF Observability, Confidential Computing, Federated Learning) and submit 3 recent IEEE/ACM base papers for faculty approval.', 45, 'LaTeX / Overleaf Research Environment',
    '["Understand theoretical principles of technical topic selection & ieee paper shortlisting", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Technical Review", "tag": "IEEE Paper", "iconType": "code"}, {"name": "Presentation", "tag": "Seminar", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Technical Topic Selection & IEEE Paper Shortlisting", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using LaTeX toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Seminar Report (.pdf)", "Presentation Slides (.pdf/.pptx)"], "description": "Upload required source files and execution logs for PCCSS705 Technical Topic Selection & IEEE Paper Shortlisting", "acceptedFormats": ".pdf,.pptx"}'::jsonb,
    '% KTU PCCSS705 Seminar Report Template\n\documentclass[12pt,a4paper]{article}\n\begin{document}\n\title{Technical Seminar}\n\maketitle\n\end{document}\n', 'pdflatex seminar_report.tex', 'Output written on seminar_report.pdf (18 pages, 42080 bytes).\nReferences and citations verified from IEEE Xplore.', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '5880800c-9e06-5979-85fb-b79d799e210b', 'a6609f7e-68b0-5599-9955-169d592fc978', 'pccss705-exp02', 2,
    'Abstract & Technical Literature Review', 'Submit a 1-page structured abstract summarizing the problem, methodology, and comparative benchmarks of the selected paper.', 45, 'LaTeX / Overleaf Research Environment',
    '["Understand theoretical principles of abstract & technical literature review", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Technical Review", "tag": "IEEE Paper", "iconType": "code"}, {"name": "Presentation", "tag": "Seminar", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Abstract & Technical Literature Review", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using LaTeX toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Seminar Report (.pdf)", "Presentation Slides (.pdf/.pptx)"], "description": "Upload required source files and execution logs for PCCSS705 Abstract & Technical Literature Review", "acceptedFormats": ".pdf,.pptx"}'::jsonb,
    '% KTU PCCSS705 Seminar Report Template\n\documentclass[12pt,a4paper]{article}\n\begin{document}\n\title{Technical Seminar}\n\maketitle\n\end{document}\n', 'pdflatex seminar_report.tex', 'Output written on seminar_report.pdf (18 pages, 42080 bytes).\nReferences and citations verified from IEEE Xplore.', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '7d5d9384-8f3f-5c94-ab17-75a9b5e46949', 'a6609f7e-68b0-5599-9955-169d592fc978', 'pccss705-exp03', 3,
    'Presentation Deck & Live Seminar Talk', 'Prepare a 15-slide technical presentation and deliver a 15-minute seminar followed by Q&A.', 45, 'LaTeX / Overleaf Research Environment',
    '["Understand theoretical principles of presentation deck & live seminar talk", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Technical Review", "tag": "IEEE Paper", "iconType": "code"}, {"name": "Presentation", "tag": "Seminar", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Presentation Deck & Live Seminar Talk", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using LaTeX toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Seminar Report (.pdf)", "Presentation Slides (.pdf/.pptx)"], "description": "Upload required source files and execution logs for PCCSS705 Presentation Deck & Live Seminar Talk", "acceptedFormats": ".pdf,.pptx"}'::jsonb,
    '% KTU PCCSS705 Seminar Report Template\n\documentclass[12pt,a4paper]{article}\n\begin{document}\n\title{Technical Seminar}\n\maketitle\n\end{document}\n', 'pdflatex seminar_report.tex', 'Output written on seminar_report.pdf (18 pages, 42080 bytes).\nReferences and citations verified from IEEE Xplore.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'd0077476-48f4-57e5-aa29-b507915f9cce', 'a6609f7e-68b0-5599-9955-169d592fc978', 'pccss705-exp04', 4,
    'Final Seminar Report (LaTeX / PDF)', 'Submit the formatted seminar report with proper IEEE citations, architecture diagrams, and critical analysis.', 45, 'LaTeX / Overleaf Research Environment',
    '["Understand theoretical principles of final seminar report (latex / pdf)", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Technical Review", "tag": "IEEE Paper", "iconType": "code"}, {"name": "Presentation", "tag": "Seminar", "iconType": "layers"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Final Seminar Report (LaTeX / PDF)", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using LaTeX toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Seminar Report (.pdf)", "Presentation Slides (.pdf/.pptx)"], "description": "Upload required source files and execution logs for PCCSS705 Final Seminar Report (LaTeX / PDF)", "acceptedFormats": ".pdf,.pptx"}'::jsonb,
    '% KTU PCCSS705 Seminar Report Template\n\documentclass[12pt,a4paper]{article}\n\begin{document}\n\title{Technical Seminar}\n\maketitle\n\end{document}\n', 'pdflatex seminar_report.tex', 'Output written on seminar_report.pdf (18 pages, 42080 bytes).\nReferences and citations verified from IEEE Xplore.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('271c49ab-45d7-55ee-b548-a509d9508796', 'PCCSP706', 'Major Project Phase I / Internship', 'S7'::semester_enum, 4, '0-0-0-8', 'CIA 100', 'Project', 'Phase I of capstone engineering project or 6-month industry internship: Literature review, problem formulation, SRS, system architecture design, and initial prototype.', '["Problem Statement & Novelty Statement", "SRS & High-Level Architectural Design", "Prototype Development & Proof of Concept", "Phase I Progress Defense & Review Evaluation"]'::jsonb, 'PCCSP706')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'b82fe9ef-7aec-5a14-9e43-6d3293707046', '271c49ab-45d7-55ee-b548-a509d9508796', 'pccsp706-exp01', 1,
    'Project Synopsis & Feasibility Study', 'Submit team roles, problem statement, novelty, and tech stack justification.', 45, 'Capstone Project Workspace',
    '["Understand theoretical principles of project synopsis & feasibility study", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Design", "tag": "Architecture", "iconType": "layers"}, {"name": "Prototyping", "tag": "Phase I", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Project Synopsis & Feasibility Study", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Capstone toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Phase I Report (.pdf)", "Prototype code (.zip)"], "description": "Upload required source files and execution logs for PCCSP706 Project Synopsis & Feasibility Study", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP706 Major Project Phase I\n', './validate_prototype.sh', 'Phase I Architecture verified.\nCore module implementation: 55% complete.\nInterim presentation approved.', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '55b2c5a4-627a-5923-8a73-55915d52b61c', '271c49ab-45d7-55ee-b548-a509d9508796', 'pccsp706-exp02', 2,
    'Zero-th & First Review', 'Present system architecture, dataset/API design, and proof-of-concept prototype.', 45, 'Capstone Project Workspace',
    '["Understand theoretical principles of zero-th & first review", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Design", "tag": "Architecture", "iconType": "layers"}, {"name": "Prototyping", "tag": "Phase I", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Zero-th & First Review", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Capstone toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Phase I Report (.pdf)", "Prototype code (.zip)"], "description": "Upload required source files and execution logs for PCCSP706 Zero-th & First Review", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP706 Major Project Phase I\n', './validate_prototype.sh', 'Phase I Architecture verified.\nCore module implementation: 55% complete.\nInterim presentation approved.', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '7a5029eb-8461-55c8-a0b2-f2b2b8986609', '271c49ab-45d7-55ee-b548-a509d9508796', 'pccsp706-exp03', 3,
    'Second Review', 'Demonstrate 50% core module implementation, security/performance baseline, and Phase I progress report.', 45, 'Capstone Project Workspace',
    '["Understand theoretical principles of second review", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Design", "tag": "Architecture", "iconType": "layers"}, {"name": "Prototyping", "tag": "Phase I", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Second Review", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Capstone toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Phase I Report (.pdf)", "Prototype code (.zip)"], "description": "Upload required source files and execution logs for PCCSP706 Second Review", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP706 Major Project Phase I\n', './validate_prototype.sh', 'Phase I Architecture verified.\nCore module implementation: 55% complete.\nInterim presentation approved.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'b82fe9ef-7aec-5a14-9e43-6d3293707046', '271c49ab-45d7-55ee-b548-a509d9508796', 'pccsp706-exp01', 1,
    'Offer Letter & Company Mentor Mapping', 'Submit verified internship offer and supervisor details.', 45, 'Capstone Project Workspace',
    '["Understand theoretical principles of offer letter & company mentor mapping", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Design", "tag": "Architecture", "iconType": "layers"}, {"name": "Prototyping", "tag": "Phase I", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Offer Letter & Company Mentor Mapping", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Capstone toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Phase I Report (.pdf)", "Prototype code (.zip)"], "description": "Upload required source files and execution logs for PCCSP706 Offer Letter & Company Mentor Mapping", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP706 Major Project Phase I\n', './validate_prototype.sh', 'Phase I Architecture verified.\nCore module implementation: 55% complete.\nInterim presentation approved.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '55b2c5a4-627a-5923-8a73-55915d52b61c', '271c49ab-45d7-55ee-b548-a509d9508796', 'pccsp706-exp02', 2,
    'Bi-Weekly Activity Logs', 'Log engineering tasks, pull requests, and technical learnings.', 45, 'Capstone Project Workspace',
    '["Understand theoretical principles of bi-weekly activity logs", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Design", "tag": "Architecture", "iconType": "layers"}, {"name": "Prototyping", "tag": "Phase I", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Bi-Weekly Activity Logs", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Capstone toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Phase I Report (.pdf)", "Prototype code (.zip)"], "description": "Upload required source files and execution logs for PCCSP706 Bi-Weekly Activity Logs", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP706 Major Project Phase I\n', './validate_prototype.sh', 'Phase I Architecture verified.\nCore module implementation: 55% complete.\nInterim presentation approved.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '7a5029eb-8461-55c8-a0b2-f2b2b8986609', '271c49ab-45d7-55ee-b548-a509d9508796', 'pccsp706-exp03', 3,
    'Final Internship Report & Evaluation', 'Submit completion certificate, technical report, and deliver final review presentation.', 45, 'Capstone Project Workspace',
    '["Understand theoretical principles of final internship report & evaluation", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "System Design", "tag": "Architecture", "iconType": "layers"}, {"name": "Prototyping", "tag": "Phase I", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Final Internship Report & Evaluation", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Capstone toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Phase I Report (.pdf)", "Prototype code (.zip)"], "description": "Upload required source files and execution logs for PCCSP706 Final Internship Report & Evaluation", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP706 Major Project Phase I\n', './validate_prototype.sh', 'Phase I Architecture verified.\nCore module implementation: 55% complete.\nInterim presentation approved.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)
VALUES ('3aff2fa7-ee17-532c-b9d6-25987d84fac1', 'PCCSP806', 'Major Project Phase II / Internship', 'S8'::semester_enum, 4, '0-0-0-8', 'CIA 70 / ESE 30', 'Project', 'Phase II full product deployment, comprehensive integration testing, performance benchmarking, research publication draft, and final viva-voce thesis defense.', '["Full-System Integration & Optimization", "Performance Benchmarking & Security Audits", "Research Paper Draft / Patent Filing", "Final Thesis Defense & Demonstration"]'::jsonb, 'PCCSP806')
ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'e8b09b0f-f58d-53fe-aeda-936520ba9e70', '3aff2fa7-ee17-532c-b9d6-25987d84fac1', 'pccsp806-exp01', 1,
    'Full System Integration & Testing', 'Complete all remaining modules, end-to-end testing, load/security validation, and deployment.', 45, 'Production Cloud Sandbox',
    '["Understand theoretical principles of full system integration & testing", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Cloud Deployment", "tag": "Kubernetes", "iconType": "layers"}, {"name": "Thesis Defense", "tag": "Viva", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Full System Integration & Testing", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Production toolchain", "completed": true}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Final B.Tech Thesis (.pdf)", "Complete Source Archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP806 Full System Integration & Testing", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP806 Major Project Phase II\n', './verify_production_release.sh', 'All production microservices deployed.\nLoad test: 10,000 requests/sec, 0 error rate.\nFinal thesis report ready for external examination.', 'Completed'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '542fa997-4c1c-503d-965a-9afee24ad3bc', '3aff2fa7-ee17-532c-b9d6-25987d84fac1', 'pccsp806-exp02', 2,
    'Publication / Patent / Demo Readiness', 'Prepare conference/journal paper draft or open-source release documentation.', 45, 'Production Cloud Sandbox',
    '["Understand theoretical principles of publication / patent / demo readiness", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Cloud Deployment", "tag": "Kubernetes", "iconType": "layers"}, {"name": "Thesis Defense", "tag": "Viva", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Publication / Patent / Demo Readiness", "completed": true}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Production toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Final B.Tech Thesis (.pdf)", "Complete Source Archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP806 Publication / Patent / Demo Readiness", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP806 Major Project Phase II\n', './verify_production_release.sh', 'All production microservices deployed.\nLoad test: 10,000 requests/sec, 0 error rate.\nFinal thesis report ready for external examination.', 'In Progress'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '07265fca-640b-5ac6-b297-79908bab3741', '3aff2fa7-ee17-532c-b9d6-25987d84fac1', 'pccsp806-exp03', 3,
    'Final External Viva & Thesis Submission', 'Deliver final live product demo and submit the complete B.Tech Project Thesis.', 45, 'Production Cloud Sandbox',
    '["Understand theoretical principles of final external viva & thesis submission", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Cloud Deployment", "tag": "Kubernetes", "iconType": "layers"}, {"name": "Thesis Defense", "tag": "Viva", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Final External Viva & Thesis Submission", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Production toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Final B.Tech Thesis (.pdf)", "Complete Source Archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP806 Final External Viva & Thesis Submission", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP806 Major Project Phase II\n', './verify_production_release.sh', 'All production microservices deployed.\nLoad test: 10,000 requests/sec, 0 error rate.\nFinal thesis report ready for external examination.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    'e8b09b0f-f58d-53fe-aeda-936520ba9e70', '3aff2fa7-ee17-532c-b9d6-25987d84fac1', 'pccsp806-exp01', 1,
    'Mid-Term & Final Industry Mentor Evaluation', 'Submit supervisor feedback and performance rubric.', 45, 'Production Cloud Sandbox',
    '["Understand theoretical principles of mid-term & final industry mentor evaluation", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Cloud Deployment", "tag": "Kubernetes", "iconType": "layers"}, {"name": "Thesis Defense", "tag": "Viva", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Mid-Term & Final Industry Mentor Evaluation", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Production toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Final B.Tech Thesis (.pdf)", "Complete Source Archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP806 Mid-Term & Final Industry Mentor Evaluation", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP806 Major Project Phase II\n', './verify_production_release.sh', 'All production microservices deployed.\nLoad test: 10,000 requests/sec, 0 error rate.\nFinal thesis report ready for external examination.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;

INSERT INTO experiments (
    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,
    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,
    sample_starter_code, initial_cmd, initial_output, status
)
VALUES (
    '542fa997-4c1c-503d-965a-9afee24ad3bc', '3aff2fa7-ee17-532c-b9d6-25987d84fac1', 'pccsp806-exp02', 2,
    'Final Technical Report & Defense', 'Present architecture, deliverables, and engineering impact to the department panel.', 45, 'Production Cloud Sandbox',
    '["Understand theoretical principles of final technical report & defense", "Implement and test laboratory solution matching KTU 2024 Scheme requirements"]'::jsonb, '[{"name": "Cloud Deployment", "tag": "Kubernetes", "iconType": "layers"}, {"name": "Thesis Defense", "tag": "Viva", "iconType": "code"}]'::jsonb, '[{"id": "s1", "stepNumber": 1, "label": "Design algorithm & write implementation for Final Technical Report & Defense", "completed": false}, {"id": "s2", "stepNumber": 2, "label": "Compile, link & debug using Production toolchain", "completed": false}, {"id": "s3", "stepNumber": 3, "label": "Demonstrate output on terminal & run KTU auto-checks", "completed": false}]'::jsonb, '{"fileTypes": ["1 Final B.Tech Thesis (.pdf)", "Complete Source Archive (.zip)"], "description": "Upload required source files and execution logs for PCCSP806 Final Technical Report & Defense", "acceptedFormats": ".pdf,.zip"}'::jsonb,
    '# KTU PCCSP806 Major Project Phase II\n', './verify_production_release.sh', 'All production microservices deployed.\nLoad test: 10,000 requests/sec, 0 error rate.\nFinal thesis report ready for external examination.', 'Ready'
)
ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;
