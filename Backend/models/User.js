const mongoose = require("mongoose");
const { Schema } = mongoose;
// A database schema is the skeleton structure that represents the logical view of the entire database.
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    }


});
const User = mongoose.model('user',UserSchema);
module.exports = User;