# GitHub Action - Lookup Slack user by email

<p align="center">
  <a href="https://github.com/danielbowden/action-slack-lookupByEmail/actions"><img alt="action slack lookupByEmail status" src="https://github.com/danielbowden/action-slack-lookupByEmail/workflows/units-test/badge.svg"></a>
</p>

This action can be used to find a Slack user by their email address. In the event of a match, it will return a [User hash object](https://api.slack.com/types/user) for the registered Slack user.

The profile hash contains as much information as the user has supplied in the default profile fields: `display_name`, `avatar`, `real_name`, etc. 

If you're using this action to lookup a user to send a direct message to using the `chat.postMessage` API or Slack's [Send Action](https://github.com/slackapi/slack-github-action), the `id` field is most useful.

## Authentication

This action requires the `users:read.email` scope on either a Bot Token or User Token to make authenticated calls to the Slack API.

There is more information on Slack's lookupByEmail API here: https://api.slack.com/methods/users.lookupByEmail 

## Usage

`email` is the only required action input parameter.

Like described in Slack's [Send Action](https://github.com/slackapi/slack-github-action#setup-1), the authentication token should be added as a secret in your repo settings named SLACK_BOT_TOKEN. It is passed in using `env`.

```yaml
- name: Lookup Slack user
  id: slack-user
  uses: danielbowden/action-slack-lookupByEmail@v2
  with:
    email: 'daniel@email.com'
  env:
    SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

You can also dynamically pass in email from the output result of a previous step. eg.
```yaml
- name: Lookup Slack user
  id: slack-user
  uses: danielbowden/action-slack-lookupByEmail@v2
  with:
    email: ${{ steps.commit-author.outputs.result }}
```

You can access the user hash object result in follow up steps.
```yaml
steps.slack-user.outputs.user
```
or specific fields
```yaml
${{ fromJSON(steps.slack-user.outputs.user).id }}
```



## Node 24 / v2 migration and release notes

Version 2 moves the action runtime directly to Node.js 24 and refreshes the Slack
SDK, Actions toolkit and build tools. The `email` input, `SLACK_BOT_TOKEN`
environment variable, JSON `user` output (including `fromJSON(...).id`), required
Slack scope and failure behavior are unchanged.

**Proxy migration:** Slack SDK 8 uses native Fetch instead of Axios. Workflows
that rely on `HTTP_PROXY`, `HTTPS_PROXY` or `NO_PROXY` must also set
`NODE_USE_ENV_PROXY: '1'` in this action step's `env` so Node 24 uses those
settings. Only use trusted, authorized proxies. Private CA certificates can
still be supplied with `NODE_EXTRA_CA_CERTS`. See the
[Slack SDK 8 migration notes](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/CHANGELOG.md#800)
and [Node proxy configuration](https://nodejs.org/docs/latest-v24.x/api/cli.html#node_use_env_proxy1).

**Breaking requirement:** self-hosted runners must be v2.327.1 or newer and use
an OS supported by Node 24. On GNU/Linux x64/arm64 this includes glibc 2.28+,
libstdc++ providing `GLIBCXX_3.4.25`, and a supported kernel baseline of 4.18+.
See the [Node 24 platform requirements](https://github.com/nodejs/node/blob/v24.x/BUILDING.md#platform-list)
for other platforms and container requirements. Current GitHub-hosted runners
already support this runtime.

After v2 is published, change the action reference from
`danielbowden/action-slack-lookupByEmail@v1` to
`danielbowden/action-slack-lookupByEmail@v2`. Consumers pinned to an immutable
release or commit SHA must select the new release or its SHA. No changes to
inputs, secrets or output expressions are required. Adding `actions/setup-node`
to a consumer workflow does not change this action's runtime: `action.yml`
selects it.

The inspected published `v1` tag and this checkout originally both declared
`node16`, despite runner warnings referring to an enforced Node 20 runtime.
Their dependency manifests and bundled JavaScript differed. Updating source on
the default branch alone does not update `v1` or any other consumer reference.

Release policy: publish a versioned v2 release containing `action.yml` and the
complete rebuilt `dist/` directory, then create/update the `v2` major reference.
Do not move `v1` to this release: older-runner compatibility is intentionally
preserved there, but its runtime warnings are not fixed. These changes prepare
v2; the release and reference update are separate maintainer actions.

GitHub Enterprise Server users must verify Node 24 support for their server and
runner versions. This action does not require artifact upload or CodeQL, but
the repository's own workflows now use checkout v7, setup-node v7,
upload-artifact v7 and CodeQL v4. Upload-artifact v4+ is not supported on GHES;
use its documented GHES-compatible release if porting these workflows.
CodeQL versions must also match the server's compatibility requirements.
Checkout requires runner v2.329.0+ specifically for authenticated Git commands
from Docker container actions; that is not an additional requirement of this
Slack lookup action.

## Development

Use Node.js 24 or newer. Tests use Node's built-in test runner rather than
Jest/Sinon, avoiding their deprecated and vulnerable transitive dependencies.
ESLint uses flat configuration.

Install the dependencies

```bash
npm ci
```

Run tests

```bash
npm test
```

Run `npm run all` for lint, packaging and tests, and `npm audit` / `npm outdated`
to check dependencies. Packaged-action tests mock Slack transport, verify JSON
written to `GITHUB_OUTPUT`, and reject runtime warnings without needing secrets.
CI also invokes the local action and verifies its output using `fromJSON`.
Warning-free checks apply to this action and its workflows, not unrelated
actions in consumer workflows.

## Package for distribution

Packaging the action will create a packaged action in the dist folder.

```bash
npm run prepare
```

## Create a release

Users shouldn't consume the action from master since that would be latest code and actions can break compatibility between major versions.

```bash
npm ci
npm run all
npm audit
```

```bash
git status --porcelain --untracked-files=all -- dist/
```

Ensure the complete generated distribution is committed and reproducible, then
publish a versioned v2 release and its `v2` major reference as described above.

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! :rocket:

## Author

Daniel Bowden

[github.com/danielbowden](https://github.com/danielbowden)

[twitter.com/danielgbowden](https://twitter.com/danielgbowden)