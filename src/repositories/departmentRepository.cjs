const repoUtils = require('./utils.cjs');
const pool = require('../db/db.cjs')

const getDepartments = async () => {
	const query = "SELECT * FROM departments";
    const { rows } = await pool.query(query); 
    return [rows, query];
};

const getSalaryExpensesByDepartment = async () => {
	try {
		const query = "SELECT d.department_name AS DepartmentName, \
							  SUM(e.salary) AS TotalSalaryExpenses, \
							  COUNT(e.employee_id) AS NumberOfEmployees \
						  FROM departments AS d \
						  LEFT JOIN employees AS e ON e.department_id = d.department_id \
						  GROUP BY d.department_name";
		const { rows } = await pool.query(query);						  
		return [rows, query];
	} catch (error) {
		console.log("Error executing the query:", error);
		throw error;
	}
}

const getDepartmentById = async (departmentId) => {
	try {
		const query = "SELECT * FROM departments WHERE department_id = $1";
		const values = [departmentId]; 

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { rows } = await pool.query(query, values);
		return [rows, displayQuery];
	} catch (error) {
		console.log("Error getting department by id: ", error);
		throw error;
	}
}

const createDepartment = async (department) => {
	try {
		let query = `INSERT INTO departments ( \
					department_name
				) VALUES ($1) \
					RETURNING department_id`;
		let values = [department.department_name];
		
		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { id } = await pool.query(query, values);
		return [id, displayQuery];
	} catch (error) {
		console.log("Could not create deparment:", error);
		throw error
	}
}  

const updateDepartment = async (departmentId, updatedDepartment) => {
	try {
		let query = "UPDATE departments SET ";
		let values = [];
		let valueCount = 0;

		for (const [key, value] of Object.entries(updatedDepartment)) {
			if (value != undefined) {
				valueCount++;
				query += `${key} = $${valueCount}, `;
				values.push(value);
			}
		}

		query = query.slice(0, -2);

		query += ` WHERE department_id = $${valueCount + 1}`;
		values.push(departmentId);

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, values);
		return [departmentId, displayQuery];
	} catch (error) {
		console.log("Could not update department:", error)
		throw error;
	}
}

const deleteDepartmentById = async (departmentId) => {
	try {
		const query = "DELETE FROM departments WHERE department_id = $1";
		const values = [departmentId];

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, [departmentId]);

		return [departmentId, displayQuery];
	} catch (error) {
		console.log("Could not delete department.");
		throw error;
	}
}

module.exports = {
    getDepartments,
	getSalaryExpensesByDepartment,
	getDepartmentById,
	createDepartment,
	updateDepartment,
	deleteDepartmentById,
};





