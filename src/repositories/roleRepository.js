const pool = require('../db/db.js')

const getRoles = async () => {
	const query = "SELECT * FROM roles";
    const { rows } = await pool.query(query); 
    return [rows, query];
};

const getRoleById = async (id) => {
	try {
		const query = "SELECT * FROM roles WHERE role_id = $1";
		const values = [id]; 

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { rows } = await pool.query(query, values);
		return [rows, displayQuery];
	} catch (error) {
		console.log("Error getting role by id: ", error);
		throw error;
	}
}

const createRole = async (role) => {
	try {
		let query = `INSERT INTO roles ( \
					role_name
				) VALUES ($1) \
					RETURNING role_id`;
		let values = [role.role_name];
		
		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { id } = await pool.query(query, values);
		return [id, displayQuery];
	} catch (error) {
		console.log("Could not create role: ", error);
		throw error
	}
}  

const updateRole = async (roleId, updatedRole) => {
	try {
		let query = "UPDATE roles SET ";
		let values = [];
		let valueCount = 0;

		for (const [key, value] of Object.entries(updatedRole)) {
			if (value != undefined) {
				valueCount++;
				query += `${key} = $${valueCount}, `;
				values.push(value);
			}
		}

		query = query.slice(0, -2);
		query += ` WHERE role_id = $${valueCount + 1}`;
		values.push(roleId);

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, values);
		return [roleId, displayQuery];
	} catch (error) {
		console.log("Could not update role:", error)
		throw error;
	}
}

const deleteRoleById = async (roleId) => {
	try {
		const query = "DELETE FROM roles WHERE role_id = $1";
		const values = [roleId];

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, values);

		return [roleId, displayQuery];
	} catch (error) {
		console.log("Could not delete role.");
		throw error;
	}
}

module.exports = {
    getRoles,
	getRoleById,
	createRole,
	updateRole,
	deleteRoleById
};
