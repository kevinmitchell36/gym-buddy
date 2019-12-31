require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


//Initialize new instance of Express
const app = express();

// Require passport config
require('../config/passport')(passport); 

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials",true);
  next();
});

// Use cors
app.use(cors());

//Body Parser
app.use(bodyParser.json());



//Require Database
const uri = require('../config/keys').MongoURI;

// require('../config/keys').MongoURI;

// Establish Connection
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//Require routes
const routines = require('./routes/api/routines');
const users = require('./routes/api/users');

app.use('/api/routines', routines);
app.use('/api/users', users);




//Set sever
const port = 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
