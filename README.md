# API Microservice projects

This repo is a collection of several API challenges from Free Code Camp. They are bundled to be able to deploy them under a single app on Heroku as unfortunately, heroku allows only 5 apps under their free tier.
<br />[<<< Visit the main app >>>](https://rs82.herokuapp.com)

![Screenshot API Microservices](https://github.com/rscheffers82/API-microservices/blob/master/public/API-collection-social.jpg?raw=1)

##### Timestamp API<br />
Build an app that takes a unix or human readable time in the URL and outputs the result in JSON with properties unix and human with the proper data. If invalid input is provided, JSON data will be returned with both properties valued null.
<br />[Timestamp live demo](https://rs82.herokuapp.com/timestamp)
<br />[Free Code Camp Challenge](https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)


##### Header Parser API<br />
This API service will obtain the IP address, language and operating system from the visitor / client and provides JSON data object back.
<br />[Header Parser Demo](https://rs82.herokuapp.com/whoami)
<br />[Free Code Camp Challenge](https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice)


##### URL Shortener API
This API takes a URL and shortens it. When the shortened version is visited, it will redirect to the original URL.
<br />[URL Shortener App](https://rs82.herokuapp.com/shorten)
<br />[Free Code Camp Challenge](https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice)


##### File Metadata API
This API takes an uploaded file and returns its metadata in JSON format.
<br />[File Metadata App](https://rs82.herokuapp.com/filedata)
<br />[Free Code Camp Challenge](https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice)


##### Exercise Tracker API
This API provides two `POST` routes that will let users create a new account and log new exercises. The `GET` route will return logged exercises.
<br />[Exercise Tracker App](https://rs82.herokuapp.com/exercise/)
<br />[Free Code Camp Challenge](https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/exercise-tracker)

#### Show me how to run this locally

Easy! To start off download the master branch. Once files are downloaded...

1. Ensure mongoDB is running locally
2. Run `npm run start:local` from the terminal
3. visit `http://localhost:8080`
4. Have fun! :)
