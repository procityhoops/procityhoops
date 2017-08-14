angular.module('appRoutes', ['NewsFeedCtrl']).config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider

		// route for the home page
	.when('/', {
		templateUrl : 'home.html',
		controller: 'HomeController'
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

	.when('/news-feed', {
		templateUrl : 'views/news-feed.html',
		controller: 'NewsFeedController'
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

	.when('/nba-free-agency-previews', {
		templateUrl : 'nba-free-agency-previews.html'
	})

	.when('/17-18-nba-games-to-watch', {
		templateUrl : 'articles/17-18-nba-games-to-watch.html'
	})

	.when('/tim-duncan-epitome-of-greatness', {
		templateUrl : 'articles/tim-duncan-epitome-of-greatness.html'
	})

	.when('/the-long-and-fruitful-journey-of-hassan-whiteside', {
		templateUrl : 'articles/the-long-and-fruitful-journey-of-hassan-whiteside.html'
	})

	.when('/is-kevin-love-being-overlooked', {
		templateUrl : 'articles/is-kevin-love-being-overlooked.html'
	})

	.when('/karl-anthony-towns-2017-season-mix', {
		templateUrl : 'articles/karl-anthony-towns-2017-season-mix.html'
	})

	.when('/nba-2016-2017-season-video', {
		templateUrl : 'articles/nba-2016-2017-season-video.html'
	})

	.when('/top-five-underrated-free-agency-moves', {
		templateUrl : 'articles/top-five-underrated-free-agency-moves.html'
	})

	.when('/lamarcus-aldridge-trade-mystery', {
		templateUrl : 'articles/lamarcus-aldridge-trade-mystery.html'
	})

	.when('/brooklyn-nets-need-to-sign-kcp', {
		templateUrl : 'articles/brooklyn-nets-need-to-sign-kcp.html'
	})

	.when('/flip-saunders-his-vision-lives-on', {
		templateUrl : 'articles/flip-saunders-his-vision-lives-on.html'
	})

	.when('/phil-jackson-a-eulogy', {
		templateUrl : 'articles/phil-jackson-a-eulogy.html'
	})

	.when('/nba-draft-steals-2017', {
		templateUrl : 'articles/nba-draft-steals-2017.html'
	})

	.when('/boston-celtics-free-agency-preview', {
		templateUrl : 'articles/boston-celtics-free-agency-preview.html'
	})

	.when('/toronto-raptors-free-agency-preview', {
		templateUrl : 'articles/toronto-raptors-free-agency-preview.html'
	})

	.when('/houston-rockets-free-agency-preview', {
		templateUrl : 'articles/houston-rockets-free-agency-preview.html'
	})

	.when('/san-antonio-spurs-free-agency-preview', {
		templateUrl : 'articles/san-antonio-spurs-free-agency-preview.html'
	})

	.when('/memphis-grizzlies-free-agency-preview', {
		templateUrl : 'articles/memphis-grizzlies-free-agency-preview.html'
	})

	.when('/atlanta-hawks-free-agency-preview', {
		templateUrl : 'articles/atlanta-hawks-free-agency-preview.html'
	})

	.when('/milwaukee-bucks-free-agency-preview', {
		templateUrl : 'articles/milwaukee-bucks-free-agency-preview.html'
	})

	.when('/indiana-pacers-free-agency-preview', {
		templateUrl : 'articles/indiana-pacers-free-agency-preview.html'
	})

	.when('/washington-wizards-free-agency-preview', {
		templateUrl : 'articles/washington-wizards-free-agency-preview.html'
	})

	.when('/cleveland-cavaliers-free-agency-preview', {
		templateUrl : 'articles/cleveland-cavaliers-free-agency-preview.html'
	})

	.when('/golden-state-warriors-free-agency-preview', {
		templateUrl : 'articles/golden-state-warriors-free-agency-preview.html'
	})

	.when('/los-angeles-clippers-free-agency-preview', {
		templateUrl : 'articles/los-angeles-clippers-free-agency-preview.html'
	})

	.when('/chicago-bulls-free-agency-preview', {
		templateUrl : 'articles/chicago-bulls-free-agency-preview.html'
	})

	.when('/utah-jazz-free-agency-preview', {
		templateUrl : 'articles/utah-jazz-free-agency-preview.html'
	})

	.when('/oklahoma-city-thunder-free-agency-preview', {
		templateUrl : 'articles/oklahoma-city-thunder-free-agency-preview.html'
	})

	.when('/portland-trail-blazers-free-agency-preview', {
		templateUrl : 'articles/portland-trail-blazers-free-agency-preview.html'
	})

	.when('/miami-heat-free-agency-preview', {
		templateUrl : 'articles/miami-heat-free-agency-preview.html'
	})

	.when('/detroit-pistons-free-agency-preview', {
		templateUrl : 'articles/detroit-pistons-free-agency-preview.html'
	})

	.when('/denver-nuggets-free-agency-preview', {
		templateUrl : 'articles/denver-nuggets-free-agency-preview.html'
	})

	.when('/new-orleans-pelicans-free-agency-preview', {
		templateUrl : 'articles/new-orleans-pelicans-free-agency-preview.html'
	})

	.when('/dallas-mavericks-free-agency-preview', {
		templateUrl : 'articles/dallas-mavericks-free-agency-preview.html'
	})

	.when('/charlotte-hornets-free-agency-preview', {
		templateUrl : 'articles/charlotte-hornets-free-agency-preview.html'
	})

	.when('/minnesota-timberwolves-free-agency-preview', {
		templateUrl : 'articles/minnesota-timberwolves-free-agency-preview.html'
	})

	.when('/new-york-knicks-free-agency-preview', {
		templateUrl : 'articles/new-york-knicks-free-agency-preview.html'
	})

	.when('/sacramento-kings-free-agency-preview', {
		templateUrl : 'articles/sacramento-kings-free-agency-preview.html'
	})

	.when('/orlando-magic-free-agency-preview', {
		templateUrl : 'articles/orlando-magic-free-agency-preview.html'
	})

	.when('/philadelphia-76ers-free-agency-preview', {
		templateUrl : 'articles/philadelphia-76ers-free-agency-preview.html'
	})

	.when('/los-angeles-lakers-free-agency-preview', {
		templateUrl : 'articles/los-angeles-lakers-free-agency-preview.html'
	})

	.when('/brooklyn-nets-free-agency-preview', {
		templateUrl : 'articles/brooklyn-nets-free-agency-preview.html'
	})

	.when('/phoenix-suns-free-agency-preview', {
		templateUrl : 'articles/phoenix-suns-free-agency-preview.html'
	})

	.when('/nba-draft-grades-2017', {
		templateUrl : 'articles/nba-draft-grades-2017.html'
	})

	.when('/darren-wolfson-q-and-a', {
		templateUrl : 'articles/darren-wolfson-q-and-a.html'
	})

	.when('/brooklyn-nets-moving-in-the-right-direction', {
		templateUrl : 'articles/brooklyn-nets-moving-in-the-right-direction.html'
	})

	.when('/dwight-howard-to-the-hornets', {
		templateUrl : 'articles/dwight-howard-to-the-hornets.html'
	})

	.when('/kristaps-porzingis-landing-spots', {
		templateUrl : 'articles/kristaps-porzingis-landing-spots.html'
	})

	.when('/cavaliers-let-go-of-david-griffin', {
		templateUrl : 'articles/cavaliers-let-go-of-david-griffin.html'
	})

	.when('/russell-to-brooklyn-lopez-to-lakers', {
		templateUrl : 'articles/russell-to-brooklyn-lopez-to-lakers.html'
	})

	.when('/kevin-durant-joins-the-warriors', {
		templateUrl : 'articles/kevin-durant-joins-the-warriors.html'
	})

	.when('/deaaron-fox-draft-profile', {
		templateUrl : 'articles/deaaron-fox-draft-profile.html'
	})

	.when('/jarrett-allen-draft-profile', {
		templateUrl : 'articles/jarrett-allen-draft-profile.html'
	})

	.when('/nba-mock-draft-four', {
		templateUrl : 'articles/nba-mock-draft-four.html'
	})

	.when('/nba-mock-draft-three', {
		templateUrl : 'articles/nba-mock-draft-three.html'
	})

	.when('/dennis-smith-draft-profile', {
		templateUrl : 'articles/dennis-smith-draft-profile.html'
	})

	.when('/jimmy-butler-on-the-move', {
		templateUrl : 'articles/jimmy-butler-on-the-move.html'
	})

	.when('/paul-george-is-leaving-indiana', {
		templateUrl : 'articles/paul-george-is-leaving-indiana.html'
	})

	.when('/celtics-and-sixers-trade-agreed-upon', {
		templateUrl : 'articles/celtics-and-sixers-trade-agreed-upon.html'
	})

	.when('/celtics-sixers-trade-pick-one', {
		templateUrl : 'articles/celtics-sixers-trade-pick-one.html'
	})

	.when('/nba-rumors-june-15-2017', {
		templateUrl : 'articles/nba-rumors-june-15-2017.html'
	})

	.when('/nba-mock-draft-two', {
		templateUrl : 'articles/nba-mock-draft-two.html'
	})

	.when('/markelle-fultz-draft-profile', {
		templateUrl : 'articles/markelle-fultz-draft-profile.html'
	})

	.when('/lonzo-ball-draft-profile', {
		templateUrl : 'articles/lonzo-ball-draft-profile.html'
	})

	.when('/malik-monk-draft-profile', {
		templateUrl : 'articles/malik-monk-draft-profile.html'
	})

	.when('/zach-collins-draft-profile', {
		templateUrl : 'articles/zach-collins-draft-profile.html'
	})

	.when('/luke-kennard-draft-profile', {
		templateUrl : 'articles/luke-kennard-draft-profile.html'
	})

	.when('/markelle-fultz-to-workout-with-sacramento', {
		templateUrl : 'articles/markelle-fultz-to-workout-with-sacramento.html'
	})

	.when('/lakers-open-to-dealing-second-pick', {
		templateUrl : 'articles/lakers-open-to-dealing-second-pick.html'
	})

	.when('/gordon-hayward-to-miami', {
		templateUrl : 'articles/gordon-hayward-to-miami.html'
	})

	.when('/buy-or-sell-lebron-heading-west', {
		templateUrl : 'articles/buy-or-sell-lebron-heading-west.html'
	})

	.when('/fix-super-teams', {
		templateUrl : 'articles/fix-super-teams.html'
	})

	.when('/cavs-rumors', {
		templateUrl : 'articles/cavs-rumors.html'
	})

	.when('/nba-draft-rumors', {
		templateUrl : 'articles/nba-draft-rumors.html'
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

	.otherwise({templateUrl:'views/404.html'});
});

angular.module('NewsFeedCtrl', ['infinite-scroll']).controller('NewsFeedController', function($scope, $http, $window, $location) {

	$scope.headlines = [];
	$scope.lowerBound = 0;
	$scope.isBusy = false;
	$scope.stopLoading = false;

	$scope.myPagingFunction = function (){
		if(!$scope.isBusy && !$scope.stopLoading)
		{
			$scope.isBusy = true;
			getHeadlines($scope.lowerBound);	
		}	
	};

	var getHeadlines = function(lowerBound) {
		$http.get("/api/getHeadlines/"+lowerBound+"/10")
			.then(function(response){
				if(response.data.length === 0)
				{
					$scope.stopLoading = true;
				}
				Array.prototype.push.apply($scope.headlines, response.data);
				$scope.lowerBound += 10;
				$scope.isBusy = false;
		});
	}
});