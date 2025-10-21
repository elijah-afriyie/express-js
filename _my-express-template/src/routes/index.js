import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to My Express API!');
});

export default router;
