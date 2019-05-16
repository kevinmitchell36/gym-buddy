const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/',  (req , res) => res.render('Hello'));


// async function loadRoutineCollection() {
//   const client = await mongodb.MongoClient.connect(`mongodb://localhost:27017/gym-buddy`, {useNewUrlParser: true
//   });
//   return client.db('gym-buddy').collection('routines');
  
// }

module.exports = router;

