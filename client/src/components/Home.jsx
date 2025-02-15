import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <h1>Meet your peers/mentors :)</h1>
      <h3>Some tagline...</h3>
      <button className="home-btn" onClick={() => navigate("/swipe-match")}>
        Find Match
      </button>
    </div>
  );
};
export default Home;
