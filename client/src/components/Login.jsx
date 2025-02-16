import React from "react";
import styles from '../Login.module.css'; // Or just './Login.module.css' if not using CSS Modules

const Login = () => {
 return (
   <div className={styles.loginContainer}>
     {/* Left Side - Login Form */}
     <div className={styles.loginSection}>
       <h2 className={styles.welcome}>Welcome Back!</h2>

       <div className={styles.loginForm}>
         <label className={styles.usernameLabel}>Username:</label>
         <input type="text" className={styles.inputField} />

         <label>Password:</label>
         <input type="password" className={styles.inputField} />

         <button className={styles.loginButton}>Login</button>
       </div>

       <p className={styles.registerText}>
         Don't have an account? <a href="#">Register</a>
       </p>

       <div className={styles.socialIcons}>
         <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" />
         <img src="https://cdn-icons-png.flaticon.com/512/2111/2111728.png" alt="WhatsApp" />
         <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />
       </div>
     </div>

     {/* Right Side - Illustration */}
     <div className={styles.illustrationSection}>
       <img
         src="images/logo.png"
         alt="Illustration"
         className={styles.illustration}
       />
     </div>
   </div>
 );
};

export default Login;
