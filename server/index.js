const express = require("express");
const morgan = require("morgan");
const path = require("path");
// const db = require("./db");

const app = express();

// logging middleware
app.use(morgan("dev"));

//body parsing middleware
// Requests frequently contain a body - if you want to use it in req.body, then you'll need some middleware to parse the body.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static middleware
// Once your browser gets your index.html, it often needs to request static assets from your server - these include javascript files, css files, and images.
app.use(express.static(path.join(__dirname, "../public")));

//routes mounted on /api
app.use("/api", require("./api"));

// Because we generally want to build single-page applications (or SPAs), our server should send its index.html for any requests that don't match one of our API routes.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

// const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
// app.listen(port, function () {
//   console.log("Knock, knock");
//   console.log("Who's there?");
//   console.log(`You're server, listening on port ${port}`);
// });

module.exports = app;
