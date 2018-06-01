var express = require('express');
var app = express();
//var api = require('./api/api');
var config = require('./config/config');

require('./middleware/');

//app.use('/api', api);

// export so app can be tested

module.exports = app;
