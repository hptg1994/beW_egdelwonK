const validator = require('validator');
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    local: {
        username: String,
        password: String,
    },
    username: String,
    userQuestion: [{
        questionId: String,
        question: String,
        required:false,
    }],
    userComment:[{
        questionId:String,
        commentId:String,
        comment:String,
        required:false
    }]
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};