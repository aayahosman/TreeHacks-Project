require('dotenv').config();
console.log("MONGO_URI from .env:", process.env.MONGO_URI); // Debugging line
const express = require('express');
const connectDB = require('./config/db'); 

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.use('/api/users', require('./routes/userroutes'));
app.use('/api/swipes', require('./routes/swiperoutes'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
