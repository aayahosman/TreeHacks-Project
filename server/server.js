// server.js
import 'dotenv/config';
import { connectDB } from './config/db.js';
import app from './app.js'; // Import the app from app.js

// ✅ Connect to MongoDB
connectDB();

// ✅ Start Express Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// ========================
// import 'dotenv/config';
// import express from 'express';
// import cors from 'cors';
// import { connectDB } from './config/db.js'; 
// import { generateZoomMeeting } from './zoom/zoom_service.js';

// const app = express();
// app.use(express.json());
// app.use(cors()); // Enable CORS for frontend access

// // ✅ Connect to MongoDB
// connectDB();

// // ✅ Default route
// app.get('/', (req, res) => {
//     res.send('Server is running!');
// });

// // ✅ User & Swipe Routes
// import userRoutes from './routes/userroutes.js';
// import swipeRoutes from './routes/swiperoutes.js';

// app.use('/api/users', userRoutes);
// app.use('/api/swipes', swipeRoutes);

// // ✅ Zoom API Route
// app.post('/api/zoom/create-meeting', async (req, res) => {
//     try {
//         const { topic } = req.body;
//         const meeting = await generateZoomMeeting(topic || 'Default Meeting');
//         res.json(meeting);
//     } catch (error) {
//         console.error('Error creating Zoom meeting:', error);
//         res.status(500).json({ error: 'Failed to create Zoom meeting' });
//     }
// });

// // ✅ Start Express Server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
