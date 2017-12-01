const postRoutes = require("./posts");
const userRoutes = require("./users");

module.exports = {
    users: userRoutes,
    posts: postRoutes
};