const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: String,
    url: String,
    rating: Number,
    artist: String,
});

module.exports = mongoose.model('Song', songSchema);
