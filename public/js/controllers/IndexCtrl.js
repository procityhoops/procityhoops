angular.module('IndexCtrl', []).controller('IndexController', function($scope, $http) {

	$http.get("/api/team")
		.then(function(response){ 
			$scope.teams = response.data;
	});
});