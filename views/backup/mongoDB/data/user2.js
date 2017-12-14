/* User API */
const mongoose = require("../config/mongoose");
const users = require("../Model/user");
const ObjectID = requrie("mongodb");

let exportedMethods = {
    getUserById(userId) {
        return user.find({_id:userId}).then((user) => {
            if(!user) throw "No Such user found";
            return user;
        });
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
        return users().then(UserCollection => {
            return UserCollection.findOne({username : name}).then((user) => {
                return user;
            });
        });
    },
    getQuestionByUserId(userId) {
        return users().find({_id:userId}).then(user => {
            return user.userQuestion.toArray();
        });
    }
}

module.exports = exportedMethods;