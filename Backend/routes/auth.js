const express = require('express');
const router = express.Router();
const User = require('../models/User')
// const { query, validationResult } = require('express-validator');

// create a User Using: POST "/api/auth". Doesn't require Auth
router.post('/',(req,res)=>{
  console.log(req.body);
  const user = User(req.body);
  user.save();
  res.send(req.body);
}
// [
    // query('name'),
    // query('email'),
    // query('password'),
// ],(req,res)=>{
  // res.send({`Error Invalid, ${req.query.email}`});
// }
)

module.exports = router