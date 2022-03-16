var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

// Mongo DB connection
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('connected to mongo database'))
  .catch(err => console.log(err));


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
