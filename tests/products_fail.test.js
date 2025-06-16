const request = require('supertest');
const app = require('../server'); 

describe('Product API - Unauthorized Access', () => {
  it('should fail to fetch products without token', async () => {
    const res = await request(app)
      .get('/api/products'); // No token provided

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toMatch(/unauthorized/i);
  });
});
