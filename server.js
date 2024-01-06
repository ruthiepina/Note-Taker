const express = require("express");
const { notes } = require("./db/db.json");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

//* (FROM EXAMPLES) express.static() method. The way it works is that we provide a file path to a location in our application
//* (in this case, the public folder) and instruct the server to make these files static resources.
//* This means that all of our front-end code can now be accessed without having a specific server endpoint created for it!
//* Every time we create a server that will serve a front end as well as JSON data, we'll always want to use this middleware.
app.use(express.static("public"));

//* Middleware, Parses incoming json data
app.use(express.json());

//* Middleware, Parses incoming string or data array
app.use(express.urlencoded({ extended: true }));

//* Send all requests that begin with /api to index.js in the routes folder
app.use("/api", apiRoutes);

//* Send all requests that begin with / to index.html in the routes folder
app.use("/", htmlRoutes);

app.listen(PORT, () => console.log(`API server on http://localhost:${PORT}`));

// app.get("/", (req, res) => res.send("Navigate to /send or /routes"));

// app.get("/send", (req, res) => res.sendFile(path.join(__dirname, "public/send.html")));

// app.get("/paths", (req, res) => res.sendFile(path.join(__dirname, "public/paths.html")));
