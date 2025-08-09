let value = 2;
let negval = -value; // Negation
console.log(negval); // -2 

console.log(2*2); // Multiplication
console.log(2/2); // Division
console.log(2+2); // Addition
console.log(2-2); // Subtraction
console.log(2 % 2); // Modulus (remainder)
console.log(2 ** 3); // Exponentiation (2 raised to the power of 3)
console.log(2 ** 0.5); // Square root (2 raised to the power of 0.5)
console.log(2 ** -1); // Inverse (2 raised to the power of -1)

let str1 = "hello"
let str2 = "world";
let str3 = str1 + " " + str2; // String concatenation
console.log(str3); // "hello world"

console.log("1" + 2); // String concatenation with number (results in "12")
console.log("2" - 1); // Subtraction with string (results in 1)
console.log(typeof("2" - 1)); // "number" (string converted to number for subtraction)
console.log("2" * 2); // Multiplication with string (results in 4)
console.log("2" / 2); // Division with string (results in 1)


// In JavaScript, the + operator does addition if both operands are numbers, 
// otherwise it does string concatenation.
console.log("2" + 2 + "1"); // "221" (string concatenation)
console.log(typeof("2" + 2 + "1")); // "string" (result is a string due to concatenation)
console.log(1 + 2 + "3"); // "33" (string concatenation)

console.log((2 + 2) * 5 % 6 * 5); // 0 (order of operations: addition, multiplication, modulus)

console.log(+true); // 1 (true to number)
console.log(+false); // 0 (false to number)
console.log(+""); // 0 (empty string to number)
console.log(+null); // 0 (null to number)
console.log(+undefined); // NaN (undefined to number)
console.log(+"123abc"); // NaN (cannot convert non-numeric string to number)
console.log(+"123.45"); // 123.45 (string to number conversion)
console.log(+"0x1A"); // 26 (hexadecimal string to number conversion)

console.log(-false); // 0 (false negated)
console.log(-true); // -1 (true negated)
console.log(-""); // 0 (empty string negated)
console.log(-null); // 0 (null negated)
console.log(-undefined); // NaN (undefined negated)
console.log(-"123abc"); // NaN (cannot negate non-numeric string)
console.log(-"123.45"); // -123.45 (negation of numeric string)

let gameCounter = 100;
gameCounter += 1; // Increment
++gameCounter; // Increment using unary operator
console.log(gameCounter); // 101


let x = 3;
const y = ++x;
console.log(x,y); // 4, 4 (pre-increment: x is incremented before assignment)   

let a = 3;
const b = a++;
console.log(a,b); // 4, 3 (post-increment: a is increment

