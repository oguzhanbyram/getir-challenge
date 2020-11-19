const mongoose = require('mongoose');

const { Schema } = mongoose;

const RecordSchema = new Schema({
  key: {
    type: String,
  },
  value: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  counts: {
    type: Array,
  },
});

module.exports = mongoose.model('records', RecordSchema);
