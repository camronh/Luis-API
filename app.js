const express = require("express");
const app = express();
const port = 3000;
// start server

app.get("/randomNumber"), async function (req, res) {
  console.log("request reciept")
  const min = Number(req.query.min)
  const max = Number(req.query.max)
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(req.query)
  res.send(`${randomNumber}`)
});

// app.listen(port, function () {
//   console.log("listening on http://localhost:" + port);
// });
module.exports = app;