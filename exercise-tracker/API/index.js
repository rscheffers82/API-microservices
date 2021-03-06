const User = require ('../model/user');
const Exercise = require ('../model/exercise');
const moment = require ('moment');

exports.newUser = function(req, res) {
  let name = req.body.username;
  if (!name) name = 'Mr/Mrs Doe';

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
  // Dates are coming in in this format = 'YYYY-MM-DD';
  let { userId, description, duration, date } = req.body;
  console.log('description:', description, ' - duration: ', duration, ' - date: ', date);
  if (!description) description = 'No description provided';
  if (!duration) duration = '0';
  if (!date) date = moment();

  User.findOne({ userId })
    .then( (user) => {
      if (user) {
        // console.log('---1. Date: ', date);
        const exercise = new Exercise({ description, duration, date });
        exercise.userId.push(user);
        user.exercises.push(exercise);
        return Promise.all([exercise.save(), user.save()]);
      }
      else return new Promise( (resolve,reject) => reject('UserId not found') );
    })
    .then( (exercise) => {
      if(!exercise.isNew) res.json({ userId, description, duration, date: moment(date).format('D MMM, YYYY') });
      else return new Promise( (resolve,reject) => reject('Exercise could not be saved') );
    })
    .catch( (error) => res.status(422).json({ error }) );
};


exports.showLogs = function(req, res) {
  const { userIdLogs, fromDate, toDate } = req.query;
  var populateExercises = (from, to) => {
    let params = {
      path: 'exercises',
      // match: { date : populateExercises(fromDate, toDate) },
      select: 'description duration date',
      options: { sort: { date: -1 }}
    };

    if(from && to) params.match = { date : { $gte: from, $lte: to } };
    else if (from) params.match = { date : { $gte: from } };
    else if (to) params.match = { date : { $lte: to } };
    return params;
  };

  // see if the userId exists
  User.findOne({ userId: userIdLogs })
    .populate( populateExercises(fromDate, toDate) )
    .then( (user) => {
      if (!user) return new Promise( (resolve,reject) => reject('UserId not found') );
      else {
        const { userId, name } = user;
        res.json({
          search: { userId, name, fromDate, toDate },
          total: user.total,
          exercises: user.exercises.map(function(exercise){
            // exercise.bla = moment(exercise.date).format('D MMM, YYYY');
            return {
              _id: exercise._id,
              description: exercise.description,
              duration: exercise.duration,
              date: moment(exercise.date).format('D MMM, YYYY')
            };
          })
        });
      }
    })
    .catch( (error) => res.status(422).json({ error }));
};
