const express = require('express');
const { login, dashboard, uploadFeeReceipt, calculateAttendance } = require('../controllers/studentController');
const router = express.Router();

router.post('/login', login);
router.get('/dashboard', dashboard);
router.post('/upload-fee-receipt', uploadFeeReceipt);
router.post('/calculate-attendance', calculateAttendance);

module.exports = router;
