const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  // Custom FindOne API by URL Visual Interaktif
  async findOne(ctx) {
    const { url } = ctx.params;

    const entity = await strapi.services.visualinteraktif.findOne({ url });
    return sanitizeEntity(entity, { model: strapi.models.visualinteraktif });
  },

  // Custom Update API by URL Visual Interaktif
  async update(ctx) {
    const { url } = ctx.params;

    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.visualinteraktif.update({ url }, data, {
        files,
      });
    } else {
      entity = await strapi.services.visualinteraktif.update({ url }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.visualinteraktif });
  },

  // Custom Delete API by URL Visual Interaktif
  async delete(ctx) {
    const { url } = ctx.params;

    const entity = await strapi.services.visualinteraktif.delete({ url });
    return sanitizeEntity(entity, { model: strapi.models.visualinteraktif });
  },
};