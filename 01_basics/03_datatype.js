/**
 * 📦 JavaScript Data Types Summary
 * 
 * 1. Primitive Types (immutable):
 *    - Number: e.g. 42, 3.14
 *    - String: e.g. "hello", 'world'
 *    - Boolean: true or false
 *    - Undefined: declared but no value
 *    - Null: intentional absence of value
 *    - Symbol: unique identifiers
 *    - BigInt: large integers beyond Number
 * 
 * 2. Non-Primitive Type:
 *    - Object: collections like {}, arrays, functions
 * 
 * 3. Type Checking:
 *    - Use typeof to check type (note: typeof null is "object" due to legacy quirk)
 * 
 * 4. Importance:
 *    - Knowing these types helps avoid bugs and write better programs.
 */

/**
 * 📜 JavaScript Rules & Best Practices
 * 
 * 1. End statements with semicolons (recommended for clarity).
 * 2. Declare variables using let, const, or var (prefer let/const).
 * 3. JavaScript is case sensitive ('Variable' ≠ 'variable').
 * 4. Scope:
 *    - let/const: block-scoped
 *    - var: function-scoped
 * 5. Use "use strict" to catch common mistakes and unsafe actions.
 * 6. Comments:
 *    - // for single-line
 *    - /* ... *\/ for multi-line
 * 7. Functions and objects are first-class citizens.
 * 8. Always declare variables before use.
 * 9. Avoid using undeclared variables (strict mode prevents this).
 * 10. Use === for strict equality (compares value and type).
 */

/**
 * 🔒 "use strict" Directive
 * 
 * - Enables strict mode (introduced in ES5).
 * - Enforces stricter rules to catch errors and unsafe actions.
 * - Makes code cleaner, safer, and easier to debug.
 */

/**
 * Section 1: Primitive Data Types
 */
let num = 42;                // Number
let str = "hello";           // String
let bool = true;             // Boolean
let undef;                   // Undefined (declared, no value)
let nul = null;              // Null (intentional absence)

let name1 = Symbol("name"); // Symbol (unique identifier)
let name2 = Symbol("name"); // Another Symbol (different from name1)

let sym = Symbol.for("124");      // Symbol (unique identifier)
let sym2 = Symbol.for("124"); // Another Symbol (different from sym)
let bigInt = 9007199254740991n; // BigInt (large integer)

console.log(num);        // 42
console.log(str);        // "hello"
console.log(bool);       // true
console.log(undef);      // undefined
console.log(nul);        // null

console.log(name1 === name2); // false (different symbols use "for" then true)

console.log(sym === sym2); // true (same symbols)
console.log(bigInt);     // 9007199254740991n

console.log(typeof num);     // "number"
console.log(typeof str);     // "string"
console.log(typeof bool);    // "boolean"
console.log(typeof undef);   // "undefined"
console.log(typeof nul);     // "object" (legacy quirk)
console.log(typeof sym);     // "symbol"
console.log(typeof bigInt);  // "bigint"

/**
 * Section 2: Non-Primitive Data Type (Object)
 */
let obj = { name: "Alice", age: 30 }; // Object literal
let arr = [1, 2, 3];                  // Array (object)
function greet() { return "Hi"; }     // Function (object)

console.log(typeof obj);   // "object"
console.log(typeof arr);   // "object"
console.log(typeof greet); // "function"

/**
 * Section 3: Variable Declaration & Scope
 */
let x = 5;      // Block-scoped
const y = 10;   // Block-scoped, constant
var z = 15;     // Function-scoped

/**
 * Section 4: Strict Mode
 */
"use strict";   // Enforces strict mode

/**
 * Section 5: Best Practices & Rules
 */
// End statements with semicolons
let message = "JavaScript is case sensitive";

// Comments
// Single-line comment
/*
    Multi-line comment
*/

// Always declare variables before use
let declaredVar = "I'm declared";

// Use === for strict equality
console.log(2 === "2"); // false

/**
 * Section 6: Expressions & Statements
 */
console.log(2 + 4);         // 6
console.log("2" + "4");     // "24"
console.log(2
     + 3);                   // 5 (line breaks allowed)
console.log("2" + "3");     // "23" (string concatenation)
