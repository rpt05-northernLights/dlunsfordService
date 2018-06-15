var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');
//require('mongoose').connect('database:27017/dlunsfordServiceDev'); // used for docker compose

// require('mongoose').connect(
//   'mongodb://mongo:27017/dlunsfordServiceDocker',
//   { poolSize: 200 }
// );

require('mongoose').connect('mongodb://mongo/my_app');

// require('mongoose').connect(
//   'mongodb://mongo/dlunsfordServiceDocker',
//   { poolSize: 200 }
// );

//require('mongoose').connect('mongodb://dlunsfordServiceDev');

// if (config.seed) {
//   require('./util/seed');
// }

//require('./util/seed');

// setup middlware from a single point

require('./middleware/middleware')(app);

// APIs

app.use('/api', api);

//
module.exports = app;
