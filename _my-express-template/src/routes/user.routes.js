import express from 'express';
import { getUser } from '../controllers/user.controller.js';
import { validate } from '../middleware/validation.middleware.js';
import { userIdSchema } from '../validators/user.validator.js';

const router = express.Router();

router.get('/:id', validate(userIdSchema), getUser);

export default router;
