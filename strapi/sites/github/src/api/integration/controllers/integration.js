'use strict';

/**
 * integration controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::integration.integration');
