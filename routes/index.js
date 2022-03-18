var express = require('express');
var router = express.Router();

const { contactListRedirect } = require('../controllers/contactController');

router.get('/', contactListRedirect);

module.exports = router;