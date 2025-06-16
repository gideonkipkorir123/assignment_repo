const request = require('supertest');
const app = require('../server');

describe('Product API - Unauthorized Access', () => {
  it('should fail to fetch products without token', async () => {
    const res = await request(app).get('/api/products');

    expect(res.statusCode).toBe(401);
  });
});
