/* User API */
const bcrypt = require('bcrypt-nodejs');
const mongoCollection = require("../config/mongoCollections");
const users = mongoCollection.users;
const QA = mongoCollection.Question_and_Answer;
const uuid = require('uuid');

let exportedMethods = {
    getUserById(userId) {
        return users().then(UserCollection => {
            return UserCollection.findOne({
                _id: userId
            }).then((user) => {
                if (!user) throw "User Not found";
                return user;
            });
        });
    },

    createusers(userName, userPassword, confirmPassword) {
        var salt = bcrypt.genSaltSync(12);
        var hashPassword = bcrypt.hashSync(userPassword, salt);
        let user = {
            _id: uuid.v1,
            username: userName,
            userPassword: hashPassword
        }
        if (userPassword === confirmPassword) {
            return users().then(UserCollection => {
                return UserCollection.insertOne(user).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then(newId => {
                    return this.getUserById(newId);
                })
            });
        }else{
            throw "Need to have same password";
        }
    },

    getUserByName: (name) => { 
        return users().then(UserCollection => {
            return UserCollection.findOne({username : name}).then((user) => {
                return user;
            });
        });
    },

    checkUserPassword:(username,password) => {
        let user = getUserByName(username);
        if(!user)
            return{
                result:false,
                message : "User Not Found"
            };

        // bcrypt.compare(password,user.userPasswor).then((res) => {
        //     return res;
        // })
        if(!bcrypt.compareSync(password,user.userPasswor))
            return {
                result:false,
                message : "Not correct"
            }
        return {
            result:true,
            message:`${username} ${password}`
        }
    },

    getQuestionByUserId(userId) {
        return QA().then(questionBody => {
            questionBody.find({
                userId: userId
            });
        });
    }
}

module.exports = exportedMethods;