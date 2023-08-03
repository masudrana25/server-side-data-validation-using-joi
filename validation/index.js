const Joi = require("joi");
exports.runValidation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      errors: {
        wrap: {
          label: "",
        }
      }
    });

    if (error) {
      const errorList = error.details.map((err) => err.message);
      res.status(201).send({
        success: false,
        message: 'invalid user',
        error: errorList,
      })
  };
  next();
}
}