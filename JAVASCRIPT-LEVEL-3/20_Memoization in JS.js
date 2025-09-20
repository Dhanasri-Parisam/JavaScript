/*******************************************************
 🔹 Memoization in JavaScript
*******************************************************/

/*
 What is Memoization?
- Memoization is an optimization technique.
- It caches (stores) the results of expensive function calls.
- If the same inputs occur again, the cached result is returned instead of recomputing.
- Very useful for recursive or time-consuming functions.
*/

/*******************************************************
 Example 1: Factorial with Memoization
*******************************************************/
let memo = {};

function memoizedFactorial(n) {
    if (n in memo) {              // Check if result already cached
        return memo[n];           // Return cached value
    }

    if (n <= 1) {                 // Base case
        return 1;
    }

    memo[n] = n * memoizedFactorial(n - 1); // Store result in cache
    return memo[n];
}

console.log(memoizedFactorial(5)); // 120
console.log(memoizedFactorial(6)); // 720 (reuses previous cached factorial of 5)

/*******************************************************
 Example 2: Sum function with Memoization
*******************************************************/
let store = {};

function sum(a, b) {
  const key = `${a}-${b}`;  // Create a unique key for the input combination

  if (key in store) {       // Check cache
    return store[key];      // Return cached result
  }

  store[key] = a + b;       // Compute and cache result
  return store[key];
}

console.log(sum(2, 3)); // 5
console.log(sum(2, 3)); // 5 (cached result, no recomputation)

/*******************************************************
 Non-memoized version for comparison
*******************************************************/
function nonMemoizedSum(a, b) {
    return a + b;           // Always recomputes result
}

console.log(nonMemoizedSum(2, 3)); // 5
console.log(nonMemoizedSum(2, 3)); // 5 (recomputed)

/*******************************************************
 Example 3: Timing a slow function
*******************************************************/
function slowFunction(num) {
    // Simulate a heavy computation
    for (let i = 0; i < 1e8; i++);
    return num * 2;
}

// Non-memoized calls
console.time("Non-memoized");
console.log(slowFunction(5));  // 10
console.timeEnd("Non-memoized");

console.time("Non-memoized");
console.log(slowFunction(5));  // 10 (recomputed, same time as before)
console.timeEnd("Non-memoized");

// output:
// Non-memoized: XXms
// Non-memoized: XXms
// (XX will be similar both times, showing no speedup)
// Memoized calls
let cache = {};
function memoizedSlowFunction(num) {
    if (num in cache) {
        return cache[num]; // Return cached result
    }
    // Simulate a heavy computation
    for (let i = 0; i < 1e8; i++);
    cache[num] = num * 2;
    return cache[num];
}
console.time("Memoized");
console.log(memoizedSlowFunction(5));  // 10
console.timeEnd("Memoized");
console.time("Memoized");
console.log(memoizedSlowFunction(5));  // 10 (cached, much faster)
console.timeEnd("Memoized");

// output:
// Memoized: XXms
// Memoized: YYms
// (YY will be significantly smaller than XX, showing speedup due to caching)

/*
 Key Notes:
1. Memoization avoids unnecessary recalculations.
2. Improves performance, especially for expensive or recursive functions.
3. Works by storing results in an object or map using a unique key for inputs.
4. Non-memoized functions always recompute results.
5. Always ensure the key uniquely represents the inputs (like `${a}-${b}` for multiple parameters).
*/
