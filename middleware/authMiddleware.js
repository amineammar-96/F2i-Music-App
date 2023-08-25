const passport = require('passport');

// Middleware function to check if user is authenticated
const requireAuth = passport.authenticate('jwt', { session: false } , null);

module.exports = requireAuth;
