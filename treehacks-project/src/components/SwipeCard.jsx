import React from 'react';
import { swipeRight, swipeLeft } from '../services/api';

const SwipeCard = ({ user, currentUserId }) => {
    const handleSwipeRight = async () => {
        await swipeRight(currentUserId, user.id);
        alert(`You swiped right on ${user.name}`);
    };

    const handleSwipeLeft = async () => {
        await swipeLeft(currentUserId, user.id);
        alert(`You swiped left on ${user.name}`);
    };

    return (
        <div className="swipe-card">
            <h2>{user.name}</h2>
            <button onClick={handleSwipeLeft}>👈 Left</button>
            <button onClick={handleSwipeRight}>👉 Right</button>
        </div>
    );
};

export default SwipeCard;
