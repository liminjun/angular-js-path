var express = require('express');
var helper = require('../helpers');
var datafile = 'server/data/activities.json';
var router = express.Router();

/* GET all activities */
/* http://localhost:3000/api/activities */
router.route('/')
    .get(function(req, res) {
        var data = helper.readData(datafile);

        var classroomDataFile = 'server/data/classrooms.json';
        var classroomData = helper.readData(classroomDataFile);

        // attach classrooms to the activities
        data.forEach(function(activity, index, array) {
            activity.classroom = helper.getItemsById(classroomData, activity.classroom_id)[0];
        });

        res.send(data);
    });

/* GET, PUT and DELETE individual classrooms */
router.route('/:id')

    .get(function(req, res) {

        var data = helper.readData(datafile);

        var matchingActivities = data.filter(function(item) {
            return item.activity_id == req.params.id;
        });

        if(matchingActivities.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingActivities[0]);
        }
    });

module.exports = router;
