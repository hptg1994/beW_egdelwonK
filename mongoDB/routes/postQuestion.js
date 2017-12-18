/* Router */
const express = require('express');
const router = express.Router();
const data = require("../data");
const mainData = data.main;
const userData = data.users;

/* **************************************************** */

/* ********** Part of dealing with Question *********** */

/* **************************************************** */

// router.get("/",(req,res) => {
// 	res.render("QuestionBox/QuestionBox.handlebars")
// });


router.post("/", (req, res) => {
	let questionBody = {};
	questionBody.title = req.body.question_input;
	questionBody.username = req.user.username;
	questionBody.description = req.body.question_description;
	questionBody.answer = [];
	// userData.addQuestionToUser(userQuestion, req._id);
	return mainData.createQuestion(questionBody,req.user._id).then((question) => {
		res.redirect(`/question/${question._id}`);
	});
});



// userData.getUserById(req.user._id).then((user) => {
// 	let userQuestion = {};
// 	userQuestion.question = req.body.question_input;
// 	questionBody.username = user.username;
// 	userData.addQuestionToUser(userQuestion, req._id);
// });

	// userData.getUserById(req.user._id).then((user) => {
// 	let userQuestion = {};
// 	userQuestion.question = req.body.question_input;
// 	questionBody.username = user.username;
// }).then(() => {



// userData.getUserById(req.user._id).then((user) => {
// 	let userQuestion = {};
// 	userQuestion.question = req.body.question_input;
// 	questionBody.username = user.username;
// }).then(() => {



// router.put("question/:id", (req, res) => {
// 	let updateQuestionBody = req.body;
// 	return mainData.updateQuestion(req.params.id, updateQuestionBody).then((result) => {
// 		return res.json(result);
// 	})
// });

// router.delete("question/:id", (req, res) => {
// 	return mainData.deleteQuestion(req.params.id).then(function () {
// 		res.sendStatus(200);
// 	}).catch((e) => {
// 		res.status(500).json({
// 			error: e
// 		});
// 	});
// })

/* **************************************************** */

/* *********** Part of dealing with Answer ************ */

/* **************************************************** */

// router.post("/answer:id/"){
// 	mainData.
// }

// router.get("/question:id/answer")
module.exports = router;