const User = require('../models/user');

exports.createUser = async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;

    try {
        const user = new User({ firstName, lastName, email, password, role });
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error for creating the user' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
};

exports.updateUser = async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { firstName, lastName, email, password, role },
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Error updating the user' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id);
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting the user' });
    }
};
