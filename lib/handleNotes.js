const fs = require("fs");
const path = require("path");

function createNewNote(body, notes) {
   const note = body;
   notes.push(note);

   fs.writeFileSync(path.join(_dirname, "../db/db.json"), JSON.stringify({ notes }, null, 2));
   return note;
}

function deleteNoteById(id, notes) {
   const noteIndex = notes.findIndex((element) => element.id === id);
   notes.splice(noteIndex, 1);

   fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify({ notes }, null, 2));
}

module.exports = { createNewNote, deleteNoteById };
