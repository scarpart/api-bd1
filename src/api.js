const express = require('express');
const employeeController = require('./controllers/employeeController.js');
const departmentController = require('./controllers/departmentController.js');

const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
	res.send({ message: "Hello World!" });		
});

// Employee router 
app.get("/api/employees", employeeController.getEmployees);

// Departments router 
app.get("/api/departments", departmentController.getDepartments);
app.get("/api/departments/total-expenses", departmentController.getSalaryExpensesByDepartment);

export function run() {
	app.listen(3000, () => {
		console.log('Server is running on port 3000.');
	})
}
