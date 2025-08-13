console.log("Types of functions in javascript");

// Anonymus function in JS
// Anonymus function can access directly the variables from the outer scope.
// It is not recommended to use Anonymus functions in production code.
// Anonymus functions are often used as callbacks or in event handlers.
// They are defined without a name and can be executed immediately or assigned to a variable.
// Example of an Anonymus function
(function (a, b) {
    console.log(a + b);
}(5, 10)); // Output: 15

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

// Anonymous IIFE
// This IIFE does not have a name and is used for quick, throwaway logic.
(function (a, b) {
    console.log(a + b); // Output: 15
})(5, 10);

// Named IIFE
// This IIFE has a name ('sum') which helps in debugging and allows recursion inside the function.
// The name 'sum' is not accessible outside the IIFE's scope.
(function sum(a, b) {
    console.log(a + b); // Output: 15
})(5, 10);


// Arrow functions in Javascript
// Arrow functions are a more concise syntax for writing functions in JavaScript.
// do not use function statement
// It is used to write shorter function syntax
// Arrow functions do not have their own 'this' context, they inherit 'this' from the parent scope.
// They are often used for callbacks and functional programming.
// Example of an Arrow function

const arrowFunction = (a, b) => a + b;
console.log(arrowFunction(5, 10)); // Output: 15

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

// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Dhanu", 25);
console.log(person1); // output: Person { name: 'Dhanu', age: 25 }

// rest parameters

function cubes(a,b,...arr){
    let sum  = 0;
    for(let i in arr){
        sum += arr[i];
    }
    return a+b+sum;
}
let cubeoid = cubes(10,20,30,30,40,50);
console.log(cubeoid); // output: 180
console.log(arguments); // output: [Arguments] { '0': 10, '1': 20, '2': 30, '3': 30, '4': 40, '5': 50 }

/*
Conclusion:
In this file, we covered the following topics related to functions in JavaScript:

1. Anonymous functions: Functions without a name, often used as callbacks or assigned to variables.
2. IIFE (Immediately Invoked Function Expressions): Functions that run as soon as they are defined, with and without parameters and return values, including named and anonymous IIFEs.
3. Arrow functions: Concise syntax for writing functions, with and without parameters and return values.
4. Constructor functions: Functions used to create objects.
5. Rest parameters: Handling variable numbers of function arguments.
6. Default parameters: Providing default values for function parameters.

These concepts are fundamental for understanding different ways to define and use functions in JavaScript.
*/
