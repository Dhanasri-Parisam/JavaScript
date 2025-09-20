// Currying in JavaScript
// Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
// This allows for partial application of functions and can lead to more reusable and modular code.

// Example of a curried function
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
// Using the curried function
const result = add(2)(3)(5);

console.log(result); // Output: 10

// Benefits of Currying:
// 1. Partial Application: You can create specialized functions by fixing some arguments.
const addFive = add(5);
const addFiveAndThree = addFive(3);
console.log(addFiveAndThree(10)); // Output: 18

// 2. Improved Readability: Functions can be more readable and easier to understand.
// 3. Reusability: Curried functions can be reused in different contexts with different arguments.
// 4. Functional Composition: Currying facilitates function composition, allowing you to build complex operations from simpler functions.

// Common Mistakes:
// 1. Over-Currying: Not every function needs to be curried. Overuse can lead to unnecessary complexity.
// 2. Performance: Currying can introduce additional function calls, which may impact performance in performance-critical applications.
// 3. Context Loss: Be cautious when using curried functions with methods that rely on `this`, as the context may be lost.



// Pass By Value vs Pass By Reference in JavaScript
// In JavaScript, primitive types (like numbers, strings, booleans, null, undefined, and symbols) are passed by value, while objects (including arrays and functions) are passed by reference.

// Pass By Value Example:
let x = 10;
let y = x; // y gets a copy of x
y = 20; // Changing y does not affect x
console.log(x); // Output: 10
console.log(y); // Output: 20
// Here, x remains 10 because y is a separate copy.

// Pass By Reference Example:
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 references the same object as obj1
obj2.name = "Bob"; // Changing obj2 affects obj1
console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob
// Here, both obj1 and obj2 reflect the change because they reference the same object.

// Common Mistakes:
// 1. Assuming Primitives are References: Modifying a primitive variable does not affect other variables that were assigned its value.
// 2. Unintended Side Effects: When passing objects, changes to the object in one place can affect it elsewhere, leading to bugs if not managed carefully.
// 3. Confusion with Functions: Functions are objects in JavaScript, so they are passed by reference. Be cautious when modifying function properties or methods.
// 4. Shallow vs Deep Copy: When copying objects, a shallow copy only copies the reference to nested objects. Use techniques like structured cloning or libraries for deep copying if needed.

