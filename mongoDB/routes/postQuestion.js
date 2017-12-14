/* Router */
const express = require('express');
const router = express.Router();
const data = require("../data");
const mainData = data.main;
const userData = data.users;

/* **************************************************** */

/* ********** Part of dealing with Question *********** */

/* **************************************************** */

router.post("/", (req, res) => {
	let questionBody = {};
	questionBody.title = req.body.question_input;
	questionBody.description = req.body.description;
	questionBody.answer = [];	
	userData.getUserById(req.user._id).then((user) => {
		let userQuestion ={};
		userQuestion.question = req.body.question_input;
		questionBody.username = user.username;
	}).then(() => {
		console.log(questionBody);
		userData.addQuestionToUser(userQuestion,req._id);
		mainData.createQuestion(questionBody).then((question) => {
			res.redirect("/"+question._id);
		},() => {
			res.sendStatus(500);
		})
	})


	return mainData.createQuestion(questionBody.title, questionBody.user, questionBody.question).then(questionid => {
		return mainData.getQuestionById(questionid).then(questions => {
			res.json(questions);
		});
	});

});

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