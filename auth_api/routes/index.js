var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.JAYTEA_AUTH_SECRET,
  userProperty: 'payload'
});

var profileController = require('../controllers/profile');
var authController = require('../controllers/authentication');

// profile
router.get('/profile', auth, profileController.profileRead);

// authentication
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
