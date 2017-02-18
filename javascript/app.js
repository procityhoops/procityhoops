var proCityHoopsApp = angular.module('proCityHoopsApp', ['ngRoute']);

// configure our routes
proCityHoopsApp.config(function($routeProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'pages/home.html'
	})

	.when('/toronto-raptors', {
		templateUrl : 'pages/teams/toronto-raptors.html'
	})

	.when('/indiana-pacers', {
		templateUrl : 'pages/teams/indiana-pacers.html'
	})

	.when('/cleveland-cavaliers', {
		templateUrl : 'pages/teams/cleveland-cavaliers.html'
	})

	.when('/fantasy-football', {
		templateUrl : 'pages/articles/Article1.html'
	})

});