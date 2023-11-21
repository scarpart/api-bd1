const pool = require('../db/db.js')

const getProjects = async () => {
    const { rows } = await pool.query("SELECT * FROM projects"); 
    return rows;
};

const getProjectBudgetAndAllocations = async () => {
	try {
		const { rows } = await pool.query("SELECT p.project_name AS ProjectName, \
										          p.budget AS Budget, \
												  COUNT(e.employee_id) AS NumberOfAssignees \
										   FROM projects AS p \
										   JOIN project_assignments AS pa ON pa.project_id = p.project_id \
										   JOIN employees AS e ON e.employee_id = pa.employee_id \
										   GROUP BY p.project_name, p.budget");

		return rows;
	} catch (error) {
		console.log("Error executing the query:", error);
		throw error;
	}
}


module.exports = {
    getProjects,
	getProjectBudgetAndAllocations,
};
