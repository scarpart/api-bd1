const employeeRepository = require('../repositories/employeeRepository.js');

const getEmployees = async (req, res) => {
    try {
        const employees = await employeeRepository.getEmployees();
        res.status(200).send(employees);
    } catch (error) {
        res.status(500).send("Error getting user records from the server.");
    } 
};

const getEmployeeAndRoleInformation = async (req, res) => {
	try {
		const employees = await employeeRepository.getEmployeeAndRoleInformation();
		res.status(200).send(employees);
	} catch (error) {
		res.status(500).send("Error getting user records from the server.");
	}
}

const createEmployee = async (req, res) => {
	try {
		const employee = req.body;
		await employeeRepository.createEmployee(employee);

		res.status(201).send("User created successfully.");
	} catch (error) {
		res.status(500).send("Error creating the employee.");
	}
}

module.exports = {
    getEmployees,
	getEmployeeAndRoleInformation,
	createEmployee,
}
