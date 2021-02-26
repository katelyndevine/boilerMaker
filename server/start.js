const { db } = require("./db");

if (process.env.NODE_ENV === "development") {
  require("./localSecret"); // this will mutate the process.env object with your secrets.
}

// in your app's entry point
// const secret = require("./localSecret"); // mutate the process.env object with your variables
const app = require("./index"); // run your app after you're sure the env variables are set.

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

// const port = 3000;

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
