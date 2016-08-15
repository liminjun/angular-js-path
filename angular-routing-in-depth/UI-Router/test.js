var app=angular.module('app',[]);
app.controller('mainCtrl',function($scope){
  $scope.message="Learning Angularjs";


});

angular.module('app').directive('userInfoCard',function(){
  return {
    template:"Hello World. I am an Angularjs Diretive.",
    restrict:"EA",
    replace:true
  }
})