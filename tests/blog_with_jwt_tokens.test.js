const request = require('supertest');
const app = require('../server');

let token;

beforeAll(async () => {
  // Log in to get the token
  const res = await request(app).post('/api/auth/login').send({
    email: 'pass@example.com',
    password: 'updatedpassword'
  });

  token = res.body.token;
});

describe('Blog API', () => {
  it('should get all blogs', async () => {
    const res = await request(app)
      .get('/api/blogs')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeInstanceOf(Array);
  });
});

