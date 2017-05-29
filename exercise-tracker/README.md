# Exercise Tracker API

![Exercise Tracker by Roy Scheffers](https://raw.githubusercontent.com/rscheffers82/API-microservices/master/exercise-tracker/public/images/exercise-tracker-social.jpg)

This application was built to deepen my knowledge of building APIs using Node and Express. To make the app a little more intuitive and visually attractive a partial front-end UI is created using Materialize CSS. This setup is chosen for API demo purposes and is not meant to be a full stack app.

As you will see "Create new user" and "Add Exercise" are `POST` routes that return JSON data. "View logs" is a `GET` route which through an AJAX call will request the user's previous exercise data based on the start and end date when provided, and displays it in a table underneath the three boxes.

#### Curious?

[Click here](https://rs82.herokuapp.com/exercise/) for a live demo.
<br />The requirements for this API can be found [here](http://beta.freecodecamp.com/en/challenges/api-and-microservice-projects/exercise-tracker).

#### Cool! How do I make this run locally?

Easy! To get started, download the entire master branch (which contains the other four API micro projects as well) as the Node server is required to run Exercise Tracker. Once files are downloaded...

1. Ensure mongoDB is running locally
2. From the terminal run `npm run start:local`
3. Visit `localhost:8080/exercise`
4. Have fun! :)
