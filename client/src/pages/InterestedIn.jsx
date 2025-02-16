import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../InterestedIn.css"; // Import CSS

const InterestedIn = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    return (
        <div className="interested-container">
            {/* Heading */}
            <h1 className="interested-heading">I’m interested in...</h1>

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
                    onClick={() => navigate("/next-page")} 
                />
            </div>

            {/* Options */}
            <div className="options-container">
                <button className="option-button" onClick={() => setQuery("Computer Science")}>Computer Science</button>
                <button className="option-button" onClick={() => setQuery("Beauty")}>Beauty</button>
                <button className="option-button" onClick={() => setQuery("Mathematics")}>Mathematics</button>
                <button className="option-button" onClick={() => setQuery("Health")}>Health</button>
                <button className="option-button" onClick={() => setQuery("Business & Econ")}>Business & Econ</button>
                <button className="option-button" onClick={() => setQuery("Music")}>Music</button>
                <button className="option-button" onClick={() => setQuery("Art & History")}>Art & History</button>
                <button className="option-button" onClick={() => setQuery("Other")}>Other</button>
            </div>
        </div>
    );
};

export default InterestedIn;
