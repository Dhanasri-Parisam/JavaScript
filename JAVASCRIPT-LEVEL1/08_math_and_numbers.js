// Numbers in JavaScript

// Basic Arithmetic:
// Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulus (%)
let sum = 5 + 3;        // 8
let diff = 5 - 3;       // 2
let prod = 5 * 3;       // 15
let quotient = 5 / 3;   // 1.666...
let remainder = 5 % 3;  // 2

// Increment/Decrement:
// a++ (increment), b-- (decrement)
let a = 1;
a++; // a is now 2
let b = 2;
b--; // b is now 1

// Parsing Numbers:
// parseInt("123.45") → 123
// parseFloat("123.45") → 123.45
let intVal = parseInt("123.45");   // 123
let floatVal = parseFloat("123.45"); // 123.45

// Type Conversion:
// num.toString() converts number to string
// typeof a returns "number"
// typeof strNum returns "string"
let num = 42;
let strNum = num.toString(); // "42"
typeof num;    // "number"
typeof strNum; // "string"

// Number Objects:
// new Number(1000) creates a Number object
// typeof numbe returns "object"
let numObj = new Number(1000);
typeof numObj; // "object"

// Number Formatting:
// num.toLocaleString('en-US') formats with commas
// num.toFixed(2) fixes to 2 decimal places
// num.toExponential(2) converts to exponential notation
// num.toPrecision(8) sets precision
let bigNum = 1234567.891;
bigNum.toLocaleString('en-US'); // "1,234,567.891"
bigNum.toFixed(2);              // "1234567.89"
bigNum.toExponential(2);        // "1.23e+6"
bigNum.toPrecision(8);          // "1234567.9"

// Number Checks:
// isNaN(value) checks for NaN
// Number.isFinite(value) checks for finite numbers
// Number.isInteger(value) checks for integers
isNaN("abc");               // true
Number.isFinite(123);       // true
Number.isInteger(123.45);   // false

// Base Conversion:
// parseInt("0x1A", 16) → 26 (hex to decimal)
// parseInt("1010", 2) → 10 (binary to decimal)
// parseInt("12", 8) → 10 (octal to decimal)
parseInt("0x1A", 16); // 26
parseInt("1010", 2);  // 10
parseInt("12", 8);    // 10

// Comparison:
// a > b, a === 11, b <= 4
let x = 10, y = 5;
x > y;      // true
x === 11;   // false
y <= 4;     // false

// --- Math in JavaScript ---

// Math Object:
// Math.PI → 3.141592653589793
// Math.sqrt(16) → 4
// Math.random() → random number between 0 and 1
Math.PI;         // 3.141592653589793
Math.sqrt(16);   // 4
Math.random();   // e.g., 0.123456789

// Rounding:
// Math.round(num) → nearest integer
// Math.floor(num) → largest integer ≤ num
// Math.ceil(num) → smallest integer ≥ num
Math.round(2.7); // 3
Math.floor(2.7); // 2
Math.ceil(2.1);  // 3

// Power & Absolute:
// Math.pow(2, 3) → 8
// Math.abs(-10) → 10
Math.pow(2, 3);  // 8
Math.abs(-10);   // 10

// Min/Max:
// Math.max(1, 2, 3) → 3
// Math.min(1, 2, 3) → 1
Math.max(1, 2, 3); // 3
Math.min(1, 2, 3); // 1
