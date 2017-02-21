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

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};