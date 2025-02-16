// const express = require('express');
// const router = express.Router();
// const swipeController = require('../controllers/swipecontroller');

// router.post('/swipe/right', swipeController.swipeRight);
// router.post('/swipe/left', swipeController.swipeLeft);

// module.exports = router;

import express from 'express';
import swipeController from '../controllers/swipecontroller.js';

const router = express.Router();

router.post('/swipe/right', swipeController.swipeRight);
router.post('/swipe/left', swipeController.swipeLeft);

export default router;