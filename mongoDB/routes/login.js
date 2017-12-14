const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    // res.render('Login/Login.handlebars', { user: req.user });
    res.render("Login/Login.handlebars", {});
});

router.post('/', passport.authenticate('local-login', {
    successRedirect: '/main', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

module.exports = router;