const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

// Set the view engine to EJS
app.set("view engine", "ejs");

// Parse URL-encoded bodies (usually sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Use method-override middleware
app.use(methodOverride('_method'));

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define your posts array
let posts = [
    { id: uuidv4(), username: "Spiderman", postContent: "I swing from buildings" },
    { id: uuidv4(), username: "Ironman", postContent: "I build suits" },
    { id: uuidv4(), username: "Black Widow", postContent: "I am a skilled spy" },
    { id: uuidv4(), username: "Captain America", postContent: "Shielding justice in action" },
    { id: uuidv4(), username: "Thor", postContent: "Wielding Mjolnir and summoning storms" },
    { id: uuidv4(), username: "Hulk", postContent: "Smashing everything in sight" },
    { id: uuidv4(), username: "Doctor Strange", postContent: "Bending reality with the mystic arts" },
    { id: uuidv4(), username: "Captain Marvel", postContent: "Harnessing cosmic energy for good" },
    { id: uuidv4(), username: "Ant-Man", postContent: "Shrinking down and saving the day" },
    { id: uuidv4(), username: "Wolverine", postContent: "Unleashing adamantium claws in battle" },
    { id: uuidv4(), username: "Scarlet Witch", postContent: "Warping reality with chaos magic" }
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

    // Redirect to the home page after processing the form
    res.redirect('/');
});

app.get("/post/:id", (req, res) => {
    const id = req.params.id;
    const post = posts.find((p) => id == p.id);
    
    if (!post) {
        // Handle the case where the post is not found
        res.status(404).send("Post not found");
        return;
    }

    res.render("Show.ejs", { post: post });
});

app.patch("/post/:id", (req, res) => {
    let id = req.params.id;
    let newContent = req.body.postContent; // Extract the specific property

    const post = posts.find((p) => id == p.id);

    if (!post) {
        // Handle the case where the post is not found
        res.status(404).send("Post not found");
        return;
    }

    post.postContent = newContent; // Update the specific property

    console.log(post);
  
    res.redirect("/");
});


app.get("/post/:id/Edit", (req, res) => {
    let id = req.params.id;
    const post = posts.find((p) => id == p.id);

    if (!post) {
        // Handle the case where the post is not found
        res.status(404).send("Post not found");
        return;
    }

    res.render("Edit.ejs", { id, post });
   
});

app.listen(8000, () => {
    console.log(`Connecting to port 8000`);
});
