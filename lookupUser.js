const { WebClient } = require('@slack/web-api');

module.exports = async function lookupUser(core) {
    try {
      const email = core.getInput('email');
      core.info(`Lookup slack user by email: ${email}`);
  
      // Read token from the environment variables
      const token = process.env.SLACK_BOT_TOKEN;
  
      if (token === undefined || token.length === 0) {
        throw new Error('No slack token provided in env vars');
      }
  
      const slackClient = new WebClient(token);
      const result = await slackClient.users.lookupByEmail({
        email: email
      });

      if (!result.ok) {
        throw new Error(result.error);
      }
  
      core.info(`Successfully found user ${result.user.name}`);
      core.debug(`Slack user: ${result.user}`);
      core.setOutput('user', result.user);
    } catch (error) {
      core.setFailed(error.message);
    }
  };