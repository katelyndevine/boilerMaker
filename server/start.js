const { db } = require("./db");

const app = require("./index");

// const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

const port = 3000;

(async function startServer() {
  try {
    await db.sync();
    app.listen(port, function () {
      console.log("Knock, knock");
      console.log("Who's there?");
      console.log(`You're server, listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
})();

// db.sync();
// app.listen(port, function () {
//   console.log("Knock, knock");
//   console.log("Who's there?");
//   console.log(`You're server, listening on port ${port}`);
// });
