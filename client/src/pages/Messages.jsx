import React from "react";
import styles from "../Messages.module.css"; 
import { FaSearch } from "react-icons/fa"; // Import search icon

const Messages = () => {
  return (
    <div className={styles.messagesContainer}>
      {/* Sidebar with Friends List */}
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Message</h2>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search" />
        </div>

        {/* Friends List */}
        <ul className={styles.friendsList}>
          <li className={`${styles.friend} ${styles.active}`}>
            <img src="https://via.placeholder.com/40" alt="Kris" />
            <div className={styles.friendInfo}>
              <h3>Kris</h3>
              <p>Hey, have you noticed how much...</p>
            </div>
          </li>
          <li className={styles.friend}>
            <img src="https://via.placeholder.com/40" alt="Kitty" />
            <div className={styles.friendInfo}>
              <h3>Kitty</h3>
              <p>Absolutely! It’s fascinating how p...</p>
            </div>
          </li>
          <li className={styles.friend}>
            <img src="https://via.placeholder.com/40" alt="Eleanor" />
            <div className={styles.friendInfo}>
              <h3>Eleanor</h3>
              <p>Hey, have you noticed how...</p>
            </div>
          </li>
        </ul>
      </aside>

      {/* Chat Section */}
      <section className={styles.chatSection}>
        <div className={styles.chatHeader}>
          <img src="https://via.placeholder.com/40" alt="Kris" />
          <h3>Kris</h3>
          <p className={styles.status}>Online 7m ago</p>
        </div>

        <div className={styles.chatWindow}>
          <div className={`${styles.message} ${styles.received}`}>
            <span className={styles.messageText}>Hey bro!</span>
          </div>

          <div className={`${styles.message} ${styles.sent}`}>
            <span className={styles.messageText}>What sup?</span>
          </div>

          <div className={`${styles.message} ${styles.received}`}>
            <span className={styles.messageText}>
              Lately I'm learning about an art style called Retro
            </span>
          </div>

          <div className={`${styles.message} ${styles.received} ${styles.large}`}>
            <span className={styles.messageText}>
              While the main vintage color tones are deep, warm colors, the Retro style is more colorful when the main color tones are pastel.
            </span>
          </div>

          <div className={`${styles.message} ${styles.sent}`}>
            <span className={styles.messageText}>Wow, look great!</span>
          </div>

          <div className={`${styles.message} ${styles.sent} ${styles.audio}`}>
            <span className={styles.audioWaveform}>🔊🎵</span>
          </div>
        </div>

        {/* Chat Input */}
        <div className={styles.chatInput}>
          <input type="text" placeholder="Type a message..." />
          <button className={styles.sendBtn}>Send</button>
        </div>
      </section>

      {/* User Info Section */}
      <aside className={styles.userInfo}>
        <img className={styles.userAvatar} src="https://via.placeholder.com/80" alt="Kris" />
        <h3 className={styles.userName}>kris</h3>
        <p className={styles.userEmail}>
          Email<br />Kris@gmail.com
        </p>
        <p className={styles.userPhone}>
          Phone Number<br />(123) 456-7899
        </p>

        <div className={styles.userOptions}>
          <details>
            <summary>Information</summary>
          </details>
          <details>
            <summary>Chat Setting</summary>
          </details>
          <details>
            <summary>File, Attachments</summary>
          </details>
          <details>
            <summary>Link</summary>
          </details>
        </div>
      </aside>
    </div>
  );
};

export default Messages;
