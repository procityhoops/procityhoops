angular.module('appRoutes', []).config(function($routeProvider) {

	$routeProvider

		// route for the home page
	.when('/', {
		templateUrl : 'home.html'
	})

	.when('/toronto-raptors', {
		templateUrl : 'teams/toronto-raptors.html'
	})

	.when('/indiana-pacers', {
		templateUrl : 'teams/indiana-pacers.html'
	})

	.when('/cleveland-cavaliers', {
		templateUrl : 'teams/cleveland-cavaliers.html'
	})

	.when('/fantasy-football', {
		templateUrl : 'articles/TradeDeadlineBreakdownArticle.html'
	})

});