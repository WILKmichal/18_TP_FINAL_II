// //js
// const express = require('express');
const {loginView,loginUser } = require('../controllers/loginController');
// const router = express.Router();
// router.get('/register', registerView);
// router.get('/login', loginView);
// module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',loginView);
router.post('/',loginUser);

module.exports = router;