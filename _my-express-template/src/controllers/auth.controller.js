import { catchAsync } from '../utils/catchAsync.js';
import { successResponse } from '../utils/apiResponse.js';
import { authService } from '../services/auth.service.js';

export const register = catchAsync(async (req, res) => {
  const user = await authService.register(req.body);
  res
    .status(201)
    .json(successResponse(user, 'User registered successfully', 201));
});

export const login = catchAsync(async (req, res) => {
  const user = await authService.login(req.body);
  res.json(successResponse(user, 'Login successful'));
});
