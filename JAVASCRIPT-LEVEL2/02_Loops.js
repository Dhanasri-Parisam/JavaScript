console.log("All about looping statements in js");

// print your name 5 times
for (let i = 0; i < 5; i++) {
    console.log("Dhanu");
}

// print 1 to 5 numbers
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// print all keys in a object
let obj1 = {
    name : "Dhanu",
    role : "Developer",
    lastWork : "2023-01-01"
}

for(const key in obj1){
    console.log(key);
}

// print even numbers upto 0 to 10
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/*
Additional loop types in JavaScript:

1. while loop
2. do...while loop
3. for...of loop (for arrays and iterable objects)
*/

// Example: while loop (print numbers 1 to 5)
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

// Example: do...while loop (print numbers 1 to 5)
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);

// Example: for...of loop (iterate over array)
const arr = ["apple", "banana", "cherry"];
for (const fruit of arr) {
    console.log(arr[0]); // output: apple
    console.log(arr.indexOf("cherry")); // output: 2
    console.log(arr.length); // output: 3
    console.log(arr[arr.length - 1]); // output: cherry
    console.log(arr.shift()); // output: apple (removes first element)
    console.log(arr.pop()); // output: cherry (removes last element)
}


// Example: for...of loop (iterate over string)
let str = "Hello";
for (const char of str) {
    console.log(char); // output: H, e, l, l, o (each character on a new line)
    console.log(char.at(0)); // output: H (first character)
    console.log(char.charCodeAt(0)); // output : 72 (ASCII code of 'H')
    console.log(char.toUpperCase());
    console.log(char.valueOf()); // output : H (returns the primitive value of the string)
}

// Looping through a Map
const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
for (const [key, value] of map) {
    console.log(`${key}: ${value}`); // output: a: 1, b: 2, c: 3
}

// Looping through a Set
const set = new Set([1, 2, 3, 4, 5]);
for (const value of set) {
    console.log(value); // output: 1, 2, 3, 4, 5 (each value on a new line)
}

// Breaking and continuing in loops
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue; // skip 5
    if (i === 8) break;    // stop at 8
    console.log(i);
}
