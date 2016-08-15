describe('Search Controller', function() {

	var $location;
	var $scope;
	var $timeout;

	beforeEach(module('movieApp'));

	beforeEach(inject(function(_$controller_, _$location_,_$timeout_) {
		$scope = {};
		$location = _$location_;
		$timeout=_$timeout_;
		_$controller_('SearchController', { $scope: $scope, $location: _$location_,$timeout:_$timeout_ });
	}));

	it('should redirect to query results for non-empty query', function() {
		$scope.query = 'star wars';
		$scope.search();
		expect($location.url()).toBe('/results?q=star%20wars');
	});

	it('should not redirect to query results for empty query', function() {
		$scope.query = '';
		$scope.search();
		expect($location.url()).toBe('');
	});

	it('should not redirect after 1 second of keyboard incativity', function() {
		$scope.query = 'star wars';
		$scope.keyup();
		$timeout.flush();
		expect($timeout.verifyNoPendingTasks).not.toThrow();
		expect($location.url()).toBe('/results?q=star%20wars');
	});

	it('should cancel timeout in keydown', function() {
		$scope.query = 'star wars';
		$scope.keyup();
		$scope.keydown();
		
		expect($timeout.verifyNoPendingTasks).not.toThrow();
	});


});