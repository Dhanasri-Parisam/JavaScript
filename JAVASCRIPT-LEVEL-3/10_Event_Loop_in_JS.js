// Example to illustrate the event loop:
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

// what will happens here -> first "Start" will be printed -> then Promise callback will be printed -> then Timeout callback will be printed

/***************************************************************************
 COMPLETE EVENT LOOP DEFINITIONS AND WORKING:
***************************************************************************/

/*
1. JavaScript Engine:
   - The program that parses and executes JavaScript code (e.g., V8 in Chrome, SpiderMonkey in Firefox).

2. Call Stack:
   - A stack data structure that keeps track of function calls.
   - Executes code in a Last-In-First-Out (LIFO) order.
   - If the stack is busy, new tasks must wait.

3. Web APIs:
   - Provided by browsers (not part of JS itself).
   - Handles asynchronous operations like setTimeout, DOM events, AJAX, etc.
   - When an async task completes, its callback is sent to the appropriate queue.

4. Callback Queue (Task Queue):
   - Stores callbacks from Web APIs (e.g., setTimeout, event handlers).
   - The event loop moves tasks from here to the call stack when it's empty.

5. Microtask Queue:
   - Stores microtasks (e.g., Promise callbacks, MutationObserver).
   - Has higher priority than the callback queue.

6. Event Loop:
   - Continuously monitors the call stack and queues.
   - Follows this priority order:
     1. Execute all functions in the call stack
     2. Execute all microtasks in the microtask queue
     3. Execute one task from the callback queue
     4. Repeat the process

7. Render Queue:
   - Handles UI rendering and painting.
   - Lower priority than microtasks but higher than callback queue tasks.
*/

/***************************************************************************
 DETAILED EXAMPLES WITH EXPLANATIONS:
***************************************************************************/

console.log("\n=== EVENT LOOP DEMONSTRATION ===");

// Example 1: Basic Event Loop Priority
console.log("\n--- Example 1: Basic Priority Order ---");

console.log("1: Start"); // Synchronous - goes to call stack immediately

setTimeout(() => {
  console.log("4: Timeout"); // Macrotask - goes to callback queue
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise"); // Microtask - goes to microtask queue
});

console.log("2: End"); // Synchronous - goes to call stack immediately

/*
Execution Order Explanation:
1. "Start" - synchronous, executes immediately
2. setTimeout - Web API, callback goes to callback queue after 0ms
3. Promise.resolve().then() - microtask, goes to microtask queue
4. "End" - synchronous, executes immediately
5. Call stack is empty, event loop checks microtask queue first
6. "Promise" - microtask executes
7. Microtask queue empty, event loop checks callback queue
8. "Timeout" - callback executes
*/

// Example 2: Multiple Microtasks vs Macrotasks
console.log("\n--- Example 2: Multiple Tasks Priority ---");

setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));

console.log("Synchronous");

/*
Output:
"Synchronous"
"Promise 1" 
"Promise 2"
"Timeout 1"
"Timeout 2"

Why? All microtasks execute before any macrotask!
*/

// Example 3: Nested Microtasks
console.log("\n--- Example 3: Nested Microtasks ---");

Promise.resolve().then(() => {
  console.log("Promise 1");
  Promise.resolve().then(() => {
    console.log("Nested Promise");
  });
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

/*
Output:
"Promise 1"
"Promise 2"
"Nested Promise"
"Timeout"

The nested promise is added to the microtask queue and executes 
before the timeout (macrotask).
*/

// Example 4: Understanding Call Stack Overflow
console.log("\n--- Example 6: Call Stack Management ---");

let counter = 0;

function recursiveFunction() {
  counter++;
  if (counter < 5) {
    console.log(`Recursive call ${counter}`);
    recursiveFunction(); // Synchronous recursion
  }
}

function asyncRecursiveFunction() {
  counter++;
  if (counter < 10) {
    console.log(`Async recursive call ${counter}`);
    setTimeout(asyncRecursiveFunction, 0); // Asynchronous recursion
  }
}

recursiveFunction(); // Calls stack up
counter = 0; // Reset counter
setTimeout(() => {
  asyncRecursiveFunction(); // Each call goes through event loop
}, 100);

/***************************************************************************
 PRACTICAL UNDERSTANDING:
***************************************************************************/

// Example 7: Common Interview Question
console.log("\n--- Example 7: Interview Question ---");

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`Loop with let: ${i}`); // 0, 1, 2
  }, 0);
}

for (var j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log(`Loop with var: ${j}`); // 3, 3, 3
  }, 0);
}

// Fix for var issue:
for (var k = 0; k < 3; k++) {
  (function(index) {
    setTimeout(() => {
      console.log(`Fixed with IIFE: ${index}`); // 0, 1, 2
    }, 0);
  })(k);
}

/***************************************************************************
 EVENT LOOP VISUAL REPRESENTATION:
***************************************************************************/

/*
JavaScript Runtime Environment:

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Call Stack    │    │   Web APIs      │    │  Microtask      │
│                 │    │                 │    │  Queue          │
│ ┌─────────────┐ │    │ • setTimeout    │    │                 │
│ │ function3() │ │    │ • DOM Events    │    │ • Promise.then  │
│ ├─────────────┤ │    │ • fetch()       │    │ • queueMicrotask│
│ │ function2() │ │    │ • XMLHttpReq    │    │ • MutationObs   │
│ ├─────────────┤ │    │                 │    │                 │
│ │ function1() │ │    └─────────────────┘    └─────────────────┘
│ ├─────────────┤ │              │                      ▲
│ │   global    │ │              │                      │
│ └─────────────┘ │              ▼                      │
└─────────────────┘    ┌─────────────────┐    ┌─────────────────┐
          ▲            │  Callback       │    │   Event Loop    │
          │            │  Queue          │    │                 │
          │            │                 │    │ 1. Stack empty? │
          │            │ • setTimeout CB │    │ 2. Microtasks   │
          │            │ • Event CB      │    │ 3. One Callback │
          │            │ • I/O CB        │    │ 4. Render       │
          └────────────┤                 │    │ 5. Repeat       │
                       └─────────────────┘    └─────────────────┘
                                 ▲                      │
                                 └──────────────────────┘

Event Loop Algorithm:
1. Execute all functions in call stack
2. Execute ALL microtasks (until microtask queue is empty)
3. Check if rendering is needed
4. Execute ONE callback from callback queue
5. Repeat from step 1
*/

/***************************************************************************
 KEY TAKEAWAYS:
***************************************************************************/

/*
 JavaScript is single-threaded but can handle asynchronous operations
 Event loop enables non-blocking behavior
 Microtasks (Promises) have higher priority than macrotasks (setTimeout)
 All microtasks execute before any callstack
 Understanding this helps write better async code
 Blocking operations can freeze the entire application
 Use async patterns to keep UI responsive

 Common Mistakes:
- Thinking setTimeout(fn, 0) executes immediately
- Not understanding microtask vs macrotask priority
- Creating blocking operations in main thread
- Confusing async/await with synchronous code
*/

