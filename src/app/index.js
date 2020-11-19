const mongooseLoader = require('./mongoose');
const expressLoader = require('./express');

module.exports = async (app) => {
  mongooseLoader();
  expressLoader(app);
};
