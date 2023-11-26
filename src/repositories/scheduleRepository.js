const pool = require('../db/db.js')

const getSchedules = async () => {
	const query = "SELECT * FROM schedules";
    const { rows } = await pool.query(query); 
    return [rows, query];
};

const getScheduleById = async (id) => {
	try {
		const query = "SELECT * FROM schedules WHERE schedule_id = $1";
		const values = [id]; 

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { rows } = await pool.query(query, values);
		return [rows, displayQuery];
	} catch (error) {
		console.log("Error getting schedule by id: ", error);
		throw error;
	}
}

const createSchedule = async (schedule) => {
	try {
		let query = `INSERT INTO schedules ( \
					employee_id,
					start_date,
					end_date,
					start_time,
					end_time,
				) VALUES ($1, $2, $3, $4, $5) \
					RETURNING schedule_id`;
		let values = [
			schedule.employee_id,
			schedule.start_date,
			schedule.end_date,
			schedule.start_time,
			schedule.end_time,
		];
		
		const displayQuery = repoUtils.createDisplayQuery(query, values);
		const { id } = await pool.query(query, values);
		return [id, displayQuery];
	} catch (error) {
		console.log("Could not create schedule: ", error);
		throw error
	}
}  

const updateSchedule = async (scheduleId, updatedSchedule) => {
	try {
		let query = "UPDATE schedules SET ";
		let values = [];
		let valueCount = 0;

		for (const [key, value] of Object.entries(updatedSchedule)) {
			if (value != undefined) {
				valueCount++;
				query += `${key} = $${valueCount}, `;
				values.push(value);
			}
		}

		query = query.slice(0, -2);
		query += ` WHERE schedule_id = $${valueCount + 1}`;
		values.push(scheduleId);

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, values);
		return [scheduleId, displayQuery];
	} catch (error) {
		console.log("Could not update schedule:", error)
		throw error;
	}
}

const deleteScheduleById = async (scheduleId) => {
	try {
		const query = "DELETE FROM schedules WHERE schedule_id = $1";
		const values = [scheduleId];

		const displayQuery = repoUtils.createDisplayQuery(query, values);
		await pool.query(query, values);

		return [scheduleId, displayQuery];
	} catch (error) {
		console.log("Could not delete schedule.");
		throw error;
	}
}

module.exports = {
    getSchedules,
	getScheduleById,
	createSchedule,
	updateSchedule,
	deleteScheduleById
};
