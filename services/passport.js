const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => User.findById(id).then(user => done(null, user)));

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email'
    },
    async (username, password, done) => {
      try {
        const existingUser = await User.findOne({ email: username });

        if (!existingUser) {
          return done(null, false);
        }

        const passwordIsCorrect = await existingUser.verifyPassword(password);

        if (passwordIsCorrect) {
          return done(null, existingUser);
        }

        return done(null, false);
      } catch (error) {
        console.error(error);
        return done(error, false);
      }
    }
  )
);
