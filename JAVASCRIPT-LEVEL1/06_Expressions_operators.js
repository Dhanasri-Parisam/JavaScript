/**
 * Demonstrates various JavaScript operators and expressions with examples and outputs.
 *
 * Sections included:
 * - Comparison operators: Shows how to compare values using >, <, >=, <=, ==, !=, ===, !==.
 * - Assignment operators: Demonstrates compound assignment (+=, -=, *=, /=, %=, **=).
 * - Arithmetic operators: Performs basic math operations (+, -, *, /, %, **) with numbers.
 * - Bitwise operators: Manipulates bits using &, |, ^, ~, <<, >>, >>>.
 * - Logical operators: Combines boolean values using &&, ||, !.
 * - Nullish coalescing operator: Uses ?? to provide default values for null/undefined.
 * - Increment/Decrement operators: Shows invalid usage of ++ and -- on literals.
 * - BigInt operators: Performs arithmetic and comparisons with BigInt values.
 * - String operators: Concatenates, manipulates, and queries strings.
 * - Conditional (ternary) operator: Uses ? : for inline conditional expressions.
 * - Comma operator: Evaluates multiple expressions, returning the last value.
 * - Usage of comma operator in loops, function arguments, arrays, and objects.
 * - Object property deletion and type checking with typeof.
 * - Relational operators: Compares values using <.
 * - 'in' operator: Checks if a property exists in an object or array.
 * - 'instanceof' operator: Checks if an object is an instance of a constructor.
 * - Basic expressions using 'this' keyword.
 *
 * Each example includes a console.log statement to show the output and a comment explaining the result.
 */

// Comparison operators

console.log(2 > 4); // false (greater than)
console.log(2 < 4); // true (less than)
console.log(2 >= 2); // true (greater than or equal to)
console.log(2 <= 2); // true (less than or equal to)
console.log(2 == 2); // true (equal to)
console.log(2 != 3); // true (not equal to)
console.log(2 === 2); // true (strict equal to)
console.log(2 !== 3); // true (strict not equal to)

// assignment operators
let a = 5;
a += 2; // a = a + 2
console.log(a); // 7
a -= 3; // a = a - 3
console.log(a); // 4
a *= 2; // a = a * 2
console.log(a); // 8
a /= 4; // a = a / 4
console.log(a); // 2
a %= 2; // a = a % 2
console.log(a); // 0 (remainder of 2 divided by 2)
a **= 3; // a = a ** 3
console.log(a); // 0 (0 raised to the power of 3 is still

//arithmetic operators
console.log(1 / 2 === 1.0 / 2.0); // this is true
console.log(1.5); // 1.5 (floating point number)
console.log(1.5 + 2.5); // 4.0 (addition of floating point numbers)
console.log(1.5 - 0.5); // 1.0 (subtraction of floating point numbers)
console.log(1.5 * 2); // 3.0 (multiplication of floating point numbers)
console.log(1.5 / 0.5); // 3.0 (division of floating point numbers)
console.log(1.5 % 0.5); // 0.0 (modulus of floating point numbers)
console.log(1.5 ** 2); // 2.25 (exponent

//bitwise operators
console.log(5 & 3); // 1 (bitwise AND: 0101 & 0011 = 0001)
console.log(5 | 3); // 7 (bitwise OR: 0101 | 0011 = 0111)
console.log(5 ^ 3); // 6 (bitwise XOR: 0101 ^ 0011 = 0110)
console.log(~5); // -6 (bitwise NOT: ~0101 = 1010, which is -6 in two's complement)
console.log(5 << 1); // 10 (left shift: 0101 << 1 = 1010)
console.log(5 >> 1); // 2 (right shift: 0101 >> 1 = 0010)
console.log(5 >>> 1); // 2 (unsigned right shift: 0101 >>> 1 = 0010)

// logical operators
console.log(true && false); // false (logical AND)
console.log(true || false); // true (logical OR)
console.log(!true); // false (logical NOT)
console.log(!false); // true (logical NOT)
console.log(true && true); // true (logical AND)
console.log(false || false); // false (logical OR)
console.log(true || true); // true (logical OR)

