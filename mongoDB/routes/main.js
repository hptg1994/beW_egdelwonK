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


router.get("/question/:id", (req, res) => {
	mainData.getQuestionById(req.params.id).then((question) => {
		res.json(question);
	});
});

router.post("/question/", (req, res) => {
	let questionBody = req.body;
	mainData.createQuestion(questionBody.title, questionBody.user, questionBody.question)
});

router.put("question/:id", (req, res) => {
	let updateQuestionBody = req.body;
	return  mainData.updateQuestion(req.params.id,updateQuestionBody).then((result) => {
		res.json(result);
	})
});

router.delete("question/:id",(req,res) => {
	return mainData.deleteQuestion(req.params.id).then(function(){
		res.sendStatus(200);
	}).catch((e) => {
		res.status(500).json({error:e});
	});
}) 