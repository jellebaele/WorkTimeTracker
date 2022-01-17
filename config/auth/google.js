const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
   done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
   const user = await User.findById(id);
   done(null, user);
});

passport.use(
   new GoogleStrategy(
      {
         clientID: keys.googleClientID,
         clientSecret: keys.googleClientSecret,
         callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
         const exisitingUser = await User.findOne({ googleId: profile.id });
         if (exisitingUser) {
            return done(null, exisitingUser);
         }

         const newUser = await new User({ googleId: profile.id }).save();
         done(null, newUser);
      }
   )
);
