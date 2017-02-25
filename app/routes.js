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

	app.get('/api/conferenceStandings', function (req, response) {
		nba.data.conferenceStandings({
			year: 2016
		}).then(function(res) {
			response.send(res)
		}).catch(function(err) {
			console.error(err);
		});
	})

	app.get('/api/teamGameLog/:teamID', function (req, response) {
		nba.stats.teamGamelog({
			LeagueID: '00',
			Season: '2016-17',
			SeasonType: 'Regular Season',
			TeamID: req.params.teamID
		}).then(function(res) {
			response.send(res)
		}).catch(function(err) {
			console.error(err);
		});
	})

	app.get('/api/playersByTeam/:teamID', function (req, response) {
		nba.stats.playerBioStats({
			LeagueID: '00',
			Season: '2016-17',
			perMode: 'PerGame',
			seasonType: 'Regular Season',
			TeamID: req.params.teamID
		}).then(function(res) {
			response.send(res)
		}).catch(function(err) {
			console.error(err);
		});
	})

	app.get('/api/leagueleaders', function (req, response) {
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
	})

	

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};