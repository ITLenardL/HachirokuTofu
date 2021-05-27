var mongoose = require('mongoose');

// Event Schema
var EventSchema = mongoose.Schema({
    eventName: {
        type: String,
        unique: true
    },
    eventStartTime: {
        type: String
    },
    eventEndTime: {
        type: String
    },
    eventDate: {
        type: String
    },
    attending: [{

    }]
});

var Event = module.exports = mongoose.model('Event', EventSchema);

module.exports.createEvent = function (newEvent, callback) {
    newEvent.save(callback);
}
