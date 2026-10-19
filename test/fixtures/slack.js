const assert = require('node:assert/strict');

globalThis.fetch = async (url, options) => {
  assert.equal(String(url), 'https://slack.com/api/users.lookupByEmail');
  assert.equal(options.method, 'POST');
  const authorization = new Headers(options.headers).get('authorization');
  assert.equal(authorization.split(' ')[1], 'test-token');
  assert.equal(new URLSearchParams(options.body).get('email'), 'daniel@example.com');
  if (process.env.SLACK_TEST_ERROR) {
    return Response.json({ ok: false, error: process.env.SLACK_TEST_ERROR });
  }
  return Response.json({
    ok: true,
    user: {
      id: 'A00000001',
      name: 'daniel',
      profile: { email: 'daniel@example.com' }
    }
  });
};
