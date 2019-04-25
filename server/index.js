const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Initialize new instance of Express
const app = express();

app.use(bodyParser.json());
app.use(cors());

//Require routes
const routines = require('./routes/api/routines')

app.use('/api/routines', routines)




//Set sever
const port = 3000
app.listen(port, () => console.log(`Listening on ${port}`));
