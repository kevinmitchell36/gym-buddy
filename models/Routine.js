const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoutineSchema = new mongoose.Schema({
  name: {
    type: String
    // required: true
  },
  type: {
    type: String
    // required: true
  },
  categories: {
    type: Array
    // default: undefined
    // required: true
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  time: {
    type: Number
  },
  notes: {
    type: String
  },
  userId: {
    type: String
  }   
});

const Routine = mongoose.model('Routine', RoutineSchema);

module.exports = Routine;