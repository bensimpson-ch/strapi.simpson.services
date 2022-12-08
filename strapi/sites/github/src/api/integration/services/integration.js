'use strict';

/**
 * integration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::integration.integration');
