import { authService } from '../../src/services/auth.service.js';

describe('Auth Service', () => {
  it('should register a user', async () => {
    const user = await authService.register({
      username: 'testuser',
      email: 'test@example.com',
      password: 'test123',
    });
    expect(user).toHaveProperty('id');
    expect(user.email).toBe('test@example.com');
  });
});
