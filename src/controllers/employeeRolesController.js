const employeeRoleRepository = require('../repositories/employeeRoleRepository.js');

const getEmployeeRoles = async (req, res) => {
    try {
        let [employeeRoles, query] = await employeeRoleRepository.getEmployeeRoles();
		res.status(200).send({ employeeRoles, query });
    } catch (error) {
        res.status(500).send("Error getting employee role records from the server.");
    } 
};

const getEmployeeRolesById = async (req, res) => {
	try {
		const employeeRoleId = req.params.id;
		let [employeeRole, query] = await employeeRoleRepository.getEmployeeRoleById(employeeRoleId);
		res.status(200).send({ employeeRole, query })
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find an employeeRole with that id.");
	}
}

const createEmployeeRole = async (req, res) => {
	try {
		const employeeRole = req.body;
		let [id, query] = await employeeRoleRepository.createEmployeeRole(employeeRole);
		res.status(201).send({ id, query });
	} catch (error) {
		res.status(500).send("Error creating the employeeRole.");
	}
}

const updateEmployeeRole = async (req, res) => {
    try {
        const updatedRole = req.body;
        const employeeRoleId = req.params.id; 

        let [id, query] = await employeeRoleRepository.updateEmployeeRole(employeeRoleId, updatedRole);
        res.status(200).send({ id, query });
    } catch (error) {
		console.log("controller error: ", error);
        res.status(500).send("Error updating the employeeRole.");
    }
}

const deleteEmployeeRoleById = async (req, res) => {
	try {
		const employeeRoleId = req.params.id;
		const [id, query] = await employeeRoleRepository.deleteEmployeeRoleById(employeeRoleId);
		res.status(200).send({ id, query });
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find the employeeRole to delete.");
	}
}

module.exports = {
    getEmployeeRoles,
    getEmployeeRolesById,
	createEmployeeRole,
	updateEmployeeRole,
	deleteEmployeeRoleById,
}
