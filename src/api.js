const express = require('express');
const employeeController = require('./controllers/employeeController.js');
const departmentController = require('./controllers/departmentController.js');
const projectController = require('./controllers/projectController.js');

const app = express();

app.use(express.json());

// Employee router 
app.get("/api/employees", employeeController.getEmployees);
app.get("/api/employees/:id", employeeController.getEmployeeById);
app.get("/api/employees/info", employeeController.getEmployeeAndRoleInformation);
app.post("/api/employees", employeeController.createEmployee);
app.put("/api/employees", employeeController.updateEmployee);
app.delete("/api/employees/:id", employeeController.deleteEmployeeById);

// Departments router 
app.get("/api/departments", departmentController.getDepartments);
app.get("/api/departments/total-expenses", departmentController.getSalaryExpensesByDepartment);

// Projects router 
app.get("/api/projects", projectController.getProjects);
app.get("/api/projects/:id", projectController.getProjectById);
app.get("/api/projects/info", projectController.getProjectInformation);
app.post("/api/projects", projectController.createProject);
app.put("/api/projects", projectController.updateProject);
app.delete("/api/projects/:id", projectController.deleteProjectById);

export function run() {
	app.listen(3000, () => {
		console.log('Server is running on port 3000.');
	});
}
