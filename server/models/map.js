//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const MapSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    }
});

const Map = module.exports = mongoose.model('Map', MapSchema );

module.exports.getAllLists = (callback) => {
    Map.find(callback);
}
