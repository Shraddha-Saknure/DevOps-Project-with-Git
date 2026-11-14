const request = require('supertest');
const { app } = require('../src/app');

describe('DevOps app', () => {
  test('GET / returns the service metadata', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      service: 'DevOps Project',
      status: 'ok'
    });
    expect(response.body.version).toBe(require('../package.json').version);
  });

  test('GET /health reports healthy status', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});
