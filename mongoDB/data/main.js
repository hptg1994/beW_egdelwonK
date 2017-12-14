/* Api Stuff */
const mongoose = require("../config/mongoose");
const {QA} = require("../Model/main");

let exportedMethods = {
    /* **************************************************** */

    /* ********** Part of dealing with Question *********** */
    
    /* **************************************************** */
    getQuestionById(id){
        return QA.find({_id:id}).exec().then((newQuestionbody) => {
            return questionbody;
        }).catch(error => {
            return error;
        });
    },

    getAllQuestion(){
        return QA.find({}).exec().then((allquestion) => {
            return allquestion;
        });
    },
    // getAllQuestion(){
    //     return QA.find({},function(err,question){
    //         var QAMap = {};
    //         question.foreach(questionbody => {
    //             QAMap[questionbody._id] = questionbody;
    //         });
    //         return QAMap;
    //     })
    // },
    createQuestion(newQuestion){
        var newQuestion = new QA(newQuestion);
        return newQuestion.save(newQuestion).then((questionbody) => {
            return questionbody;
        }).catch((error) => {
            return error;
        });
    },

    updateQuestion(questionId,newquestion){
        return QA.findOneAndUpdate({_id:questionId},{$set:newquestion},{new:true}).then((questionbody) => {
            return questionbody;
        }).catch((error) => {
            return error;
        })
    },
    // deleteQuestion(questionId){
    //     return QA().then((QACollection) => {
    //         QACollection.remove({_id:questionId});
    //     })
    // },

    /* **************************************************** */

    /* ********** Part of dealing with Answers ************ */

    /* **************************************************** */

    getAllAnswer(questionId){
        return this.getQuestionById(questionId).then((questionbody) => {
            return questionbody.answer.toArray();
        })
    },

    getAnswerById(questionId,answerId){
        return QA.find({_id:questionId}).then((questionbody) => {
            let answerBody = questionbody.answer;
            return answerBody.find((answer) => {
                return answer._id = answerId;
            });
            return answerBody;
        }).catch((error) => {
            throw "Can't find this answer";
        })
    },

    addAnswerToQuestion(questionId,answer){

        return QA.findOneAndUpdate({_id:questionId},{$push:{answer:answer}},{safe:true,upsert:true}).then((questionbody) => {
            return questionbody;
        })
    },
    agreeAnswer(questionId,answerId){
        let agreeCount = this.getAnswerById(answerId).agree + 1;
        return QA.update({_id:questionId,"answer._id":answerId},{$set:{"answer.$.agree": agreeCount}});
    },

    digreeAnswer(questionId,answerId){
        let agreeCount = this.getAnswerById(answerId).agree - 1;
        return QA.update({_id:questionId,"answer._id":answerId},{$set:{"answer.$.agree": agreeCount}});
    },

    /* **************************************************** */

    /* ********** Part of dealing with Comment ************ */

    /* **************************************************** */

    addComment(comment,user,answerId){
        let commentBody = {
            _id : uuid.v4,
            comment : comment,
            user: user
        }
        return this.getAllComment(answerId).then((commnetBody) => {
            commnetBody.append(commentBody);
        });
    },

    getCommentById(answerId,commentId){
        return getAllComment(answerId).then((commentBody) => {
            commentBody.find((comment) => {
                
            })
        })
        /* return QA().then((QACollection) => {
            QACollection.findOne()
        }) */
    },

    getAllComment(answerId){
        return this.getAnswerById(answerId).then((answer) => {
            return answer.Comment;
        });
    },
    deleteCommnet(answerId,commentId){
        let answerBody = this.getAnswerById(answerId);
        return QA().then((QACollection) => {

        });
    }
}

module.exports = exportedMethods;