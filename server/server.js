require('dotenv').config();
console.log("MONGO_URI from .env:", process.env.MONGO_URI); // Debugging line
const express = require('express');
const profiles = require('./models/profile');
const cors = require('cors');  // Add this line to import CORS
const connectDB = require('./config/db'); 

const app = express();
app.use(express.json());
// Connect to MongoDB
connectDB();

// Endpoint to get profiles by preference

app.use(cors()); // This will allow all domains to access your API
app.get('/profiles', async (req, res) => {
    // Get the 'preference' query parameter from the request URL
    const preference = req.query.preference;

    // If a preference is provided, filter the profiles based on that preference
    if (preference) {
        const filteredProfiles = profiles.filter(profile => profile.preference === preference);
        return res.json(filteredProfiles);  // Return the filtered profiles
    }

    // If no preference is provided, return all profiles
    res.json(profiles);
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
