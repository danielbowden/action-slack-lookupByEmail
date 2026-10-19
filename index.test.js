const { describe, it, beforeEach, afterEach, mock } = require('node:test');
const assert = require('node:assert/strict');
const lookupUser = require('./lookupUser');
const { WebClient } = require('@slack/web-api');

describe('lookupUser', () => {
  let core;
  let apiCall;
  const originalToken = process.env.SLACK_BOT_TOKEN;

  beforeEach(() => {
    core = Object.fromEntries(
      ['getInput', 'info', 'debug', 'setOutput', 'setFailed'].map(name => [name, mock.fn()])
    );
    core.getInput = mock.fn(() => 'daniel@example.com');
    apiCall = mock.method(WebClient.prototype, 'apiCall', async () => successResponse);
    process.env.SLACK_BOT_TOKEN = 'test-token';
  });

  afterEach(() => {
    mock.restoreAll();
    if (originalToken === undefined) {
      delete process.env.SLACK_BOT_TOKEN;
    } else {
      process.env.SLACK_BOT_TOKEN = originalToken;
    }
  });

  for (const token of [undefined, '']) {
    it(`fails when the token is ${token === undefined ? 'missing' : 'empty'}`, async () => {
      if (token === undefined) {
        delete process.env.SLACK_BOT_TOKEN;
      } else {
        process.env.SLACK_BOT_TOKEN = token;
      }
      await lookupUser(core);
      assert.deepEqual(core.setFailed.mock.calls[0].arguments, ['No Slack token provided in env vars']);
      assert.equal(apiCall.mock.callCount(), 0);
      assert.equal(core.setOutput.mock.callCount(), 0);
    });
  }

  it('looks up the supplied email and outputs the complete user object', async () => {
    await lookupUser(core);
    assert.deepEqual(core.getInput.mock.calls[0].arguments, ['email']);
    assert.deepEqual(apiCall.mock.calls[0].arguments, [
      'users.lookupByEmail', { email: 'daniel@example.com' }
    ]);
    assert.equal(apiCall.mock.calls[0].this.token, 'test-token');
    assert.equal(core.setFailed.mock.callCount(), 0);
    assert.deepEqual(core.setOutput.mock.calls[0].arguments, ['user', successResponse.user]);
  });

  it('fails on an unsuccessful lookup', async () => {
    apiCall.mock.mockImplementation(async () => ({ ok: false, error: 'users_not_found' }));
    await lookupUser(core);
    assert.deepEqual(core.setFailed.mock.calls[0].arguments, ['users_not_found']);
    assert.equal(core.setOutput.mock.callCount(), 0);
  });

  it('fails when the Slack request rejects', async () => {
    apiCall.mock.mockImplementation(async () => { throw new Error('invalid_auth'); });
    await lookupUser(core);
    assert.deepEqual(core.setFailed.mock.calls[0].arguments, ['invalid_auth']);
    assert.equal(core.setOutput.mock.callCount(), 0);
  });
});

const successResponse = {
  ok: true,
  user: {
    id: 'A00000001',
    team_id: 'T0000001',
    name: 'daniel',
    real_name: 'Daniel Bowden',
    tz: 'Australia/Sydney',
    tz_label: 'Australian Eastern Standard Time',
    tz_offset: 36000,
    profile: {
      real_name: 'Daniel Bowden',
      real_name_normalized: 'Daniel Bowden',
      display_name: 'daniel',
      display_name_normalized: 'daniel',
      fields: null,
      email: 'daniel@example.com'
    }
  }
};
