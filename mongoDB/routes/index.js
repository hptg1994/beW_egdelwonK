// const postRoutes = require("./posts");
const mainRoutes = require("./main");
const userRoutes = require("./users");
const path = require('path');

const constructorMethod = (app) => {
    app.use("/", mainRoutes);
    // app.use(postRoutes);
    app.use("/users", userRoutes);

    // app.use("*", (req, res) => {
    //     res.redirect("/posts");
    // })

    /* app.use('*',(request,result) => {
            let route = path.resolve("static/about.html"); //必须是这个格式！！！不能是 "../static/about.html"
            result.sendFile(route);
    }); */
};

module.exports = constructorMethod;