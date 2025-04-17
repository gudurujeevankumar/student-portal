const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    rollNumber: String,
    mobileNumber: String,
    password: String,
    attendance: Number,
    feeReceipts: [String]
});

module.exports = mongoose.model('User', UserSchema);
