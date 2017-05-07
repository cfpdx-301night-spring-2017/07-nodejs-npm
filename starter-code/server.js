'use strict';

// TODO: Initialize your project using NPM to create and populate a package.json file
const express = require('express');
const bodyParser = require('body-parser');

// TODO: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const app = express();
const PORT = process.env.PORT || 3000;
const urlEncodedParser = bodyParser.urlencoded({ extended: true });

// TODO: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

// app.get('*', function(request, response) {
//   // TODO: Using the response object, send the index.html file back to the user
//   response.sendFile('index.html', { root: './public' });
// });

// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('/newarticle', function(request, response) {
  response.sendFile('new.html', { root: './public' });
});

// TODO: (STRETCH) This route will receive a new article from the form page, new.html,
// and log that form data to the console.
app.post('/new', urlEncodedParser, function (request, response) {
  console.log('you made a new article: ', request.body);
  response.send('you made a new article!');
});

app.listen(PORT, function() {
  // TODO: Log to the console a message that lets you know which port your server has started on
  console.log(`started server on port: ${PORT}`);
});
