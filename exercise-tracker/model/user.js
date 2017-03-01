const ShortId = require('mongoose-shortid-nodeps');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// the model to work with
const UserSchema = new Schema({
  userId: {
    type: ShortId,
    unique: true,
    len: 4,
    base: 62,
  },
  name: String,
  exercises: [{
    type: Schema.Types.ObjectId,
    ref: 'exercise'
  }]
});

// Create the model class
const UserModel = mongoose.model('user', UserSchema);

// Export the model
module.exports = UserModel;
