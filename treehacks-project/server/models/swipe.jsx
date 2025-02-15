const mongoose = require('mongoose');

const SwipeSchema = new mongoose.Schema({
    swipedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    swipedUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['right', 'left'], required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Swipe', SwipeSchema);

