// util.js
// ========
var mongoose = require( 'mongoose' );
var Team = mongoose.model('Team');
var Player = mongoose.model('Player');
var Game = mongoose.model('Game');
var ProCityHoops = mongoose.model('ProCityHoops');
var moment = require('moment')
const nba = require('nba.js').default;

var saveGames = function () {
	console.log("saving games");
	nba.stats.leagueGamelog({
		LeagueID: "00",
		Season: "2016-17",
		SeasonType: "Regular Season",
		Direction: "DESC",
		Sorter: "DATE",
		PlayerOrTeam: "T"
	}).then(function(res) {
		games = res.LeagueGameLog.sort(function(obj1, obj2) {
			return obj1.game_id - obj2.game_id;
		});
		Game.remove(function(err,removed) {
			console.log("Removed " + removed + " games.");

			for (i = 0; i < games.length; i = i + 2) { 
				// if "wl" is null that means game has not been played yet
				if (games[i].wl)
				{
					if (games[i].matchup.indexOf("@") !== -1)
					{
						var awayTeam = games[i];
						var homeTeam = games[i + 1];
					}
					else
					{
						var awayTeam = games[i + 1];
						var homeTeam = games[i];
					}
					var homeTeamGame = new Game();
					homeTeamGame.teamId = homeTeam.team_id;
					homeTeamGame.winLoss = homeTeam.wl;
					homeTeamGame.score = homeTeam.pts + " - " + awayTeam.pts;
					homeTeamGame.matchup = homeTeam.matchup;
					homeTeamGame.gameDate = homeTeam.game_date;

					var awayTeamGame = new Game();
					awayTeamGame.teamId = awayTeam.team_id;
					awayTeamGame.winLoss = awayTeam.wl;
					awayTeamGame.score = awayTeam.pts + " - " + homeTeam.pts;
					awayTeamGame.matchup = awayTeam.matchup;
					awayTeamGame.gameDate = awayTeam.game_date;

					homeTeamGame.save(function(err, post) { if (err){return err; } });
					awayTeamGame.save(function(err, post) {	if (err){return err; } });
				}
			}
		});
		
		console.log("games saved");
	}).catch(function(err) {
		console.error(err);
	});
}

var saveTeams = function () {
	console.log("save teams");

	//get team standings
	nba.data.conferenceStandings({
		year: 2016
	}).then(function(res) {

		var easternConfStandings = res.league.standard.conference.east;
		var westernConfStandings = res.league.standard.conference.west;

		//get team data
		nba.data.teams({
			year: 2016
		}).then(function(res) {
			Team.remove(function(err,removed) {
				console.log("Removed " + removed + " teams.");

				var teams = res.league.standard;
			
				teams.forEach(function(obj){
					if (obj.isNBAFranchise)
					{
						if (obj.confName == "East")
						{
							var teamStandings = easternConfStandings.filter(function(team) { return team.teamId == obj.teamId;})[0];
						}
						else
						{
							var teamStandings = westernConfStandings.filter(function(team) { return team.teamId == obj.teamId;})[0];
						}

						var team = new Team();
						team.teamId = obj.teamId;
						team.name = obj.fullName;
						team.nickname = obj.nickname;
						team.conference = obj.confName;
						team.win = teamStandings.win;
						team.loss = teamStandings.loss;
						team.winPct = teamStandings.winPct;
						team.conferenceRank = teamStandings.confRank;
						team.conferenceGamesBehind = teamStandings.gamesBehind;
						team.save(function(err, team) { if (err){return err;} });
					}
				});
			});

			console.log("teams saved");

		}).catch(function(err) {
			console.error(err);
		});

	}).catch(function(err) {
		console.error(err);
	});
}


var savePlayers = function () {
	console.log("save players");
	
	//repopulate
	nba.stats.playerBioStats({
		LeagueID: '00',
		Season: '2016-17',
		perMode: 'PerGame',
		seasonType: 'Regular Season'
	}).then(function(res) {
		// empty team collection
		Player.remove(function(err,removed) {
			console.log("Removed " + removed + " players.");

			var players = res.LeagueDashPlayerBioStats;
			
			players.forEach(function(playerObj){
				var player = new Player();
				player.teamId = playerObj.team_id,
				player.team_abbreviation = playerObj.team_abbreviation,
				player.name = playerObj.player_name,
				player.college = playerObj.college,
				player.height = playerObj.player_height,
				player.height_inches = playerObj.player_height_inches,
				player.weight = playerObj.player_weight,
				player.age = playerObj.age,
				player.pointsPerGame = playerObj.pts,
				player.reboundsPerGame = playerObj.reb,
				player.assistsPerGame = playerObj.ast,
				player.netRating = playerObj.net_rating,
				player.save(function(err, player) {	if (err){return err;} });
			});

			console.log("players saved");
		});

	}).catch(function(err) {
		console.error(err);
	});
}



module.exports = {
	refreshGames: function () {
		saveGames();
	},

	refreshTeams: function () {
		saveTeams();
	},

	refreshPlayers: function () {
		savePlayers();
	},

	checkData: function () {
		ProCityHoops.find(function(err, proCityHoops){
			if(err){
				return err;
			}
			
			var now = moment(new Date());
			if (proCityHoops.length === 0 || now.diff(proCityHoops[0].lastUpdated, 'hours') >= 12)
			{
				console.log("update everything!")
				saveGames();
				saveTeams();
				savePlayers();

				ProCityHoops.remove(function(err,removed) {
					console.log("Removed " + removed + " ProCityHoops");
				});

				var proCityHoops = new ProCityHoops();
				proCityHoops.lastUpdated = new Date();
				proCityHoops.save(function(err, proCityHoops) { if (err){return err;} });
			}
		});
	}
};