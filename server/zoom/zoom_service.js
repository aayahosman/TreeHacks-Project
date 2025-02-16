
import fetch from 'node-fetch';
import base64 from 'base-64';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const zoomAccountID = process.env.ZOOM_ACCOUNT_ID;
const zoomClientID = process.env.ZOOM_CLIENT_ID;
const zoomClientSecret = process.env.ZOOM_CLIENT_SECRET;

const generateZoomToken = async () => {
    try {
        const response = await fetch(
            `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${zoomAccountID}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Basic ${base64.encode(`${zoomClientID}:${zoomClientSecret}`)}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        const jsonResponse = await response.json();
        return jsonResponse?.access_token;
    } catch (error) {
        console.error("generateZoomToken Error:", error);
        throw error;
    }
};

export const generateZoomMeeting = async (topic) => {
    try {
        const token = await generateZoomToken();

        const response = await fetch('https://api.zoom.us/v2/users/me/meetings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                topic,
                type: 2, // Scheduled meeting
                start_time: new Date().toISOString(),
                duration: 60,
                timezone: 'America/Los_Angeles',
                password: '12345',
                settings: {
                    host_video: true,
                    participant_video: false,
                    waiting_room: true,
                },
            }),
        });

        return await response.json();
    } catch (error) {
        console.error("generateZoomMeeting Error:", error);
        throw error;
    }
};