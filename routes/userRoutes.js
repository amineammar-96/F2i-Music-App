const express = require('express');
const requireAuth = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/create', requireAuth, userController.createUser);
router.get('/list', requireAuth, userController.getUsers);
router.put('/update/:id', requireAuth, userController.updateUser);
router.delete('/delete/:id', requireAuth, userController.deleteUser);

module.exports = router;
