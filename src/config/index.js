const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

module.exports = {
  port: parseInt(process.env.PORT, 10),
  databaseURL: process.env.MONGODB_URI,
  api: {
    prefix: '/api',
  },
};