import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../LookingFor.css"; // Import CSS
import NavBar from "./NavBar";

const LookingFor = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    return (
        <div className="looking-container">
            <NavBar />
            {/* Heading */}
            <h1 className="looking-heading">I’m looking for...</h1>

            {/* Input Box */}
            <div className="input-container">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter to go next"
                    className="input-box"
                />
                <FaAngleDoubleRight 
                    className="submit-icon" 
                    onClick={() => navigate("/InterestedIn")} 
                />
            </div>

            {/* Options */}
            <div className="options-container">
                <button className="option-button" onClick={() => setQuery("friend")}>friend</button>
                <button className="option-button" onClick={() => setQuery("mentor")}>mentor</button>
                <button className="option-button" onClick={() => setQuery("mentee")}>mentee</button>
            </div>
        </div>
    );
};

export default LookingFor;
