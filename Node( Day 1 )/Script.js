// Corrected module name for "Math"
const MathModule = require("./Math");

// Corrected path for "Cars" module
const cars = require("./Cars");

// Uncommenting the following lines
// console.log(process.argv);
// console.log(calculator.Sub(10, 2)); // Assuming calculator is defined somewhere
// console.log(Math.number); // Assuming Math module exports a variable

// Using the correct variable name for the "number" property in the Math module
console.log(MathModule.number);

// Logging the entire Math module
console.log(MathModule);

// Accessing properties/methods from the Math module
console.log(MathModule.PI);
console.log(MathModule.Sub(20, 10));
console.log(MathModule.test.Phone_Number);
console.log(cars.info);
