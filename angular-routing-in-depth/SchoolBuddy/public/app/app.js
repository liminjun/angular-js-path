(function () {

    var app = angular.module('app', ['ngRoute']);

    app.config(['$logProvider', '$routeProvider','$locationProvider', function ($logProvider, $routeProvider,$locationProvider) {

        $logProvider.debugEnabled(true);

        //$locationProvider.hashPrefix('!');
        //$locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                controller: "HomeController",
                controllerAs: "home",
                templateUrl: "/app/templates/home.html"
            })
            .when('/schools', {
                controller: 'AllSchoolsController',
                controllerAs: 'schools',
                templateUrl: '/app/templates/allSchools.html'
            })
            .when('/classrooms', {
                controller: 'AllClassroomsController',
                controllerAs: 'classrooms',
                templateUrl: '/app/templates/allClassrooms.html',
                resolve:{
                    promise:function(){
                        //throw "error transitioning to classrooms";
                    }
                }
            })
            .when('/activities', {
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                templateUrl: '/app/templates/allActivities.html',
                resolve: {
                    activities: function (dataService) {
                        return dataService.getAllActivities();
                    }
                }
            })
            .when('/classrooms/:id', {
                templateUrl: '/app/templates/classroom.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom'
            })
            .when('/classrooms/:id/detail/:month?', {
                templateUrl: '/app/templates/classroomDetail.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom'
            })
            .otherwise('/');

    }]);

    app.run(['$rootScope','$log',function($rootScope,$log){
        $rootScope.$on('$routeChangeSuccess',function(event,current,previous){
            $log.debug('successfully changed routes');

            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);
        });

        $rootScope.$on('$routeChangeError',function(event,current,previous,rejection){
            $log.debug('successfully changed routes');
            
            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);
            $log.debug(rejection);
        });


    }]);

} ());