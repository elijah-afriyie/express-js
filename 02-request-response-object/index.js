import express from 'express';

const app = express();
const port = 3000;

// basic route
app.get('/', (req, res) => {
	res.send({
		name: 'my-app',
		version: '1.0.0',
		dependencies: {
			express: '^4.19.2'
		}
	});
});

// start server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});