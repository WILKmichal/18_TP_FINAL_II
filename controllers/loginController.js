const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");
//js


//For Register Page
const registerView = (req, res) => {
    res.render("register", { errorMessage : false
    });
}
// For View 
const loginView  = (req, res) => {
    res.render("login", { errorMessage : false
    });
}

const registerUser = (req, res) => {
    const { firstName, lastName, email, password, confirm } = req.body;
    
    if (!firstName ||!lastName || !email || !password || !confirm) {
        errorMessage = "Fill empty fields";
    }
    //Confirm Passwords
    if (password !== confirm) {
        errorMessage = "Password must match";
        res.render("register", {
            errorMessage
        });
    } else {
        //Validation
        User.findOne({ email: email }).then((user) => {
            if (user) {
                errorMessage = "email exists";
                res.render("register", {
                    errorMessage
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
      errorMessage = "remplir tout les champs"
      res.render("login", {
        errorMessage
      });
    } else {
      passport.authenticate("local", {
        successRedirect: "/",
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