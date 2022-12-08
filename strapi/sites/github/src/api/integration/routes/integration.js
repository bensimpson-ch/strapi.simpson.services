'use strict';

/**
 * integration router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::integration.integration');
