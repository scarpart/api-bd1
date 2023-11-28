const express = require('express');
const employeeController = require('./controllers/employeeController.cjs');
const departmentController = require('./controllers/departmentController.cjs');
const projectController = require('./controllers/projectController.cjs');
const roleController = require('./controllers/roleController.cjs');
const employeeRolesController = require('./controllers/employeeRolesController.cjs');
const projectAssignmentController = require('./controllers/projectAssignmentsController.cjs');
const scheduleController = require('./controllers/scheduleController.cjs');

const app = express();

app.use(express.json());

// Employee router 
app.get("/api/employees", employeeController.getEmployees);
app.get("/api/employees/e/:id", employeeController.getEmployeeById);
app.get("/api/employees/info", employeeController.getEmployeeAndRoleInformation);
app.post("/api/employees", employeeController.createEmployee);
app.put("/api/employees/e/:id", employeeController.updateEmployee);
app.delete("/api/employees/e/:id", employeeController.deleteEmployeeById);

// Departments router 
app.get("/api/departments", departmentController.getDepartments);
app.get("/api/departments/d/:id", departmentController.getDepartmentById)
app.get("/api/departments/total-expenses", departmentController.getSalaryExpensesByDepartment);
app.post("/api/departments", departmentController.createDepartment);
app.put("/api/departments/d/:id", departmentController.updateDepartment);
app.delete("/api/departments/d/:id", departmentController.deleteDepartmentById);

// Projects router 
app.get("/api/projects", projectController.getProjects);
app.get("/api/projects/p/:id", projectController.getProjectById);
app.get("/api/projects/info", projectController.getProjectInformation);
app.post("/api/projects", projectController.createProject);
app.put("/api/projects/p/:id", projectController.updateProject);
app.delete("/api/projects/p/:id", projectController.deleteProjectById);

// Roles router 
app.get("/api/roles", roleController.getRoles);
app.get("/api/roles/r/:id", roleController.getRoleById);
app.post("/api/roles", roleController.createRole);
app.put("/api/roles/r/:id", roleController.updateRole);
app.delete("/api/roles/r/:id", roleController.deleteRoleById);

// Schedules router 
app.get("/api/schedules", scheduleController.getSchedules);
app.get("/api/schedules/s/:id", scheduleController.getScheduleById);
app.post("/api/schedules", scheduleController.createSchedule);
app.put("/api/schedules/s/:id", scheduleController.updateSchedule);
app.delete("/api/schedules/s/:id", scheduleController.deleteScheduleById);

// EmployeeRoles router 
app.get("/api/employee-roles", employeeRolesController.getEmployeeRoles);
app.get("/api/employee-roles/er/:id", employeeRolesController.getEmployeeRolesById);
app.post("/api/employee-roles", employeeRolesController.createEmployeeRole);
app.put("/api/employee-roles/er/:id", employeeRolesController.updateEmployeeRole);
app.delete("/api/employee-roles/er/:id", employeeRolesController.deleteEmployeeRoleById);

// ProjectAssignments router 
app.get("/api/project-assignments", projectAssignmentController.getProjectAssignments);
app.get("/api/project-assignments/pa/:id", projectAssignmentController.getProjectAssignmentById);
app.post("/api/project-assignments", projectAssignmentController.createProjectAssignment);
app.put("/api/project-assignments/pa/:id", projectAssignmentController.updateProjectAssignment);
app.delete("/api/project-assignments/pa/:id", projectAssignmentController.deleteProjectAssignmentById);

const run = () => {
	app.listen(3000, () => {
		console.log('Server is running on port 3000.');
	});
};

module.exports =  {
	run,
};
