const express = require('express');
const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
const path = require('path');
const app = express();
const port = 8000;
app.use(express.urlencoded({extended:true}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
connectToDatabase().then(console.log("Connnected to Database Server")).catch((err)=>{console.log(err)});
async function connectToDatabase(){ 
      await mongoose.connect('mongodb://127.0.0.1:27017/instaGram');
      console.log("Connected to MongoDB Database");
    
    }    

app.get('/', (req, res) => {
  console.log("Just for the demo");
  // res.send("Checking connections");
  
});
app.get('/chat',async(req,res)=>{
  let Collection_Data=await Chat.find();
 res.render("index.ejs",{Collection_Data});
  
});
app.get("/chat/new",(req,res)=>{
  res.render("newChat.ejs");
});
app.post("/chats", (req, res) => {
  // Destructure the correct property names: form, to, message
  let { from, to, message } = req.body;

  // Create a new Chat instance
  let newChat = new Chat({
    from: from,  // Use the correct variable name here
    to: to,
    message: message,
    created_at: new Date(),
  });
  newChat.save().then(res=>{console.log("chat has been saved")}).catch((err)=>{console.log(err)});

  console.log(newChat);
  res.redirect("/chat");
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Connected to ${port}`);
  }
});
