const assert = require('node:assert/strict');

// Test double for the Slack Web API, loaded with `node --import`.
//   SLACK_TEST_EMAIL            email the request must carry (default daniel@example.com)
//   SLACK_TEST_ERROR            respond with { ok: false, error } instead of a user
//   SLACK_TEST_REAL_NAME        override the returned real_name
//   SLACK_TEST_PROFILE_PADDING  number of extra characters to add to the profile
const expectedEmail = process.env.SLACK_TEST_EMAIL ?? 'daniel@example.com';

globalThis.fetch = async (url, options) => {
  assert.equal(String(url), 'https://slack.com/api/users.lookupByEmail');
  assert.equal(options.method, 'POST');
  const authorization = new Headers(options.headers).get('authorization');
  assert.equal(authorization.split(' ')[1], 'test-token');
  assert.equal(new URLSearchParams(options.body).get('email'), expectedEmail);
  if (process.env.SLACK_TEST_ERROR) {
    return Response.json({ ok: false, error: process.env.SLACK_TEST_ERROR });
  }
  const padding = Number(process.env.SLACK_TEST_PROFILE_PADDING || 0);
  return Response.json({
    ok: true,
    user: {
      id: 'A00000001',
      name: 'daniel',
      real_name: process.env.SLACK_TEST_REAL_NAME ?? 'Test User',
      profile: {
        email: expectedEmail,
        ...(padding && { title: 'x'.repeat(padding) })
      }
    }
  });
};
