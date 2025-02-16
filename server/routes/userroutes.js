// const express = require('express');
// const router = express.Router();
// const usercontroller = require('../controllers/usercontroller');

// router.get('/', usercontroller.getUsers);

// module.exports = router;

import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User route works!');
});

export default router;