import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { validate } from '../middleware/validation.middleware.js';
import { loginSchema, registerSchema } from '../validators/auth.validator.js';

const router = express.Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);

export default router;
