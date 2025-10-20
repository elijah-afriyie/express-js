import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	res.render('subreddit', { subreddit });
});

app.get('/random', (req, res) => {
	const randomNum = Math.floor(Math.random() * 10) + 1;
	// two ways of achieving the same result
	// method 1
	const isEven = randomNum % 2 === 0;
	// method 2
	const message = randomNum % 2 === 0 ? 'Is even number' : 'Is odd number';
	res.render('random', { randomNum, isEven, message });
});

app.get('/cats', (req, res) => {
	const cats = [
		'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
	];
	res.render('cats', { cats });
});

export default app;