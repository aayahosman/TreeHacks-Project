const express = require('express');
const router = express.Router();
const swipeController = require('../controllers/swipecontroller');

router.post('/swipe/right', swipeController.swipeRight);
router.post('/swipe/left', swipeController.swipeLeft);

module.exports = router;