const pool = require('../db/db.js')

const getEmployees = async () => {
    const { rows } = await pool.query("SELECT * FROM employees"); 
    return rows;
};

//const getUserById = async (id) => {
//    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
//    return rows[0];
//}
//
//const createUser = async (user) => {
//    const { name, email } = user;
//    const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id',
//        [name, email]);
//    return result.rows[0].id;
//}

module.exports = {
    getEmployees,
};
