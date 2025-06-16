const request = require('supertest');
const app = require('../server'); // adjust the path if needed
const mongoose = require('mongoose');

let token;

beforeAll(async () => {
  // Login with existing user to get token
  const res = await request(app).post('/api/auth/login').send({
    email: 'pass@example.com',
    password: 'updatedpassword'
  });

  token = res.body.token;
});

afterAll(async () => {
  await mongoose.connection.close(); // optional: close DB connection after tests
});

describe('Product API', () => {
  it('should fetch all products', async () => {
    const res = await request(app)
      .get('/api/products')
      .set('Authorization', `Bearer ${token}`); // Send token

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeDefined();
  });
});
