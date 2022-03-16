var express = require('express');
var router = express.Router();

const { contactListView } = require('../controllers/contactController');

router.get('/', contactListView);

module.exports = router;
