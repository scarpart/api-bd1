-- Remove foreign key constraints
ALTER TABLE "employees" DROP CONSTRAINT IF EXISTS employees_department_id_fkey;
ALTER TABLE "departments" DROP CONSTRAINT IF EXISTS departments_manager_id_fkey;
ALTER TABLE "employee_roles" DROP CONSTRAINT IF EXISTS employee_roles_employee_id_fkey;
ALTER TABLE "employee_roles" DROP CONSTRAINT IF EXISTS employee_roles_role_id_fkey;
ALTER TABLE "schedules" DROP CONSTRAINT IF EXISTS schedules_employee_id_fkey;
ALTER TABLE "attendance_records" DROP CONSTRAINT IF EXISTS attendance_records_employee_id_fkey;
ALTER TABLE "projects" DROP CONSTRAINT IF EXISTS projects_department_id_fkey;
ALTER TABLE "project_assignments" DROP CONSTRAINT IF EXISTS project_assignments_project_id_fkey;
ALTER TABLE "project_assignments" DROP CONSTRAINT IF EXISTS project_assignments_employee_id_fkey;

-- Drop tables
DROP TABLE IF EXISTS "project_assignments";
DROP TABLE IF EXISTS "projects";
DROP TABLE IF EXISTS "attendance_records";
DROP TABLE IF EXISTS "schedules";
DROP TABLE IF EXISTS "employee_roles";
DROP TABLE IF EXISTS "roles";
DROP TABLE IF EXISTS "departments";
DROP TABLE IF EXISTS "employees";