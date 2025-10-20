import express from 'express';

const app = express();

// basic example
app.get('/users', async (req, res) => {
	const { role, limit } = req.query;
	res.json({ role, limit: Number(limit) || 8 });
});

// basic query parsing
app.get('/products', (req, res) => {
	const { category, price } = req.query;
	res.json({ category, price: Number(price) });
});

// array values
app.get('/search', (req, res) => {
	const { tags } = req.query;
	res.json({ tags });
});

// nested objects
app.get('/filter', (req, res) => {
	const query = req.query;
	const user = {
		name: query['user[name]'],
		age: query['user[age]'],
	};
});

export default app;