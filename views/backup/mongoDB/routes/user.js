/* User Router· */
const express = require("express");
const router = express.Router();
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const data = require("../data");
const userData = data.users;

/* router.get("/:id",(request,result) => {
     userData.getUserById
}) */

let configPassport = (passport) => {
	passport.use(new Strategy(
		(username, password, done) => {
			console.log(`username: ${username}`);
			console.log(`userpassword: ${password}`);
			let res = userData.checkUserPassword(username, password);
			console.log(res);
			if (res.result) {
				console.log("auth true");
				return done(null,res.message);
			}
			return done(null, false,res.message);
		}));

	passport.serializeUser((user, done) => {
		console.log(`serializing user: ${user}`);
		done(null, user);
	});

	passport.deserializeUser((user, done) => {
		console.log(`deserializing user: ${user}`);
		let auth = user.split(' ');
		if (auth.length != 2)
			return done(null, false, {
				message: "Cookie is not valid"
			});

		let username = auth[0];
		let password = auth[1];

		let res = userData.checkUserPassword(username, password);
		if (res.result)
			return done(null, res.message);

		return done(null, false, {
			message: res.message
		});
	});
}
configPassport(passport);

router.get("/", (req, res) => {
	if (req.isAuthenticated()) {
		res.redirect("/main");
	} else {
		res.redirect("/start/login");
	}
})
router.post("/start/login", passport.authenticate('local', {
	successRedirect: '/main',
	failureRedirect: '/start/login',
	failureFlash: true,
	successFlash: "Welcome"
}))

router.get("/start/signup",(req,res)=>{
	res.render("Login/SignUp.handlebars",{});
})

router.get("/start/login", (req, res) => {
	if (!req.isAuthenticated()) {
		if (req.session.flash && req.session.flash.error) {
			console.log("error:" + req.session.flash.error.slice(-1)[0]);
			res.render("Login/Login.handlebars", {
				error: true,
				message: req.session.flash.error.slice(-1)[0]
			});
			return;
		}
		res.render("Login/Login.handlebars", {
			error: false
		});
	} else {
		res.redirect('/main');
	}
})

router.post("/start/signup", (req, res) => {
	let username = req.body.userNameInput;
	console.log(username);
	let password = req.body.passwordInput;
	let confirmPassword = req.body.ConfirmPasswordInput;
	userData.createusers(username, password, confirmPassword).then(user => {
		res.redirect("/main")
	}).catch(err => {
		res.status(500).json({
			err: err
		});
	})
})



module.exports = router;