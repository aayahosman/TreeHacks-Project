import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SwipeCard from "./SwipeCard";
import profilesData from "../json/profiles.json"; 
import "../App.css"; 
import NavBar from "./NavBar";

const SwipeMatch = () => {
  const [profilesQueue, setProfilesQueue] = useState(profilesData);

  const handleSwipe = (id, direction) => {
    console.log(`${profilesQueue[0]?.name} swiped ${direction}`);
    setProfilesQueue((prevQueue) => (prevQueue.length > 1 ? prevQueue.slice(1) : []));
  };

  return (
    <div className="swipe-container">
      <NavBar />
      <h1 className="title">Swipe to Match</h1>
      <div className="card-stack">
        <AnimatePresence>
          {profilesQueue.length > 0 ? (
            profilesQueue.slice(0, 3).map((profile, index) => (
              <SwipeCard
                key={profile.id}
                profile={profile}
                onSwipe={handleSwipe}
                isTopCard={index === 0}
              />
            ))
          ) : (
            <h2 className="no-more">No more profiles</h2>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SwipeMatch;
