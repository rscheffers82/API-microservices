const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the model to work with
const ExerciseSchema = new Schema({

});

// Create the model class
const ExerciseModel = mongoose.model('exercise', ExerciseSchema);

// Export the model
module.exports = ExerciseModel;
