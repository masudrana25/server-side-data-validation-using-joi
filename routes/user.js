const express = require('express');
const userRouter = express.Router();
const { userRegistration, userLogin } = require('../controllers/user');
const  {runValidation}  = require('../validation');
const { schemas } = require('../validation/schema');



//register page
userRouter.post("/register", runValidation(schemas.RegistrationSchema), userRegistration);


//login page
userRouter.post("/login",runValidation(schemas.LoginSchema), userLogin);


module.exports = userRouter;