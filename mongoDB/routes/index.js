/* Knowledge Router Index */
const passport = require('passport');
const mainRoutes = require("./main");
const answer = require("./answer")
const postAnswer = require("./postAnswer")
const postRoutes = require('./postQuestion');
const userRoutes = require("./user");
const loginRoute = require("./login");
const signupRoute = require("./signup");

const constructorMethod = (app) => {
    app.use("/question",answer)
    app.use("/login",loginRoute);
    app.use("/signup", signupRoute);
    app.use("/postquestion",postRoutes);
    app.use("/main", mainRoutes);
    app.use("/", (req, res) => {
        res.redirect('/login');
    });
};

module.exports = constructorMethod;