import React from "react";
import styles from '../Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.loginContainer}>
      {/* Background Blobs */}
      <div className={styles.blob}></div>
      <div className={styles.blob2}></div>

      <div className={styles.loginBox}>
        <img src="/images/connectHerLogo.png" alt="ConnectHer Logo" className={styles.logo} />
        <h2 className={styles.welcome}>Welcome Back!</h2>

        <div className={styles.loginForm}>
          <label className={styles.label}>Username:</label>
          <input type="text" className={styles.inputField} placeholder="Enter your username" />

          <label className={styles.label}>Password:</label>
          <input type="password" className={styles.inputField} placeholder="Enter your password" />

          <button className={styles.loginButton} onClick={() => navigate('/profile')} >Login</button>
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
    </div>
  );
};

export default Login;
