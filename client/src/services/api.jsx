import axios from 'axios';

const API_URL = 'http://localhost:5000/api/swipes';

export const swipeRight = async (userId, swipedUserId) => {
    return await axios.post(`${API_URL}/right`, { userId, swipedUserId });
};

export const swipeLeft = async (userId, swipedUserId) => {
    return await axios.post(`${API_URL}/left`, { userId, swipedUserId });
};
