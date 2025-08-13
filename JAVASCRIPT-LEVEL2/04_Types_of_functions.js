console.log("Types of Functions in JavaScript");

// ====================================================
// 1. ANONYMOUS FUNCTIONS
// ====================================================
// Definition:
// An Anonymous Function is a function without a name.
// It can be assigned to a variable or used as a callback.
// It does NOT run immediately unless explicitly called.
// ====================================================

// Example 1: Anonymous function assigned to a variable
const compare = function(a, b) {
    if (a > b) {
        return "a is greater";
    } else {
        return "b is greater";
    }
};

// Calling the anonymous function
let result = compare(10, 20);
console.log(result); // Output: b is greater


// Example 2: Anonymous function used immediately (looks like IIFE but technically still anonymous)
const greeting = (function(name) {
    return `Hello, you are learning ${name}`;
})("JavaScript");

console.log(greeting); // Output: Hello, you are learning JavaScript



// ====================================================
// 2. IIFE (Immediately Invoked Function Expression)
// ====================================================
// Definition:
// IIFE is a function that is defined and executed immediately.
// It is wrapped in parentheses to make it an expression,
// and followed by () to execute it right away.
// Purpose:
//  - Avoid polluting the global scope
//  - Create a private scope
// ====================================================

// Example 1: IIFE without parameters
(function() {
    const message = "This is an IIFE";
    console.log(message);
})();

// Example 2: IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})("Dhanu");

// Example 3: IIFE with a return value
const sum = (function(a, b) {
    return a + b;
})(5, 10);
console.log(sum); // Output: 15

// Example 4: IIFE without return value
(function() {
    console.log("This IIFE does not return a value.");
})();



// ====================================================
// 3. COVERING THE 4 MAIN IIFE CASES
// ====================================================

// Case 1: No arguments, no return value
(function() {
    console.log("IIFE: no parameters, no return value.");
})();

// Case 2: No arguments, with return value
const noArgsReturn = (function() {
    return "IIFE: no parameters, returns a value.";
})();
console.log(noArgsReturn);

// Case 3: Arguments, no return value
(function(name) {
    console.log(`IIFE: Hello, ${name}! (no return value)`);
})("Dhanu");

// Case 4: Arguments, with return value
const argsReturn = (function(a, b) {
    return a + b;
})(5, 10);
console.log(argsReturn); // Output: 15



// ====================================================
// 4. ANONYMOUS IIFE vs NAMED IIFE
// ====================================================

// Anonymous IIFE — no name, used for quick execution
(function(a, b) {
    console.log("Anonymous IIFE Sum:", a + b);
})(5, 10);

// Named IIFE — has a name for debugging or recursion
// The name is NOT available outside the function scope
(function sumIIFE(a, b) {
    console.log("Named IIFE Sum:", a + b);
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
