// ------------------------------
// 📌 Numbers in JavaScript
// ------------------------------

// Basic Arithmetic
let sum = 5 + 3;        // 8
let diff = 5 - 3;       // 2
let prod = 5 * 3;       // 15
let quotient = 5 / 3;   // 1.666...
let remainder = 5 % 3;  // 2

// Increment / Decrement
let a = 1;
a++; // a = 2
let b = 2;
b--; // b = 1

// Parsing Numbers
let intVal = parseInt("123.45");   // 123  (removes decimal part)
let floatVal = parseFloat("123.45"); // 123.45

// Type Conversion
let num = 42;
let strNum = num.toString(); 
// typeof num → "number"
// typeof strNum → "string"

// Number Objects
let numObj = new Number(1000); 
// typeof numObj → "object"

// Number Formatting
let bigNum = 1234567.891;
bigNum.toLocaleString('en-US'); // "1,234,567.891"
bigNum.toFixed(2);              // "1234567.89"
bigNum.toExponential(2);        // "1.23e+6"
bigNum.toPrecision(8);          // "1234567.9"

// Number Checks
isNaN("abc");               // true (Not a Number)
Number.isFinite(123);       // true
Number.isInteger(123.45);   // false

// Base Conversion
parseInt("0x1A", 16); // 26 (hex to decimal)
parseInt("1010", 2);  // 10 (binary to decimal)
parseInt("12", 8);    // 10 (octal to decimal)

// Comparison
let x = 10, y = 5;
x > y;      // true
x === 11;   // false
y <= 4;     // false

// ------------------------------
//  Math in JavaScript
// ------------------------------

// Math Object
Math.PI;       // 3.141592653589793
Math.sqrt(16); // 4
Math.random(); // Random between 0 and 1 (e.g., 0.123456)

// Rounding
Math.round(2.7); // 3
Math.floor(2.7); // 2
Math.ceil(2.1);  // 3

// Power & Absolute
Math.pow(2, 3); // 8
Math.abs(-10);  // 10

// Min / Max
Math.max(1, 2, 3); // 3
Math.min(1, 2, 3); // 1

// Sign function (returns sign of number)
console.log(Math.sign(8));   // 1  (positive)
console.log(Math.sign('s')); // NaN (not a number)
console.log(Math.sign(0));   // 0
console.log(Math.sign(-8));  // -1 (negative)

// Euler's Number (base of natural log)
console.log(Math.E); // 2.718281828459045

// Trunc (removes decimal part, keeps sign)
console.log(Math.trunc(69.990));   // 69
console.log(Math.trunc(-69.990));  // -69
console.log(Math.trunc(0.123));    // 0
console.log(Math.trunc(-0.123));   // -0

// Random numbers
console.log(Math.random());        // e.g., 0.456789
console.log(Math.random() * 10);   // between 0 and 10
console.log(Math.random() * 100);  // between 0 and 100
console.log(Math.random() * 1000); // between 0 and 1000

// Exponential
console.log(Math.exp(1)); // 2.718281828459045 (e^1)
console.log(Math.exp(2)); // 7.38905609893065 (e^2)

// Natural Logarithm (base e)
console.log(Math.log(1));      // 0
console.log(Math.log(Math.E)); // 1
console.log(Math.log(10));     // 2.302585092994046

// Log base 2
console.log(Math.log2(1)); // 0
console.log(Math.log2(2)); // 1
console.log(Math.log2(4)); // 2
console.log(Math.log2(8)); // 3

// Log base 10
console.log(Math.log10(1));    // 0
console.log(Math.log10(10));   // 1
console.log(Math.log10(100));  // 2
console.log(Math.log10(1000)); // 3

// Trigonometric Functions
console.log(Math.sin(Math.PI / 2)); // 1   (sin 90°)
console.log(Math.cos(0));           // 1   (cos 0°)
console.log(Math.tan(Math.PI / 4)); // 1   (tan 45°)
console.log(Math.asin(1));         // 1.5707963267948966 (asin 90°)
console.log(Math.acos(1));         // 0                 (acos 0°)
console.log(Math.atan(1));         // 0.7853981633974483 (atan 45°)

// Hyperbolic Functions
console.log(Math.sinh(0)); // 0
console.log(Math.cosh(0)); // 1
console.log(Math.tanh(0)); // 0

// Inverse Hyperbolic Functions
console.log(Math.asinh(1)); // 0.881373587019543 (asinh 1)
console.log(Math.acosh(2)); // 1.3169578969248166 (acosh 2)
console.log(Math.atanh(0.5)); // 0.5493061443340549 (atanh 0.5)

// ------------------------------
//  Summary
// ------------------------------

// This code provides a comprehensive overview of numbers and mathematical operations in JavaScript, covering basic arithmetic, number parsing, type conversion, number formatting, and various Math object methods for advanced calculations.  
// It serves as a quick reference for anyone looking to understand or utilize numerical operations in JavaScript effectively.
// Note: The console.log statements are used to display outputs for certain Math functions.
// ------------------------------