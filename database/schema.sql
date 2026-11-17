-- ==============================================================================
-- CampusLab PostgreSQL 16 Relational Schema
-- Tailored for APJ Abdul Kalam Technological University (KTU) 2024 Scheme
-- B.Tech Computer Science and Engineering (CSE)
-- Region: AWS ap-south-1 RDS (Private Subnet, Encrypted at Rest)
-- ==============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- -----------------------------------------------------------------------------
-- ENUM TYPES
-- -----------------------------------------------------------------------------
DO $$ BEGIN
    CREATE TYPE user_role_enum AS ENUM ('student', 'faculty', 'admin', 'worker');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE semester_enum AS ENUM ('S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE course_category_enum AS ENUM ('ESC Practical', 'PC Practical', 'PC-PBL', 'Project', 'Seminar');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE session_status_enum AS ENUM ('REQUESTED', 'PROVISIONING', 'READY', 'RUNNING', 'STOPPED', 'EXPIRED', 'FAILED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE submission_status_enum AS ENUM ('SUBMITTED', 'EVALUATING', 'GRADED', 'REJECTED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE worker_status_enum AS ENUM ('HEALTHY', 'DRAINING', 'UNHEALTHY', 'OFFLINE');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- -----------------------------------------------------------------------------
-- 1. USERS TABLE
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admission_number VARCHAR(32) UNIQUE NOT NULL, -- e.g. '24CS0142' or 'FAC081' / 'ADM001'
    ktu_reg_id VARCHAR(32) UNIQUE,                -- e.g. 'TVE24CS042'
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    name VARCHAR(128) NOT NULL,
    role user_role_enum NOT NULL DEFAULT 'student',
    current_semester semester_enum NOT NULL DEFAULT 'S4',
    department VARCHAR(64) NOT NULL DEFAULT 'Computer Science & Engineering',
    college_id VARCHAR(32) NOT NULL DEFAULT 'CET_KTU',
    avatar_url VARCHAR(512),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_admission_number ON users(admission_number);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_users_semester ON users(current_semester);

-- -----------------------------------------------------------------------------
-- 2. USER SETTINGS TABLE (Terminal & Notification preferences)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS user_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    terminal_theme VARCHAR(32) NOT NULL DEFAULT 'campusslate',
    font_size INTEGER NOT NULL DEFAULT 14,
    auto_reconnect BOOLEAN NOT NULL DEFAULT TRUE,
    copy_on_select BOOLEAN NOT NULL DEFAULT TRUE,
    deadline_reminders BOOLEAN NOT NULL DEFAULT TRUE,
    grade_alerts BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 3. COURSES TABLE (KTU 2024 Scheme B.Tech CSE)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(16) UNIQUE NOT NULL,             -- e.g. 'PCCSL407', 'UCEST105'
    title VARCHAR(255) NOT NULL,                  -- e.g. 'Operating Systems Lab'
    semester semester_enum NOT NULL,              -- 'S1' to 'S8'
    credits INTEGER NOT NULL DEFAULT 2,
    ltpr VARCHAR(16) NOT NULL DEFAULT '0-0-3-0',
    evaluation VARCHAR(32) NOT NULL DEFAULT 'CIA 50 / ESE 50',
    category course_category_enum NOT NULL DEFAULT 'PC Practical',
    description TEXT NOT NULL,
    topics_json JSONB NOT NULL DEFAULT '[]'::jsonb,
    image_key VARCHAR(64) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_courses_semester ON courses(semester);
CREATE INDEX IF NOT EXISTS idx_courses_code ON courses(code);

-- -----------------------------------------------------------------------------
-- 4. EXPERIMENTS TABLE
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS experiments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    exp_slug VARCHAR(64) NOT NULL,                -- e.g. 'pccsl407-exp04', 'ucest105-exp01'
    exp_number INTEGER NOT NULL,                  -- 1, 2, ...
    title VARCHAR(255) NOT NULL,
    question TEXT NOT NULL,
    duration_minutes INTEGER NOT NULL DEFAULT 45,
    environment VARCHAR(128) NOT NULL DEFAULT 'Isolated Linux Container',
    objectives_json JSONB NOT NULL DEFAULT '[]'::jsonb,
    practice_skills_json JSONB NOT NULL DEFAULT '[]'::jsonb,
    checklist_steps_json JSONB NOT NULL DEFAULT '[]'::jsonb,
    submission_requirements_json JSONB NOT NULL DEFAULT '{}'::jsonb,
    sample_starter_code TEXT,
    solution_hint TEXT,
    initial_cmd VARCHAR(255),
    initial_output TEXT,
    status VARCHAR(32) NOT NULL DEFAULT 'Ready',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_course_exp_slug UNIQUE (course_id, exp_slug)
);

CREATE INDEX IF NOT EXISTS idx_experiments_course_id ON experiments(course_id);
CREATE INDEX IF NOT EXISTS idx_experiments_exp_slug ON experiments(exp_slug);

-- -----------------------------------------------------------------------------
-- 5. WORKER NODES TABLE (Private EC2 Worker Pool)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS worker_nodes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hostname VARCHAR(128) UNIQUE NOT NULL,        -- e.g. 'ip-10-0-2-45.ap-south-1.compute.internal'
    ip_address VARCHAR(64) NOT NULL,              -- e.g. '10.0.2.45' (Private IP)
    port INTEGER NOT NULL DEFAULT 8001,
    status worker_status_enum NOT NULL DEFAULT 'HEALTHY',
    active_containers INTEGER NOT NULL DEFAULT 0,
    max_containers INTEGER NOT NULL DEFAULT 30,
    cpu_utilization_pct NUMERIC(5,2) DEFAULT 0.00,
    memory_utilization_pct NUMERIC(5,2) DEFAULT 0.00,
    last_heartbeat TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_worker_nodes_status ON worker_nodes(status);

-- -----------------------------------------------------------------------------
-- 6. LAB SESSIONS TABLE (Isolated container workspaces)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS lab_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    experiment_id UUID NOT NULL REFERENCES experiments(id) ON DELETE CASCADE,
    worker_id UUID REFERENCES worker_nodes(id) ON DELETE SET NULL,
    status session_status_enum NOT NULL DEFAULT 'REQUESTED',
    idempotency_key VARCHAR(128) UNIQUE,
    container_id VARCHAR(128),                    -- Docker container ID on worker EC2
    container_name VARCHAR(128),
    pty_token VARCHAR(255) NOT NULL,              -- Secure random token for WebSocket PTY handshake
    port INTEGER DEFAULT 0,
    expires_at TIMESTAMPTZ NOT NULL,              -- 45 mins from allocation
    allocated_at TIMESTAMPTZ,
    stopped_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_lab_sessions_user_id ON lab_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_lab_sessions_status ON lab_sessions(status);
CREATE INDEX IF NOT EXISTS idx_lab_sessions_expires_at ON lab_sessions(expires_at);
CREATE INDEX IF NOT EXISTS idx_lab_sessions_idempotency ON lab_sessions(idempotency_key);

-- -----------------------------------------------------------------------------
-- 7. SUBMISSIONS TABLE (KTU Student Practical Uploads & Grades)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    session_id UUID REFERENCES lab_sessions(id) ON DELETE SET NULL,
    experiment_id UUID NOT NULL REFERENCES experiments(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    status submission_status_enum NOT NULL DEFAULT 'SUBMITTED',
    score NUMERIC(5,2) DEFAULT 0.00,             -- e.g. 46.00 / 50.00
    max_score NUMERIC(5,2) NOT NULL DEFAULT 50.00,
    grade VARCHAR(8),                             -- 'S', 'A+', 'A', 'B+', 'B', 'C', 'P', 'F'
    rubric_breakdown_json JSONB NOT NULL DEFAULT '{
        "execution": 18,
        "code_quality": 18,
        "viva_voce": 10
    }'::jsonb,
    faculty_feedback TEXT,
    faculty_reviewer_id UUID REFERENCES users(id) ON DELETE SET NULL,
    autocheck_passed BOOLEAN NOT NULL DEFAULT TRUE,
    artifact_manifest_json JSONB NOT NULL DEFAULT '[]'::jsonb, -- S3 keys, sha256 checksums, mime types
    terminal_snapshot TEXT,
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    graded_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_submissions_user_id ON submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_submissions_experiment_id ON submissions(experiment_id);
CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(status);

-- -----------------------------------------------------------------------------
-- 8. AUDIT EVENTS TABLE (SOC2 / KTU Compliance Audit Logging)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS audit_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    request_id VARCHAR(64) NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    admission_number VARCHAR(32),
    session_id UUID REFERENCES lab_sessions(id) ON DELETE SET NULL,
    worker_id UUID REFERENCES worker_nodes(id) ON DELETE SET NULL,
    event_type VARCHAR(64) NOT NULL,              -- 'AUTH_LOGIN', 'SESSION_ALLOCATED', 'SUBMISSION_GRADED', 'CONTAINER_KILLED'
    ip_address VARCHAR(64),
    user_agent TEXT,
    details_json JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_events_user_id ON audit_events(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_events_event_type ON audit_events(event_type);
CREATE INDEX IF NOT EXISTS idx_audit_events_created_at ON audit_events(created_at);

-- -----------------------------------------------------------------------------
-- TRIGGER: Automatic updated_at timestamp updater
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION update_timestamp_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_users_updated_at ON users;
CREATE TRIGGER trg_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_timestamp_column();

DROP TRIGGER IF EXISTS trg_courses_updated_at ON courses;
CREATE TRIGGER trg_courses_updated_at
BEFORE UPDATE ON courses
FOR EACH ROW EXECUTE FUNCTION update_timestamp_column();

DROP TRIGGER IF EXISTS trg_experiments_updated_at ON experiments;
CREATE TRIGGER trg_experiments_updated_at
BEFORE UPDATE ON experiments
FOR EACH ROW EXECUTE FUNCTION update_timestamp_column();

DROP TRIGGER IF EXISTS trg_lab_sessions_updated_at ON lab_sessions;
CREATE TRIGGER trg_lab_sessions_updated_at
BEFORE UPDATE ON lab_sessions
FOR EACH ROW EXECUTE FUNCTION update_timestamp_column();
