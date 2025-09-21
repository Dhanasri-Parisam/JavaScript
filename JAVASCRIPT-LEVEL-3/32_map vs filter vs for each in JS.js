// =======================
// Map vs Filter vs ForEach in JavaScript
// =======================

// Sample data
const numbers = [1, 2, 3, 4, 5];
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// ---------------------------------------------------------
// 1. map()
// - Transforms each element in the array
// - Always returns a NEW array of the same length
// - If you don't return explicitly, it inserts "undefined"
// ---------------------------------------------------------
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

const userNames = users.map((user) => user.name);
console.log("User Names:", userNames); // ["Alice", "Bob", "Charlie"]

// Tricky Question 1:
const arr = [1, 2, 3, 4, 5];
const result = arr.map(num => {
  if (num % 2 === 0) {
    return num * 2;  // returns value only for even numbers
  }
});
console.log(result); 
// [undefined, 4, undefined, 8, undefined]
// because odd numbers return nothing → "undefined" gets stored

// ---------------------------------------------------------
// 2. filter()
// - Filters elements based on condition
// - Always returns a NEW array
// - The array may be shorter (length ≤ original)
// - Only keeps elements where callback returns truthy value
// ---------------------------------------------------------
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // [2, 4]

const adults = users.filter((user) => user.age >= 30);
console.log("Adults:", adults); 
// [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

// Tricky Question 2:
const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.filter(num => {
  if (num % 2 === 0) {
    return num * 2; // returns a number (truthy) for even nums
  }
});
console.log(result2); 
// [2, 4] 
// filter doesn't care about return value itself → only checks if truthy

// ---------------------------------------------------------
// 3. forEach()
// - Iterates through each element
// - Does NOT return anything → always returns "undefined"
// - Used only for "side effects" (logging, updating external variables)
// ---------------------------------------------------------
console.log("Using forEach:");
numbers.forEach((num) => console.log(num * 2)); 
// Logs: 2, 4, 6, 8, 10
// Doesn't return a new array

users.forEach((user) => console.log(user.name)); 
// Logs: "Alice", "Bob", "Charlie"

// Tricky Question 3:
const arr3 = [1, 2, 3, 4, 5];
const result3 = arr3.forEach(num => {
  if (num % 2 === 0) {
    return num * 2; // ignored, return value has no effect
  }
});
console.log(result3); 
// undefined → because forEach never returns anything

// Tricky Question 4:
const arr4 = [1, 2, 3, 4, 5];
arr4.forEach(num => console.log(num * 2));
// Logs: 2, 4, 6, 8, 10
// Only does side effects (console.log)

// =======================
// Summary ( Interview Tip)
// =======================
// - Use map() → when you want to TRANSFORM each element → returns new array
// - Use filter() → when you want to SELECT elements based on condition → returns new array
// - Use forEach() → when you only want SIDE EFFECTS (like logging, updating external state)
// - Trick: forEach always returns undefined, map always returns array of same length, filter may return smaller array
