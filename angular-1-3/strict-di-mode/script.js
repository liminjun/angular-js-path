// Code goes here

angular.module('app', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/classes', {
    id: 'classes',
    templateUrl: 'classes.html',
    controller: 'classesCtrl'
  }).when('/students', {
    id: 'students',
    templateUrl: 'students.html',
    controller: 'studentsCtrl'
  }).otherwise('/classes')
}])

angular.module('app').controller('mainCtrl', ['$scope', 'classes', 'students', function($scope, classes, students) {
  $scope.classes = classes.classList;
  $scope.students = students.studentList;
}]);
angular.module('app').controller('classesCtrl', ['$scope', function($scope) {
}]);
angular.module('app').controller('studentsCtrl', ['$scope', function($scope) {
  
}]);