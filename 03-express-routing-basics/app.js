import express from 'express';

const app = express();

app.use(express.json()); // allows json parsing

// ========== ROUTES ==========

// basic route - home page
app.get('/', (req, res) => {
	res.send('Welcome to my Express app!');
});

// about route - simple text response
app.get('/about', (req, res) => {
	res.send('This is a simple Express application created for learning.');
});

// json route - returning data
app.get('/api/info', (req, res) => {
	res.json({
		name: 'My Express App',
		version: '1.0.0',
		message: 'Learning Express is fun!'
	});
});

// route with route parameter
app.get('/users/:username', (req, res) => {
	const username = req.params.username;
	res.send(`Welcome to my Express App, ${username}`);
});

// route with query parameter
app.get('/search', (req, res) => {
	const term = req.query.q;
	if (!term) {
		return res.send('Please provide search query using ?q=something.');
	}
	res.send(`You searched for: ${term}`);
});

// post route - handle simple data submission
app.post('/contact', (req, res) => {
	const { name, message } = req.body;
	if (!name || !message) {
		return res.status(400).json({ error: 'Please include name and message.' });
	}
	res.json({ success: true, response: `Thanks, ${name}! We received your message.` });
});

// ========== 404 HANDLER ==========
// This catches any route that doesn't match the ones above
app.use((req, res) => {
	res.status(404).json({
		error: 'Not Found',
		message: 'The requested resource could not be found on this server.',
	});
});

// ========== GLOBAL ERROR HANDLER ==========
// This catches unexpected runtime errors
app.use((err, req, res, next) => {
	console.error('🔥 Server Error:', err.stack);
	res.status(500).json({
		error: 'Internal Server Error',
		message: 'Something went wrong on the server. Please try again later.',
	});
});

export default app;