import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/match.css';

function Match() {
    const navigate = useNavigate();
    const [meetingLink, setMeetingLink] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showTitle, setShowTitle] = useState(true);
    const [showLoader, setShowLoader] = useState(false);
    const [meetingTime, setMeetingTime] = useState("2:00 PM, Tuesday, 14th March, 2025");

    const createMeeting = async () => {
        setShowTitle(false); 
        setLoading(true);  

        setTimeout(() => {
            setShowLoader(true);
        }, 1200);

        try {
            const response = await fetch('http://localhost:5001/api/zoom/create-meeting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ topic: 'Meeting with Mentor' }),
            });

            const data = await response.json();
            console.log('Meeting Created:', data);

            if (data.join_url) {
                setMeetingLink(data.join_url);
            }
        } catch (error) {
            console.error('Error creating meeting:', error);
        }

        setLoading(false);
        setShowLoader(false);
    };

    return (
        <div className="match-container">
            {showTitle && (
                <>
                    <h1 className="cute-title">YAY! 🎉</h1>
                    <h2 className="cute-subtitle">You're Matched! ✨</h2>
                </>
            )}

            {loading ? (
                <div className="loading-screen">
                    <p className="loading-text">We’re looking at your schedule and setting up a meeting... ⏳✨</p>
                    {showLoader && <div className="cute-spinner"></div>}
                </div>
            ) : meetingLink ? (
                <div className="meeting-confirmation">
                    <p className="confirmation-text">Your meeting is scheduled at:</p>
                    <p className="meeting-time">🕒 {meetingTime}</p>
                    <div className="button-group">
                        <button className="edit-btn">✏️ Edit</button>
                        <button className="confirm-btn">✅ Confirm</button>
                    </div>
                    <p className="meeting-link">📎 <a href={meetingLink} target="_blank" rel="noopener noreferrer">Join Meeting</a></p>
                </div>
            ) : (
                <div className="button-container">
                    <button className="message-btn" onClick={() => navigate('/messages')}>💌 Message?</button>
                    <button className="meeting-btn" onClick={createMeeting}>📅 Schedule a meeting!</button>
                </div>
            )}
        </div>
    );
}

export default Match;