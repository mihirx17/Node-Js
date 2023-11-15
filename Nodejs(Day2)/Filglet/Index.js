var figlet = require("figlet");
let input="Welcome to Node js"
figlet(input, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});