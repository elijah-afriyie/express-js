import { User } from '../models/user.model.js';
import { log } from '../utils/logger.js';

export const authService = {
  async register({ username, email, password }) {
    // Placeholder: Add actual user creation logic (e.g., save to database)
    const user = await User.create({ username, email, password });
    log(`User registered: ${email}`);
    return user;
  },

  async login({ email, password }) {
    // Placeholder: Add actual login logic (e.g., verify credentials)
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }
    log(`User logged in: ${email}`);
    return user;
  },
};
