
// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var passport 	   = require('passport');
var cookieParser   = require('cookie-parser');
var session        = require('express-session');
var flash    	   = require('connect-flash');
var schedule 	   = require('node-schedule');
var logger 		   = require('winston');

// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)
require('./app/models/models');

var appUtil = require('./app/util');

// seconds - minutes - hours - day of month - month - day of week
var games = schedule.scheduleJob('0 5 * * *', function(){
  appUtil.refreshGames();

  var date = new Date(new Date().getTime()).toLocaleString();
  logger.log('info', "Games refreshed at " + date);
});

var teams = schedule.scheduleJob('0 6 * * *', function(){
  appUtil.refreshTeams();

  var date = new Date(new Date().getTime()).toLocaleString();
  logger.log('info', "Teams refreshed at " + date);
});

var players = schedule.scheduleJob('0 7 * * *', function(){
  appUtil.refreshPlayers();

  var date = new Date(new Date().getTime()).toLocaleString();
  logger.log('info', "Players refreshed at " + date);
});

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(cookieParser()); // read cookies (needed for auth)



app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
require('./config/passport')(passport);

// routes ==================================================
require('./app/routes')(app, passport); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app