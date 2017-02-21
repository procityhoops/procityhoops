module.exports = function(app) {
	const nba = require('nba.js').default;
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/api/teams', function (req, response) {
		nba.data.teams({
			year: 2016
		}).then(function(res) {
			response.send(res)
		}).catch(function(err) {
			console.error(err);
		});
	})

	app.get('/api/teamRoster/:teamID', function (req, response) {
		nba.stats.teamRoster({
			year: '2016-17',
			TeamID: req.params.teamID
		}).then(function(res) {
			response.send(res)
		}).catch(function(err) {
			console.error(err);
		});
	})

	app.get('/api/teamRosters/:teamName', function (req, response) {
		nba.data.teamRoster({
			year: 2016,
			teamName: req.params.teamName
		}).then(function(res) {
			response.send(res)
		}).catch(function(err) {
			console.error(err);
		});
	})

	app.get('/api/allplayers', function (req, response) {
		nba.stats.allPlayers({
			LeagueID: '00',
			Season: '2016-17',
			IsOnlyCurrentSeason: 1
		}).then(function(res) {
			response.send(res)
		}).catch(function(err) {
			console.error(err);
		});
	})

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};