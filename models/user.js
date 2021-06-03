var mongoose = require('mongoose');

// User Schema
var UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createEvent = function (newEvent, callback) {
    newEvent.save(callback);
}
