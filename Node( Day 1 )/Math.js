// Define functions for arithmetic operations
const Sum = (a, b) => console.log(a + b);
const Sub = (a, b) => console.log(a - b);
const Multi = (a, b) => console.log(a * b);
const test=require('./Test');
// Define a constant
const PI = 3.14;

// Create an object to organize and export the functions and constant
const Calculator = {
  Sum: Sum,
  Sub: Sub,
  Multi: Multi,
  PI: PI,
  test:test
};

// Alternatively, you can use shorthand property names since the property name and the variable name are the same
// const Calculator = { Sum, Sub, Multi, PI };

// Export the object
module.exports = Calculator;
//exports.number=123;
// Additionally, you can export a variable directly using `exports`


