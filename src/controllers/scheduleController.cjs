const scheduleRepository = require('../repositories/scheduleRepository.cjs');

const getSchedules = async (req, res) => {
    try {
        let [schedules, query] = await scheduleRepository.getSchedules();
		res.status(200).send({ schedules, query });
    } catch (error) {
        res.status(500).send("Error getting user records from the server.");
    } 
};

const getScheduleById = async (req, res) => {
	try {
		const scheduleId = req.params.id;
		let [schedule, query] = await scheduleRepository.getScheduleById(scheduleId);
		res.status(200).send({ schedule, query })
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find an schedule with that id.");
	}
}

const createSchedule = async (req, res) => {
	try {
		const schedule = req.body;
		let [id, query] = await scheduleRepository.createSchedule(schedule);
		res.status(201).send({ id, query });
	} catch (error) {
		res.status(500).send("Error creating the schedule.");
	}
}

const updateSchedule = async (req, res) => {
    try {
        const updatedSchedule = req.body;
        const scheduleId = req.params.id; 

        let [id, query] = await scheduleRepository.updateSchedule(scheduleId, updatedSchedule);
        res.status(200).send({ id, query });
    } catch (error) {
		console.log("controller error: ", error);
        res.status(500).send("Error updating the schedule.");
    }
}

const deleteScheduleById = async (req, res) => {
	try {
		const scheduleId = req.params.id;
		const [id, query] = await scheduleRepository.deleteScheduleById(scheduleId);
		res.status(200).send({ id, query });
	} catch (error) {
		console.log("controller error: ", error);
		res.status(404).send("Could not find the schedule to delete.");
	}
}

module.exports = {
    getSchedules,
	createSchedule,
	updateSchedule,
	deleteScheduleById,
	getScheduleById,
}
