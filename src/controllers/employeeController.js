const employeeRepository = require('../repositories/employeeRepository.js');

const getEmployees = async (req, res) => {
    try {
        let [employees, query] = await employeeRepository.getEmployees();
		res.status(200).send({ employees, query });
    } catch (error) {
        res.status(500).send("Error getting user records from the server.");
    } 
};

const getEmployeeById = async (req, res) => {
	try {
		const employeeId = req.params.id;
		let [employee, query] = await employeeRepository.getEmployeeById(employeeId);
		res.status(200).send({ employee, query })
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find an employee with that id.");
	}
}

const getEmployeeAndRoleInformation = async (req, res) => {
	try {
		let [employees, query] = await employeeRepository.getEmployeeAndRoleInformation();
		res.status(200).send({ employees, query });
	} catch (error) {
		res.status(500).send("Error getting user records from the server.");
	}
}

const createEmployee = async (req, res) => {
	try {
		const employee = req.body;
		let [id, query] = await employeeRepository.createEmployee(employee);
		res.status(201).send({ id, query });
	} catch (error) {
		res.status(500).send("Error creating the employee.");
	}
}

const updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = req.body;
        const employeeId = req.params.id; 

        let [id, query] = await employeeRepository.updateEmployee(employeeId, updatedEmployee);
        res.status(200).send({ id, query });
    } catch (error) {
		console.log("controller error: ", error);
        res.status(500).send("Error updating the employee.");
    }
}

const deleteEmployeeById = async (req, res) => {
	try {
		const employeeId = req.params.id;
		const [id, query] = await employeeRepository.deleteEmployeeById(employeeId);
		res.status(200).send({ id, query });
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find the employee to delete.");
	}
}

module.exports = {
    getEmployees,
	getEmployeeAndRoleInformation,
	createEmployee,
	updateEmployee,
	deleteEmployeeById,
	getEmployeeById,
}
