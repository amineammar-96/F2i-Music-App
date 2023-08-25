const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: String,
    songs: [mongoose.Schema.Types.ObjectId],
    user: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Playlist', playlistSchema);
