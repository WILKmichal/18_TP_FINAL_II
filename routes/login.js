// const express = require("express");

// const {
//   registerView,
//   loginView,
//   registerUser,
//   loginUser,
// } = require("../controllers/loginController");
// // const { dashboardView } = require("../controllers/dashboardController");
// // const { protectRoute } = require("../auth/protect");

// const router = express.Router();

// router.get("/register", registerView);
// router.get("/login", loginView);

// //Dashboard
// // router.get("/dashboard", protectRoute, dashboardView);loginUserregisterUser

// router.post("/register");
// router.post("/login");

// module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
