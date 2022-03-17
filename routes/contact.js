const { urlencoded } = require('express');
var express = require('express');
var router = express.Router();

const {
    contactListView,
    contactShowView,
    contactUpdateView,
    contactCreateView,
    contactCreate
} = require('../controllers/contactController');

router.get('/list', contactListView);
router.get('/create', contactCreateView);
router.get('/show/:id', contactShowView);
router.get('/update/:id', contactUpdateView);

router.post('/create', contactCreate);

module.exports = router;
