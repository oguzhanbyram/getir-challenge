module.exports = (req, res, next, schema) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  const valid = error == null;

  if (valid) {
    next();
  } else {
    const { details } = error;
    const message = details.map((i) => i.message).join(',');
    res.status(422).json({ code: 1, msg: message });
  }
};
