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
            .state('classroom_parent',{
                abstract:true,
                url:'/classroom/:id',
                templateUrl:"/app/templates/classroom_parent.html",
                controller: 'ClassroomController',
                controllerAs: 'classroom',
                params:{
                    classroomMessage:{value:'Learning is fun!'}
                },
                resolve:{
                    classroom:function($stateParams,dataService){
                        return dataService.getClassroom($stateParams.id);
                    }
                }
            })
            .state('classroom_parent.classroom_summary', {
                url:'/summary',
                views:{
                    'classInfo':{
                        templateUrl: '/app/templates/classroom.html',
                        controller:"ClassroomSummaryController",
                        controllerAs:'classroomSummary'
                    },
                    'classMessage':{
                        templateUrl: '/app/templates/classroom_message.html',
                        controller:"ClassroomMessageController",
                        controllerAs:'classroomMessage'
                    }
                }
                
            })
            .state('classroom_parent.classroom_detail', {
                url:"/detail/{month}",
                views:{
                    'classInfo':{
                        templateUrl: '/app/templates/classroomDetail.html'
                    }
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