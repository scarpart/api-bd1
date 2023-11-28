const projectAssignmentRepository = require('../repositories/projectAssignmentRepository.cjs');

const getProjectAssignments = async (req, res) => {
    try {
        let [projectAssignments, query] = await projectAssignmentRepository.getProjectAssignments();
		res.status(200).send({ projectAssignments, query });
    } catch (error) {
        res.status(500).send("Error getting user records from the server.");
    } 
};

const getProjectAssignmentById = async (req, res) => {
	try {
		const projectAssignmentId = req.params.id;
		let [projectAssignment, query] = await projectAssignmentRepository.getProjectAssignmentById(projectAssignmentId);
		res.status(200).send({ projectAssignment, query })
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find an projectAssignment with that id.");
	}
}

const createProjectAssignment = async (req, res) => {
	try {
		const projectAssignment = req.body;
		let [id, query] = await projectAssignmentRepository.createProjectAssignment(projectAssignment);
		res.status(201).send({ id, query });
	} catch (error) {
		res.status(500).send("Error creating the projectAssignment.");
	}
}

const updateProjectAssignment = async (req, res) => {
    try {
        const updatedProjectAssignment = req.body;
        const projectAssignmentId = req.body.projectAssignmentId; 
		delete updatedProjectAssignment.projectAssignmentId;

        let [id, query] = await projectAssignmentRepository.updateProjectAssignment(projectAssignmentId, updatedProjectAssignment);
        res.status(200).send({ id, query });
    } catch (error) {
		console.log("controller error: ", error);
        res.status(500).send("Error updating the projectAssignment.");
    }
}

const deleteProjectAssignmentById = async (req, res) => {
	try {
		const projectAssignmentId = req.params.id;
		const [id, query] = await projectAssignmentRepository.deleteProjectAssignmentById(projectAssignmentId);
		res.status(200).send({ id, query });
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find the projectAssignment to delete.");
	}
}

module.exports = {
    getProjectAssignments,
	createProjectAssignment,
	updateProjectAssignment,
	deleteProjectAssignmentById,
	getProjectAssignmentById,
}
