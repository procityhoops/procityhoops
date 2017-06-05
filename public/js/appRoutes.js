angular.module('appRoutes', []).config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

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

	.when('/nba-news', {
		templateUrl : 'nba-news.html'
	})

	.when('/nba-all-star-game', {
		templateUrl : 'articles/nba-all-star-game.html'
	})

	.when('/need-based-mock-draft', {
		templateUrl : 'articles/need-based-mock-draft.html'
	})

	.when('/lakers-passing-on-ball', {
		templateUrl : 'articles/lakers-passing-on-ball.html'
	})

	.when('/celtics-sixers-trade', {
		templateUrl : 'articles/celtics-sixers-trade.html'
	})

	.when('/chris-paul-spurs', {
		templateUrl : 'articles/chris-paul-spurs.html'
	})

	.when('/knicks-blazers', {
		templateUrl : 'articles/knicks-blazers.html'
	})

	.when('/pistons-trade', {
		templateUrl : 'articles/pistons-trade.html'
	})

	.when('/bledsoe-trade', {
		templateUrl : 'articles/bledsoe-trade.html'
	})

	.when('/celtics-frontcourt', {
		templateUrl : 'articles/celtics-frontcourt.html'
	})

	.when('/noel-contract', {
		templateUrl : 'articles/noel-contract.html'
	})

	.when('/rubio', {
		templateUrl : 'articles/rubio.html'
	})

	.when('/knicks-pick', {
		templateUrl : 'articles/knicks-pick.html'
	})

	.when('/irving-curry', {
		templateUrl : 'articles/irving-curry.html'
	})

	.when('/finals-preview', {
		templateUrl : 'articles/finals-preview.html'
	})

	.when('/sixers-pick', {
		templateUrl : 'articles/sixers-pick.html'
	})

	.when('/lakers-pick', {
		templateUrl : 'articles/lakers-pick.html'
	})

	.when('/towns-review', {
		templateUrl : 'articles/towns-review.html'
	})

	.when('/celtics-pick', {
		templateUrl : 'articles/celtics-pick.html'
	})

	.when('/nba-draft', {
		templateUrl : 'nba-draft.html'
	})

	.when('/jonathan-issac', {
		templateUrl : 'articles/jonathan-issac.html'
	})

	.when('/nba-mock-draft-1', {
		templateUrl : 'articles/nba-mock-draft-1.html'
	})

	.when('/tatum-comparison', {
		templateUrl : 'articles/tatum-comparison.html'
	})

	.when('/celtics-cavs', {
		templateUrl : 'articles/celtics-cavs.html'
	})

	.when('/trade-deadline-breakdown', {
		templateUrl : 'articles/TradeDeadlineBreakdownArticle.html'
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

	.otherwise({templateUrl:'views/404.html'});
});