const Joi = require("joi");

const userRegistration = (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      dob: req.body.dob,
      age: req.body.age,
      languages : req.body.languages,
    };

    res.status(201).send({
      success: true,
      message: 'User created successfully',
      newUser
    });
  } catch (error) {
    return res.send({
      message: error,
    })
  }
};

const userLogin = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: 'User created logged in',
    });
  } catch (error) {
    return res.send({
      message: error,
    })
  }
};

module.exports = {userRegistration, userLogin}