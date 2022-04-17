const lookupUser = require('./lookupUser')
const core = require('@actions/core');
const sinon = require('sinon');
const { WebClient } = require('@slack/web-api');

jest.mock('@slack/web-api', () => {
  const mockSlackClient = {
    users: {
      lookupByEmail: jest.fn()
    }
  };
  return { WebClient: jest.fn(() => mockSlackClient) };
});

describe('lookupUser', () => {

  const stubCore = sinon.stub(core);
  const slackClient = WebClient();
  beforeEach(() => {
    sinon.reset();
    jest.clearAllMocks();
  });

  it('should set an error if no token is provided', async () => {
    delete process.env.SLACK_BOT_TOKEN;
    await lookupUser(stubCore);
    expect(stubCore.setFailed.lastCall.firstArg).toBe('No Slack token provided in env vars');
  });

  it('should handle success query email using lookupByEmail API', async () => {
    slackClient.users.lookupByEmail.mockImplementation(() => successResponse)
    process.env.SLACK_BOT_TOKEN = 'xoxb-xxxxx';
    stubCore.getInput.withArgs('email').returns('daniel@email.com');
    await lookupUser(stubCore);

    expect(stubCore.setFailed.called).toBe(false);
    expect(stubCore.setOutput.lastCall.firstArg).toBe('user');
    expect(stubCore.setOutput.lastCall.lastArg.name).toBe('daniel');
    expect(stubCore.setOutput.lastCall.lastArg.real_name).toBe('Daniel Bowden');
    expect(stubCore.setOutput.lastCall.lastArg.profile.email).toBe('daniel@email.com');
  });

  it('should handle fail query email using lookupByEmail API with unknown email', async () => {
    slackClient.users.lookupByEmail.mockImplementation(() => errorResponse)
    process.env.SLACK_BOT_TOKEN = 'xoxb-xxxxx';
    stubCore.getInput.withArgs('email').returns('unknown@email.com');
    await lookupUser(stubCore);

    expect(stubCore.setFailed.lastCall.firstArg).toBe('users_not_found');
  });
});

const successResponse = {
  "ok": true,
  "user": {
      "id": "A00000001",
      "team_id": "T0000001",
      "name": "daniel",
      "real_name": "Daniel Bowden",
      "tz": "Australia/Sydney",
      "tz_label": "Australian Eastern Standard Time",
      "tz_offset": 36000,
      "profile": {
          "real_name": "Daniel Bowden",
          "real_name_normalized": "Daniel Bowden",
          "display_name": "daniel",
          "display_name_normalized": "daniel",
          "fields": null,
          "email": "daniel@email.com"
      }
  }
};

const errorResponse = {
  "ok": false,
  "error": "users_not_found"
};