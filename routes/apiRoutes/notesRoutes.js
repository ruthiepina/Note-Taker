const router = require("express").Router();
const { notes } = require("../../db/db.json");
const uid = require("uid2"); //* This generates ID value, npm package

const fs = require("fs"); //* going to use writeFile
const path = require("path");

const { createNewNote, deleteNoteById } = require("../../lib/handleNotes.js");

//* GET
router.get("/notes", (req, res) => {
   res.json(notes);
});

//* POST
router.post("/notes", (req, res) => {
   req.body.id = uid(10);
   const note = createNewNote(req.body, notes);
   res.json(note);
});

//* DELETE
router.delete("/notes/:id", (req, res) => {
   const id = req.params.id;
   deleteNoteById(id, notes);
   res.json(notes);
});

module.exports = router;
