const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req , res) => {
  const routines = await loadRoutineCollection();
  res.send(await routines.find({}).toArray());
});


async function loadRoutineCollection() {
  const client = await mongodb.MongoClient.connect(`mongodb://localhost:27017/gym-buddy`, {useNewUrlParser: true
  });
  return client.db('gym-buddy').collection('routines');
  
}

module.exports = router;

