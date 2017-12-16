
/* Router */
const express = require('express');
const router = express.Router();
const data = require("../data");
const mainData = data.main;

/* **************************************************** */

/* ********** Part of dealing with Question *********** */

/* **************************************************** */
router.get("/:id",(req,res) => {
	if(req.isAuthenticated()){
		mainData.getAllAnswer(req.params.id).then((questionBody) => {
			res.render("Question_Detail/Question.handlebars",{
					QuestionBody:questionBody,
					answerArray:questionBody.answer,
					questionId:questionBody._id,
				});
		});
	}
});


router.post("/:questionId",(req,res) => {
	let answer = {
		username:req.user.username,
		questionId:req.params.questionId,
		answer_description : req.body.answerdescription,
		agree :0,
		disagree : 0,
		comment :[]
	};
	return mainData.addAnswerToQuestion(req.params.questionId,answer).then((questionBody) => {
		res.redirect(`/question/${req.params.questionId}`);
	})
})

// router.post("/:questionid/:answerid",(req,res) => {
// 	if(req.isAuthenticated()){
// 		if(req.params.agreebtn){
// 			return mainData.agreeAnswer(req.params.questionid,req.params.answerid).then(() => {
// 				return res.redirect(`/question/${req.params.questionid}`);
// 			});
// 		}
// 		if(req.params.disagreebtn){
// 			return mainData.agreeAnswer(req.params.questionid,req.params.answerid).then(() => {

// 				return res.redirect(`/question/`)
// 			});
// 		}
// 	}
// })

router.post("/:questionId/:answerId/postComment",(req,res) => {
	console.log("Did go in here");
	return mainData.addComment(req.body.commentText,req.user.username,req.params.answerId,req.params.questionId).then(() => {
		res.redirect(`question/${req.params.questionId}`)
	})
})

// router.get("/", (req, res) => {
// 	if (req.isAuthenticated()) {
// 		mainData.getAllQuestion().then((question) => {
// 			console.log(question);
// 			res.render("Main/index.handlebars", {questionArray:question})
// 		});
// 	} else {
// 		res.redirect("/main")
// 	}
// });

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