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
    profile: { email: 'daniel@example.com' }
  });
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
