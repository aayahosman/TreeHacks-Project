import React from "react";


const Login = () => {
 return (
   <div className="login-container">
     {/* Left Side - Login Form */}
     <div className="login-section">
       <h2 className="welcome">Welcome Back!</h2>


       <div className="login-form">
      
         <label className="username-label">Username:</label>


         <input type="text" className="input-field" />


         <label>Password:</label>
         <input type="password" className="input-field" />


         <button className="login-button">Login</button>
       </div>


       <p className="register-text">
         Don't have an account? <a href="#">Register</a>
       </p>


       {/* Social Media Icons */}
       <div className="social-icons">
         <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" />
         <img src="https://cdn-icons-png.flaticon.com/512/2111/2111728.png" alt="WhatsApp" />
         <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />
       </div>
     </div>


     {/* Right Side - Illustration */}
     <div className="illustration-section">
       <img
         src="https://via.placeholder.com/300"
         alt="Illustration"
         className="illustration"
       />
     </div>
   </div>
 );
};


export default Login;