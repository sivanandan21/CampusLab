#!/usr/bin/env python3
import os
import json
import uuid
import hashlib

def hash_pwd(pwd: str) -> str:
    salt = "campuslab_salt_ktu2024"
    iterations = 100_000
    key = hashlib.pbkdf2_hmac("sha256", pwd.encode("utf-8"), salt.encode("utf-8"), iterations)
    return f"pbkdf2:sha256:{iterations}${salt}${key.hex()}"

def sql_escape(s):
    if s is None:
        return "NULL"
    return "'" + str(s).replace("'", "''") + "'"

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    ts_path = os.path.join(base_dir, "..", "frontend", "src", "data", "ktu2024CseLabs.ts")

    with open(ts_path, "r", encoding="utf-8") as f:
        content = f.read()

    start_token = "KTU_2024_CSE_COURSES: Course[] = "
    start_idx = content.find(start_token)
    json_str = content[start_idx + len(start_token):].strip()
    end_token = ";\n\nexport const SEMESTERS"
    end_idx = json_str.find(end_token)
    if end_idx != -1:
        json_str = json_str[:end_idx]

    courses = json.loads(json_str)

    lines = []
    lines.append("-- ==============================================================================")
    lines.append("-- CampusLab Automated PostgreSQL Seed Script")
    lines.append("-- APJ Abdul Kalam Technological University (KTU) 2024 Scheme - B.Tech CSE")
    lines.append("-- ==============================================================================\n")

    # 1. Users
    lines.append("-- 1. DEMO USERS")
    demo_users = [
        {
            "id": "11111111-1111-1111-1111-111111111111",
            "admission_number": "24CS0142",
            "ktu_reg_id": "TVE24CS042",
            "email": "adarsh.s@campuslab.edu",
            "name": "Adarsh S",
            "role": "student",
            "current_semester": "S4",
            "department": "Computer Science & Engineering",
            "college_id": "CET_KTU",
            "pwd": "password123",
        },
        {
            "id": "22222222-2222-2222-2222-222222222222",
            "admission_number": "FAC081",
            "ktu_reg_id": "KTUFAC081",
            "email": "priya.k@campuslab.edu",
            "name": "Dr. Priya K.",
            "role": "faculty",
            "current_semester": "S4",
            "department": "Computer Science & Engineering",
            "college_id": "CET_KTU",
            "pwd": "password123",
        },
        {
            "id": "33333333-3333-3333-3333-333333333333",
            "admission_number": "ADM001",
            "ktu_reg_id": "KTUADM001",
            "email": "admin@campuslab.edu",
            "name": "CampusLab Administrator",
            "role": "admin",
            "current_semester": "S4",
            "department": "Computer Science & Engineering",
            "college_id": "CET_KTU",
            "pwd": "adminpassword123",
        },
    ]

    for u in demo_users:
        h = hash_pwd(u["pwd"])
        lines.append(
            f"INSERT INTO users (id, admission_number, ktu_reg_id, email, hashed_password, name, role, current_semester, department, college_id)\n"
            f"VALUES ({sql_escape(u['id'])}, {sql_escape(u['admission_number'])}, {sql_escape(u['ktu_reg_id'])}, {sql_escape(u['email'])}, {sql_escape(h)}, {sql_escape(u['name'])}, {sql_escape(u['role'])}::user_role_enum, {sql_escape(u['current_semester'])}::semester_enum, {sql_escape(u['department'])}, {sql_escape(u['college_id'])})\n"
            f"ON CONFLICT (admission_number) DO UPDATE SET hashed_password = EXCLUDED.hashed_password, name = EXCLUDED.name, email = EXCLUDED.email;\n"
        )

    # 2. User Settings
    lines.append("-- 2. USER SETTINGS")
    lines.append(
        "INSERT INTO user_settings (user_id, terminal_theme, font_size, auto_reconnect, copy_on_select, deadline_reminders, grade_alerts)\n"
        "VALUES ('11111111-1111-1111-1111-111111111111', 'campusslate', 14, TRUE, TRUE, TRUE, TRUE)\n"
        "ON CONFLICT (user_id) DO NOTHING;\n"
    )

    # 3. Worker Node
    lines.append("-- 3. WORKER NODES")
    lines.append(
        "INSERT INTO worker_nodes (id, hostname, ip_address, port, status, active_containers, max_containers, cpu_utilization_pct, memory_utilization_pct)\n"
        "VALUES ('44444444-4444-4444-4444-444444444444', 'worker-ec2-ap-south-1a.internal', '10.0.2.45', 8001, 'HEALTHY', 1, 30, 18.5, 34.2)\n"
        "ON CONFLICT (hostname) DO NOTHING;\n"
    )

    # 4. Courses & Experiments
    lines.append("-- 4. COURSES & EXPERIMENTS")
    for c in courses:
        c_id = str(uuid.uuid5(uuid.NAMESPACE_DNS, f"course.{c['code']}"))
        topics_j = json.dumps(c.get("topics", []))
        lines.append(
            f"INSERT INTO courses (id, code, title, semester, credits, ltpr, evaluation, category, description, topics_json, image_key)\n"
            f"VALUES ({sql_escape(c_id)}, {sql_escape(c['code'])}, {sql_escape(c['title'])}, {sql_escape(c['semester'])}::semester_enum, {c['credits']}, {sql_escape(c['ltpr'])}, {sql_escape(c['evaluation'])}, {sql_escape(c['category'])}::course_category_enum, {sql_escape(c['description'])}, {sql_escape(topics_j)}::jsonb, {sql_escape(c['code'])})\n"
            f"ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;\n"
        )

        for exp in c.get("experiments", []):
            exp_id = str(uuid.uuid5(uuid.NAMESPACE_DNS, f"exp.{exp['id']}"))
            obj_j = json.dumps(exp.get("objectives", []))
            prac_j = json.dumps(exp.get("practiceSkills", []))
            check_j = json.dumps(exp.get("checklistSteps", []))
            sub_j = json.dumps(exp.get("submissionRequirements", {}))

            lines.append(
                f"INSERT INTO experiments (\n"
                f"    id, course_id, exp_slug, exp_number, title, question, duration_minutes, environment,\n"
                f"    objectives_json, practice_skills_json, checklist_steps_json, submission_requirements_json,\n"
                f"    sample_starter_code, initial_cmd, initial_output, status\n"
                f")\n"
                f"VALUES (\n"
                f"    {sql_escape(exp_id)}, {sql_escape(c_id)}, {sql_escape(exp['id'])}, {exp.get('expNumber', 1)},\n"
                f"    {sql_escape(exp['title'])}, {sql_escape(exp['question'])}, {exp.get('durationMinutes', 45)}, {sql_escape(exp.get('environment', 'Isolated Linux Sandbox'))},\n"
                f"    {sql_escape(obj_j)}::jsonb, {sql_escape(prac_j)}::jsonb, {sql_escape(check_j)}::jsonb, {sql_escape(sub_j)}::jsonb,\n"
                f"    {sql_escape(exp.get('sampleStarterCode', ''))}, {sql_escape(exp.get('initialExecutionCmd', ''))}, {sql_escape(exp.get('initialExecutionOutput', ''))}, {sql_escape(exp.get('status', 'Ready'))}\n"
                f")\n"
                f"ON CONFLICT (course_id, exp_slug) DO UPDATE SET title = EXCLUDED.title, question = EXCLUDED.question;\n"
            )

    out_file = os.path.join(base_dir, "seed.sql")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Generated {out_file} successfully ({len(lines)} lines)")

if __name__ == "__main__":
    main()
