const repoUtils = require('./utils.cjs');
const pool = require('../db/db.cjs')

const getProjects = async () => {
	try {
		const query = "SELECT * FROM projects";
		const { rows } = await pool.query(query); 
		return [rows, query];
	} catch (error) {
		console.log("error getting projects:", error);
		throw error;
	}
};

const getProjectBudgetAndAllocations = async () => {
	try {
		const query = "SELECT p.project_name AS Project_Name, \
			                  p.budget AS Budget, \
                        	  COUNT(e.employee_id) AS Number_Of_Assignees \
                       FROM projects AS p \
                       JOIN project_assignments AS pa ON pa.project_id = p.project_id \
                       JOIN employees AS e ON e.employee_id = pa.employee_id \
                       GROUP BY p.project_name, p.budget";

		const { rows } = await pool.query(query);
		return [rows, query];
	} catch (error) {
		console.log("Error executing the query:", error);
		throw error;
	}
}

const getProjectById = async (id) => {
	try {
		const query = "SELECT * FROM projects WHERE project_id = $1";
		const values = [id]; 

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { rows } = await pool.query(query, values);
		return [rows, displayQuery];
	} catch (error) {
		console.log("Error getting project by id: ", error);
		throw error;
	}
}

const createProject = async (project) => {
	try {
		let query = `INSERT INTO projects ( \
					project_name, \
					budget, \
					start_date, \
					end_date \
				) VALUES ($1, $2, $3, $4) \
					RETURNING project_id`;

		let values = [
			project.project_name,
			project.budget,
			project.start_date,
			project.end_date,
		];
		
		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { id } = await pool.query(query, values);
		return [id, displayQuery];
	} catch (error) {
		console.log("Could not create project: ", error);
		throw error
	}
}  

const updateProject = async (projectId, updatedProject) => {
	try {
		let query = "UPDATE projects SET ";
		let values = [];
		let valueCount = 0;

		for (const [key, value] of Object.entries(updatedProject)) {
			if (value != undefined) {
				valueCount++;
				query += `${key} = $${valueCount}, `;
				values.push(value);
			}
		}

		query = query.slice(0, -2);
		query += ` WHERE project_id = $${valueCount + 1}`;
		values.push(projectId);

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, values);
		return [projectId, displayQuery];
	} catch (error) {
		console.log("Could not update project:", error)
		throw error;
	}
}

const deleteProjectById = async (projectId) => {
	try {
		const query = "DELETE FROM projects WHERE project_id = $1";
		const values = [projectId];

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, values);

		return [projectId, displayQuery];
	} catch (error) {
		console.log("Could not delete project.");
		throw error;
	}
}

module.exports = {
    getProjects,
	getProjectById,
	getProjectBudgetAndAllocations,
	createProject,
	updateProject,
	deleteProjectById
};
