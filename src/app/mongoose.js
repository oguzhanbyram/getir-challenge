const mongoose = require('mongoose');
const config = require('../config');

module.exports = async () => {
  try {
    const connection = await mongoose.connect(config.databaseURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    return connection.connection.db;
  } catch (error) {
    console.log('MongoDB connection error: ' + error.message);
    process.exit(1);
  }
};
