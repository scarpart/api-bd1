const pool = require('../db/db.js')

const getProjectAssignments = async () => {
	const query = "SELECT * FROM project_assignments";
    const { rows } = await pool.query(query); 
    return [rows, query];
};

const getProjectAssignmentById = async (id) => {
	try {
		const query = "SELECT * FROM project_assignments WHERE assignment_id = $1";
		const values = [id]; 

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { rows } = await pool.query(query, values);
		return [rows, displayQuery];
	} catch (error) {
		console.log("Error getting projectAssignment by id: ", error);
		throw error;
	}
}

const createProjectAssignment = async (projectAssignment) => {
	try {
		let query = `INSERT INTO project_assignments ( \
					project_id,
					employee_id,
				) VALUES ($1, $2) \
					RETURNING assignment_id`;
		let values = [
			projectAssignment.project_id,
			projectAssignment.employee_id
		];
		
		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { id } = await pool.query(query, values);
		return [id, displayQuery];
	} catch (error) {
		console.log("Could not create projectAssignment: ", error);
		throw error
	}
}  

const updateProjectAssignment = async (projectAssignmentId, updatedProjectAssignment) => {
	try {
		let query = "UPDATE project_assignments SET ";
		let values = [];
		let valueCount = 0;

		for (const [key, value] of Object.entries(updatedProjectAssignment)) {
			if (value != undefined) {
				valueCount++;
				query += `${key} = $${valueCount}, `;
				values.push(value);
			}
		}

		query = query.slice(0, -2);
		query += ` WHERE assignment_id = $${valueCount + 1}`;
		values.push(projectAssignmentId);

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, values);
		return [projectAssignmentId, displayQuery];
	} catch (error) {
		console.log("Could not update projectAssignment:", error)
		throw error;
	}
}

const deleteProjectAssignmentById = async (projectAssignmentId) => {
	try {
		const query = "DELETE FROM project_assignments WHERE assignment_id = $1";
		const values = [projectAssignmentId];

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, values);

		return [projectAssignmentId, displayQuery];
	} catch (error) {
		console.log("Could not delete projectAssignment.");
		throw error;
	}
}

module.exports = {
    getProjectAssignments,
	getProjectAssignmentById,
	createProjectAssignment,
	updateProjectAssignment,
	deleteProjectAssignmentById
};
