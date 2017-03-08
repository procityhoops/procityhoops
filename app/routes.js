var mongoose = require( 'mongoose' );
var Team = mongoose.model('Team');
var Player = mongoose.model('Player');
var Game = mongoose.model('Game');
var AppUtil = require('./util');

module.exports = function(app) {
	const nba = require('nba.js').default;
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	app.get('/api/refreshData', function(req, res) {
		AppUtil.refreshGames();
		AppUtil.refreshTeams();
		AppUtil.refreshPlayers();

		return res.sendStatus(200).send("Data has been updated.");
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
				return res.status(500).send(err);
			}
			return res.status(200).send(teams);
		});
	});

	app.get('/api/players/:teamId', function(req, res) {
		Player.find({ teamId: req.params.teamId }, function(err, players){
			if(err){
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
					return res.status(500).send(err);
				}
				return res.status(200).send(games);
		});
	});

	app.get('/nbaAPI/leagueleaders', function (req, response) {
		nba.stats.leagueLeaders({
			LeagueID: '00',
			Season: '2016-17',
			perMode: 'PerGame',
			seasonType: 'Regular Season',
			scope: 'RS',
			statCategory: 'pts'
		}).then(function(res) {
			response.send(res)
		}).catch(function(err) {
			console.error(err);
		});
	});

	

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		AppUtil.checkData();
		res.sendfile('./public/index.html');
	});

};