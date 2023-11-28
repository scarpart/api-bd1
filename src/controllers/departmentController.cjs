const departmentRepository = require('../repositories/departmentRepository.cjs');

const getDepartments = async (req, res) => {
    try {
        const [departments, query] = await departmentRepository.getDepartments();
        res.status(200).send({ departments, query });
    } catch (error) {
		console.log("controller error:", error);
        res.status(500).send("Error getting department records from the server.");
    } 
};

const getSalaryExpensesByDepartment = async (req, res) => {
	try {
		const [total, query] = await departmentRepository.getSalaryExpensesByDepartment(); 
		res.status(200).send({ total, query });
	} catch (error) {
		console.log("controller error:", error);
		res.status(500).send("Could not get the total expenditure by departments.");
	}
}

const getDepartmentById = async (req, res) => {
	try {
		const id = req.params.id;
		let [department, query] = await departmentRepository.getDepartmentById(id);
		res.status(200).send({ department, query })
	} catch (error) {
		console.log("controller error:", error);
		res.status(404).send("Department not found.");
	}
}

const createDepartment = async (req, res) => {
	try {
		const department = req.body;
		let [id, query] = await departmentRepository.createDepartment(department);
		res.status(201).send({ id, query });
	} catch (error) {
		console.log("controller error:", error);
		res.status(500).send("Error creating the department.");
	}
}

const updateDepartment = async (req, res) => {
    try {
        const updated = req.body;
        const departmentId = req.params.id; 

        let [id, query] = await departmentRepository.updateDepartment(departmentId, updated);
        res.status(200).send({ id, query });
    } catch (error) {
		console.log("controller error: ", error);
        res.status(500).send("Error updating the department.");
    }
}

const deleteDepartmentById = async (req, res) => {
	try {
		const departmentId = req.params.id;
		const [id, query] = await departmentRepository.deleteDepartmentById(departmentId);
		res.status(200).send({ id, query });
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find the department to delete.");
	}
}


module.exports = {
    getDepartments,
	getSalaryExpensesByDepartment,
	getDepartmentById,
	createDepartment,
	updateDepartment,
	deleteDepartmentById,
}






