const express = require('express');
const router = express.Router();
const Routine = require('../../../models/Routine');


router.get('/',  (req , res) => {
  Routine.find({}).then((routines) => {
    res.send(routines);
  });
});

router.post('/', (req, res) => {
  const {name, type, categories, sets, reps, time, notes, userId} = req.body;
  // Validation?
  const newRoutine = new Routine({
    name,
    type,
    categories,
    sets,
    reps,
    time,
    notes,
    userId
  });
  newRoutine.save()
  .then(routines => {
    res.send(routines)
  })
  .catch(err => console.log(err));
});

module.exports = router;

