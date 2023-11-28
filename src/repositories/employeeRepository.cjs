const pool = require('../db/db.cjs')
const repoUtils = require('./utils.cjs');

const getEmployees = async () => {
	const query = "SELECT * FROM employees";
    const { rows } = await pool.query(query); 
	return [rows, query];
};

const getEmployeeById = async (employeeId) => {
	try {
		const query = "SELECT * FROM employees WHERE employee_id = $1";
		const values = [employeeId]; 

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { rows } = await pool.query(query, values);
		return [rows, displayQuery];
	} catch (error) {
		console.log("Error getting employee by id: ", error);
		throw error;
	}
}

const getEmployeeAndRoleInformation = async () => {
	try {
		const query = "SELECT e.*, STRING_AGG(r.role_name, ', ') AS roles \
					   FROM employees AS e \
					   JOIN employee_roles AS er ON er.employee_id = e.employee_id \
					   LEFT JOIN roles AS r ON er.role_id = r.role_id \
					   GROUP BY e.employee_id;";
		const { rows } = await pool.query(query);
		return [rows, query];
	} catch (error) {
		console.log("Error executing query: ", error);
		throw error;
	}
}

const createEmployee = async (employee) => {
	try {
		let query = `INSERT INTO employees ( \
					department_id, \
					name, \
					salary, \
					date_of_birth, \
					gender, \
					contact_number, \
					email \
				) VALUES ($1, $2, $3, $4, $5, $6, $7) \
					RETURNING employee_id`;

		let values = [
			employee.department_id,
			employee.name,
			employee.salary,
			employee.date_of_birth,
			employee.gender,
			employee.contact_number,
			employee.email,
		];
		
		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { id } = await pool.query(query, values);
		return [id, displayQuery];
	} catch (error) {
		console.log("Could not create employee:", error);
		throw error
	}
}  

const updateEmployee = async (employeeId, updatedEmployee) => {
	try {
		let query = "UPDATE employees SET ";
		let values = [];
		let valueCount = 0;

		for (const [key, value] of Object.entries(updatedEmployee)) {
			if (value != undefined) {
				valueCount++;
				query += `${key} = $${valueCount}, `;
				values.push(value);
			}
		}

		query = query.slice(0, -2);

		query += ` WHERE employee_id = $${valueCount + 1}`;
		values.push(employeeId);

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		console.log("the end query is: ", displayQuery);

		await pool.query(query, values);
		return [employeeId, displayQuery];
	} catch (error) {
		console.log("Could not update employee:", error)
		throw error;
	}
}

const deleteEmployeeById = async (employeeId) => {
	try {
		const query = "DELETE FROM employees WHERE employee_id = $1";
		const values = [employeeId];

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, [employeeId]);

		return [employeeId, displayQuery];
	} catch (error) {
		console.log("Could not delete employee.");
		throw error;
	}
}

module.exports = {
    getEmployees,
	getEmployeeById,
	getEmployeeAndRoleInformation,
	createEmployee,
	updateEmployee,
	deleteEmployeeById
};
