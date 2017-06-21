angular.module('adminAppRoutes', ['AdminCtrl']).config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider

	// route for the home page
	.when('/admin', {
		templateUrl : '/admin/adminHome.html',
		controller: 'AdminController'
	})

	.when('/admin/logout', {
		templateUrl : '/admin/logout'
	})

	.otherwise({templateUrl:'/404.html'});
});

angular.module('AdminCtrl', []).controller('AdminController', function($scope, $http, $window, $location) {

	$('#saveHeadline').click(function() {

		var parameter = JSON.stringify({title:$('#title').val(), text:$('#text').val()});
		
		$http.post('api/saveHeadline', parameter).
			success(function(data, status, headers, config) {

			$('#title').val('');
			$('#text').val('');
			alert('headline saved!');
		}).
		error(function(data, status, headers, config) {
		
		});
	});


});