import React, { useState } from "react";
import SwipeCard from "./components/SwipeCard";
import profilesData from "./json/profiles.json"; // Import JSON file
import "./App.css";

const App = () => {
  const [profilesQueue, setProfilesQueue] = useState(profilesData);

  const handleSwipe = (id, direction) => {
    console.log(`${profilesQueue[0].name} swiped ${direction}`);
    setProfilesQueue((prevQueue) => prevQueue.slice(1));
  };

  return (
    <div className="container">
      {profilesQueue.length > 0 ? (
        <SwipeCard profile={profilesQueue[0]} onSwipe={handleSwipe} />
      ) : (
        <h2>No more profiles</h2>
      )}
    </div>
  );
};

export default App;
