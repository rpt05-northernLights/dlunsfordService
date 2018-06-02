const _ = require('lodash');

var config = {
  dev: 'development',
  // TODO add remaining env
  port: process.env.PORT || 8080
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

var envConfig;
console.log(envConfig);
// require could error out if
// the file don't exist so lets try this statement
// and fallback to an empty object if it does error out
try {
  envConfig = require('./' + config.env);
  // just making sure the require actually
  // got something back :)
  envConfig = envConfig || {};
} catch (e) {
  envConfig = {};
}

// reason to use lodash
module.exports = _.merge(config, envConfig);
