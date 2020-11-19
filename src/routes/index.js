const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs');
const handleErrors = require('../middleware/handleErrors');

const app = express.Router();

const initializeRoutes = () => {
  const controllerPath = path.join(__dirname, '/../controller');

  fs.readdirSync(controllerPath)
    .filter((file) => file.indexOf('.') !== 0 && file.slice(-3) === '.js')
    .map((file) => require(path.join(controllerPath, '/', file))(app));

  return app;
};

const initializeErrorRoutes = () => {
  app.use((req, res, next) => {
    next(createError(404));
  });

  app.use(handleErrors)

  return app;
};

module.exports = {
  initializeRoutes,
  initializeErrorRoutes
}