// nullishcoalescing operator
console.log(null ?? "default"); // "default" (nullish coalescing: returns right operand if left is null or undefined)
console.log(undefined ?? "default"); // "default" (nullish coalescing: returns right operand if left is null or undefined)
console.log("value" ?? "default"); // "value" (nullish coalescing: returns left operand if it is not null or undefined)
// post-increment and pre-increment
console.log(2++); // SyntaxError: Invalid left-hand side in assignment
console.log(++2); // SyntaxError: Invalid left-hand side in assignment
console.log(2--); // SyntaxError: Invalid left-hand side in assignment
console.log(--2); // SyntaxError: Invalid left-hand side in assignment
console.log(2++ + 3); // SyntaxError: Invalid left-hand side in assignment
console.log(2 + ++3); // SyntaxError: Invalid left-hand side in assignment

// big int operators
const b1 = 1n; // BigInt literal
const b2 = 2n; // BigInt literal
console.log(b1 + b2); // 3n (BigInt addition)
console.log(b1 - b2); // -1n (BigInt subtraction)
console.log(b1 * b2); // 2n (BigInt multiplication)
console.log(b1 / b2); // 0n (BigInt division, result is truncated)
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
console.log(a); // This line will not execute due to the error
const a = Number(1n) + 2; // 3 (convert BigInt to Number, then add)
console.log(a); // 3

const b = 1n + BigInt(2); // 3n (convert Number to BigInt, then add)
console.log(b); // 3n

const c = 123456789012345678901234567890n > 2; // true (BigInt compared to Number)
console.log(c); // true

const d = 3 > 2n; // true (Number compared to BigInt)
console.log(d); // true


const e = 1n === 1; // false (strict equality: BigInt vs Number)
console.log(e); // false

const f = 1n === BigInt(1); // true (strict equality: both are BigInt)
console.log(f); // true

//String operators
const str1 = "Hello";
const str2 = "World";
console.log(str1 + " " + str2); // "Hello World" (string concatenation)
console.log(`${str1} ${str2}`); // "Hello World" (template literals)
console.log(str1,str2); // "Hello World" (comma operator in console.log, prints both strings)
console.log(str1.length); // 5 (length of the string)
console.log(str1.toUpperCase()); // "HELLO" (convert to uppercase)
console.log(str1.toLowerCase()); // "hello" (convert to lowercase)
console.log(str1.includes("lo")); // true (check if substring exists)
console.log(str1.startsWith("He")); // true (check if string starts with substring)
console.log(str1.endsWith("lo")); // true (check if string ends with substring)
console.log(str1.indexOf("l")); // 2 (index of first occurrence of substring)
console.log(str1.lastIndexOf("l")); // 3 (index of last occurrence of substring)
console.log(str1.slice(1, 4)); // "ell" (extract substring
console.log(str1.substring(1, 4)); // "ell" (extract substring)
console.log(str1.replace("l", "x")); // "Hexlo" (replace first occurrence of substring)
console.log(str1.replaceAll("l", "x")); // "Hexxo" (replace all occurrences of substring)
console.log(str1.split("l")); // ["He", "lo"] (split string into array by substring)
console.log(str1.trim()); // "Hello" (remove whitespace from both ends)
console.log(str1.charAt(1)); // "e" (character at index 1)
console.log(str1.charCodeAt(1)); // 101 (Unicode code point of character at index 1)
console.log(str1.concat(" ", str2)); // "Hello World" (concatenate strings)
console.log(str1.localeCompare(str2)); // -1 (compare strings lexicographically, returns -1 if str1 < str2, 0 if equal, 1 if str1 > str2)
console.log(str1.repeat(2)); // "HelloHello" (repeat string 2 times)

const String1 = new String("Hello World"); // String object
console.log(String1); // String { "Hello World" } (String object with value "Hello World")
console.log(String1.length); // 11 (length of the String object)

//Conditional (ternary) operator

const condition = true;
const result = condition ? "Condition is true" : "Condition is false";
console.log(result); // "Condition is true" (if condition is true, return first value, otherwise return second value)

const number = 10;
const result2 = number > 5 ? "true" : "false";
console.log(result2); // "true" (if number is greater than 5, return "true", otherwise return "false")

