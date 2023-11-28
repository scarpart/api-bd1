const { Pool } = require('pg');

const pool = new Pool({
	user: 'criciumenses',
	host: 'localhost',
	database: 'employeeManagement',
	password: 'CriciumaNaSerieA',
	port: 7654,	
})

module.exports = pool;
