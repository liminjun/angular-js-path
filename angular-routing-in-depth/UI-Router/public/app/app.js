(function() {

    var app = angular.module('app', ['ui.router']);

    app.config(['$logProvider','$stateProvider', function ($logProvider,$stateProvider) {

        $logProvider.debugEnabled(true);
        $stateProvider
            .state('home',{
                url:"/",
                controller: "HomeController",
                controllerAs: "home",
                templateUrl: "/app/templates/home.html"
            })
        
            .state('schools', {
                url:"/schools",
                controller: 'AllSchoolsController',
                controllerAs: 'schools',
                templateUrl: '/app/templates/allSchools.html'
            })
            .state('classrooms', {
               url:"/classrooms",
                controller: 'AllClassroomsController',
                controllerAs: 'classrooms',
                templateUrl: '/app/templates/allClassrooms.html',
                resolve:{
                    promise:function(){
                        //throw "error transitioning to classrooms";
                    }
                }
            })
            .state('activities', {
                url:"/activities",
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                templateUrl: '/app/templates/allActivities.html',
                resolve: {
                    activities: function (dataService) {
                        return dataService.getAllActivities();
                    }
                }
            })
            .state('classroom_summary', {
                url:'/classrooms/:id',
                templateUrl: '/app/templates/classroom.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom'
            })
            .state('classroom_detail', {
                url:"/classrooms/{id:[0-11]}/detail/{month}",
                templateUrl: '/app/templates/classroomDetail.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom',
                params:{
                    classroomMessage:{value:'Learning is fun!'}
                }
            })

    }]);

    app.run(['$rootScope','$log',function($rootScope,$log){
        $rootScope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){
            $log.debug('successfully changed routes');

            $log.debug('event',event);
            $log.debug('toState',toState);
            $log.debug('toParams',toParams);
            $log.debug('fromState',fromState);
            $log.debug('fromParams',fromParams);
        });
        $rootScope.$on('$stateNotFound',function(event,unfoundState,fromState,fromParams){
            $log.error('The requested state was not found: ',unfoundState);
        });
        $rootScope.$on('$stateChangeError',function(event,toState,toParams,fromState,fromParams,error){
            $log.error('An error while changing states ',error);
            
            $log.debug('event',event);
            $log.debug('toState',toState);
            $log.debug('toParams',toParams);
            $log.debug('fromState',fromState);
            $log.debug('fromParams',fromParams);
            
   
        });


    }]);

}());