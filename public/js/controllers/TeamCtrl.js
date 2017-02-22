angular.module('TeamCtrl', []).controller('TeamController', function($scope, $routeParams, $http, $filter) {

	$scope.currentTeam = $filter('filter')($scope.$parent.teams, {teamId: $routeParams.teamID})[0].fullName;
		
	$http.get("/api/playersByTeam/"+$routeParams.teamID)
		.then(function(response){ 

			$scope.players = response.data.LeagueDashPlayerBioStats;

			$('#loadingIcon').hide();
			$('#player-table').show();
	});
});