angular.module('app').service('classes', function() {
  return {
    classList: [{
      "classId": 1,
      "className": "Elvish 101",
      "startDate": "2015-01-21T00:00:00Z",
      "endDate": "2015-05-10T00:00:00Z",
      "instructorEmail": "baggins@pcc.edu",
      "description": "Learn the language of the elves."
    }, {
      "classId": 2,
      "className": "Hobbit Studies",
      "startDate": "2015-01-22T00:00:00Z",
      "endDate": "2015-05-11T00:00:00Z",
      "instructorEmail": "baggins@pcc.edu",
      "description": "Reflect on your inner hobbit."
    }, {
      "classId": 3,
      "className": "Dwarven Poetry",
      "startDate": "2015-01-20T00:00:00Z",
      "endDate": "2015-05-09T00:00:00Z",
      "instructorEmail": "baggins@pcc.edu",
      "description": "Immerse yourself in the beauty and power of the Dwarven word."
    }, {
      "classId": 4,
      "className": "Middle Earth: A History",
      "startDate": "2015-01-21T00:00:00Z",
      "endDate": "2015-05-10T00:00:00Z",
      "instructorEmail": "took@pcc.edu",
      "description": "Relive Middle Earth adventures through tales and songs."
    }, {
      "classId": 5,
      "className": "Fireworks and Wizardry",
      "startDate": "2015-01-21T00:00:00Z",
      "endDate": "2015-05-10T00:00:00Z",
      "instructorEmail": "gandalf@pcc.edu",
      "description": "Understand the general framework for developing and deploying fireworks."
    }]
  }
})

angular.module('app').service('students', function() {
  return {
    studentList: [{
      "studentId": 1,
      "studentName": "Frodo Baggins",
      "enrollDate": "2013-06-10T00:00:00Z",
      "gpa": 3.02
    }, {
      "studentId": 2,
      "studentName": "Bilbo Baggins",
      "enrollDate": "2012-02-04T00:00:00Z",
      "gpa": 2.78
    }, {
      "studentId": 3,
      "studentName": "Samwise Gamgee",
      "enrollDate": "2013-08-22T00:00:00Z",
      "gpa": 1.44
    }, {
      "studentId": 4,
      "studentName": "Gandalf",
      "enrollDate": "2002-02-04T00:00:00Z",
      "gpa": 4.0
    }, {
      "studentId": 5,
      "studentName": "Boromir",
      "enrollDate": "2012-06-11T00:00:00Z",
      "gpa": 2.34
    }]
  }
})