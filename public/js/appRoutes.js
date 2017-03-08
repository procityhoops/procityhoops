angular.module('appRoutes', []).config(function($routeProvider) {

	$routeProvider

		// route for the home page
	.when('/', {
		templateUrl : 'home.html',
		controller: 'HomeController'
	})

	.when('/atlanta-hawks', {
		templateUrl : 'teams/atlanta-hawks.html'
	})

	.when('/boston-celtics', {
		templateUrl : 'teams/boston-celtics.html'
	})

	.when('/brooklyn-nets', {
		templateUrl : 'teams/brooklyn-nets.html'
	})

	.when('/charlotte-hornets', {
		templateUrl : 'teams/charlotte-hornets.html'
	})

	.when('/chicago-bulls', {
		templateUrl : 'teams/chicago-bulls.html'
	})

	.when('/cleveland-cavaliers', {
		templateUrl : 'teams/cleveland-cavaliers.html'
	})

	.when('/dallas-mavericks', {
		templateUrl : 'teams/dallas-mavericks.html'
	})

	.when('/denver-nuggets', {
		templateUrl : 'teams/denver-nuggets.html'
	})

	.when('/detroit-pistons', {
		templateUrl : 'teams/detroit-pistons.html'
	})

	.when('/golden-state-warriors', {
		templateUrl : 'teams/golden-state-warriors.html'
	})

	.when('/houston-rockets', {
		templateUrl : 'teams/houston-rockets.html'
	})

	.when('/indiana-pacers', {
		templateUrl : 'teams/indiana-pacers.html'
	})

	.when('/los-angeles-clippers', {
		templateUrl : 'teams/los-angeles-clippers.html'
	})

	.when('/los-angeles-lakers', {
		templateUrl : 'teams/los-angeles-lakers.html'
	})

	.when('/memphis-grizzlies', {
		templateUrl : 'teams/memphis-grizzlies.html'
	})

	.when('/miami-heat', {
		templateUrl : 'teams/miami-heat.html'
	})

	.when('/milwaukee-bucks', {
		templateUrl : 'teams/milwaukee-bucks.html'
	})

	.when('/minnesota-timberwolves', {
		templateUrl : 'teams/minnesota-timberwolves.html'
	})

	.when('/new-orleans-pelicans', {
		templateUrl : 'teams/new-orleans-pelicans.html'
	})

	.when('/new-york-knicks', {
		templateUrl : 'teams/new-york-knicks.html'
	})

	.when('/oklahoma-city-thunder', {
		templateUrl : 'teams/oklahoma-city-thunder.html'
	})

	.when('/orlando-magic', {
		templateUrl : 'teams/orlando-magic.html'
	})

	.when('/philadelphia-76ers', {
		templateUrl : 'teams/philadelphia-76ers.html'
	})

	.when('/phoenix-suns', {
		templateUrl : 'teams/phoenix-suns.html'
	})

	.when('/portland-trail-blazers', {
		templateUrl : 'teams/portland-trail-blazers.html'
	})

	.when('/sacramento-kings', {
		templateUrl : 'teams/sacramento-kings.html'
	})

	.when('/san-antonio-spurs', {
		templateUrl : 'teams/san-antonio-spurs.html'
	})

	.when('/toronto-raptors', {
		templateUrl : 'teams/toronto-raptors.html'
	})

	.when('/utah-jazz', {
		templateUrl : 'teams/utah-jazz.html'
	})

	.when('/washington-wizards', {
		templateUrl : 'teams/washington-wizards.html'
	})

	.when('/trade-deadline-breakdown', {
		templateUrl : 'articles/TradeDeadlineBreakdownArticle.html'
	})

	.when('/nba-redraft', {
		templateUrl : 'articles/nba-redraft.html'
	})

	.when('/team/:teamID', {
		templateUrl : 'views/team-page.html',
		controller: 'TeamController'
	})

	.when('/league-leaders', {
		templateUrl : 'views/league-leaders.html',
		controller: 'LeagueLeadersController'
	})


});