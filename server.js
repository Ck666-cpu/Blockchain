const express = require("express");
const path = require("path");
const app = express();

// Serve static files (e.g., HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, "scr")));

// Individual routes for specific HTML files (optional)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "scr", "home.html"));
});

app.get("/PRemployee", (req, res) => {
    res.sendFile(path.join(__dirname, "scr", "PRemployee.html"));
});

app.get("/PRdashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "scr", "PRdashboard.html"));
});

app.get("/PRfund", (req, res) => {
    res.sendFile(path.join(__dirname, "scr", "PRfund.html"));
});

// Start the server
const server = app.listen(3000, () => {
    console.log(`Server is running on port ${server.address().port}`);
});
