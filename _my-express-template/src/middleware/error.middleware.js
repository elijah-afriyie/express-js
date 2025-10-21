import { errorResponse } from '../utils/apiResponse.js';

export default function errorMiddleware(err, req, res, next) {
	console.error(err.stack);
	const status = err.status || 500;
	const message = err.message || 'Internal Server Error';
	res.status(status).json(errorResponse(message, status));
}