const _ = require('lodash');

var config = {
  dev: 'development',
  // TODO add remaining env
  port: process.env.PORT || 3000
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

var envConfig;

try {
  envCongif = require(`./${config.env}`);
  envConfig = envConfig || {};
} catch (err) {
  envConfig = {};
}

// reason to use lodash
module.exports = _.merge(config, envConfig);
