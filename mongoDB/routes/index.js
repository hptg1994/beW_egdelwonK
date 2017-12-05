const mainRoutes = require("./main");
// const userRoutes = require("./users");
const path = require('path');

const constructorMethod = (app) => {
    app.use("/question", mainRoutes);
    app.use("*", (req, res) => {
		res.status(404).json({error: "Request not found"});
	});
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