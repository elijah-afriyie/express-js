import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Welcome to the projects page');
});

app.get('/search', (req, res) => {
	const { product, price } = req.query;
	res.json({ product, price: Number(price) });
});

// post request
let users = [];
app.post('/user', (req, res) => {
	const { name, email } = req.body;
	if (!name || !email) {
		return res.status(400).json({ error: 'Please provide username and email' });
	}
	const newUser = { name, email };
	users.push(newUser);
	
	res.status(201).json({
		message: 'User created successfully.',
		user: { name, email }
	});
});

export default app;