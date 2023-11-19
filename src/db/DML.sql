-- Inserting data into 'departments'
INSERT INTO "departments" ("department_name") VALUES
                                                  ('Human Resources'),
                                                  ('IT'),
                                                  ('Marketing'),
                                                  ('Finance');

-- Inserting data into 'roles'
INSERT INTO "roles" ("role_name") VALUES
                                      ('Manager'),
                                      ('Developer'),
                                      ('Analyst'),
                                      ('Administrator');

-- Inserting data into 'employees'
INSERT INTO "employees" ("department_id", "name", "date_of_birth", "gender", "contact_number", "email") VALUES
                                                                                                            (1, 'John Doe', '1980-01-15', 'Male', '555-0101', 'john.doe@example.com'),
                                                                                                            (2, 'Jane Smith', '1985-05-20', 'Female', '555-0102', 'jane.smith@example.com'),
                                                                                                            (3, 'Alice Johnson', '1990-07-25', 'Female', '555-0103', 'alice.johnson@example.com'),
                                                                                                            (4, 'Mike Brown', '1975-11-30', 'Male', '555-0104', 'mike.brown@example.com');

-- Assuming employees with IDs 1, 2, 3, 4 are managers of their respective departments
UPDATE "departments" SET "manager_id" = department_id;

-- Inserting data into 'employee_roles'
INSERT INTO "employee_roles" ("employee_id", "role_id", "start_date", "end_date") VALUES
                                                                                      (1, 1, '2020-01-01', NULL),
                                                                                      (2, 2, '2020-01-01', NULL),
                                                                                      (3, 3, '2020-01-01', NULL),
                                                                                      (4, 4, '2020-01-01', NULL);

-- Inserting data into 'schedules'
INSERT INTO "schedules" ("employee_id", "start_date", "end_date", "start_time", "end_time") VALUES
                                                                                                (1, '2023-01-01', '2023-12-31', '2023-01-01 09:00:00', '2023-01-01 17:00:00'),
                                                                                                (2, '2023-01-02', '2023-12-31', '2023-01-02 09:00:00', '2023-01-02 17:00:00');

-- Inserting data into 'attendance_records'
INSERT INTO "attendance_records" ("employee_id", "date", "arrival_time", "departure_time") VALUES
                                                                                               (1, '2023-01-01', '2023-01-01 09:05:00', '2023-01-01 17:02:00'),
                                                                                               (2, '2023-01-02', '2023-01-02 09:03:00', '2023-01-02 17:05:00');

-- Inserting data into 'projects'
INSERT INTO "projects" ("project_name", "department_id", "start_date", "end_date") VALUES
                                                                                       ('Website Redesign', 2, '2023-01-01', '2023-06-30'),
                                                                                       ('Market Research', 3, '2023-02-01', '2023-08-31');

-- Inserting data into 'project_assignments'
INSERT INTO "project_assignments" ("project_id", "employee_id") VALUES
                                                                    (1, 2),
                                                                    (2, 3);