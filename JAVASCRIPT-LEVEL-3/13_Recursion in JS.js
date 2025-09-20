// Recursion in JavaScript
// Definition: A function that calls itself is known as a recursive function. Recursion is a powerful technique for solving problems that can be broken down into smaller, similar subproblems.

// Example 1: Factorial Calculation
function factorial(n) {
  if (n === 0) { // Base case
    return 1;
  }
  return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Output: 120

// Recursion structure
let basecase = true;
function test(){
  if(basecase){

  }
  test()
}

test()

// Example 2: Fibonacci Sequence
function fibonacci(n) {
  if (n <= 1) { // Base case
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

fibonacci(6); // Output: 8

// Example 3: Sum of Array Elements
function sumArray(arr) {
  if (arr.length === 0) { // Base case
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1)); // Recursive case (slicing the array - removing the first element)
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Summary
// Recursion is a technique where a function calls itself to solve smaller instances of the same problem.
// It requires a base case to terminate the recursion and prevent infinite loops.
// Recursive functions can be elegant and concise, but they may also lead to performance issues if not used carefully (e.g., deep recursion causing stack overflow).
// Always ensure that the base case is reachable and that the recursive calls progress towards it.

// Common Mistakes:
// ❌ Missing base case → leads to infinite recursion
// ❌ Incorrect base case → may produce wrong results
// ❌ Not progressing towards base case → infinite recursion
// ❌ Excessive recursion depth → stack overflow
// ❌ Overcomplicating simple problems → use iteration when appropriate