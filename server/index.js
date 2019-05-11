const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Initialize new instance of Express
const app = express();

//Require Database
const db = require('../config/keys').MongoURI;

// Establish Connection
mongoose.connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//Require routes
const routines = require('./routes/api/routines');
const users = require('./routes/api/users');

app.use('/api/routines', routines);
app.use('/api/users', users);

// BodyParser
app.use(express.urlencoded({ extended: false }));
app.use(cors());



//Set sever
const port = 3000
app.listen(port, () => console.log(`Listening on ${port}`));
