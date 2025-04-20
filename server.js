const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow all methods for simplicity in development
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

const PORT = process.env.PORT || 5000;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });


app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`listening on port ${PORT}`);
})