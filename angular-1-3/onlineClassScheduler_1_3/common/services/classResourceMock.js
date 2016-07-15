/**
 * Created by Deb on 8/21/2014.
 */
(function () {
    "use strict";

    var app = angular
        .module("classResourceMock",
        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var classes = [
            {
                "classId": 1,
                "className": "Elvish 101",
                "startDate": "2015-01-21",
                "endDate": "2015-05-10",
                "instructorEmail": "baggins@pcc.edu",
                "description": "Learn the language of the elves."
            },
            {
                "classId": 2,
                "className": "Hobbit Studies",
                "startDate": "2015-01-22",
                "endDate": "2015-05-11",
                "instructorEmail": "baggins@pcc.edu",
                "description": "Reflect on your inner hobbit."
            },
            {
                "classId": 3,
                "className": "Dwarven Poetry",
                "startDate": "2015-01-20",
                "endDate": "2015-05-09",
                "instructorEmail": "baggins@pcc.edu",
                "description": "Immerse yourself in the beauty and power of the Dwarven word."
            },
            {
                "classId": 4,
                "className": "Middle Earth: A History",
                "startDate": "2015-01-21",
                "endDate": "2015-05-10",
                "instructorEmail": "took@pcc.edu",
                "description": "Relive Middle Earth adventures through tales and songs."
            },
            {
                "classId": 5,
                "className": "Fireworks and Wizardry",
                "startDate": "2015-01-21",
                "endDate": "2015-05-10",
                "instructorEmail": "gandalf@pcc.edu",
                "description": "Understand the general framework for developing and deploying fireworks."
            }
        ];

        var classesUrl = "/api/classes";

        $httpBackend.whenGET(classesUrl).respond(classes);

        var duplicateCheckRegex = new RegExp(classesUrl + "/[0-9][0-9]*" + "/.*", '');
        $httpBackend.whenGET(duplicateCheckRegex).respond(function (method, url, data) {
            var selectedClass = null;
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 2];
            var className = unescape(parameters[length - 1]);

            if (className) {
                for (var i = 0; i < classes.length; i++) {
                    if (classes[i].className == className &&
                        classes[i].classId != id) {
                        selectedClass = classes[i];
                        break;
                    }
                }
            }

            if (selectedClass) {
                return [200, selectedClass, {}];
            } else {
                return [404, selectedClass, {}];
            }
        });

        var editingRegex = new RegExp(classesUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var selectedClass = {"classId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < classes.length; i++) {
                    if (classes[i].classId == id) {
                        selectedClass = classes[i];
                        break;
                    }
                }
            }

            return [200, selectedClass, {}];
        });

        $httpBackend.whenPOST(classesUrl).respond(function (method, url, data) {
            var selectedClass = angular.fromJson(data);

            if (!selectedClass.classId) {
                // new class Id
                selectedClass.classId = classes[classes.length - 1].classId + 1;
                classes.push(selectedClass);
            } else {
                // Updated class
                for (var i = 0; i < classes.length; i++) {
                    if (classes[i].classId == selectedClass.classId) {
                        classes[i] = selectedClass;
                        break;
                    }
                }
            }
            return [200, selectedClass, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
    })
}());
