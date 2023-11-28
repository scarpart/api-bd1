const { Pool } = require('pg');

const pool = new Pool({
	user: 'criciumenses',
	host: 'db',
	database: 'employeeManagement',
	password: 'CriciumaNaSerieA',
	port: 5432,	
})

module.exports = pool;
