// Pure vs Impure Functions in JavaScript

/*
Pure Function:
- Has no side effects (does not modify any external state)
- Always produces the same output for the same inputs
- Easier to test and debug
- Example:
*/
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5 (always same output)
console.log(add(2, 3)); // 5 (always same output)

/*******************************************************/

/*
Impure Function:
- May have side effects (modifies external state)
- Output may change for same inputs
- Harder to debug
- Example:
*/
let counter = 0; // External state
function increment() {
  counter++;       // Modifies external state
  return counter;  // Output depends on external state
}
console.log(increment()); // 1
console.log(increment()); // 2

/*******************************************************/

// Another Pure Function Example
function multiply(x, y) {
  return x * y; // Output depends only on input
}
console.log(multiply(2, 3)); // 6
console.log(multiply(2, 3)); // 6
console.log(multiply(4, 5)); // 20

// Another Impure Function Example
let name = "Alice"; // External state
function greet() {
  return `Hello, ${name}!`; // Output depends on external state
}

console.log(greet()); // Hello, Alice!
name = "Bob";          // External state changed
console.log(greet()); // Hello, Bob! (output changed)

// Key Notes / Takeaways
/*
Pure Functions:
   - No side effects
   - Same output for same input
   - Easier to test, debug, and reuse
   - Example: add(), multiply()

Impure Functions:
   - May modify external variables or states
   - Output may vary for same inputs
   - Can lead to bugs if not careful
   - Example: increment(), greet() with external dependency

Best Practice:
- Use pure functions wherever possible for cleaner and predictable code.
- Use impure functions only when interacting with external state (like UI, database, or API calls).
*/
