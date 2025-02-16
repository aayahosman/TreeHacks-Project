import React, { useState } from "react";
import SwipeMatch from "./components/SwipeMatch";
import Home from "./components/Home";
import Login from "./components/Login.jsx";
import Profile from "./components/SignUp.jsx";
import LookingFor from './components/LookingFor.jsx';
import Matched from './components/Matched.jsx';
import profilesData from "./json/profiles.json";
import InterestedIn from "./components/InterestedIn.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Messages from "./pages/Messages";


const App = () => {
  const [profilesQueue, setProfilesQueue] = useState(profilesData);

  return (
    <BrowserRouter>
    <div className="container">
        <Routes>
          <Route path = "matched" element={<Matched />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/InterestedIn" element={<InterestedIn />} />
          <Route path="/profile/lookingfor" element={<LookingFor />} />
          <Route path="/swipe-match" element={<SwipeMatch />} />
          {/* <Route path="/zoom-meeting" element={<ZoomMeeting />} /> */}
        </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
