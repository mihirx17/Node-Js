const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Fixed the typo here

app.get("/", (req, res) => {
    console.log("Welcome to the Home page..");
    res.render("home.ejs");
});

app.get("/home", (req, res) => {
    let rollDice = Math.floor(Math.random() * 6) + 1; // Fixed the variable name here (num to rollDice)
    res.render("rollDice.ejs", { rollDice: rollDice }); // Fixed the variable name here (num to rollDice)
});

app.get("/ig/:username", (req, res) => {
    let { username,} = req.params;
    res.render("instagram.ejs", { username: username });
});

app.listen(port, (err) => {
    if (err) {
        console.log(`Some ${err} has been found..`);
    } else {
        console.log(`Connecting to ${port}...`);
    }
});
