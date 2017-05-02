angular.module('LeagueLeadersCtrl', []).controller('LeagueLeadersController', function($scope, $routeParams, $http) {
	
	populateLeagueLeaders = function (category, limit){
		$scope.category = category;
		$http.get("/api/leagueleaders/" + $scope.category + "/" + limit)
			.then(function(response){ 
				
				$scope.players = response.data;

				$('#league-leaders-table').show();
		});
	}

	populateLeagueLeaders('pointsPerGame', $('#limit').val());
});

updateLeagueLeaders = function() {
	populateLeagueLeaders($('#category').val(), $('#limit').val());
};