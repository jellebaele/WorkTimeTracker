const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');

const routes = require('../routes');
const keys = require('../config/keys');
require('../models/User');
require('../config/auth/google');

module.exports = (app) => {
   app.use(express.json());

   app.use(
      cookieSession({
         maxAge: 1 * 24 * 60 * 60 * 1000,
         keys: [keys.cookieKey],
      })
   );
   app.use(passport.initialize());
   app.use(passport.session());

   app.use(routes());
};
