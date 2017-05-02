angular.module('StandingsCtrl', []).controller('StandingsController', function($scope, $http, $routeParams, $filter) {

	$scope.conference = $routeParams.conference === "east" ? "Eastern" : "Western";

	$scope.$parent.$watch('teams', function (val) {
		if (val)
		{
			$('#conference').val($routeParams.conference);
			var conferenceStandings = $scope.$parent.teams.filter(function(team) { return team.conference.toLowerCase() === $routeParams.conference;});
			$scope.standings = $filter('orderBy')(conferenceStandings, 'conferenceRank');
		}
	});

	filterByConference = function (conference){
		var conferenceStandings = $scope.$parent.teams.filter(function(team) { return team.conference.toLowerCase() === conference;});
		$scope.standings = $filter('orderBy')(conferenceStandings, 'conferenceRank');
		$scope.$apply()
	}
});

updateConference = function() {
	filterByConference($('#conference').val());
};