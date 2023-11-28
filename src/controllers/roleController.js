const roleRepository = require('../repositories/roleRepository.js');

const getRoles = async (req, res) => {
    try {
        let [roles, query] = await roleRepository.getRoles();
		res.status(200).send({ roles, query });
    } catch (error) {
        res.status(500).send("Error getting user records from the server.");
    } 
};

const getRoleById = async (req, res) => {
	try {
		const roleId = req.params.id;
		let [role, query] = await roleRepository.getRoleById(roleId);
		res.status(200).send({ role, query })
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find an role with that id.");
	}
}

const createRole = async (req, res) => {
	try {
		const role = req.body;
		let [id, query] = await roleRepository.createRole(role);
		res.status(201).send({ id, query });
	} catch (error) {
		res.status(500).send("Error creating the role.");
	}
}

const updateRole = async (req, res) => {
    try {
        const updatedRole = req.body;
        const roleId = req.params.id; 

        let [id, query] = await roleRepository.updateRole(roleId, updatedRole);
        res.status(200).send({ id, query });
    } catch (error) {
		console.log("controller error: ", error);
        res.status(500).send("Error updating the role.");
    }
}

const deleteRoleById = async (req, res) => {
	try {
		const roleId = req.params.id;
		const [id, query] = await roleRepository.deleteRoleById(roleId);
		res.status(200).send({ id, query });
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find the role to delete.");
	}
}

module.exports = {
    getRoles,
	createRole,
	updateRole,
	deleteRoleById,
	getRoleById,
}
