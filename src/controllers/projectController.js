const projectRepository = require('../repositories/projectRepository.js');

const getProjects = async (req, res) => {
    try {
        let [projs, query] = await departmentRepository.getEmployees();
		res.status(200).send({ projs, query });
    } catch (error) {
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

module.exports = {
    getProjects,
	getProjectInformation,
}
