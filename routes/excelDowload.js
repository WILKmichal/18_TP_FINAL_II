var express = require('express');
var router = express.Router();


const { contactXlsx } = require('../controllers/xlsxController');

router.get('/', contactXlsx);


module.exports = router;
