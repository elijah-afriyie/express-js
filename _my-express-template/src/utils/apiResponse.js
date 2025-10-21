export function successResponse(data, message = 'Success', status = 200) {
	return { status, success: true, message, data };
}

export function errorResponse(message, status = 500) {
	return { status, success: false, message };
}