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
		templateUrl : 'articles/TradeDeadlineBreakdownArticle.html'
	})

	.when('/nba-redraft', {
		templateUrl : 'articles/nba-redraft.html'
	})

	.when('/monk-vs-fox', {
		templateUrl : 'articles/monk-vs-fox.html'
	})

		.when('/westbrook-harden', {
		templateUrl : 'articles/westbrook-harden.html'
	})

		.when('/rockets-review', {
		templateUrl : 'articles/rockets-review.html'
	})

		.when('/nba-winners-losers', {
		templateUrl : 'articles/nba-winners-losers.html'
	})

		.when('/rookies-new-teams', {
		templateUrl : 'articles/rookies-new-teams.html'
	})		

		.when('/ball-vs-fultz', {
		templateUrl : 'articles/ball-vs-fultz.html'
	})		

		.when('/contender-pretender', {
		templateUrl : 'articles/contender-pretender.html'
	})	

		.when('/mn-vs-phi', {
		templateUrl : 'articles/mn-vs-phi.html'
	})	

		.when('/nba-mock-draft', {
		templateUrl : 'articles/nba-mock-draft.html'
	})	

		.when('/nba-super-team', {
		templateUrl : 'articles/nba-super-team.html'
	})	

		.when('/drew-hanlen', {
		templateUrl : 'articles/drew-hanlen.html'
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