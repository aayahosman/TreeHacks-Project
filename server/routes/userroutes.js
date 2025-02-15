const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/', usercontroller.getUsers);

module.exports = router;
