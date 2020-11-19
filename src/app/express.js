const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const cors = require('cors');
const { initializeRoutes, initializeErrorRoutes } = require('../routes');
const config = require('../config');

module.exports = async (app) => {
  app.use(cors());
  app.use(methodOverride());

  app.use(bodyParser.json({ extended: true }));
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(config.api.prefix, initializeRoutes());

  app.use(initializeErrorRoutes());
};
