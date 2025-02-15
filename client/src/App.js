import React, { useState } from "react";
import SwipeCard from "./components/SwipeCard";
import SwipeMatch from "./components/SwipeMatch";
import Home from "./components/Home";
import Profile from "./pages/SignUp";

import profilesData from "./json/profiles.json";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  const [profilesQueue, setProfilesQueue] = useState(profilesData);

  const handleSwipe = (id, direction) => {
    console.log(`${profilesQueue[0].name} swiped ${direction}`);
    setProfilesQueue((prevQueue) => prevQueue.slice(1));
  };

  return (
    <BrowserRouter>
    <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/swipe-match" element={<SwipeMatch />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
