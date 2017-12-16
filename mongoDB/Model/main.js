const mongoose = require('mongoose');

const QA = mongoose.model('Question_Answer', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    // recipePicPath: String,
    username:{
        type:String,
        require:true
    },
    description: {
        type: String
    },
    answer:[{
        username:String,
        questionId:String,
        answer_description:String,
        agree:Number,
        disagree:Number,
        comment:[{
            comment_description: String,
            username:String
        }]
    }]
});

module.exports = {
    QA
};