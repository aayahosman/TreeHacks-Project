// const Swipe = require('../models/swipe');
// const swipeService = require('../services/swipeservice');
// const responseHandler = require('../utils/responsehandler');

// exports.swipeRight = async (req, res) => {
//     const { userId, swipedUserId } = req.body;
//     try {
//         const match = await swipeService.processSwipe(userId, swipedUserId, 'right');
//         return responseHandler.success(res, { match, message: match ? 'It’s a match!' : 'Swipe recorded' });
//     } catch (err) {
//         responseHandler.error(res, err.message);
//     }
// };

// exports.swipeLeft = async (req, res) => {
//     const { userId, swipedUserId } = req.body;
//     try {
//         await swipeService.processSwipe(userId, swipedUserId, 'left');
//         return responseHandler.success(res, { message: 'Swipe recorded' });
//     } catch (err) {
//         responseHandler.error(res, err.message);
//     }
// };

import Swipe from '../models/swipe.js';
import swipeService from '../services/swipeservice.js';
import responseHandler from '../utils/responsehandler.js';

const swipeRight = async (req, res) => {
    const { userId, swipedUserId } = req.body;
    try {
        const match = await swipeService.processSwipe(userId, swipedUserId, 'right');
        return responseHandler.success(res, { match, message: match ? 'It’s a match!' : 'Swipe recorded' });
    } catch (err) {
        responseHandler.error(res, err.message);
    }
};

const swipeLeft = async (req, res) => {
    const { userId, swipedUserId } = req.body;
    try {
        await swipeService.processSwipe(userId, swipedUserId, 'left');
        return responseHandler.success(res, { message: 'Swipe recorded' });
    } catch (err) {
        responseHandler.error(res, err.message);
    }
};

export default { swipeRight, swipeLeft };