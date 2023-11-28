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
INSERT INTO "employees" ("department_id", "name", "salary", "date_of_birth", "gender", "contact_number", "email") VALUES
	(1, 'John Doe', 50000, '1980-01-15', 'Male', '555-0101', 'john.doe@example.com'),
	(2, 'Jane Smith', 15000, '1985-05-20', 'Female', '555-0102', 'jane.smith@example.com'),
	(3, 'Alice Johnson', 10000, '1990-07-25', 'Female', '555-0103', 'alice.johnson@example.com'),
	(4, 'Marie Johnson', 22000, '1990-07-25', 'Female', '555-0104', 'marie.jhn@example.com'),
	(1, 'Julie Smith', 34500, '1999-01-20', 'Female', '555-0105', 'julsmith@example.com'),
	(2, 'Johnathan Lima', 17500, '2001-08-01', 'Male', '555-0106', 'jlima123@example.com'),
	(4, 'Lian Bark', 3500, '2002-03-27', 'Male', '555-0107', 'barklian@example.com'),
	(3, 'Oswald Guy', 3000, '2000-07-07', 'Male', '555-0108', 'oswaldguy@example.com'),
    (1, 'Evan Peters', 45000, '1988-04-15', 'Male', '555-0110', 'evan.peters@example.com'),
    (2, 'Sara Connor', 20000, '1992-12-20', 'Female', '555-0111', 's.connor@example.com'),
    (3, 'Raj Patel', 5500, '1995-09-30', 'Male', '555-0112', 'raj.patel@example.com'),
    (4, 'Luna Star', 7000, '1986-11-05', 'Female', '555-0113', 'luna.star@example.com');


-- Inserting data into 'employee_roles'
INSERT INTO "employee_roles" ("employee_id", "role_id", "start_date", "end_date") VALUES
	(1, 1, '2020-01-01', NULL),
	(1, 2, '2020-01-01', NULL),
	(1, 3, '2020-01-01', NULL),
	(2, 1, '2020-01-01', NULL),
	(2, 3, '2020-01-01', NULL),
	(2, 4, '2020-01-01', NULL),
	(3, 1, '2020-01-01', NULL),
	(4, 1, '2020-01-01', NULL),
	(5, 2, '2021-01-01', NULL),
	(5, 1, '2021-01-01', NULL),
	(6, 3, '2021-02-01', NULL),
	(7, 3, '2021-03-01', NULL),
	(8, 2, '2021-04-01', NULL),
	(9, 2, '2021-02-01', NULL),
	(9, 1, '2021-02-01', NULL),
	(9, 3, '2021-02-01', NULL),
	(10, 4, '2021-03-01', NULL),
	(11, 2, '2021-04-01', NULL),
	(12, 2, '2021-04-01', NULL);

	-- Inserting data into 'schedules'
INSERT INTO "schedules" ("employee_id", "start_date", "end_date", "start_time", "end_time") VALUES
	(1, '2023-01-01', '2023-12-31', '2023-01-01 09:00:00', '2023-01-01 17:00:00'),
	(2, '2023-01-01', '2023-12-31', '2023-01-01 09:00:00', '2023-01-01 17:00:00'),
	(3, '2023-01-02', '2023-12-31', '2023-01-02 09:00:00', '2023-01-02 17:00:00'),
	(4, '2023-01-02', '2023-12-31', '2023-01-02 09:00:00', '2023-01-02 17:00:00'),
	(5, '2023-01-03', '2023-12-31', '2023-01-03 08:45:00', '2023-01-03 17:15:00'),
	(6, '2023-01-04', '2023-12-31', '2023-01-04 09:15:00', '2023-01-04 17:30:00'),
	(7, '2023-01-05', '2023-12-31', '2023-01-05 09:00:00', '2023-01-05 17:00:00'),
	(8, '2023-01-06', '2023-12-31', '2023-01-06 08:50:00', '2023-01-06 17:05:00'),
	(9, '2023-01-07', '2023-12-31', '2023-01-07 09:10:00', '2023-01-07 17:10:00'),
	(10, '2023-01-02', '2023-12-31', '2023-01-02 09:00:00', '2023-01-02 17:00:00'),
	(11, '2023-01-03', '2023-12-31', '2023-01-03 08:45:00', '2023-01-03 17:15:00'),
	(12, '2023-01-04', '2023-12-31', '2023-01-04 09:15:00', '2023-01-04 17:30:00');

-- Inserting data into 'projects'
INSERT INTO "projects" ("project_name", "budget", "start_date", "end_date") VALUES
	('Website Redesign', 50000, '2023-01-01', '2023-06-30'),
	('Market Research', 150000, '2023-02-01', '2023-08-31'),
	('Internal Software Development', 300000, '2023-02-01', '2023-12-31'),
	('Employee Engagement Survey', 5000, '2023-03-01', '2023-05-31'),
	('Attracting New Investors', 150000, '2023-01-01', '2025-12-31');

-- Inserting data into 'project_assignments'
INSERT INTO "project_assignments" ("project_id", "employee_id") VALUES
	(5, 1),
	(5, 2),
	(5, 4),
	(5, 7),
	(5, 11),
	(4, 2),
	(4, 5),
	(4, 9),
	(4, 12),
	(3, 12),
	(1, 2),
	(1, 6),
	(2, 3),
	(2, 8),
	(2, 10),
	(2, 6),
	(3, 2),
	(3, 6),
	(3, 10);












