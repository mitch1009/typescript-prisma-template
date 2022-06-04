const dotenv = require('dotenv')
dotenv.config()
const env = process.env
module.exports = {
  apps: [{
    name: env.APP_NAME,
    script: './.public/main.js',
    watch: './.public/main.js',
    env: {
      port: env.PORT
    }
  }],

  deploy: {
    production: {
      user: env.SSH_USERNAME,
      host: env.SSH_HOSTMACHINE,
      ref: env.origin / master,
      repo: env.GIT_REPOSITORY,
      path: env.DESTINATION_PATH,
      'pre-deploy-local': '',
      'post-deploy': 'yarn install --ignore-engines && yarn build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
