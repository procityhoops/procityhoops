angular.module('TeamCtrl', []).controller('TeamController', function($scope, $routeParams, $http, $filter) {

	$http.get("/api/playersByTeam/"+$routeParams.teamID)
		.then(function(response){ 
			$scope.players = response.data.LeagueDashPlayerBioStats;

			$('#loadingIcon').hide();
			$('#player-table').show();
	});

	$scope.$parent.$watch('teams', function (val) {
		$scope.currentTeam = $filter('filter')(val, {teamId: $routeParams.teamID})[0].fullName;
	})
});