const router = require("express").Router();
const passport = require("passport");
require("./localSecret");
const User = require("./api/User");
module.exports = router;

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

router.get("/auth/google", passport.authenticate("google", { scope: "email" }));

const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "need to add this to google console and HERE",
};

// configure the strategy with our config object, and write the function that passport will invoke after google sends
// us the user's profile and access token
const strategy = new GoogleStrategy(
  googleConfig,
  async function (token, refreshToken, profile, done) {
    const googleId = profile.id;
    const name = profile.displayName;
    const email = profile.emails[0].value;
    try {
      await User.findOne({ where: { googleId: googleId } })
        function (user) {
          if (!user) {
            return User.create({ name, email, googleId }).then(function (user) {
              done(null, user);
            });
          } else {
            done(null, user);
          }
        }
      } catch(err) {
        console.log(err)
      }
  }
);

// register our strategy with passport
passport.use(strategy);
