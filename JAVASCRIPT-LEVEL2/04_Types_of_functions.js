console.log("Types of functions in javascript");

// Anonymus function in JS
// Anonymus function can access directly the variables from the outer scope.
// It is not recommended to use Anonymus functions in production code.
// Anonymus functions are often used as callbacks or in event handlers.
// They are defined without a name and can be executed immediately or assigned to a variable.
// Example of an Anonymus function
const result = (function (a, b) {
    return a + b;
})(5, 10);
console.log(result); // Output: 15

const access = function(a,b){
    if(a > b){
        return "a is greater";
    }
    else{
        return "b is greater";
    }
}

let accessing = access(10,20);
console.log(accessing);

const Printnames = (function(name){
    return `hello you are learning ${name}`;
})("JAVASCRIPT");

console.log(Printnames);


// IIFE THEORY
// IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.
// It is a design pattern that helps to create a private scope for variables and functions.
// IIFE is often used to avoid polluting the global scope and to create a module-like structure.
// Example of an IIFE

//IIFE without parameters
(function () {
    const message = "This is an IIFE";
    console.log(message);
})();

// IIFE with parameters
(function (name) {
    console.log(`Hello, ${name}!`);
})("Dhanu");

// IIFE with return value
const withreturn = (function (a, b) {
    return a + b;
})(5, 10);
console.log(withreturn); // Output: 15

// IIFE without return value
(function () {
    console.log("This IIFE does not return a value.");
})();


// cover the 4 cases 
// Function with no arguments and no return value
(function () {
    console.log("This IIFE has no parameters and does not return a value.");
})();

// Function with no arguments and a return value
const noArgsWithReturn = (function () {
    return "This IIFE has no parameters but returns a value.";
})();
console.log(noArgsWithReturn); // output: This IIFE has no parameters but returns a value.

// Function with arguments and no return value
(function (name) {
    console.log(`Hello, ${name}!`);
})("Dhanu");

// Function with arguments and with return value
const argsWithReturn = (function (a, b) {
    return a + b;
})(5, 10);
console.log(argsWithReturn); // Output: 15

// Arrow functions in Javascript
// Arrow functions are a more concise syntax for writing functions in JavaScript.
// do not use function statement
// It is used to write shorter function syntax
// Arrow functions do not have their own 'this' context, they inherit 'this' from the parent scope.
// They are often used for callbacks and functional programming.
// Example of an Arrow function

const arrowFunction = (a, b) => a + b;
console.log(arrowFunction(5, 10)); // Output: 15

product = (a, b) =>{
    console.log(a * b);
} 
product(5,6);

product1 = (a,b) => (a * b);
console.log(product1(5,6)); // Output: 30

product2 = (a,b) => {
    return a * b;
}
let productres = product2(5,6);
console.log(productres); // Output: 30

// arrow functions => with arguments && without arguments
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
}
greetUser("Dhanu");

// without parameters
const greet = () => {
    console.log("Hello, World!");
}
greet();

// with return type
const square = (x) => x * x;
let squareResult = square(5);
console.log(squareResult); // output: 25

// without return type
const cube = _ => {
    console.log(_ * _ * _);
}
cube(5); // output: 125