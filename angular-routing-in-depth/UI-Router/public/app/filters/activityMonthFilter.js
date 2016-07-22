(function () {

    angular.module('app')
        .filter('activityMonthFilter', function() {
            return function(activities, filterMonth) {

                // if no filterMonth was provided, return all activities
                if(!filterMonth) {
                    return activities;
                }

                var filteredActivities = [];

                angular.forEach(activities, function(activity) {

                    var activityMonth = new Date(activity.date).getMonth();

                    // JavaScript month will be zero-based, so add 1 to it
                    if((activityMonth + 1) == filterMonth) {
                        filteredActivities.push(activity);
                    }

                });

                return filteredActivities;
            }
        });

}());