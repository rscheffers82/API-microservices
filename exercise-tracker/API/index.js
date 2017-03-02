const User = require ('../model/user');
const Exercise = require ('../model/exercise');


exports.newUser = function(req, res) {
  const name = req.body.username;

  User.findOne({ name: name })
    .then( (user) => {
      if (user) return new Promise( (resolve,reject) => reject('User already exists') );
      else return new User({ name }).save();
    })
    .then( (newUser) => {
      if(!newUser.isNew) res.json({ userId: newUser.userId, name: newUser.name });
    })
    .catch( (error) => res.status(422).json({ error }) );
};


exports.addExercise = function(req, res) {
  const { userId, description, duration, date } = req.body;
  // Check on valid input, here or at the front-end

  User.findOne({ userId })
    .then( (user) => {
      if (user) {
        const exercise = new Exercise({
          description,
          duration,
          date
        });
        exercise.userId.push(user);
        user.exercises.push(exercise);
        return Promise.all([exercise.save(), user.save()]);
      }
      else return new Promise( (resolve,reject) => reject('UserId not found') );
    })
    .then( (exercise) => {
      if(!exercise.isNew) res.json({ userId, description, duration, date });
      else return new Promise( (resolve,reject) => reject('Exercise could not be saved') );
    })
    .catch( (error) => res.status(422).json({ error }) );
};


exports.showLogs = function(req, res) {
  const { userId, fromDate, toDate } = req.query;
  // see if the userId exists

  User.findOne({ userId })
    .populate({
      path: 'exercises',
      select: 'description duration date',
      options: { sort: { date: -1 } }
    })
    .then( (user) => {
      if (!user) return new Promise( (resolve,reject) => reject('UserId not found') );
      else {
        const { userId, name } = user;
        res.json({
          search: {
            userId,
            name,
            fromDate,
            toDate
          },
          total: user.total,
          exercises: user.exercises
        });
      }
    })
    .catch( (error) => res.status(422).json({ error }));
};
