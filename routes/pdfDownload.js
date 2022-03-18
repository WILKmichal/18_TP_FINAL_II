var express = require('express');
var router = express.Router();


const { contactPdf } = require('../controllers/pdfController');

router.get('/', contactPdf);


module.exports = router;
