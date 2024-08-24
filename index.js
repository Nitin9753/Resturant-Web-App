const express = require('express');
const mongoose = require('mongoose');
const resturantRoutes = require('./routes/resturantRoutes');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/resturants', resturantRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});
app.get("/", (req, res) => {
    res.send("<h1>Web app started</h1>")
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});