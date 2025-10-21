import { errorResponse } from '../utils/apiResponse.js';

export function validate(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const message = error.details.map((d) => d.message).join(', ');
      return res.status(400).json(errorResponse(message, 400));
    }
    next();
  };
}
