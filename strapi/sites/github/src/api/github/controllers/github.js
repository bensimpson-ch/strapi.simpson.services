'use strict';

/**
 * github controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::github.github');
