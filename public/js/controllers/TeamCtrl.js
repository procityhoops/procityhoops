angular.module('TeamCtrl', []).controller('TeamController', function($scope, $routeParams, $http, $filter) {

	function isScopeLoaded() {
		if ($scope.players && $scope.standings && $scope.recentGames)
		{
			// everything we need on the page is loaded. 
			$('#team-page-content').show();
		}
	}

	$scope.teamNickname = $routeParams.teamNickname;

	$scope.$parent.$watch('teams', function (val) {
		if (val)
		{
			$scope.currentTeamId = $filter('filter')(val, {nickname: $scope.teamNickname})[0].teamId;
			$scope.currentTeam = $filter('filter')(val, {teamId: $scope.currentTeamId})[0].name;

			$http.get("/api/players/"+$scope.currentTeamId)
				.then(function(response){
					$scope.players = response.data;
					isScopeLoaded();
			});

			$http.get("/api/games/"+$scope.currentTeamId)
				.then(function(response){ 
					$scope.recentGames = response.data;
					isScopeLoaded();
			});
			
			if ($filter('filter')(val, {teamId: $scope.currentTeamId})[0].conference == 'East')
			{
				$scope.conferenceName = "East";
				var conferenceStandings = val.filter(function(team) { return team.conference == "East";});

			}
			else 
			{
				$scope.conferenceName = "West";
				var conferenceStandings = val.filter(function(team) { return team.conference == "West";});
			}
			conferenceStandings = $filter('orderBy')(conferenceStandings, 'conferenceRank');

			// finds index of current team in standings array
			var teamIndex = conferenceStandings.map(function(e) { return e.teamId; }).indexOf($scope.currentTeamId);
			$scope.standings = conferenceStandings.slice((teamIndex - 3) <= 0 ? 0 : teamIndex - 3, teamIndex + 4)
		}

		isScopeLoaded();
	});

	$scope.propertyName = 'name';
	$scope.reverse = false;

	$scope.sortBy = function(propertyName) {
		$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
		$scope.propertyName = propertyName;
	};

	$scope.convertToUTC = function(dt) {
		var localDate = new Date(dt);
		var localTime = localDate.getTime();
		var localOffset = localDate.getTimezoneOffset() * 60000;
		return new Date(localTime + localOffset);
	}
});