const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser")

const JWT_SECRET = "@all&mighty$push";
// ROUTE 1:create a User Using: POST "/api/auth/createuser". no login required
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
    try {
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
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      // res.json(user);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server Error");
    }
  }
);

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    // validating details and showing the message
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      // findOne is used to find a particular field such as email
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordcompare = async (password) => {
        const match = await bcrypt.compare(password, user.password);
        return match;
      };

      // const passwordCompare = await bcrypt.compare(password, user.password);
      // if(!passwordCompare){
      //   return res.status(400).json({error: "Please try to login with correct credentials"});
      // }

      const data = {
        user: {
          id: user.id,
        },
      };
      // a token is generated using the secret key making it near impossible to decode
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". login required

router.post("/getuser", fetchuser ,async (req, res) => {

  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password"); //find all the user details except the password thats why -password
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
