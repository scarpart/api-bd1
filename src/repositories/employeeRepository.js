const pool = require('../db/db.js')

// GET 
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

const createEmployee = async (employee) => {
	try {
		query = `INSERT INTO employees ( \
					department_id, \
					name, \
					salary, \
					date_of_birth, \
					gender, \
					contact_number, \
					email \
				) VALUES ($1, $2, $3, $4, $5, $6, $7) \
					RETURNING employee_id`;

		values = [
			employee.department_id,
			employee.name,
			employee.salary,
			employee.date_of_birth,
			employee.gender,
			employee.contact_number,
			employee.email,
		];
		
		const { id } = await pool.query(query, values);
		return id;
	} catch (error) {
		console.log("Could not create employee:", error);
		throw error
	}
}  

const updateEmployee = async (employee) => {
	try {
		await pool.query("");
	} catch (error) {
		console.log("Could not UPDATE employee instance:", error);
		throw error;
	}
}

module.exports = {
    getEmployees,
	getEmployeeAndRoleInformation,
	createEmployee,
	updateEmployee,
};
