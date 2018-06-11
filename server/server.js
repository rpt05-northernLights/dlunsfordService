var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');

require('mongoose').connect('mongodb://localhost/dlunsfordServiceDev');

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
