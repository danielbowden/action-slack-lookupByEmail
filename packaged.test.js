const { it } = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { mkdtempSync, readFileSync, rmSync, writeFileSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join } = require('node:path');

function runPackagedAction(environment = {}) {
  const directory = mkdtempSync(join(tmpdir(), 'slack-output-'));
  const output = join(directory, 'output');
  writeFileSync(output, '');
  try {
    const result = spawnSync(process.execPath, [
      '--import', join(__dirname, 'test/fixtures/slack.js'),
      join(__dirname, 'dist/index.js')
    ], {
      encoding: 'utf8',
      timeout: 10000,
      env: {
        ...process.env,
        INPUT_EMAIL: 'daniel@example.com',
        SLACK_BOT_TOKEN: 'test-token',
        SLACK_TEST_ERROR: '',
        GITHUB_OUTPUT: output,
        ...environment
      }
    });
    assert.ifError(result.error);
    assert.equal(result.stderr, '');
    assert.doesNotMatch(result.stdout, /::warning::|deprecated/i);
    return { ...result, output: readFileSync(output, 'utf8') };
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

it('the distributed action writes JSON to GITHUB_OUTPUT without warnings', () => {
  const result = runPackagedAction();
  assert.equal(result.status, 0, result.stderr + result.stdout);
  const [header, json, delimiter] = result.output.trim().split(/\r?\n/);
  assert.equal(header, `user<<${delimiter}`);
  assert.deepEqual(JSON.parse(json), {
    id: 'A00000001',
    name: 'daniel',
    real_name: 'Test User',
    profile: { email: 'daniel@example.com' }
  });
});

function outputUser(result) {
  const [header, json, delimiter] = result.output.trim().split(/\r?\n/);
  assert.equal(header, `user<<${delimiter}`);
  return JSON.parse(json);
}

it('passes plus-addressed emails to Slack unmangled', () => {
  const email = 'daniel+slack.test@example.com';
  const result = runPackagedAction({ INPUT_EMAIL: email, SLACK_TEST_EMAIL: email });
  assert.equal(result.status, 0, result.stderr + result.stdout);
  assert.equal(outputUser(result).profile.email, email);
});

it('trims whitespace around the email input', () => {
  const result = runPackagedAction({ INPUT_EMAIL: '  daniel@example.com \n' });
  assert.equal(result.status, 0, result.stderr + result.stdout);
  assert.equal(outputUser(result).profile.email, 'daniel@example.com');
});

it('fails without output when the email input is blank', () => {
  const result = runPackagedAction({
    INPUT_EMAIL: '', SLACK_TEST_EMAIL: '', SLACK_TEST_ERROR: 'invalid_arguments'
  });
  assert.equal(result.status, 1);
  assert.ok(result.stdout.includes('::error::An API error occurred: invalid_arguments'));
  assert.equal(result.output, '');
});

it('round-trips unicode profile fields so fromJSON consumers see them intact', () => {
  const realName = 'Zoë Nguyễn 山田太郎 🚀';
  const result = runPackagedAction({ SLACK_TEST_REAL_NAME: realName });
  assert.equal(result.status, 0, result.stderr + result.stdout);
  assert.equal(outputUser(result).real_name, realName);
});

it('writes a large profile to GITHUB_OUTPUT as a single parseable value', () => {
  const result = runPackagedAction({ SLACK_TEST_PROFILE_PADDING: String(500 * 1024) });
  assert.equal(result.status, 0, result.stderr + result.stdout);
  assert.equal(outputUser(result).profile.title.length, 500 * 1024);
});

it('does not echo the token in logs or output', () => {
  const result = runPackagedAction();
  assert.ok(!result.stdout.includes('test-token'));
  assert.ok(!result.output.includes('test-token'));
});

for (const token of [undefined, '']) {
  it(`the distributed action fails for a ${token === undefined ? 'missing' : 'blank'} token`, () => {
    const result = runPackagedAction({ SLACK_BOT_TOKEN: token });
    assert.equal(result.status, 1);
    assert.match(result.stdout, /::error::No Slack token provided in env vars/);
    assert.equal(result.output, '');
  });
}

for (const error of ['users_not_found', 'invalid_auth']) {
  it(`the distributed action preserves Slack SDK failure behavior for ${error}`, () => {
    const result = runPackagedAction({ SLACK_TEST_ERROR: error });
    assert.equal(result.status, 1);
    assert.ok(result.stdout.includes(`::error::An API error occurred: ${error}`));
    assert.equal(result.output, '');
  });
}
