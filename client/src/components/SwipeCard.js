import React from "react";
import { motion } from "framer-motion";

const SwipeCard = ({ profile, onSwipe, isTopCard }) => {
  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      onSwipe(profile.id, "right");
    } else if (info.offset.x < -100) {
      onSwipe(profile.id, "left");
    }
  };

  return (
    <motion.div
      className={`card ${isTopCard ? "top-card" : "behind-card"}`}
      drag={isTopCard ? "x" : false} // Only top card is draggable
      onDragEnd={handleDragEnd}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: isTopCard ? 1 : 0.95, opacity: isTopCard ? 1 : 0.7 }}
      exit={{ x: isTopCard ? 300 : 0, opacity: 0 }}
    >
      <img className="profile-img" src={profile.image} alt={profile.name} />
      <div className="card-details">
        <h2>{profile.name}</h2>
        <p><strong>Preference:</strong> {profile.preference}</p>
        <p>{profile.bio}</p>
      </div>
    </motion.div>
  );
};

export default SwipeCard;
