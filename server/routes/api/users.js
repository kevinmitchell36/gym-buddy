const express = require('express');
const router = express.Router();
const User = require('../../../models/user');

router.get('/', (req, res) => {
  User.find({}).then((users) => {
    res.send(users);
  });
});

router.post('/signup', (req, res) => {
  User.create(req.body).then((users) => {
    res.send(users);
  });
});


module.exports = router;

