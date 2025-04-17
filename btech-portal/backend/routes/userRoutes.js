const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.get('/attendance', UserController.getAttendance);
router.post('/upload-fee-receipt', UserController.uploadFeeReceipt);

module.exports = router;
