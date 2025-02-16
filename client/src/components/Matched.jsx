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
        setShowTitle(false); // Hide "You're Matched!"  
        setLoading(true);  

        setTimeout(() => {
            setShowLoader(true); // Show spinner after delay
        }, 1200); // 1.2s delay to make it more visible

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
                    <h1>YAY :D</h1>
                    <h2>You're Matched!</h2>
                </>
            )}

            {loading ? (
                <div className="loading-screen">
                    <p>We’re looking at your schedule and setting up a meeting...</p>
                    {showLoader && <div className="spinner"></div>}
                </div>
            ) : meetingLink ? (
                <div className="meeting-confirmation">
                    <p>We are scheduling your meeting at:</p>
                    <p><strong>{meetingTime}</strong></p>
                    <button className="edit-btn">Edit</button>
                    <button className="confirm-btn">Confirm</button>
                    <p>Meeting Link: <a href={meetingLink} target="_blank" rel="noopener noreferrer">Join Meeting</a></p>
                </div>
            ) : (
                <div className="button-container">
                    <button className="message-btn" onClick={() => navigate('/messages')}>message?</button>
                    <button className="meeting-btn" onClick={createMeeting}>send me a meeting!</button>
                </div>
            )}
        </div>
    );
}

export default Match;
