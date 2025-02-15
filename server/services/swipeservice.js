const client = require('../config/redis');
const Swipe = require('../models/swipe');

exports.processSwipe = async (userId, swipedUserId, status) => {
    const key = `user:${userId}:swipes`;
    await client.hSet(key, swipedUserId, status);

    if (status === 'right') {
        const matchKey = `user:${swipedUserId}:swipes`;
        const isMatch = await client.hGet(matchKey, userId);

        if (isMatch === 'right') {
            await Swipe.create({ swipedBy: userId, swipedUser: swipedUserId, status: 'right' });
            return true; // Match found
        }
    }
    return false;
};
