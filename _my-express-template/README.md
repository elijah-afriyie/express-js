My Express Template
A scalable Express.js API template with modular structure.
Setup

Install dependencies:
npm install

Create .env file based on .env.example.

Run in development:
npm run dev

Run tests:
npm test

Structure

src/: Application code
config/: Environment and database configurations
controllers/: HTTP request handlers
middleware/: Custom middleware
models/: Data models
routes/: API routes
services/: Business logic
utils/: Utility functions
validators/: Joi validation schemas

public/: Static files
tests/: Unit, integration, and E2E tests

Scripts

npm start: Run in production
npm run dev: Run with nodemon
npm test: Run Jest tests
