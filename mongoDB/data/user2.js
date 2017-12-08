/* User API */
const mongoCollection = require("../config/mongoCollections");
const users = mongoCollection.users;
const QA =mongoCollection.Question_and_Answer;
const uuid = require('uuid');

let exportedMethods = {
    getUserById(userId){
        return users().then(UserCollection => {
            return UserCollection.findOne({_id:userId}).then((user) => {
                if(!user) throw "User Not found";
                return user;
            });
        });
    },

    createusers(userName,userPassword){
        let user = {
            _id: uuid.v1,
            username : userName,
            userPassword : userPassword
        }
        return users().then(UserCollection => {
            return UserCollection.insertOne(user).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then(newId => {
                return this.getUserById(newId);
            })
        });
    },

    getQuestionByUserId(userId) {
        return QA().then(questionBody => {
            questionBody.find({userId : userId});
        });
    }
}