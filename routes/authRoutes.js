const express = require('express');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false } , null);
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', requireAuth, authController.signin);

module.exports = router;
