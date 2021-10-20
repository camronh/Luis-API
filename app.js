const express = require("express");
const app = express();
const port = 3000;
// start server

app.get("/randomNumber", async function (req, res) {
  console.log("request reciept")
  console.log(req.query)
  res.send("Its Alive")


});

app.listen(port, function () {
  console.log("listening on http://localhost:" + port);
});
