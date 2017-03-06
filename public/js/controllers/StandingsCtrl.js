angular.module('StandingsCtrl', []).controller('StandingsController', function($scope, $http, $routeParams, $filter) {

	$scope.conference = $routeParams.conference === "east" ? "Eastern" : "Western";

	$scope.$parent.$watch('teams', function (val) {
		if (val)
		{
			var conferenceStandings = val.filter(function(team) { return team.conference.toLowerCase() === $routeParams.conference;});
			$scope.standings = $filter('orderBy')(conferenceStandings, 'conferenceRank');
		}
	});
});