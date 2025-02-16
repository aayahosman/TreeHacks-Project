import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <NavBar />
      <div className="home-content">
        <h1 className="home-title">Meet your peers & mentors :)</h1>
        <h3 className="home-subtitle">Empowering women through education, mentorship, and community.</h3>
        <button className="home-btn" onClick={() => navigate("/login")}>
          Find Your Match
        </button>
      </div>
    </div>
  );
};

export default Home;

