angular.module('TeamCtrl', []).controller('TeamController', function($scope, $routeParams, $http, $filter) {

	$http.get("/api/allplayers")
		.then(function(response){ 
			$scope.players = $filter('filter')(response.data.CommonAllPlayers, {team_id: $routeParams.teamID});

			$scope.city = $scope.players[0].team_city;	
			$scope.teamName = $scope.players[0].team_name;

			$('#loadingIcon').hide();
	});
});