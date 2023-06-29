const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = '@all&mighty$push'
// create a User Using: POST "/api/auth/createuser". no login required
router.post(
  "/createuser",
  [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "password should have min 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are error, return Bad Request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
    // check wheater the email exist already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ error: "sorry a user with same email already exists" });
    }
    // create a new user 
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });
    const data={
      user:{
        id: user.id
      }
    }
    const authToken = jwt.sign(data,JWT_SECRET);
    // res.json(user);
    res.json({authToken})

  }catch(error){
    console.error(error.message);
    res.status(500).send("some error occoured")
  }
  }
);

module.exports = router;
