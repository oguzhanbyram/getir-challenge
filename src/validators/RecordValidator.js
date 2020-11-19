const Joi = require('joi');
const validateControl = require('../utils/validateControl');

const messages = {
  getMessages: (fields) => (!Array.isArray(fields) || fields.length < 1 ? {} : {
    'date.base': 'Please enter date in a valid format (YYYY-MM-DD)',
    'date.format': 'Please enter date in a valid format (YYYY-MM-DD)',
    'date.greater': `"${fields[0]}" cannot be less than the "${fields[1]}"`,
    'number.positive': 'Please enter a number greater than 0',
    'number.greater': `"${fields[0]}" cannot be less than the "${fields[1]}"`,
  }),
};

const filterSchema = (req, res, next) => {
  const schema = Joi.object().keys({
    startDate: Joi
      .date()
      .iso()
      .required()
      .messages(messages.getMessages(['startDate'])),
    endDate: Joi
      .date()
      .iso()
      .greater(Joi.ref('startDate'))
      .required()
      .messages(messages.getMessages(['endDate', 'startDate'])),
    minCount: Joi
      .number()
      .integer()
      .positive()
      .required()
      .messages(messages.getMessages(['minCount'])),
    maxCount: Joi
      .number()
      .integer()
      .positive()
      .greater(Joi.ref('minCount'))
      .required()
      .messages(messages.getMessages(['maxCount', 'minCount'])),
  });
  validateControl(req, res, next, schema);
};

module.exports = {
  filterSchema,
};
