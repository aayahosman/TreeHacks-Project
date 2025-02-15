import React, { useState } from "react";
import SwipeCard from "./SwipeCard";
import profilesData from "../json/profiles.json"; // Ensure the correct path

const SwipeMatch = () => {
  const [profilesQueue, setProfilesQueue] = useState(profilesData);

  const handleSwipe = (id, direction) => {
    console.log(`${profilesQueue[0].name} swiped ${direction}`);
    setProfilesQueue((prevQueue) => prevQueue.slice(1));
  };

  return (
    <div>
      <h1>Swipe to Match</h1>
      {profilesQueue.length > 0 ? (
        <SwipeCard profile={profilesQueue[0]} onSwipe={handleSwipe} />
      ) : (
        <h2>No more profiles</h2>
      )}
    </div>
  );
};

export default SwipeMatch;
