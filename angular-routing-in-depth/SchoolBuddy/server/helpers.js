var fs = require('fs');

exports.readData = function (datafile) {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
};

exports.getItemsById = function (data, id) {

    var matchingItems = data.filter(function(item) {
        return item.id == id;
    });
    return matchingItems;
};