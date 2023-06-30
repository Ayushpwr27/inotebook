const mongoose = require("mongoose");
const { Schema } = mongoose;
//A database schema is the skeleton structure that represents the logical view of the entire database.
const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    }


});

module.exports = mongoose.model('notes',NotesSchema);