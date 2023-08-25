const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

// Sign JWT token
function generateToken(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secretKey);
}

exports.signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: 'Empty field' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(422).json({ error: 'Email already in use' });
        }

        const user = new User({ firstName, lastName, email, password });
        await user.save();
        const token = generateToken(user);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error signing up' });
    }
};

exports.signin = (req, res) => {
    const token = generateToken(req.user);
    res.json({ token });
};
