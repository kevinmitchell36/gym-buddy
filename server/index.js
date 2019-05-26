const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');


//Initialize new instance of Express
const app = express();

// Require passport config
require('../config/passport')(passport); 

// Use cors
app.use(cors());

//Body Parser
app.use(bodyParser.json());

// Passport
app.use(passport.initialize());
app.use(passport.session());

//Require Database
const uri = require('../config/keys').MongoURI;

// Establish Connection
mongoose.connect(uri, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//Require routes
const routines = require('./routes/api/routines');
const users = require('./routes/api/users');

app.use('/api/routines', routines);
app.use('/api/users', users);




//Set sever
const port = 3000
app.listen(port, () => console.log(`Listening on ${port}`));
