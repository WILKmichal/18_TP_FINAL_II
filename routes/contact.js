const { urlencoded } = require('express');
var express = require('express');
var router = express.Router();

const {
    contactListView,
    contactShowView,
    contactUpdateView,
    contactCreateView,
    contactCreate,
    contactUpdate,
    contactDelete,
} = require('../controllers/contactController');

router.get('/list', contactListView);
router.get('/create', contactCreateView);
router.get('/show/:id', contactShowView);
router.get('/update/:id', contactUpdateView);

router.post('/create', contactCreate);
router.post('/update', contactUpdate);
router.post('/delete', contactDelete);

module.exports = router;
