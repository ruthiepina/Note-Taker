// const fs = require("fs");
// const path = require("path");

const router = require("express").Router();
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
   let results = notes;
   console.log(req.query);
   res.json(results);
});

module.exports = router;
