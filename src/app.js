const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Database connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

// Routes
app.use('/api/v1/users', userRoutes);

module.exports = app;
