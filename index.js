const express = require("express");
const app = express();
require("dotenv").config(); // Load environment variables

const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// Import routes for todo API
const todoRoutes = require("./routes/todos");

// Mount the todo API routes (fixing the typo)
app.use("/api/v1", todoRoutes);

// Connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Default route
app.get("/", (req, res) => {
    res.send("<h1>This is my homepage</h1>");
});

// Start server
app.listen(3000, () => {
    console.log(`Server started successfully, running at ${3000}`);
});
