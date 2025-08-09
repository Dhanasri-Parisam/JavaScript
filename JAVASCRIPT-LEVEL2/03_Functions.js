/*

console.log("All about functions in js")

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const add = function (a, b) {
    return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Calling Functions
console.log(greet("Dhanu")); // Output: Hello, Dhanu!
console.log(add(5, 10));      // Output: 15
console.log(multiply(5, 10)); // Output: 50


// default parameter
const sum = function (a, b, c = 10) {
    return a + b + c;
}
let res = sum(10, 2) // Output: 16
console.log(res); // output: 16

//subtract using functions

const subtract = function (a, b) {
    console.log(a, b); // logs: 22 undefined when called with one arg
    return a - b;
}
const ans = subtract(22); // Output: NaN
console.log(ans);


// arrow function in javascript
const funct1 = (x) => {
    console.log("x value: " + x);
}
funct1(32)


const summition = (a, b) => (a + b);
const answer = summition(5, 2);
console.log(answer); // output : 7

// function with multiple parameters
const displayInfo = (name, age) => {
    console.log(`Name: ${name}, Age: ${age}`);
}
displayInfo("Dhanu", 25);

// function with no parameters
const displayMessage = () => {
    console.log("Hello, this is a message.");
}
displayMessage();

//function inside another function
const outerFunction = () => {
    const innerFunction = () => {
        console.log("Hello from the inner function!");
    }
    innerFunction();
}
outerFunction();

*/
/*

// faulty calculator generator

// tasks to be performed:
 1.it takes the input from the user
 2.it perform wrong operation as follows:

 + ------> - 
 * ------> +
 - ------- / 
 / ------- * 

 // 10% behave like a faulty calculator
// 90% behave like a normal calculator

 */

console.log(" faulty calculatar ")

// 10% behave like a faulty calculator
// 90% behave like a normal calculator
if (Math.random() < 0.1){
    function sum(a,b){
        return a-b
    }
    function sub(a,b){
        return a/b
    }
    function mul(a,b){
        return a+b
    }
    function div(a,b){
        return a**b
    }

}

else{

    function sum(a,b){
        return a+b
    }
    function sub(a,b){
        return a-b
    }
    function mul(a,b){
        return a*b
    }
    function div(a,b){
        return a/b
    }
}
    
let c = sum(16,14)
let d = sub(16,14)
let p = mul(16,14)
let q = div(16,14)
console.log("output of operation --->> "+ c)
console.log("output of operation --->> "+ d)
console.log("output of operation --->> "+ p)
console.log("output of operation --->> "+ q)