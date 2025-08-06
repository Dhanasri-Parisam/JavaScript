// Variable declaration and type checking
let score = 33;
console.log(typeof score); // "number"
console.log(typeof(score)); // "number"

// Number conversions from different types
console.log(Number("abc")); // NaN (cannot convert non-numeric string)
console.log(Number(true)); // 1 (true becomes 1)
console.log(Number(false)); // 0 (false becomes 0)
console.log(Number("")); // 0 (empty string becomes 0)

// String conversion from number
let num = 55;
let numToString = String(num);
console.log(typeof numToString); // "string"
console.log(numToString); // "55"

// Boolean conversions from various values
console.log(Boolean(0)); // false (0 is falsy)
console.log(Boolean(1)); // true (1 is truthy)
console.log(Boolean("")); // false (empty string is falsy)
console.log(Boolean("hello")); // true (non-empty string is truthy)
console.log(Boolean(null)); // false (null is falsy)
console.log(Boolean(undefined)); // false (undefined is falsy)

// String to number conversion
let valueInNumber = Number("42");
console.log(typeof valueInNumber); // "number"

// String type and conversion to number
let valstring = "123abc";
console.log(valstring); // "123abc"
console.log(typeof valstring); // "string"
console.log(Number(valstring)); // NaN (cannot convert non-numeric string)

// Undefined to number conversion
let scoreval = undefined;
console.log(typeof scoreval); // "undefined"
console.log(Number(scoreval)); // NaN (undefined cannot be converted)

// Null to number conversion
let scoreval2 = null;
console.log(typeof scoreval2); // "object" (legacy JS quirk)
console.log(Number(scoreval2)); // 0 (null becomes 0)

// String to number, integer, and float conversions
let scoreval3 = "100";
console.log(typeof scoreval3); // "string"
console.log(Number(scoreval3)); // 100
console.log(parseInt(scoreval3)); // 100
console.log(parseFloat(scoreval3)); // 100

// Variable declarations
let myVar = "Hello";
const myConst = 42;
var myOldVar = "World"; // var is legacy, not recommended

// Strict equality checks
console.log(myVar === "Hello"); // true
console.log(myConst === 42); // true
console.log(myOldVar === "World"); // true

// Boolean type and conversions
let value = true;
console.log(typeof value); // "boolean"
console.log(Number(value)); // 1
console.log(String(value)); // "true"
console.log(Boolean(value)); // true
console.log(typeof(value)); // "boolean"

// Empty string and array to number
console.log(Number("")); // 0 (empty string becomes 0)
console.log(Number([])); // 0 (empty array becomes 0)
console.log(typeof(Number([]))); // "number"
console.log(String([])); // "" (empty array to string is empty string)
console.log(String("")); // "" (empty string remains empty)


// Boolean conversion of strings
console.log(Boolean("true")); // true (any non-empty string is truthy)
console.log(Boolean("false")); // true (any non-empty string is truthy)
console.log(Boolean("0")); // true (non-empty string is truthy)
console.log(Boolean("1")); // true (non-empty string is truthy)

// String to number conversions
console.log(Number("0")); // 0
console.log(Number("1")); // 1

// parseInt with leading zero
console.log(parseInt("08")); // 8 (leading zero ignored, returns 8)

// Number conversion for null and undefined
console.log(Number(null)); // 0 (null becomes 0)
console.log(Number(undefined)); // NaN (undefined cannot be converted)

// Unary plus with non-numeric string
console.log(+"123abc"); // NaN (cannot convert non-numeric string)

// Array to string conversion
console.log(String([1, 2, 3])); // "1,2,3" (array becomes comma-separated string)

// parseFloat with extra characters
console.log(parseFloat("123.45abc")); // 123.45 (parses until non-numeric character)

// Boolean conversion of NaN
console.log(Boolean(NaN)); // false (NaN is falsy)

// Number conversion of booleans
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Equality comparisons
console.log(1 == "1"); // true (loose equality, type coercion)
console.log(1 === "1"); // false (strict equality, no coercion)
console.log(1 === 1); // true (same type and value)

/*
Summary of JavaScript Type Conversion Interview Questions:

1. Number([]) returns 0 because empty array is coerced to empty string, then to 0.
2. Boolean("false") returns true because any non-empty string is truthy.
3. parseInt("08") returns 8; leading zero is ignored in modern JS.
4. Number(null) is 0; Number(undefined) is NaN.
5. +"123abc" is NaN; cannot convert non-numeric string.
6. String([1,2,3]) is "1,2,3"; array to string conversion.
7. parseFloat("123.45abc") is 123.45; parses until non-numeric character.
8. Boolean(NaN) is false; NaN is falsy.
9. Number(true) is 1; Number(false) is 0.
10. == does type coercion, === checks both type and value.
*/