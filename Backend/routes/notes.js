const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
var fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Notes using: GET "/api/note/fetchallnotes". login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {

  try {
  const note = await Note.find({ user: req.user.id });
  res.json(note); 
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error");
  }
});

// ROUTE 2:Add a new note: post "/api/note/addnote". login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a Valid title").isLength({ min: 3 }),
    body("description", "description should have min 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      
    
    const {title, description, tag} = req.body;
    //If there is an errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const note = new Note({
      title, description, tag, user:req.user.id
    })
    const savedNotes = await note.save()
    res.json(savedNotes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error");
  }
  }
);


module.exports = router;
