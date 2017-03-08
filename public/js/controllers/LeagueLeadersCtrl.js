angular.module('LeagueLeadersCtrl', []).controller('LeagueLeadersController', function($scope, $routeParams, $http) {
	
	populateLeagueLeaders = function (category){
		$scope.category = category;
		$http.get("/api/leagueleaders/" + $scope.category)
			.then(function(response){ 
				
				$scope.players = response.data;

				$('#league-leaders-table').show();
		});
	}

	populateLeagueLeaders('pointsPerGame');
});

updateCategory = function() {
	var category = $('#category').val();
	populateLeagueLeaders(category);
};