const express = require('express');
const bootstrap = require('./app/index');
const config = require('./config');

const app = express();

const startServer = async (app) => {

  await bootstrap(app)

  app.listen(config.port, () => {
    console.log(`Server listening on port: ${config.port}`);
  }).on('error', (err) => {
    console.error(err);
    process.exit(1);
  });

  return app;
}

startServer(app);

module.exports = app;
