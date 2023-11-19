const express = require('express');

const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
	res.send({ message: "Hello World!" });		
});

export function run() {
	app.listen(3000, () => {
		console.log('Server is running on port 3000.');
	})
}
