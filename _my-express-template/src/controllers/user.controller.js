// src/controllers/user.controller.js
import { asyncHandler } from '../utils/asyncHandler.js';

// Mock data (replace with database queries in a real app)
const users = [
	{ id: 1, name: 'John Doe', email: 'john@example.com' },
	{ id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Get all users
export const getUsers = asyncHandler(async (req, res) => {
	res.status(200).json({
		success: true,
		data: users,
	});
});

// Get a single user by ID
export const getUser = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const user = users.find((u) => u.id === parseInt(id));
	if (!user) {
		res.status(404);
		throw new Error('User not found');
	}
	res.status(200).json({
		success: true,
		data: user,
	});
});

// Create a new user
export const createUser = asyncHandler(async (req, res) => {
	const { name, email } = req.body;
	if (!name || !email) {
		res.status(400);
		throw new Error('Name and email are required');
	}
	const newUser = { id: Date.now(), name, email };
	users.push(newUser);
	res.status(201).json({
		success: true,
		data: newUser,
	});
});

// Update a user
export const updateUser = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const { name, email } = req.body;
	if (!name || !email) {
		res.status(400);
		throw new Error('Name and email are required');
	}
	const userIndex = users.findIndex((u) => u.id === parseInt(id));
	if (userIndex === -1) {
		res.status(404);
		throw new Error('User not found');
	}
	users[userIndex] = { id: parseInt(id), name, email };
	res.status(200).json({
		success: true,
		data: users[userIndex],
	});
});

// Delete a user
export const deleteUser = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const userIndex = users.findIndex((u) => u.id === parseInt(id));
	if (userIndex === -1) {
		res.status(404);
		throw new Error('User not found');
	}
	users.splice(userIndex, 1);
	res.status(200).json({
		success: true,
		message: `User ${id} deleted`,
	});
});