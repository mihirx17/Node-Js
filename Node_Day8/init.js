
const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
connectToDatabase().then(console.log("Connnected to Database Server")).catch((err)=>{console.log(err)});
async function connectToDatabase(){ 
      await mongoose.connect('mongodb://127.0.0.1:27017/instaGram');
      console.log("Connected to MongoDB Database");
    }    

    let userChat = [
      {
          from: "Tony",
          to: "Thor",
          message: "It's been a long time since I've seen you, Thor.",
          created_at: new Date(),
      },
      {
          from: "Mihir",
          to: "Anishar",
          message: "Hey Anishar, how have you been?",
          created_at: new Date(),
      },
      {
          from: "Iron Man",
          to: "Hulk",
          message: "Hulk, we need you for a mission. Are you ready?",
          created_at: new Date(),
      },
      {
          from: "Mihir",
          to: "Anjali",
          message: "Anjali, let's catch up soon. Miss our old times.",
          created_at: new Date(),
      }
  ];
  
    Chat.insertMany(userChat,);