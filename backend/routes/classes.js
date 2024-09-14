// backend/routes/classes.js
const express = require('express');
const { createClass, enrollStudent } = require('../classController');
const { authMiddleware } = require('../middleware/auth');
const router = express.Router();

router.post('/create', authMiddleware, createClass);
router.post('/enroll/:classId', authMiddleware, enrollStudent);

module.exports = router;
