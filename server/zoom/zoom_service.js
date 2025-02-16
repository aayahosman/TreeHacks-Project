import fetch from 'node-fetch';
import base64 from 'base-64';
import { set } from 'mongoose';

// const zoomAccountID = 'rUQqTwBgSLGO7pETY9cg2Q';
// const zoomClientID = '03WOgeoVQNi4ZaDQNBAjfQ';
// const zoomClientSecret = 'uwVTiJYoNXJ0HGsox1F33nrzRRRDzlL2';

const zoomAccountID = 'Dp7XbdIZSke78eIZdohYZg';
const zoomClientID = 'YfEQqNz4Q26oh4L7fK5jHQ';
const zoomClientSecret = 'lVjpmaAuP5p7OXMqaTlrLXwXjE3O4ot6';

const getAuthHeaders = () => {
    return {
        Authorization: `Basic ${base64.encode(`${zoomClientID}:${zoomClientSecret}`)}`,
        'Content-Type': 'application/json',
    };
};

const generateZoomToken = async () => {
    try {
        const response = await fetch(
            `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${zoomAccountID}`,
            {
                method: 'POST',
                headers: getAuthHeaders(),
            }
        );
        const jsonResponse = await response.json();
        console.log("generateZoomToken jsonResponse:", jsonResponse);
        
        return jsonResponse?.access_token;

    } catch (error) {
        console.log("generateZoomToken Error:", error);
        throw error;
    }
};

// create a new Zoom meeting
const generateZoomMeeting = async (topic) => {
    try {
        console.log("generateZoomMeeting running");
        const token = await generateZoomToken();
        console.log("token:", token);
        console.log("here ...");
        // /me/ just making the meeting for myself
        const response = await fetch('https://api.zoom.us/v2/users/me/meetings', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                agenda: 'Zoom Meeting for TreeHacks',
                default_password: false,
                duration: 60,
                password: '12345',
                settings: {
                    allow_multiple_devices: true,
                    breakout_room: {
                        enable: true,
                        rooms: [
                          {
                            name: 'room1',
                            participants: ['narith.vicheda@gmail.com'],
                          }
                        ]
                      },
                    },
                calendar_type: 1,
                contact_email: 'narith.vicheda@gmail.com',
                contact_name: 'Vicheda N.',
                email_notification: true,
                encryption_type: 'enhanced_encryption',
                focus_mode: true,
                global_dial_in_countries: ['US'],
                host_video: true,
                join_before_host: true,
                meeting_authentication: true,
                // meeting_invitees: [
                // {
                //     email: 'jchill@example.com'
                // }],
                mute_upon_entry: true,
                participant_video: false,
                private_meeting: true,
                registrants_confirmation_email: true,
                registrants_email_notification: true,
                waiting_room: true,
                continuous_meeting_chat: {
                    enable: true,
                },
                start_time: new Date().toLocaleDateString(),
                template_id: 'Dv4YdINdTk+Z5RToadh5ug==',
                timezone: 'America/Los_Angeles',
                topic: 'Meeting with Mentor!',
                type: 2, // 1: instant meeting, 2: scheduled meeting, 3: recurring meeting with no fixed time 
            }),
        });
        console.log("it's here too");
        const jsonResponse = await response.json();
        console.log("not here?");
        console.log("generateZoomMeeting jsonResponse:", jsonResponse);
        // return jsonResponse;

    } catch (error) {
        console.log("generateZoomMeeting Error:", error);
        throw error;
    }
};

generateZoomMeeting();
// generateZoomToken();
