import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../SignUp.css"; 
import NavBar from "./NavBar";

const SignUp = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate(); // Hook to handle navigation

    return (
        <div className="container">
            <NavBar/>
            <div className="content-wrapper">
                <div className="input-section">
                    <h1 className="heading">My name is...</h1>

                    <div className="input-container">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter to go next"
                            className="input-box"
                        />
                        <FaAngleDoubleRight 
                            className="submit-icon" 
                            onClick={() => navigate("lookingfor")} // Navigate when clicked
                        />
                    </div>
                </div>
            </div>

            <p className="quote">
                "Do not wait for someone else to come and speak for you. It’s you who can change the world."
                <br /> — Malala Yousafzai
            </p>
        </div>
    );
};

export default SignUp;
