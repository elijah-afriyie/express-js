import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import redditData from './data.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	const data = redditData[subreddit];
	if (!data) {
		return res.status(404).render('notfound', { subreddit });
	}
	res.render('subreddit', { ...data });
});

export default app;