var express = require('express');
var helper = require('../helpers');
var datafile = 'server/data/schools.json';
var router = express.Router();

/* GET all schools */
/* http://localhost:3000/api/schools */
router.route('/')
    .get(function(req, res) {
        var data = helper.readData(datafile);
        res.send(data);
    });

/* GET, PUT and DELETE individual schools */
router.route('/:id')

    .get(function(req, res) {

        var data = helper.readData(datafile);

        var matchingSchools = data.filter(function(item) {
            return item.school_id == req.params.id;
        });

        if(matchingSchools.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingSchools[0]);
        }
    });

module.exports = router;
