const projectRepository = require('../repositories/projectRepository.js');

const getProjects = async (req, res) => {
    try {
        let [projs, query] = await projectRepository.getProjects();
		res.status(200).send({ projs, query });
    } catch (error) {
		console.log("controller error:", error);
        res.status(500).send("Error getting projects from the server.");
    } 
};

const getProjectInformation = async (req, res) => {
	try {
		let [info, query] = await projectRepository.getProjectBudgetAndAllocations(); 
		res.status(200).send({ info, query });
	} catch (error) {
		res.status(500).send("Could not get the full project budget and allocations information.");
	}
}

const getProjectById = async (req, res) => {
	try {
		const projId = req.params.id;
		let [project, query] = await projectRepository.getProjectById(projId);
		res.status(200).send({ project, query })
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find a project with that id.");
	}
}

const createProject = async (req, res) => {
	try {
		const project = req.body;
		let [id, query] = await projectRepository.createProject(project);
		res.status(201).send({ id, query });
	} catch (error) {
		console.log("controller error:", error);
		res.status(500).send("Error creating the project.");
	}
}

const updateProject = async (req, res) => {
    try {
        const updatedProject = req.body;
        const projectId = req.params.id; 

        let [id, query] = await projectRepository.updateProject(projectId, updatedProject);
        res.status(200).send({ id, query });
    } catch (error) {
		console.log("controller error: ", error);
        res.status(500).send("Error updating the project.");
    }
}

const deleteProjectById = async (req, res) => {
	try {
		const projectId = req.params.id;
		const [id, query] = await projectRepository.deleteProjectById(projectId);
		res.status(200).send({ id, query });
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find the project to delete.");
	}
}

module.exports = {
    getProjects,
	getProjectInformation,
	getProjectById,
	createProject,
	updateProject,
	deleteProjectById,
}





