const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.register = async(req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).send({ user });
    } catch (error) {
        res.status(400).send({ error: 'Username already exists or invalid data' });
    }
};

exports.login = async(req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).send({ error: 'Invalid username or password' });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.send({ user, token });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteUser = async(req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) res.status(400).send("Bad Request");
        await User.findByIdAndDelete(id);
        res.status(200).send("User deleted");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}