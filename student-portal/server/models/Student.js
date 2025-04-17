const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  mobileNumber: String,
  otp: String,
  attendance: [{ date: Date, status: String }],
  feeReceipts: [{ imageUrl: String, details: String }],
});

module.exports = mongoose.model('Student', studentSchema);
