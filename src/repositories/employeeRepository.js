const pool = require('../db/db.js')

const getEmployees = async () => {
    const { rows } = await pool.query("SELECT * FROM employees"); 
    return rows;
};

const getEmployeeAndRoleInformation = async () => {
	try {
		const { rows } = await pool.query("SELECT e.*, r.role_name FROM employees AS e \
										   JOIN employee_roles AS er ON er.employee_id = e.employee_id \
										   LEFT JOIN roles AS r ON er.role_id = r.role_id");
		return rows;
	} catch (error) {
		console.log("Error executing query: ", error);
		throw error;
	}
}

module.exports = {
    getEmployees,
	getEmployeeAndRoleInformation
};
