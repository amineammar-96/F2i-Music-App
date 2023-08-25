const express = require('express');
const requireAuth = require('../middleware/authMiddleware');
const playlistController = require('../controllers/playlistController');

const router = express.Router();

router.post('/create', requireAuth, playlistController.createPlaylist);
router.get('/list', requireAuth, playlistController.getPlaylists);
router.put('/update/:id', requireAuth, playlistController.updatePlaylist);
router.delete('/delete/:id', requireAuth, playlistController.deletePlaylist);

module.exports = router;
