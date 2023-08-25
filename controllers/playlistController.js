const Playlist = require('../models/playlist');

exports.createPlaylist = async (req, res) => {
    const { name, songs } = req.body;

    try {
        const playlist = new Playlist({ name, songs, user: req.user.id });
        await playlist.save();
        res.json(playlist);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the playlist' });
    }
};

exports.getPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find({ user: req.user.id });
        res.json(playlists);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching playlists' });
    }
};

exports.updatePlaylist = async (req, res) => {
    const { name, songs } = req.body;

    try {
        const updatedPlaylist = await Playlist.findByIdAndUpdate(
            req.params.id,
            { name, songs },
            { new: true }
        );
        res.json(updatedPlaylist);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the playlist' });
    }
};

exports.deletePlaylist = async (req, res) => {
    try {
        await Playlist.findByIdAndRemove(req.params.id);
        res.json({ message: 'Playlist deleted' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the playlist' });
    }
};
