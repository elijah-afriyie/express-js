import express from 'express';

const app = express();

// basic example
app.get('/users/:id', async (req, res) => {
	const userId = req.params.id;
	res.send(`User ID: ${userId}`);
});

// single parameter
app.get('/books/:isbn', (req, res) => {
	const isbn = req.params.isbn;
	res.send(`Book ISBN: ${isbn}`);
});

// multiple parameters
app.get('/users/:userId/orders/:orderId', (req, res) => {
	const { userId, orderId } = req.params;
	res.send(`User ${userId}, Order ${orderId}`);
});

// optional parameters
app.get('files/:fileName', (req, res) => {
	const fileName = req.params.fileName;
	res.send(`File ${fileName}`);
});

app.get('/files', (req, res) => {
	res.send('File: default.txt');
});

export default app;