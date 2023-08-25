const express = require('express');
const requireAuth = require('../middleware/authMiddleware');
const songController = require('../controllers/songController');

const router = express.Router();

router.post('/create', requireAuth, songController.createSong);
router.get('/list', requireAuth, songController.getSongs);
router.put('/update/:id', requireAuth, songController.updateSong);
router.delete('/delete/:id', requireAuth, songController.deleteSong);

module.exports = router;
