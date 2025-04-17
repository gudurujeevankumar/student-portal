const mongoose = require('mongoose');

const academicResourceSchema = new mongoose.Schema({
  title: String,
  subject: String,
  year: String,
  fileUrl: String,
});

module.exports = mongoose.model('AcademicResource', academicResourceSchema);
