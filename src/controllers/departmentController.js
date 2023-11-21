const departmentRepository = require('../repositories/departmentRepository.js');

const getDepartments = async (req, res) => {
    try {
        const departments = await departmentRepository.getEmployees();
        res.status(200).send(departments);
    } catch (error) {
        res.status(500).send("Error getting user records from the server.");
    } 
};

const getSalaryExpensesByDepartment = async (req, res) => {
	try {
		const totalExpensesByDeparments = await departmentRepository.getSalaryExpensesByDepartment(); 
		res.status(200).send(totalExpensesByDeparments);
	} catch (error) {
		res.status(500).send("Could not get the total expenditure by departments.");
	}
}

//const createEmployee = async (req, res) => {
//    try {
//        const user = req.body;
//        await userRepository.createUser(user);
//
//        res.status(201).send("User created successfully.");
//    } catch (error) {
//        res.status(500).send("Error creating user.");
//    }
//}

module.exports = {
    getDepartments,
	getSalaryExpensesByDepartment,
}
