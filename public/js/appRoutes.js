angular.module('appRoutes', []).config(function($routeProvider) {

	$routeProvider

		// route for the home page
	.when('/', {
		templateUrl : 'home.html',
		controller: 'HomeController'
	})

	.when('/eastern-conference', {
		templateUrl : 'eastern-conference.html'
	})

	.when('/western-conference', {
		templateUrl : 'western-conference.html'
	})

	.when('/trade-deadline-breakdown', {
		templateUrl : 'articles/oarticles/TradeDeadlineBreakdownArticle.html'
	})

	.when('/nba-redraft', {
		templateUrl : 'articles/nba-redraft.html'
	})

	.when('/warriors-spurs', {
		templateUrl : 'articles/warriors-spurs.html'
	})

	.when('/last-straw', {
		templateUrl : 'articles/last-straw.html'
	})

	.when('/monk-vs-fox', {
		templateUrl : 'articles/monk-vs-fox.html'
	})

	.when('/resting-nba-stars', {
		templateUrl : 'articles/resting-nba-stars.html'
	})

	.when('/top-young-players', {
		templateUrl : 'articles/top-young-players.html'
	})

		.when('/westbrook-harden', {
		templateUrl : 'articles/westbrook-harden.html'
	})

		.when('/rockets-review', {
		templateUrl : 'articles/rockets-review.html'
	})

		.when('/nba-winners-losers', {
		templateUrl : 'articles/oarticles/nba-winners-losers.html'
	})

		.when('/rookies-new-teams', {
		templateUrl : 'articles/oarticles/rookies-new-teams.html'
	})		

		.when('/ball-vs-fultz', {
		templateUrl : 'articles/oarticles/ball-vs-fultz.html'
	})		

		.when('/contender-pretender', {
		templateUrl : 'articles/oarticles/contender-pretender.html'
	})	

		.when('/mn-vs-phi', {
		templateUrl : 'articles/oarticles/mn-vs-phi.html'
	})	

		.when('/nba-mock-draft', {
		templateUrl : 'articles/oarticles/nba-mock-draft.html'
	})	

		.when('/nba-super-team', {
		templateUrl : 'articles/oarticles/nba-super-team.html'
	})	

		.when('/drew-hanlen', {
		templateUrl : 'articles/oarticles/drew-hanlen.html'
	})	

		.when('/featured-articles', {
		templateUrl : 'featured-articles.html'
	})


	.when('/team/:teamID', {
		templateUrl : 'views/team-page.html',
		controller: 'TeamController'
	})

	.when('/league-leaders', {
		templateUrl : 'views/league-leaders.html',
		controller: 'LeagueLeadersController'
	})

	.when('/standings/:conference', {
		templateUrl : 'views/standings.html',
		controller: 'StandingsController'
	})
});