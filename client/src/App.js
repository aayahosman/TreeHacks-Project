import React, { useState } from "react";
import SwipeMatch from "./components/SwipeMatch";
import Home from "./components/Home";
import Login from "./components/Login.jsx";
import Profile from "./pages/SignUp";
import LookingFor from './pages/LookingFor.jsx';
import Matched from './components/Matched.jsx';
import profilesData from "./json/profiles.json";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Messages from "./pages/Messages";

const App = () => {
  const [profilesQueue, setProfilesQueue] = useState(profilesData);

  return (
    <BrowserRouter>
    <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lookingfor" element={<LookingFor />} />
          <Route path="/swipe-match" element={<SwipeMatch />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
