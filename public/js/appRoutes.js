angular.module('appRoutes', []).config(function($routeProvider) {

	$routeProvider

		// route for the home page
	.when('/', {
		templateUrl : 'home.html',
		controller: 'HomeController'
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