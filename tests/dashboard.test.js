const request = require('supertest');
const app = require('../server');

describe('Dashboard API', () => {
  it('should return dashboard metrics', async () => {
    const res = await request(app).get('/api/dashboard');
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toHaveProperty('totalUsers');
    expect(res.body.data).toHaveProperty('totalProducts');
    expect(res.body.data).toHaveProperty('totalContributors');
  });
});
