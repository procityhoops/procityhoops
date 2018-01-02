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

angular.module('AdminCtrl', ['infinite-scroll']).controller('AdminController', function($scope, $http, $window, $location, $filter, $route) {

	$('#saveHeadline').click(function() {
		var headlineID = $('#editHeadline #headlineID').val();

		var parameter = JSON.stringify({title:$('#title').val().trim(), text:$('#text').val().trim(), id: headlineID});
		
		$http.post('api/saveHeadline', parameter)
		.success(function(data, status, headers, config) {
			$('#deleteHeadlineModal').modal('hide');
			$('body').removeClass('modal-open');
			$('.modal-backdrop').remove();
			$route.reload();
		})
		.error(function(data, status, headers, config) {
		
		});
	});

	$('#deleteHeadline').click(function() {
		var headlineID = $('#deleteHeadlineModal #headlineID').val();
		$http.delete("api/deleteHeadline/"+headlineID)
		.then(function(response){
			$('#deleteHeadlineModal').modal('hide');
			$('body').removeClass('modal-open');
			$('.modal-backdrop').remove();
			$route.reload();
		});
	});

	$scope.headlines = [];
	$scope.lowerBound = 0;
	$scope.isBusy = false;
	$scope.stopLoading = false;

	$scope.myPagingFunction = function (){
		if(!$scope.isBusy && !$scope.stopLoading)
		{
			$scope.isBusy = true;
			getHeadlines($scope.lowerBound);	
		}	
	};

	var getHeadlines = function(lowerBound) {
		var increment = 20;
		$http.get("/api/getHeadlines/"+lowerBound+"/"+increment)
		.then(function(response){
			if(response.data.length === 0)
			{
				$scope.stopLoading = true;
			}
			Array.prototype.push.apply($scope.headlines, response.data);
			$scope.lowerBound += increment;
			$scope.isBusy = false;
		});
	}

	$(document).on("click", "#addNewButton", function () {
		// clear the form
		var today = new Date();
		$('#dateAdded').text($filter('date')(today));
		$('#title').val('');
		$('#text').summernote('code', '');
		$('#editHeadline #headlineID').val('');
		$('#editHeadline').modal('show');
	});

	$scope.editHeadline = function (headlineID) {
		var headline = $.grep($scope.headlines, function(e){ return e._id == headlineID; });
		
		$('#title').val(headline[0].title);
		$('#dateAdded').text($filter('date')(headline[0].dateAdded));
		$('#text').summernote('code', headline[0].text);
		$('#editHeadline #headlineID').val(headline[0]._id);
		$('#editHeadline').modal('show');
	}

	$scope.deleteHeadline = function (headlineID) {
		var headline = $.grep($scope.headlines, function(e){ return e._id == headlineID; });
		
		var headline = $.grep($scope.headlines, function(e){ return e._id == headlineID; });
		$('#headlineTitle').text(headline[0].title);
		$('#headlineDate').text($filter('date')(headline[0].dateAdded));
		$('#headlineText').html(headline[0].text);

		$('#deleteHeadlineModal #headlineID').val(headline[0]._id);

		$('#deleteHeadlineModal').modal('show');
	}
});