//Comma operator
const a1 = (1, 2, 3); // evaluates to 3
console.log(a1); // 3 (the last value is returned)
const b1 = (console.log("Hello"), console.log("World"), 42); // // evaluates to 42
console.log(b1); // 42 (the last value is returned
const c1 = (1 + 2, 3 + 4, 5 + 6); // evaluates to 11
console.log(c1); // 11 (the last value is returned)
const d1 = (console.log("First"), console.log("Second"), console.log("Third"), "Final"); // evaluates to "Final"
console.log(d1); // "Final" (the last value is returned)


// Using comma operator in a loop
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}
// Output:
// i: 0, j: 10
// i: 1, j: 9
// i: 2, j: 8
// i: 3, j: 7
// i: 4, j: 6
// i: 5, j: 5
// i: 6, j: 4
// i: 7, j: 3
// i: 8, j: 2
// i: 9, j: 1
// i: 10, j: 0
// (the loop runs until i < j, and both i and j are updated in each iteration)
// Using comma operator in function arguments

function exampleFunction(a, b, c) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
}
exampleFunction((1, 2), (3, 4), (5, 6)); // a: 2, b: 4, c: 6
// (the last value of each expression is passed as an argument)

// Using comma operator in array initialization
const array = [1, (2, 3), (4, 5, 6)];
console.log(array); // [1, 3, 6] (the last value of each expression is included in the array)


// Using comma operator in object initialization
const obj = {
    a: (1, 2),
    b: (3, 4),
    c: (5, 6)
};
console.log(obj); // { a: 2, b: 4, c: 6 } (the last value of each expression is included in the object)

delete obj.a; // delete property 'a'
console.log(obj); // { b: 4, c: 6 } (property 'a' is deleted)
console.log(typeof obj); // "object" (returns the type of the object)

console.log(typeof document.lastModified); // "string" (the lastModified property of document is a string)


// relational operators
console.log(5 < 10); // true (less than)
// in operators
console.log("name" in { name: "John" }); // true (property exists in the object)
console.log("age" in { name: "John" }); // false (property does not exist in the object)
console.log("length" in [1, 2, 3]); // true (length property exists in the array)

// instanceof operator
console.log([] instanceof Array); // true (array is an instance of Array)
console.log({} instanceof Object); // true (object is an instance of Object)
console.log("" instanceof String); // false (string literal is not an instance of String)
console.log(new String("Hello") instanceof String); // true (String object is an instance of String)
console.log(5 instanceof Number); // false (number literal is not an instance of Number)
console.log(new Number(5) instanceof Number); // true (Number object is an instance of Number)

// basic expresions
//this is a basic expression

this["propertyName"];
this.propertyName;
doSomething(this);

console.log(this["propertynaMe"]); // undefined
console.log(this.propertynaMe);    // undefined
doSomethingElse(this);             // Output depends on doSomethingElse


console.log("02" > 1);         // true ("02" is coerced to 2, 2 > 1 is true)
console.log(null === 0);       // false (strict equality, different types)
console.log(null == 0);        // false (null only loosely equals undefined)
console.log(null > 0);         // false (null is coerced to 0, 0 > 0 is false)
console.log(null < 0);         // false (null is coerced to 0, 0 < 0 is false)
console.log(null >= 0);        // true (null is coerced to 0, 0 >= 0 is true)
console.log(null <= 0);        // true (null is coerced to 0, 0 <= 0 is true)
console.log(null != 0);        // true (null only loosely equals undefined)
console.log(null !== 0);       // true (strict inequality, different types)

console.log(undefined === 0);  // false (strict equality, different types)
console.log(undefined == 0);   // false (undefined only loosely equals null)
console.log(undefined > 0);    // false (undefined is coerced to NaN, NaN > 0 is false)
console.log(undefined < 0);    // false (undefined is coerced to NaN, NaN < 0 is false)
console.log(undefined >= 0);   // false (undefined is coerced to NaN, NaN >= 0 is false)
console.log(undefined <= 0);   // false (undefined is coerced to NaN, NaN <= 0 is false)
console.log(undefined != 0);   // true (undefined only loosely equals null)
console.log(undefined !== 0);  // true (strict inequality, different

