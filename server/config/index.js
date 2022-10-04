'use strict';

const { pluginConfigSchema } = require('./schema');

module.exports = {
	default() {
		return {
			redisOptions: {},
			IOServerOptions: {},
			contentTypes: {},
			events: [],
			publicRoleName: 'Public',
		};
	},
	async validator(config) {
		await pluginConfigSchema.validate(config);
	},
};
