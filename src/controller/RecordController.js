const express = require('express');
const RecordService = require('../services/RecordService');
const { filterSchema } = require('../validators/RecordValidator');

const route = express.Router();

module.exports = (app) => {
  app.use('/records', route);

  route.post('/filter', filterSchema, async (req, res) => {
    const records = await RecordService.filter(req.body);

    return res
      .json({ code: 0, msg: 'success', records })
      .status(200)
      .end();
  });

};
