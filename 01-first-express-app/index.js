import express from 'express';

const app = express();
const port = 3000;

app.use(() => {
	console.log('Express server started!');
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});