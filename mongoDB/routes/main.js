
/* Router */
const express = require('express');
const router = express.Router();
const data = require("../data");
const mainData = data.main;

/* **************************************************** */

/* ********** Part of dealing with Question *********** */

/* **************************************************** */

router.get("/", (req, res) => {
	mainData.getAllQuestion().then((question) => {
		res.json(question);
	});
});

router.get("/:id", (req, res) => {
	let questionBody;
	let answerBody;
	let commentBody ;
	mainData.getQuestionById(req.params.id).then((question) => {
		questionBody = question;
		answerBody = question.answer;
		answerBody.forEach(answer => {
			commentBody = answerBody.Comment;
		});		
		res.json(question);
		console.log(answer);
	});
});

router.post("/", (req, res) => {
	let questionBody = req.body;
	 return mainData.createQuestion(questionBody.title, questionBody.user, questionBody.question).then(questionid => {
		 return mainData.getQuestionById(questionid).then(questions => {
			res.json(questions);
		 });
	 });	
	
});

router.put("question/:id", (req, res) => {
	let updateQuestionBody = req.body;
	return  mainData.updateQuestion(req.params.id,updateQuestionBody).then((result) => {
		return res.json(result);
	})
});

router.delete("question/:id",(req,res) => {
	return mainData.deleteQuestion(req.params.id).then(function(){
		res.sendStatus(200);
	}).catch((e) => {
		res.status(500).json({error:e});
	});
}) 

/* **************************************************** */

/* *********** Part of dealing with Answer ************ */

/* **************************************************** */

// router.post("/answer:id/"){
// 	mainData.
// }

// router.get("/question:id/answer")
module.exports = router;