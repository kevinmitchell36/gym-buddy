const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/User');


module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
      User.findOne({ username: username })
        .then(user => {
          if(!user) {
            return done(null, false, {message: 'This username is not registered'});
          }
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Password incorrect'});
            }
          });
        })
        .catch(err => console.log(err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id, user.username);
    console.log(user.id);
    console.log(user.username);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
  
}