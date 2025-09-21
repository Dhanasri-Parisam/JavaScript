// -----------------------------------------------
// Ways to find an element in an array in JavaScript
// -----------------------------------------------
// 4 main methods:
// 1. includes()
// 2. indexOf()
// 3. find()
// 4. filter()

const array = [5, 12, 8, 130, 44];

// ------------------------------
// 1. includes()
// ------------------------------
// - Checks whether an array contains a certain value
// - Returns true if present, false if not
// - Case-sensitive (Ex: "Chennai" !== "chennai")

console.log(array.includes(12)); // true
console.log(array.includes(7));  // false


// ------------------------------
// 2. indexOf()
// ------------------------------
// - Returns the first index of a given element if found
// - Returns -1 if element is not found
// - Also case-sensitive

console.log(array.indexOf(12)); // 1
console.log(array.indexOf(44)); // 4
console.log(array.indexOf(7));  // -1


// ------------------------------
// 3. find()
// ------------------------------
// - Returns the FIRST element that satisfies a condition
// - If not found, returns undefined
// - Useful when searching based on a condition

const found = array.find(element => element > 100);
console.log(found); // 130 (first element > 100)

let arr = ["chennai", "bangalore", "mumbai", "delhi", "kolkata"];

// Case-sensitive example
let result = arr.find(city => city === "mumbai");
console.log(result); // "mumbai"

// Case-insensitive example (convert both sides)
let result1 = arr.find(city => city.toLowerCase() === "mumbai");
console.log(result1); // "mumbai"


// ------------------------------
// 4. filter()
// ------------------------------
// - Returns ALL matching elements in a new array
// - If none found, returns empty array []

let result2 = arr.filter(city => city === "mumbai");
console.log(result2); // [ 'mumbai' ]

let result3 = arr.filter(city => city.toLowerCase() === "mumbai");
console.log(result3); // [ 'mumbai' ]


// -----------------------------------------------
// Shuffling an Array
// -----------------------------------------------

// 1. Quick way (not reliable):
// - Using sort() with Math.random()
// - Fast but not uniform distribution (not best for randomness)
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.sort(() => Math.random() - 0.5);
console.log(nums); // Random arrangement (not perfect)

// 2. Best way: Fisher-Yates Shuffle
// - Each permutation equally likely
// - Reliable for randomness

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap current element with random element
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let shuffledArray = shuffleArray(nums);
console.log(shuffledArray); // Random output every time

// -----------------------------------------------
let duplicateArr = [1, 2, 3, 2, 4, 1, 5, 3];
let uniqueArr = [...new Set(duplicateArr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]

// filter array of objects based on unique property
let objArray = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" },
    { id: 3, name: "Charlie" }
];

for(arr of objArray) {
    console.log(arr.id);
}
// output:
// 1
// 2
// 1
// 3

let empty = []
for(item of objArray){
    if(item.id === 1){
        empty.push(item)
    }
}

console.log(empty); // [ { id: 1, name: 'Alice' }, { id: 1, name: 'Alice' } ]

// find the products > 10 and products < 100  using filter
let products = [12, 5, 8, 130, 44, 99, 150, 200];
let filteredProducts = products.filter(product => product > 10 && product < 100);
console.log(filteredProducts); // [ 12, 44, 99 ] 

let filteredProducts1 = products.filter(product => product > 200);
console.log(filteredProducts1); // []

// -----------------------------------------------
//  Summary Notes:
// - includes() → Check presence (true/false)
// - indexOf() → Get position (index / -1)
// - find() → Get FIRST element based on condition
// - filter() → Get ALL elements matching condition
// - sort(Math.random()) → Quick shuffle (not reliable)
// - Fisher-Yates → Best shuffle (uniform distribution)
// - filter array of objects
// -----------------------------------------------
