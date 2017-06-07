var mongoose = require( 'mongoose' );
var Team = mongoose.model('Team');
var Player = mongoose.model('Player');
var Game = mongoose.model('Game');
var AppUtil = require('./util');
var logger = require('winston');
logger.add(logger.transports.File, { filename: 'logs/ProCityHoops-Error.log' });

module.exports = function(app, passport) {
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	app.get('/api/refreshData', function(req, res) {
		AppUtil.refreshGames();
		AppUtil.refreshTeams();
		AppUtil.refreshPlayers();

		return res.sendStatus(200).send();
	});

	app.post('/nbaAPI/saveTeams', function(req, response){
		AppUtil.refreshTeams();		
	});

	app.get('/nbaAPI/saveGames', function(req, response) {
		AppUtil.refreshGames();
	});

	app.post('/nbaAPI/savePlayers', function(req, response){
		AppUtil.refreshPlayers();
	});

	app.get('/api/team', function(req, res) {
		Team.find(function(err, teams){
			if(err){
				logger.log('error', err);
				return res.status(500).send(err);
			}
			return res.status(200).send(teams);
		});
	});

	app.get('/api/players/:teamId', function(req, res) {
		Player.find({ teamId: req.params.teamId }, function(err, players){
			if(err){
				logger.log('error', err);
				return res.status(500).send(err);
			}
			return res.status(200).send(players);
		});
	});

	app.get('/api/games/:teamId', function(req, res) {
		Game.find({'teamId':req.params.teamId})
			.sort({gameDate: -1})
			.limit(5)
			.exec(function(err, games) {
				if(err){
					logger.log('error', err);
					return res.status(500).send(err);
				}
				return res.status(200).send(games);
		});
	});

	app.get('/api/leagueLeaders/:category/:limit', function(req, res) {
		var query = Player.find({});

		if (req.params.category === 'pointsPerGame') {
			query.sort({'pointsPerGame': 'desc'});
		} else if (req.params.category === 'reboundsPerGame') {
			query.sort({'reboundsPerGame': 'desc'});
		} else if (req.params.category === 'assistsPerGame') {
			query.sort({'assistsPerGame': 'desc'});
		}

		query.limit(parseInt(req.params.limit));
		query.exec((err, players) => {
			if (err) {
				logger.log('error', err);
				throw err;
			}
			return res.status(200).send(players);
		});
	});

	// frontend routes =========================================================
	
	app.get('/admin', isLoggedIn, function(req, res) {
		try
		{
			res.sendfile('./public/admin/admin.html');
		}
		catch (err) {
			logger.log('error', err);
		}
	});

	app.get('/admin/login', function(req, res) {
		try
		{
			res.sendfile('./public/admin/login.html');
		}
		catch (err) {
			logger.log('error', err);
		}
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/admin', // redirect to the secure profile section
		failureRedirect : '/admin/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// don't allow signups to the front end so commenting out this route
	/*app.get('/admin/signup', function(req, res) {
		try
		{
			res.sendfile('./public/admin/signup.html');
		}
		catch (err) {
			logger.log('error', err);
		}
	});
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/admin', // redirect to the secure profile section
		failureRedirect : '/admin/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
	*/

	app.get('/admin/logout', function(req, res) {
		req.logout();
		res.redirect('/admin/login');
	});

	// route to handle all angular requests
	app.get('*', function(req, res) {
		try
		{
			//Need to figure out better way of updating data. Since it is the offseason,
			//we have some time. 
			//Bug: Getting duplicate team/players when updating data.
			//AppUtil.checkData();
			res.sendfile('./public/index.html');
		}
		catch (err) {
			logger.log('error', err);
		}
	});
};

function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated()){
		return next();
	}
	// if they aren't redirect them to the home page
	res.redirect('/admin/login');
}