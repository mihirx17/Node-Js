const express = require('express');
const app = express();
const port = 8000;

// Handling GET request for the root path "/"
app.get("/", (req, res) => {
    console.log("You are connected to Root path..");
    res.send("You are connected to Root path.");
});

// Handling GET request for the "/apple/orange" path
app.get("/apple/orange", (req, res) => {
    console.log("You are connected to Apple/Orange Path..");
    res.send("You are connected to Apple/Orange Path..");
});

// Handling all other routes that were not explicitly defined
app.get("*", (req, res) => {
    console.log("This Path Does not Exist..");
    res.send("This Path Does not Exist..");
});

// Handling POST request for the "/First" path
app.post("/First", (req, res) => {
    console.log("POST request Checked");
    res.send("POST Request");
});

// Setting up the server to listen on the specified port
app.listen(port, (err) => {
    if (err) {
        console.log("Something happened " + err);
    } else {
        console.log(`Connecting to ${port}`);
    }
});