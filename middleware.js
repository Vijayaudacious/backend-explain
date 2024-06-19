const express = require("express");
const app = express();

// -----------------------------------------------------------

//============== First way middleware write way ==============

// app.use(function (req, res, next) {
//   console.log("middleware chala");
//   next();
// });

// app.use(function (req, res, next) {
//   console.log("middleware chala ekj or bar  ");
//   next();
// });
// -----------------------------------------------------------

app.get("/", function (req, res) {
  res.send("Home page par aa gaye");
});

app.get("/about", function (req, res) {
  res.send("About page ayega");
});

app.get("/profile", function (req, res) {
  res.send("Profile page ayega ab hum");
});

//============== Error handling =============

app.get("/error", function (req, res, next) {
  return next()
  // return next(new Error("Profile page ayega ab hum")); // this is showing BE console 
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something want a wrong!"); // this is showing FE console
});

app.listen(3000);
