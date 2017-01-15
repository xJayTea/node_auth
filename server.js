var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');

// Bring in the data model
require('./auth_api/models/db');
// Bring in the Passport config after model is defined
require('./auth_api/config/passport');
var AuthApi = require('./auth_api/routes/index');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// Initialize Passport before using the route middleware
app.use(passport.initialize());

// Use the API routes when path starts with /auth
app.use('/auth', AuthApi);


// Error Handling
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});


var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
})