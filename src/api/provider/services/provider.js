'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::provider.provider', ({strapi}) => ({
  async getProviderAvatar(providers) {
    for (let provider of providers) {
      const prov = await strapi.query('api::provider.provider').findOne({where: {id: provider.id}});
      if (prov.avatar) {
        return prov.avatar;
      }
    }
  }
}));
