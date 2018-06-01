// keep all the middleware here
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
var override = require('method-override');

module.exports = () => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: tre }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(override());
};
