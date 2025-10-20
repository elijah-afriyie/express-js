import app from './app.js';

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Express server running at http://localhost:${port}`);
});