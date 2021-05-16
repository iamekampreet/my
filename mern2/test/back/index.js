const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user", (req, res, next) => {
  res.send("<p> User:" + req.body.username + "</p>");
});

app.get("/", (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>'
  );
});

app.listen(5000, () => {});
