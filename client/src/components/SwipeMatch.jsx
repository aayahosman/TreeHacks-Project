import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import SwipeCard from "./SwipeCard";
import profilesData from "../json/profiles.json";
import "../App.css";
import NavBar from "./NavBar";
import Matched from "./Matched";

const SwipeMatch = () => {
  const [profilesQueue, setProfilesQueue] = useState(profilesData);
  const navigate = useNavigate();

  const handleSwipe = (id, direction) => {
    console.log(`${profilesQueue[0]?.name} swiped ${direction}`);
    
    // Random chance to navigate to "/matched"
    if (Math.random() < 0.4) { // 40% chance
      navigate("/matched");
      return;
    }

    setProfilesQueue((prevQueue) => (prevQueue.length > 1 ? prevQueue.slice(1) : []));
  };

  return (
    <div className="swipe-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <NavBar />
      <h1 className="title text-3xl font-bold mt-6 mb-4">Swipe to Match</h1>
      <div className="card-stack relative w-full max-w-md h-[500px] flex items-center justify-center">
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
            <h2 className="no-more text-lg font-semibold text-gray-600">No more profiles</h2>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SwipeMatch;
