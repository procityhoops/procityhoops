angular.module('LeagueLeadersCtrl', []).controller('LeagueLeadersController', function($scope, $routeParams, $http) {
	
	$http.get("/api/leagueleaders")
		.then(function(response){ 
			$scope.players = response.data.LeagueLeaders;

			$('#loadingIcon').hide();
			$('#league-leaders-table').show();
	});
});