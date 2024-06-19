const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/error", function (req, res, next) {
  return next();
  // return next(new Error("Profile page ayega ab hum")); // this is showing BE console
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something want a wrong!"); // this is showing FE console
});

app.listen(4000);
