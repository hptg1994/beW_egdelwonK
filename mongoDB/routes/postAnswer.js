/* Router */
const express = require('express');
const router = express.Router();
const data = require("../data");
const mainData = data.main;
const userData = data.users;

/* **************************************************** */

/* ********** Part of dealing with Question *********** */

/* **************************************************** */

router.post("/:questionId/Answer",isLoggedIn,(req,res) => {
	userData.getQuestionByUserId(req.user._id).then((user) => {
		let answer = {};
		answer.username = user[0].username;
		answer.answer_description = req.body.answerdescription;
		answer.agree = 0;
		answer.comment = [];
		mainData.addAnswerToQuestion(req.param.questionId,answer).then((recipe) => {
			if(recipe){
				res.redirect("/question/:questionId");
			}
		})
	})
});

function isLoggedIn(req, res, next) {
	
		// if user is authenticated in the session, carry on
		if (req.isAuthenticated())
			return next();
	
		// if they aren't redirect them to the home page
		res.redirect('/login');
	}

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