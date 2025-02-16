import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { generateZoomMeeting } from './zoom/zoom_service.js';
import userRoutes from './routes/userroutes.js';
import swipeRoutes from './routes/swiperoutes.js';

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for frontend access

// Helper function to read JSON data from the 'json' folder
const readJsonFile = (filePath) => {
    const fullPath = `./json/${filePath}`;
    if (!fs.existsSync(fullPath)) {
        // If file doesn't exist, return an empty array
        return [];
    }
    const data = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(data);
};

// Helper function to write to JSON file in the 'json' folder
const writeJsonFile = (filePath, data) => {
    const fullPath = `./json/${filePath}`;
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
};


// ✅ Default route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// ✅ User & Swipe Routes
app.use('/api/users', userRoutes);
app.use('/api/swipes', swipeRoutes);

// ✅ Zoom API Route
app.post('/api/zoom/create-meeting', async (req, res) => {
    try {
        const { topic } = req.body;
        const meeting = await generateZoomMeeting(topic || 'Default Meeting');
        res.json(meeting);
    } catch (error) {
        console.error('Error creating Zoom meeting:', error);
        res.status(500).json({ error: 'Failed to create Zoom meeting' });
    }
});

// Route to register a new user (for demo, we just add the user to the JSON file)
app.post('/register', (req, res) => {
    console.log('Received request body:', req.body);  // Log the incoming request body
    const users = readJsonFile('users.json');
    const newUser = req.body;
    users.push(newUser);
    writeJsonFile('users.json', users);
    res.status(201).send({ message: 'User registered successfully', newUser });
});


// Route for swiping (left or right)
app.post('/swipe', (req, res) => {
    const { userId, profileId, direction } = req.body;
    const swipes = readJsonFile('swipes.json');
    const newSwipe = { userId, profileId, direction, createdAt: new Date().toISOString() };
    
    // Save the swipe
    swipes.push(newSwipe);
    writeJsonFile('swipes.json', swipes);

    // Check for a match if the swipe is 'right'
    if (direction === 'right') {
        const oppositeSwipe = swipes.find(swipe => swipe.userId === profileId && swipe.profileId === userId && swipe.direction === 'right');
        if (oppositeSwipe) {
            const matches = readJsonFile('matches.json');
            const newMatch = { userId, profileId, createdAt: new Date().toISOString() };
            matches.push(newMatch);
            writeJsonFile('matches.json', matches);
            res.status(200).send({ message: 'It\'s a match!' });
        } else {
            res.status(200).send({ message: 'Swipe recorded' });
        }
    } else {
        res.status(200).send({ message: 'Swipe recorded' });
    }
});

// Route for sending messages
app.post('/message', (req, res) => {
    const { matchId, senderId, receiverId, content } = req.body;
    const messages = readJsonFile('messages.json');
    const newMessage = { matchId, senderId, receiverId, content, createdAt: new Date().toISOString() };
    messages.push(newMessage);
    writeJsonFile('messages.json', messages);
    res.status(200).send({ message: 'Message sent successfully' });
});

export default app;
