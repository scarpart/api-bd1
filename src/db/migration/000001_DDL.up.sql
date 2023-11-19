-- noinspection SqlNoDataSourceInspectionForFile

CREATE TABLE "employees" (
                             "employee_id" serial PRIMARY KEY,
                             "department_id" integer,
                             "name" varchar,
                             "date_of_birth" date,
                             "gender" varchar,
                             "contact_number" varchar,
                             "email" varchar
);

CREATE TABLE "departments" (
                               "department_id" serial PRIMARY KEY,
                               "manager_id" integer,
                               "department_name" varchar
);

CREATE TABLE "roles" (
                         "role_id" serial PRIMARY KEY,
                         "role_name" varchar
);

CREATE TABLE "employee_roles" (
                                  "employee_role_id" serial PRIMARY KEY,
                                  "employee_id" integer,
                                  "role_id" integer,
                                  "start_date" date,
                                  "end_date" date
);

CREATE TABLE "schedules" (
                             "schedule_id" integer PRIMARY KEY,
                             "employee_id" integer,
                             "start_date" date,
                             "end_date" date,
                             "start_time" timestamp,
                             "end_time" timestamp
);

CREATE TABLE "attendance_records" (
                                      "record_id" serial PRIMARY KEY,
                                      "employee_id" integer,
                                      "date" date,
                                      "arrival_time" timestamp,
                                      "departure_time" timestamp
);

CREATE TABLE "projects" (
                            "project_id" integer PRIMARY KEY,
                            "project_name" varchar,
                            "department_id" integer,
                            "start_date" date,
                            "end_date" date
);

CREATE TABLE "project_assignments" (
                                       "assignment_id" integer PRIMARY KEY,
                                       "project_id" integer,
                                       "employee_id" integer
);

ALTER TABLE "employees" ADD FOREIGN KEY ("department_id") REFERENCES "departments" ("department_id");

ALTER TABLE "employees" ADD FOREIGN KEY ("employee_id") REFERENCES "departments" ("manager_id");

ALTER TABLE "roles" ADD FOREIGN KEY ("role_id") REFERENCES "employee_roles" ("role_id");

ALTER TABLE "employee_roles" ADD FOREIGN KEY ("employee_id") REFERENCES "employees" ("employee_id");

ALTER TABLE "schedules" ADD FOREIGN KEY ("employee_id") REFERENCES "employees" ("employee_id");

ALTER TABLE "attendance_records" ADD FOREIGN KEY ("employee_id") REFERENCES "employees" ("employee_id");

ALTER TABLE "projects" ADD FOREIGN KEY ("department_id") REFERENCES "departments" ("department_id");

ALTER TABLE "project_assignments" ADD FOREIGN KEY ("project_id") REFERENCES "projects" ("project_id");

ALTER TABLE "project_assignments" ADD FOREIGN KEY ("employee_id") REFERENCES "employees" ("employee_id");
