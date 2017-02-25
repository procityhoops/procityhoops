angular.module('TeamCtrl', []).controller('TeamController', function($scope, $routeParams, $http, $filter) {

	$scope.currentTeamId = $routeParams.teamID;

	$http.get("/api/playersByTeam/"+$scope.currentTeamId)
		.then(function(response){ 
			$scope.players = response.data.LeagueDashPlayerBioStats;

			$('#loadingIcon').hide();
			$('#player-table').show();
	});

	$http.get("/api/teamGameLog/"+$scope.currentTeamId)
		.then(function(response){ 

			$scope.recentGames = response.data.TeamGameLog.slice(0, 5)
			
			$('#team-last5-games').show();
	});

	$http.get("/api/conferenceStandings")
		.then(function(response){ 
			$scope.$parent.$watch('teams', function (val) {
				if (val)
				{
					if ($filter('filter')(val, {teamId: $scope.currentTeamId})[0].confName == 'East')
					{
						var conferenceStandings = response.data.league.standard.conference.east;
					}
					else 
					{
						var conferenceStandings = response.data.league.standard.conference.west;
					}

					// finds index of current team in standings array
					var teamIndex = conferenceStandings.map(function(e) { return e.teamId; }).indexOf($scope.currentTeamId)
					$scope.standings = conferenceStandings.slice((teamIndex - 3) <= 0 ? 0 : teamIndex - 3, teamIndex + 4)
				}
			})
	});




	$scope.$parent.$watch('teams', function (val) {
		if (val)
		{
			$scope.currentTeam = $filter('filter')(val, {teamId: $scope.currentTeamId})[0].fullName;
		}
	})
});