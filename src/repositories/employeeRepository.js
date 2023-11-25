const pool = require('../db/db.js')

const getEmployees = async () => {
    const { rows } = await pool.query("SELECT * FROM employees"); 
    return rows;
};

const getEmployeeById = async (employeeId) => {
	try {
		const query = "SELECT * FROM employees WHERE employee_id = $1";
		const values = [employeeId]; 

		const { rows } = await pool.query(query, values);
		return rows;
	} catch (error) {
		console.log("Error getting employee by id: ", error);
		throw error;
	}
}

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
		
		const { id } = await pool.query(query, values);
		return id;
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

		const displayQuery = createDisplayQuery(query, values);
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
		await pool.query(query, [employeeId]);
	} catch (error) {
		console.log("Could not delete employee.");
		throw error;
	}
}

function createDisplayQuery(query, values) {
    let index = 0;
    return query.replace(/\$\d+/g, () => {
        const value = values[index];
        index++;
        return typeof value === 'string' ? `'${value}'` : value;
    });
}


module.exports = {
    getEmployees,
	getEmployeeById,
	getEmployeeAndRoleInformation,
	createEmployee,
	updateEmployee,
	deleteEmployeeById
};
