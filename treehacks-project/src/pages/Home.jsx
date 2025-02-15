import React, { useState, useEffect } from 'react';
import SwipeCard from '../components/SwipeCard';

const Home = () => {
    const [users, setUsers] = useState([]);
    const currentUserId = 'user123'; 

    useEffect(() => {
        // Fetch users to swipe on (mock data for now)
        setUsers([
            { id: 'user1', name: 'Alice' },
            { id: 'user2', name: 'Bob' },
        ]);
    }, []);

    return (
        <div>
            <h1>Swipe Users</h1>
            {users.map(user => (
                <SwipeCard key={user.id} user={user} currentUserId={currentUserId} />
            ))}
        </div>
    );
};

export default Home;
