angular.module('IndexCtrl', []).controller('IndexController', function($scope, $http, $window, $location) {

	$http.get("/api/team")
		.then(function(response){ 
			$scope.teams = response.data;
	});

	$scope.$on('$viewContentLoaded', function(event) {
		if (document.location.hostname.search("procityhoops.com") !== -1) {
			$window.ga('send', 'pageview', {page: $location.url()});
		}
	});
});