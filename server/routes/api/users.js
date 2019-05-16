const express = require('express');
const router = express.Router();
const User = require('../../../models/user');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
  User.find({}).then((users) => {
    res.send(users);
  });
});

router.post('/signup', (req, res) => {
  const {name, username, email, password} = req.body;
  let errors = []

  if( !name || !username || !email || !password) {
    errors.push("All fields are required");
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


module.exports = router;

