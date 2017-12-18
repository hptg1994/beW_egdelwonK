/* User API */
const mongoose = require("../config/mongoose");
const { User } = require("../Model/user");
const ObjectID = require("mongodb");

let exportedMethods = {

    getUserById(userId) {
        return User.find({_id:userId},function(err,user){
            if(err) throw "Can't find this user";
            return user;
        })
    },

    createusers(newUser) {
        var user = new User(newUser);
        return user.save(newUser).then((doc) => {
            return doc;
        }).catch((error) => {
            return error;
        })
    },
    getUserByName: (name) => { 
        return User.then(UserCollection => {
            return UserCollection.findOne({username : name}).then((user) => {
                return user;
            });
        });
    },

    addQuestionToUser(userId,question){
        let auser = User.find({_id:userId});
        return auser.then(user => {
            let newquestion = {
                questionId:question._id,
                question:question.title
            };
            user[0].userQuestion.push(newquestion);
            return this.updateUser(userId,user[0]);
            }).then(user => {
                return user;
            });
    },

    addAnswerToUser(userId,answer,question){
        return User.find({_id:userId}).then(user => {
            let newAnswer = {
                questionTitle:question.title,
                answerId:answer._id,
                answer:answer,
            };
            user[0].userAnswer.push(newAnswer);
            return this.updateUser(userId,user[0]);
        }).then(user => {
            return user;
        })
    },

    updateUser(userId,user){
       return User.findOneAndUpdate({ _id:userId},{$set:user},{new:true}).then((user) => {
            if(!user) {
                return;
            }
            return user;
        }).catch((error) => {
            return error;
        });
    },

    getQuestionByUserId(userId) {
        return User.find({_id:userId}).then(user => {
            return user[0].userQuestion;
        });
    },

    getAnswerByUserId(userId) {
        return User.find({_id:userId}).then(user => {
            return user[0].userAnswer;
        })
    }
}

module.exports = exportedMethods;