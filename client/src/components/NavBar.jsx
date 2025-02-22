// import React from "react";
// import { FaCommentDots, FaBell, FaUser, FaQuestionCircle } from "react-icons/fa";

// function NavBar() {
//   return (
//     <nav class = "navbar">
//       <FaCommentDots style={{ fontSize: "24px", cursor: "pointer" }} />
//       <FaBell style={{ fontSize: "24px", cursor: "pointer" }} />
//       <FaUser style={{ fontSize: "24px", cursor: "pointer" }} />
//       <FaQuestionCircle style={{ fontSize: "24px", cursor: "pointer" }} />
//     </nav>
//   );
// }

// export default NavBar;
import React from "react";
import { FaCommentDots, FaBell, FaUser, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <FaCommentDots style={{ fontSize: "24px", cursor: "pointer" }} onClick={() => navigate("/messages")}/>
      <FaBell style={{ fontSize: "24px", cursor: "pointer" }} 
      onClick={() => navigate("/community")}/>
      <FaUser
        style={{ fontSize: "24px", cursor: "pointer" }}
        onClick={() => navigate("/profile")} // Navigate to profile page
      />
      <FaArrowLeft style={{ fontSize: "24px", cursor: "pointer" }} onClick={() => window.history.back()}/>
    </nav>
  );
}

export default NavBar;
