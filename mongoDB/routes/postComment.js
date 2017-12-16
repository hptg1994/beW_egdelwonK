/* Router */
const express = require('express');
const router = express.Router();
const data = require("../data");
const mainData = data.main;
const userData = data.users;

/* **************************************************** */

/* ********** Part of dealing with Question *********** */

/* **************************************************** */
router.post("/:questionId/:answerId",(req,res) => {
	if(req.body.postComment){
		mainData.addComment(req.body.commentText,req.user.username)
	}
})

router.post("/:questionId",(req,res) => {
	console.log("did go into here");
	console.log(req.params.questionId);
	let answer = {
		username:req.user.username,
		answer_description : req.body.answerdescription,
		agree :0,
		disagree : 0,
		comment :[]
	};
	console.log(answer);
	return mainData.addAnswerToQuestion(req.params.questionId,answer).then((questionBody) => {
		console.log(questionBody);
		res.redirect(`/question/${req.params.questionId}`);
	})
})

// function isLoggedIn(req, res, next) {
	
// 		// if user is authenticated in the session, carry on
// 		if (req.isAuthenticated())
// 			return next();
	
// 		// if they aren't redirect them to the home page
// 		console.log("Not Loggin");
// 		res.redirect('/login');
// 		next();
// 	}

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