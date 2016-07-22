var express = require('express');
var helper = require('../helpers');
var datafile = 'server/data/classrooms.json';
var schoolsDataFile = 'server/data/schools.json';
var activitiesDataFile = 'server/data/activities.json';
var router = express.Router();

/* GET all classrooms */
/* http://localhost:3000/api/classrooms */
router.route('/')
    .get(function(req, res) {
        var data = helper.readData(datafile);

        var schoolsData = helper.readData(schoolsDataFile);

        // attach schools to the classrooms
        data.forEach(function(classroom, index, array) {
            classroom.school = helper.getItemsById(schoolsData, classroom.school_id)[0];
        });

        res.send(data);
    });

/* GET, PUT and DELETE individual classrooms */
router.route('/:id')

    .get(function(req, res) {

        var data = helper.readData(datafile);
        var schoolsData = helper.readData(schoolsDataFile);
        var activitiesData = helper.readData(activitiesDataFile);

        var matchingClassrooms = data.filter(function(item) {
            return item.id == req.params.id;
        });

        if(matchingClassrooms.length === 0) {
            res.sendStatus(404);
        } else {
            var classMatch = matchingClassrooms[0];

            classMatch.school = helper.getItemsById(schoolsData, classMatch.school_id)[0];

            classMatch.activities = activitiesData.filter(function(item) {
                return item.classroom_id == req.params.id;
            });

            res.send(classMatch);
        }
    });

module.exports = router;
