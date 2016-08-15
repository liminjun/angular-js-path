(function(){
    angular.module('app')
        .controller('ClassroomMessageController',['$stateParams',function($stateParams){
            var vm=this;
            vm.message=$stateParams.classroomMessage;
        }])
}());