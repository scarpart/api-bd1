const pool = require('../db/db.cjs')
const repoUtils = require('./utils.cjs');

const getEmployeeRoles = async () => {
	const query = "SELECT * FROM employee_roles";
    const { rows } = await pool.query(query); 
	return [rows, query];
};

const getEmployeeRoleById = async (employeeRoleId) => {
	try {
		const query = "SELECT * FROM employee_roles WHERE employee_role_id = $1";
		const values = [employeeRoleId]; 

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { rows } = await pool.query(query, values);
		return [rows, displayQuery];
	} catch (error) {
		console.log("Error getting employeeRole by id: ", error);
		throw error;
	}
}

const createEmployeeRole = async (employeeRole) => {
	try {
		let query = `INSERT INTO employee_roles ( \
					employee_id, \
					role_id, \
					start_date, \
					end_date \
				) VALUES ($1, $2, $3, $4) \
					RETURNING employee_role_id`;

		let values = [
			employeeRole.employee_id,
			employeeRole.role_id,
			employeeRole.start_date,
			employeeRole.end_date,
		];
		
		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { id } = await pool.query(query, values);
		return [id, displayQuery];
	} catch (error) {
		console.log("Could not create employeeRole:", error);
		throw error
	}
}  

const updateEmployeeRole = async (employeeRoleId, updatedEmployeeRole) => {
	try {
		let query = "UPDATE employee_roles SET ";
		let values = [];
		let valueCount = 0;

		for (const [key, value] of Object.entries(updatedEmployeeRole)) {
			if (value != undefined) {
				valueCount++;
				query += `${key} = $${valueCount}, `;
				values.push(value);
			}
		}

		query = query.slice(0, -2);
		query += ` WHERE employee_role_id = $${valueCount + 1}`;
		values.push(employeeRoleId);

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, values);
		return [employeeRoleId, displayQuery];
	} catch (error) {
		console.log("Could not update employeeRole:", error)
		throw error;
	}
}

const deleteEmployeeRoleById = async (employeeRoleId) => {
	try {
		const query = "DELETE FROM employee_roles WHERE employee_role_id = $1";
		const values = [employeeRoleId];

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, [employeeRoleId]);

		return [employeeRoleId, displayQuery];
	} catch (error) {
		console.log("Could not delete employeeRole.");
		throw error;
	}
}

module.exports = {
    getEmployeeRoles,
	getEmployeeRoleById,
	createEmployeeRole,
	updateEmployeeRole,
	deleteEmployeeRoleById
};
