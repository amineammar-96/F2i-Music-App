const Song = require('../models/song');

exports.createSong = async (req, res) => {
    const { title, url, rating, artist } = req.body;

    try {
        const song = new Song({ title, url, rating, artist });
        await song.save();
        res.json(song);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the song' });
    }
};

exports.getSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching songs' });
    }
};

exports.updateSong = async (req, res) => {
    const { title, url, rating, artist } = req.body;

    try {
        const updatedSong = await Song.findByIdAndUpdate(
            req.params.id,
            { title, url, rating, artist },
            { new: true }
        );
        res.json(updatedSong);
    } catch (error) {
        res.status(500).json({ error: 'Error updating the song' });
    }
};

exports.deleteSong = async (req, res) => {
    try {
        await Song.findByIdAndRemove(req.params.id);
        res.json({ message: 'Song deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting the song' });
    }
};
