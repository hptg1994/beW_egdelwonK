/* Router */
const express = require('express');
const router = express.Router();
const data = require("../data");
const mainData = data.main;
const userData = data.users;

/* **************************************************** */

/* ********** Part of dealing with Question *********** */

/* **************************************************** */

router.get("/:id",(req,res) => {
	let questionArray = undefined; 
	let AnswerArray = undefined;

	return userData.getQuestionByUserId(req.user._id).then((questionBody) => {

		questionArray = questionBody;
		userData.getAnswerByUserId(req.user._id).then((answerBody) => {
			AnswerArray = answerBody;
			console.log(AnswerArray);
		}).then(() => {
			res.render("UserPage/userPage.handlebars",{
				user:req.user,
				answerArray:AnswerArray,
				questionArray:questionArray
			});
		});
	});
})

module.exports = router;