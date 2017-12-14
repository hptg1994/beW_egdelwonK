const express = require('express');
const app = express();
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParer = require('cookie-parser');
const connectFlash = require('connect-flash');
const static = express.static(__dirname+'/public');
const configRoutes = require('./mongoDB/routes');
const path = require('path');

const handlebarInstance = exphbs.create({
	defaultLayout: 'main.handlebars'
});
app.use("/public",static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParer());
app.use(expressSession({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: false
	}
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(connectFlash());
require("./mongoDB/config/passport")(passport);

const rewriteUnsupportedBrowserMethods= (req, res, next) => {
	if (req.body && req.body._method) {
		req.method = req.body._method;
		delete req.body._method;
	}
	next();
}
app.use(rewriteUnsupportedBrowserMethods);

app.engine('handlebars', handlebarInstance.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');


configRoutes(app);
let portNumber = 3030;
app.listen(portNumber, () => {
	console.log("We've now got a server!");
	console.log("Your routes will be running on http://localhost:" + portNumber);
});
