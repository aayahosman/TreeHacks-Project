import React from 'react';
import { swipeRight, swipeLeft } from '../services/api';

const SwipeCard = ({ user, currentUserId }) => {
    const handleSwipe = async (direction) => {
        if (direction === "right") {
            await swipeRight(currentUserId, user.id);
        } else {
            await swipeLeft(currentUserId, user.id);
        }
        alert(`You swiped ${direction} on ${user.name}`);
    };

    return (
        <div className="swipe-card">
            <h2>{user.name}</h2>
            <button onClick={() => handleSwipe("left")}>👈 Left</button>
            <button onClick={() => handleSwipe("right")}>👉 Right</button>
        </div>
    );
};

export default SwipeCard;
