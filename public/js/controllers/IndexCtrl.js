angular.module('IndexCtrl', []).controller('IndexController', function($scope, $http) {

	$http.get("/api/teams")
		.then(function(response){ 
			$scope.teams = response.data.league.standard;
	});
});