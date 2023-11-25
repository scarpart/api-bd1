CREATE TABLE "employees" (
    "employee_id" serial PRIMARY KEY,
    "department_id" integer NOT NULL,
    "name" varchar NOT NULL,
    "salary" integer NOT NULL,
    "date_of_birth" date NOT NULL,
    "gender" varchar,
    "contact_number" varchar,
    "email" varchar NOT NULL
);

CREATE TABLE "departments" (
    "department_id" serial PRIMARY KEY,
    "department_name" varchar NOT NULL
);

CREATE TABLE "roles" (
    "role_id" serial PRIMARY KEY,
    "role_name" varchar NOT NULL
);

CREATE TABLE "employee_roles" (
    "employee_role_id" serial PRIMARY KEY,
    "employee_id" integer NOT NULL,
    "role_id" integer NOT NULL,
    "start_date" date NOT NULL,
    "end_date" date 
);

CREATE TABLE "schedules" (
    "schedule_id" serial PRIMARY KEY,
    "employee_id" integer NOT NULL,
    "start_date" date NOT NULL,
    "end_date" date NOT NULL,
    "start_time" timestamp NOT NULL,
    "end_time" timestamp NOT NULL
);

CREATE TABLE "projects" (
    "project_id" serial PRIMARY KEY,
    "project_name" varchar NOT NULL,
    "budget" integer NOT NULL,
    "start_date" date NOT NULL,
    "end_date" date 
);

CREATE TABLE "project_assignments" (
    "assignment_id" serial PRIMARY KEY,
    "project_id" integer NOT NULL,
    "employee_id" integer NOT NULL,
    "assigned_at" date 
);

ALTER TABLE "employees"
    ADD FOREIGN KEY ("department_id") REFERENCES "departments" ("department_id");

ALTER TABLE "employee_roles"
    ADD FOREIGN KEY ("employee_id") REFERENCES "employees" ("employee_id") ON DELETE CASCADE,
    ADD FOREIGN KEY ("role_id") REFERENCES "roles" ("role_id") ON DELETE CASCADE;

ALTER TABLE "schedules"
    ADD FOREIGN KEY ("employee_id") REFERENCES "employees" ("employee_id") ON DELETE CASCADE;

ALTER TABLE "project_assignments"
    ADD FOREIGN KEY ("project_id") REFERENCES "projects" ("project_id") ON DELETE CASCADE,
    ADD FOREIGN KEY ("employee_id") REFERENCES "employees" ("employee_id") ON DELETE CASCADE;
