(function () {

    angular.module('app')
        .factory('dataService', ['$http', '$q', '$log', '$timeout', dataService]);

    function dataService($http, $q, $log, $timeout) {

        return {
            getAllSchools: getAllSchools,
            getAllClassrooms: getAllClassrooms,
            getAllActivities: getAllActivities,
            getClassroom: getClassroom,
            getMonthName: getMonthName
        };

        function getAllSchools() {
            return $http.get('api/schools')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving schools: ' + response.statusText);
                    return $q.reject('Error retrieving schools.');
                })
        }

        function getAllClassrooms() {
            return $http.get('api/classrooms')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving classrooms: ' + response.statusText);
                    return $q.reject('Error retrieving classrooms.');
                })
        }

        function getClassroom(id) {
            return $http.get('api/classrooms/' + id)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving classroom (' + id + '): ' + response.statusText);
                    return $q.reject('Error retrieving classroom.');
                })
        }

        function getAllActivities() {

            var deferred = $q.defer();

            $timeout(function() {

                $http.get('api/activities')
                    .then(function(response) {
                        deferred.resolve(response.data);
                    })
                    .catch(function(response) {
                        $log.error('Error retrieving activities: ' + response.statusText);
                        return $q.reject('Error retrieving activities.');
                    });

            }, 1000);

            return deferred.promise;

        }

        function getMonthName(month) {

            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            return monthNames[month - 1];
        }

    }

}());