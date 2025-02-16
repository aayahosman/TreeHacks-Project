import 'dotenv/config';
import { connectDB } from './config/db.js';
import app from './app.js'; // Import the app from app.js

// ✅ Connect to MongoDB
connectDB();

// ✅ Start Express Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

