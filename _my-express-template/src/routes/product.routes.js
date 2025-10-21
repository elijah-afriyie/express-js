import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Product routes placeholder');
});

export default router;
