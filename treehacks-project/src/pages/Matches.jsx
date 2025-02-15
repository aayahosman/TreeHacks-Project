import React, { useState } from 'react';

const Matches = () => {
    const [matches, setMatches] = useState([
        { id: 'user3', name: 'Charlie' }
    ]);

    return (
        <div>
            <h1>Your Matches</h1>
            <ul>
                {matches.map(match => (
                    <li key={match.id}>{match.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Matches;
