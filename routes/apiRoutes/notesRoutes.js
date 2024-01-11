// const fs = require("fs");
// const path = require("path");

const router = require("express").Router();
// const { renderNoteList } = require("../../public/assets/js/renderNotes.js");
const { notes } = require("../../db/db.json");
const uid = require("uid2"); //* This generates ID value, npm package
const fs = require("fs"); //* going to use writeFile
const path = require("path");

router.get("/notes", (req, res) => {
   // let results = notes;
   console.log(req.query);
   // if (req.query) {
   // results = renderNoteList(req.query, results);
   // }
   // res.json(results);
   res.json(notes);
});

//* Using uid package and req.body for incoming content
router.post("/notes", (req, res) => {
   req.body.id = uid(10);
   const newNote = req.body;

   fs.writeFileSync(path.join(__dirname, "../../db/db.json"), JSON.stringify({ notes }, null, 2));
   res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
   const id = req.params.id;
   const noteIndex = notes.findIndex((element) => element.id === id);
   notes.splice(noteIndex, 1);

   fs.writeFileSync(path.join(__dirname, "../../db/db.json"), JSON.stringify({ notes }, null, 2));
   res.json(notes);
});

module.exports = router;
