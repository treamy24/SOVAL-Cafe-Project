// Load environment variables from .env file
require('dotenv').config();

// Import Express framework
const express = require('express');

// Import Mongoose for MongoDB interaction
const mongoose = require('mongoose');

// Import routes
const coffeesRoutes = require('./routes/coffees');

// Create an Express app
const app = express();

// Middleware to set CORS headers
app.use(express.json()) // for parsing application/json

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/coffees', coffeesRoutes);

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to do and listening on port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })




