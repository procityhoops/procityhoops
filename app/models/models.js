var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new mongoose.Schema({
	teamId: Number,
	name: String,
	conference: String,
	win: Number,
	loss: Number,
	conferenceRank: Number,
	conferenceGamesBehind: Number,
	winPct: Number
});

var playerSchema = new mongoose.Schema({
	teamId: Number,
	name: String,
	college: String,
	height: String,
	weight: Number,
	age: Number,
	pointsPerGame: Number,
	reboundsPerGame: Number,
	assistsPerGame: Number
});

var gameSchema = new mongoose.Schema({
	teamId: Number,
	winLoss: String,
	score: String,
	matchup: String,
	gameDate: Date
});

var proCityHoopsSchema = new mongoose.Schema({
	lastUpdated: Date
});

mongoose.model('Game', gameSchema);
mongoose.model('Player', playerSchema);
mongoose.model('Team', teamSchema);
mongoose.model('ProCityHoops', proCityHoopsSchema);