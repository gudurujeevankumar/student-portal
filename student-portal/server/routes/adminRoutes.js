const express = require('express');
const { login, uploadResource, viewResources } = require('../controllers/adminController');
const router = express.Router();

router.post('/login', login);
router.post('/upload-resource', uploadResource);
router.get('/view-resources', viewResources);

module.exports = router;
