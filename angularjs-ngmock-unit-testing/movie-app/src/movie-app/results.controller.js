angular.module('movieApp')
	.controller('ResultsController', function ($scope, $location, omdbApi,$exceptionHandler,$log) {
		var query = $location.search().q;
		$log.debug('Controller loaded with query:',query);
		omdbApi.search(query)
			.then(function (data) {
				$scope.results = data.Search;
			})
			.catch(function (e) {
				//$scope.errorMessage = 'Something went wrong!';
				//throw "Something went wrong!";
				$exceptionHandler(e);
			});

		$scope.expand=function(index,id){
			omdbApi.find(id).then(function(data){
				$scope.results[index].data=data;
				$scope.results[index].open=true;
			});
		}
	});
