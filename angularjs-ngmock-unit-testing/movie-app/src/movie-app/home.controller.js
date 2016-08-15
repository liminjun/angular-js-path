angular.module('movieApp')
    .controller('HomeController',function($scope,$interval){
        var results = [
	      {
	         "Title":"Star Wars: Episode IV - A New Hope",
	         "imdbID":"tt0076759"
	      },
	      {
	         "Title":"Star Wars: Episode V - The Empire Strikes Back",
	         "imdbID":"tt0080684"
	      },
	      {
	         "Title":"Star Wars: Episode VI - Return of the Jedi",
	         "imdbID":"tt0086190"
	      }
	  ];

      $scope.result=results[0];

      var index=0;
      $interval(function(){
          ++index;
          $scope.result=results[index % results.length];
      },5000);
    });