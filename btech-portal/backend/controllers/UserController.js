const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');

exports.login = async (req, res) => {
    const { rollNumber, mobileNumber, password } = req.body;
    try {
        const user = await User.findOne({ rollNumber, mobileNumber });
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Invalid credentials');
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.log('Server error', err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.register = async (req, res) => {
    const { name, rollNumber, mobileNumber, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, rollNumber, mobileNumber, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.log('Server error', err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getAttendance = async (req, res) => {
    // Implement attendance retrieval logic
};

exports.uploadFeeReceipt = async (req, res) => {
    // Implement fee receipt upload logic
};
