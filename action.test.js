const { it } = require('node:test');
const assert = require('node:assert/strict');
const { existsSync, readFileSync } = require('node:fs');
const { join } = require('node:path');

// Consumers depend on this interface; changing it is a breaking (major) change.
// Parsed with regexes to avoid a YAML dependency for a small, flat file.
const manifest = readFileSync(join(__dirname, 'action.yml'), 'utf8');

it('keeps the required `email` input', () => {
  assert.match(manifest, /^inputs:\n {2}email:\n {4}required: true$/m);
});

it('keeps the `user` output', () => {
  assert.match(manifest, /^outputs:\n {2}user:\n/m);
});

it('runs the committed bundle on node24', () => {
  assert.match(manifest, /^ {2}using: 'node24'$/m);
  const main = manifest.match(/^ {2}main: '(.+)'$/m)[1];
  assert.ok(existsSync(join(__dirname, main)), `${main} must be committed`);
});

it('does not declare inputs or outputs consumers are not told about', () => {
  const inputs = manifest.match(/^ {2}(\w+):\n {4}(?:required|description)/gm) ?? [];
  assert.deepEqual(
    inputs.map(match => match.trim().split(':')[0]).sort(),
    ['email', 'user']
  );
});
