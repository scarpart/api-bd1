const projectRepository = require('../repositories/projectRepository.js');

const getProjects = async (req, res) => {
    try {
        const projects = await departmentRepository.getEmployees();
        res.status(200).send(projects);
    } catch (error) {
        res.status(500).send("Error getting projects from the server.");
    } 
};

const getProjectInformation = async (req, res) => {
	try {
		const projectBudgetAndAllocations = await projectRepository.getProjectBudgetAndAllocations(); 
		res.status(200).send(projectBudgetAndAllocations);
	} catch (error) {
		res.status(500).send("Could not get the full project budget and allocations information.");
	}
}

module.exports = {
    getProjects,
	getProjectInformation,
}
