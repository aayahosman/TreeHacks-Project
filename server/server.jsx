const express = require('express');
const connectDB = require('./config/db');
const swipeRoutes = require('./routes/swiperoutes');

require('dotenv').config();
const app = express();
app.use(express.json());

// Connect to databases
connectDB();

// Routes
app.use('/api/swipes', swipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
