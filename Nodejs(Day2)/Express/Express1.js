const express = require('express');
const app = express();
const port = 8000;

app.use((req, res) => {
    // Log the request object to the console
    console.log(req);

    // Send an array as a response
    res.send(["car", "Name", "tony", 122]);

    // The following lines will not be executed because the response has already been sent
    // If you want to send multiple responses, you'll need to conditionally choose one based on some logic

    // Send an object as a response (this will not be reached due to the previous res.send)
    res.send({ Name: "Mihir", Age: "21", PhoneNumber: "932932322" });

    // Send plain text as a response (this will not be reached due to the previous res.send)
    res.send("Welcome To Express");

    // Send HTML as a response (this will not be reached due to the previous res.send)
    res.send("<h1>Welcome To Express</h1>");
});

app.listen(port, (err) => {
    if (err) {
        console.log("Something happened " + err);
    } else {
        console.log(`Connecting to ${port}`);
    }
});
