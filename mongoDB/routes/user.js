/* User Router· */
const express = require("express");
const router = express.Router();
const passport = require('passport');
const data = require("../data");
const multer = require('multer');
const userData = data.users;
const mainData = data.main;

/* router.get("/:id",(request,result) => {
     userData.getUserById
}) */

function isLoggedIn(req,res,next) {
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/login');
}