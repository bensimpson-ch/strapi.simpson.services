'use strict';

/**
 * github service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::github.github');
