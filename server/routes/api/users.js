const express = require('express');
const router = express.Router();
const User = require('../../../models/user');

// router.post('/users', (req, res) => {

// })

router.post('', (req, res) => res.send("Hello"));


module.exports = router;

