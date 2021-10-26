// Import the .env
require("dotenv").config();
const API_KEY = process.env.API_KEY;

// Import libraries
const randomWords = require("random-words");
const express = require("express");

// Set constants
const app = express();
const port = 3000;

// GET: Get Random Number
// Query Params: apiKey
app.get("/randomWord", async function (req, res) {
  const { apiKey } = req.query;
  if (apiKey !== API_KEY) return res.status(500).send("Invalid API key");
  const randomWord = randomWords();
  res.status(200).send({ randomWord });
});

// Start Server
// app.listen(port, function () {
//   console.log("listening on http://localhost:" + port);
// });

// Include this line to use claudia
module.exports = app;
