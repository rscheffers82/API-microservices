const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the model to work with
const ExerciseSchema = new Schema({
  userId: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  username: String,
  description: String,
  duration: Number,
  date: Date
});

// Create the model class
const ExerciseModel = mongoose.model('exercise', ExerciseSchema);

// Export the model
module.exports = ExerciseModel;
