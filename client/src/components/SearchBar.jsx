// components/SearchBar.jsx
import React from "react";
import { FaCommentDots, FaBell, FaUser, FaQuestionCircle, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  return (
    <nav className="searchbar">
      <div className="search-container">
        <FaSearch style={{ fontSize: "20px", color: "#888", marginRight: "10px" }} />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>
      <div className="icons-container">
        <FaCommentDots className="icon" />
        <FaBell className="icon" />
        <FaUser className="icon" onClick={() => navigate("/profile")} />
        <FaQuestionCircle className="icon" />
      </div>
    </nav>
  );
}

export default SearchBar;