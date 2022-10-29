// File Name: passport.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// WebApp name: To-Do

const passport = require('passport');

module.exports = function() {
  const User = require('../models/user');
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      _id: id
    }, '-password -salt', (err, user) => {
      done(err, user);
    });
  });

  require('./local')();
};