import userRepository from '../repositories/userRepository.js';

const createUser = async (req, res) => {
	try {
		const user = req.body;
		await userRepository.createUser(user);

		res.status(201).send("User created successfully.");
	} catch (error) {
		res.status(500).send("Error creating user.");
	}
}

module.exports = {
	createUser,
}
