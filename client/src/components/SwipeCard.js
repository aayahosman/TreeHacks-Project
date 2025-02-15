import React from "react";
import { motion, useAnimation } from "framer-motion";

const SwipeCard = ({ profile, onSwipe }) => {
  const controls = useAnimation();

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      controls.start({ x: 300, opacity: 0 }).then(() => onSwipe(profile.id, "right"));
    } else if (info.offset.x < -100) {
      controls.start({ x: -300, opacity: 0 }).then(() => onSwipe(profile.id, "left"));
    }
  };

  return (
    <motion.div
      className="card"
      drag="x"
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={{ x: 0, opacity: 1 }}
    >
      <img src={profile.image} alt={profile.name} />
      <div className="card-details">
        <h2>{profile.name}</h2>
        <p><strong>Preference:</strong> {profile.preference}</p>
        <p>{profile.bio}</p>
      </div>
    </motion.div>
  );
};

export default SwipeCard;
