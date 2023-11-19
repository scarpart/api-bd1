const express = require('express');
const employeeController = require('./controllers/employeeController.js');

const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
	res.send({ message: "Hello World!" });		
});

app.get("/api/employees", employeeController.getEmployees)

export function run() {
	app.listen(3000, () => {
		console.log('Server is running on port 3000.');
	})
}
