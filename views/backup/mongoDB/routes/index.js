/* Knowledge Router Index */
const passport = require('passport');
const mainRoutes = require("./main");
const userRoutes = require("./user");
const path = require('path');
const cookieParer = require('cookie-parser');
const connectFlash = require('connect-flash');

const constructorMethod = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(cookieParer());
    app.use(connectFlash());
    app.use("/",userRoutes);
    app.use("/main", mainRoutes);
    // app.use("*", (req, res) => {
    //     if(req.isAuthenticated()){
    //         res.redirect("/main");
    //     }else{
    //         res.redirect("/start#login");
    //     }
	// 	res.status(404).json({error: "Request not found"});
	// });
    // app.use("/users", userRoutes);
    // app.use("*", (req, res) => {
    //     res.redirect("/posts");
    // })

    /* app.use('*',(request,result) => {
            let route = path.resolve("static/about.html"); //必须是这个格式！！！不能是 "../static/about.html"
            result.sendFile(route);
    }); */
};

module.exports = constructorMethod;