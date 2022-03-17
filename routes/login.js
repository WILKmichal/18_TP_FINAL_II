// //js
// const express = require('express');
// const {registerView, loginView } = require('../controllers/loginController');
// const router = express.Router();
// router.get('/register', registerView);
// router.get('/login', loginView);
// module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

module.exports = router;