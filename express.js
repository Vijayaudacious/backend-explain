const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("mera dostt");
});

app.get("/home", function (req, res) {
  res.send("Home Page");
});

app.listen(5000);
