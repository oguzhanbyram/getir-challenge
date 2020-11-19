const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

dotenv.config();

module.exports = {
  port: parseInt(process.env.PORT, 10),
  databaseURL: process.env.MONGODB_URI,
  api: {
    prefix: '/api',
  },
};
