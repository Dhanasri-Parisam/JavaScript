/*******************************************************
 🔹 PART 7: Lexical Scope in JS (Basics)
*******************************************************/

/*
💡 Lexical Scope:
- Definition : Lexical scope (or static scope) means that the accessibility of variables is determined by the structure of the code (where functions and blocks are defined) rather than the order in which functions are called.
- Inner functions can access variables from outer functions (and global scope).
- Outer functions CANNOT access variables defined inside inner functions.
*/

// Example 1: Simple Lexical Scope
let globalVar = "I'm global";

function outerFunction() {
  let outerVar = "I'm outer";

  function innerFunction() {
    let innerVar = "I'm inner";

    console.log(globalVar); // ✅ Can access global variable
    console.log(outerVar);  // ✅ Can access outer function variable
    console.log(innerVar);  // ✅ Can access its own variable
  }

  innerFunction();

  // console.log(innerVar); // ❌ ERROR: innerVar is not accessible here
}

outerFunction();

// Output:
// I'm global
// I'm outer
// I'm inner

// ------------------------------------------------------

/*
Example 2: Lexical Scope and Nested Functions
- Inner function remembers variables of the outer function even after the outer function has finished execution
*/

function greeting(message) {
  let greetingPrefix = "Hello";

  return function(name) {  // Inner function forms a closure
    console.log(`${greetingPrefix}, ${name}! ${message}`);
  };
}

const greetJohn = greeting("Welcome to JS!"); 
greetJohn("John");  // ✅ Inner function remembers greetingPrefix and message

// Output:
// Hello, John! Welcome to JS!

// ------------------------------------------------------

/*
Example 3: Global and Local Scope
*/

let a = 100; // Global scope

function demoScope() {
  let b = 50; // Local to demoScope
  console.log("Inside demoScope - a:", a); // ✅ Can access global
  console.log("Inside demoScope - b:", b); // ✅ Can access local
}

demoScope();

// console.log(b); // ❌ ERROR: b is not defined outside demoScope

// ------------------------------------------------------

/*
Key Notes on Lexical Scope:
✅ Variables are resolved using the **position in code** (not where the function is called)
✅ Inner functions can access outer function variables
✅ Outer functions cannot access inner function variables
✅ Closures are a practical use of lexical scope
✅ Helps prevent accidental global variable overwriting
*/
