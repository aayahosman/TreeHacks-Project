// pages/SignUp.jsx
import React from "react";
import SearchBar from "../components/SearchBar"; // Adjust the import path as needed

function SignUp() {
  return (
    <div className="signup-page">
      <div className="signup-content">
        <h1>My name is...</h1>
        <SearchBar />
        <p>
          "Do not wait for someone else to come and speak for you. It's you who can change the world." — Malala Yousafzai
        </p>
        <button className="next-button">Enter to go next</button>
      </div>
    </div>
  );
}

export default SignUp;