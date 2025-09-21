// Shallow copy vs Deep copy in JS

// Shallow Copy
// Only the top-level values are copied.
// If the object/array contains nested objects/arrays → those still share the same memory reference.
// So, changes in nested values affect both, but changes in primitive top-level values won’t.

// Deep Copy
// Creates a new memory allocation for everything, including nested objects/arrays.
// Changes in the original do not affect the copy (and vice versa).

// Shallow Copy:
let arr1 = [1, 2, 3];
arr2 = arr1; // Reference copy (not a copy, just another reference)
arr2.push(4);
console.log(arr1); // Output: [1, 2, 3, 4] (affected)
console.log(arr2); // Output: [1, 2, 3, 4] (affected)

// Deep Copy:
let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // Spread operator creates a shallow copy (sufficient for flat arrays)
arr4.push(5);
console.log(arr3); // Output: [1, 2, 3] (unaffected)
console.log(arr4); // Output: [1, 2, 3, 5] (unaffected)

// Shallow Copy: Creates a new object/array but copies references of nested objects/arrays.

let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { ...obj1 };
obj2.b.c = 3;
console.log(obj1.b.c); // Output: 3 (affected)

// Deep Copy: Creates a new object/array and recursively copies all nested objects/arrays.

let obj3 = { a: 1, b: { c: 2 } };
let obj4 = Object.assign({}, obj3); // Shallow copy (not sufficient for nested objects)
obj4.b.c = 4;
console.log(obj3.b.c); // Output: 4 (affected)