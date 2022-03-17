const User = require("../models/User");
const bcrypt = require("bcryptjs");
//js

//For Register Page
const registerView = (req, res) => {
    res.render("register", {
    });
}
// For View 
const loginView = (req, res) => {

    res.render("login", {
    });
}

const registerUser = (req, res) => {
    const { firstName, lastName, email, password, confirm } = req.body;
    console.log( firstName, lastName, email, password, confirm);
    
    if (!firstName ||!lastName || !email || !password || !confirm) {
        console.log("Fill empty fields");
    }
    //Confirm Passwords
    if (password !== confirm) {
        console.log("Password must match");
    } else {
        //Validation
        User.findOne({ email: email }).then((user) => {
            if (user) {
                console.log("email exists");
                res.render("register", {
                    firstName,
                    lastName,
                    email,
                    password,
                    confirm,
                });
            } else {
                //Validation
                const newUser = new User({
                    firstName,
                    lastName,
                    email,
                    password,
                });
                //Password Hashing
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(res.redirect("/login"))
                            .catch((err) => console.log(err));
                    })
                );
            }
        });
    }
};

//js
const loginUser = (req, res) => {
    const { email, password } = req.body;
    //Required
    if (!email || !password) {
      console.log("Please fill in all the fields");
      res.render("login", {
        email,
        password,
      });
    } else {
      passport.authenticate("local", {
        successRedirect: "/contact",
        failureRedirect: "/login",
        failureFlash: true,
      })(req, res);
    }
  };


module.exports = {
    registerUser,
    loginUser,
    registerView,
    loginView
};