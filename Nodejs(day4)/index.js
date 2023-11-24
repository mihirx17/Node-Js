const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Set the view engine to EJS
app.set("view engine", "ejs");

// Parse URL-encoded bodies (usually sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define your posts array
let posts = [
    { id: uuidv4(), username: "Spiderman", postContent: "I swing from buildings" },
    { id: uuidv4(), username: "Ironman", postContent: "I build suits" },
    { id: uuidv4(), username: "Black Widow", postContent: "I am a skilled spy" }
];

// Define routes
app.get('/', (req, res) => {
    res.render("index.ejs", { posts: posts });
});

app.get("/post/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/post", (req, res) => {
    // Process the form data (req.body)
    const { username, postContent } = req.body;
    const newPost = { id: uuidv4(), username, postContent };
    posts.push(newPost);

    // Assuming you want to redirect to the home page after processing the form
    res.redirect('/');
});

app.get("/post/:id", (req, res) => {
    const id = req.params.id;
    const post = posts.find((p) => id == p.id);
    console.log(post);
    res.render("Show.ejs", { post: post });
});

app.listen(8000, () => {
    console.log(`Connecting to port 8000`);
});
