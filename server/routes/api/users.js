const express = require('express');
const router = express.Router();
const User = require('../../../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');

router.get('/', (req, res) => {
  User.find({}).then((users) => {
    res.send(users);
  });
});

router.post('/', (req, res) => {
  const {name, username, email, password, password_confirm} = req.body;
  let errors = []

  if(!name) {
      errors.push("name is required");
  } else if(!username) {
      errors.push("username is required");
  } else if(!email) {
      errors.push("email is required");
  } else if(!password) {
      errors.push("password is required");
  } else if(!password_confirm) {
      errors.push("password_confirm is required");
  }

  if(errors.length > 0) {
    console.log(errors);
  } else {
    //Generates new user without saving
    const newUser = new User({
      name,
      username,
      email,
      password
    });
    bcrypt.genSalt(10, (err, salt) => 
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save()
        .then(users => {
          res.send(users)
        })
        .catch(err => console.log(err));
    }))
  }
});

router.post('/login', (res, req, next) => {
  passort.authenticate('local',  {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
})

module.exports = router;

