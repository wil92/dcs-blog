'use strict';

const {createCoreService} = require('@strapi/strapi').factories;

const axios = require('axios');

module.exports = createCoreService('api::provider.github', ({strapi}) => ({
  async user(token) {
    const req = await axios.get('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${token}`
      }
    });
    return {
      username: req.data.login,
      avatar: req.data.avatar_url,
      url: req.data.url,
      name: req.data.name,
      email: req.data.email
    };
  },
  async auth(code) {
    const req = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: strapi.config.custom.githubClientId,
      client_secret: strapi.config.custom.githubClientSecret,
      code,
    }, {
      headers: {
        'Accept': 'application/json'
      }
    });
    return req.data;
  }
}));
