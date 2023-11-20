const express = require('express');
const app = express();
const port = 8000;

app.get("/register", (req, res) => {
    console.log("Getting Request...(GET)");
    let { userName, password } = req.query;
    res.send(`Welcome ${userName} To New World..`);
});
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/register", (req, res) => {
    console.log("Getting Post Request....");
    // Assuming you are sending JSON data in the request body
    let {userName,password}=req.body;
    res.send(`your Username : is ${userName}, and  password : is ${password}`);
   console.log(req.body);
});

app.listen(port, (err) => {
    if (err) {
        console.log("Something happened " + err);
    } else {
        console.log(`Connecting to ${port}`);
    }
});
