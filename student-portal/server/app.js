const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');
const http = require('http'); // Import HTTP module
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// File Upload Middleware
const upload = multer({ dest: 'public/uploads/' });

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/student', studentRoutes);
app.use('/admin', adminRoutes);
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

// Create HTTP Server
const server = http.createServer(app);

// Increase timeout values
server.keepAliveTimeout = 120000; // 120 seconds
server.headersTimeout = 120000;  // 120 seconds

// Start Server
const PORT = process.env.PORT || 10000; // Default to 10000 if PORT is not set
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
