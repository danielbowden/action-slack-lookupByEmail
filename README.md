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
  uses: danielbowden/action-slack-lookupByEmail@main
  with:
    email: 'daniel@email.com'
  env:
    SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

You can also dynamically pass in email from the output result of a previous step. eg.
```yaml
- name: Lookup Slack user
  id: slack-user
  uses: danielbowden/action-slack-lookupByEmail@main
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



## Development

Install the dependencies

```bash
npm install
```

Run tests

```bash
$ npm test

 PASS  ./index.test.js
  lookupUser
    ✓ should set an error if no token is provided (1 ms)
    ✓ should handle success query email using lookupByEmail API (2 ms)
    ✓ should handle fail query email using lookupByEmail API with unknown email (3 ms)

  Test Suites: 1 passed, 1 total
  Tests:       3 passed, 3 total
  Snapshots:   0 total
  Time:        0.268 s
  Ran all test suites.
```

## Package for distribution

Packaging the action will create a packaged action in the dist folder.

```bash
npm run prepare
```

## Create a release branch

Users shouldn't consume the action from master since that would be latest code and actions can break compatibility between major versions.

```bash
git checkout -b v1
git commit -a -m "v1 release"
```

```bash
git push origin v1
```


See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! :rocket:

## Author

Daniel Bowden

[github.com/danielbowden](https://github.com/danielbowden)

[twitter.com/danielgbowden](https://twitter.com/danielgbowden)