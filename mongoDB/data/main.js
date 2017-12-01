
const mongoCollections = require("../config/mongoCollections");
const QA = mongoCollections.Question_and_Answer;
const users = require("./users")
const uuid = require("node-uuid");


let exportedMethods = {

    /* **************************************************** */

    /* ********** Part of dealing with Question *********** */
    
    /* **************************************************** */

    getQuestion(id){
        return QA().then(QACollection => {
            return QACollection.findOne({_id:id});
        })
    },
    getAllQuestion(){
        return QA().then(QACollection => {
            var allQuestion =  QACollection.find({}).toArray();
            return allQuestion;
        })
    },
    createQuestion(title,question){
        return QA().then((QACollection) => {
            let questionbody = {
                _id :uuid.v4,
                title : title,
                question:question,
                answer:[]
            };

            return QACollection.insertOne(questionbody).then((information) => {
                return information.insertedId;
            })
        })
    },
    updateQuestion(questionId,newquestion){
        return QA().then((QACollection) => {
            QACollection.updateOne({_id:questionId},{$set:{question:newquestion}});
        })
    },
    updateQuestionTitle(questionId,newTitle){
        return QA().then((QACollection) => {
            QACollection.updateOne({_id:questionId},{$set:{title:newTitle}});
        })
    },
    deleteQuestion(questionId){
        return QA().then((QACollection) => {
            QACollection.remove({_id:questionId});
        })
    },

    /* **************************************************** */

    /* ********** Part of dealing with Answers ************ */

    /* **************************************************** */
    getAllAnswer(questionId){
        return QA().then(QACollection => {
            return this.getQuestion(id)
        }).then((question) =>{
            var answerBody = question.answer;
            return answerBody;
        })
    },
    getAnswerById(questionId,answerId){
        return QA().then(QACollection => {
            var answerSet = this.getAllAnswer(questionId);
            return answerSet;
        }).then((answerSet) => {
            return answerSet.findOne({_id:answerId});
        }).then((answer) => {
            if(!answer) throw "Answer Not Found";
            return answer;
        })
    },
    addAnswerToQuestion(questionId,answer){
        return QA().then(QACollection => {
            return this.getQuestion(questionId)
        }).then((question) => {
            let answerBody ={
                _id : uuid.v4,
                answer : answer,
                agree : 0,
                user : [],
                Comment : []
            };
            return question.answer.push(answerBody);

        })
    },
    agreeAnswer(questionId,answerId){
        return QA().then(QACollection => {
            return this.getAnswerById(questionId,answerId)
        }).then((answer) => {
            answer.agree += 1;
        })
    },
    
    deleteAnswer(questionid,answerId){
        return QA().then(QACollection => {
            var questionbody = this.getAllQuestion(questionid);
            return questionbody;
        }).then((question) => {
            
        })
    }
}