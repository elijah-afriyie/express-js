export const User = {
  async create(data) {
    // Placeholder: Replace with actual database logic (e.g., MongoDB, PostgreSQL)
    return { id: '1', ...data };
  },

  async findOne({ email }) {
    // Placeholder: Replace with actual database query
    return { id: '1', email, password: 'test123', username: 'testuser' };
  },
};
