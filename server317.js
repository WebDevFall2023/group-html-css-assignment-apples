var message = 'CSC-317 startup template\n'
         + 'This template uses nodeJS, express, and express.static\n';

var port = 3000;
var path = require('path');
var express = require('express');
var app = express();
const fs = require('fs');

var StaticDirectory = path.join(__dirname, 'public');

app.use(express.static(StaticDirectory));
// Set up a route for the home page



app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});

console.log(message);
