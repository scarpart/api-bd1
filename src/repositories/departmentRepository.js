const pool = require('../db/db.js')

const getDepartments = async () => {
    const { rows } = await pool.query("SELECT * FROM deparments"); 
    return rows;
};

const getSalaryExpensesByDepartment = async () => {
	try {
		const { rows } = await pool.query("SELECT d.department_name AS DepartmentName, \
												  SUM(e.salary) AS TotalSalaryExpenses, \
												  COUNT(e.employee_id) AS NumberOfEmployees \
										   FROM departments AS d \
										   LEFT JOIN employees AS e ON e.department_id = d.department_id \
										   GROUP BY d.department_name");
		return rows;
	} catch (error) {
		console.log("Error executing the query:", error);
		throw error;
	}
}

module.exports = {
    getDepartments,
	getSalaryExpensesByDepartment,
};
