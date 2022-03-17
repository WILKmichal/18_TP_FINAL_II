var express = require('express');
var router = express.Router();

const {
  registerView,
  registerUser
} = require('../controllers/loginController');

/* GET home page. */
router.get('/', registerView);


/* GET home page. */
router.post('/', registerUser);

module.exports = router;
