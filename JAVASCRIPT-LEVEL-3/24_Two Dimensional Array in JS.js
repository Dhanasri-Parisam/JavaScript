// One dimentional Array
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);

// Two dimentional Array
let twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(twoDArray[0][0]); // Output: 1
console.log(twoDArray[1][2]); // Output: 6

// Iterating through a two-dimensional array
let n = twoDArray.length; // number of rows
let m = twoDArray[0].length; // number of columns

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        console.log(twoDArray[i][j]);
    }
}

// Creating a 2D array dynamically
let rows = 3;
let cols = 4;
let dynamicArray = new Array(rows);
for (let i = 0; i < rows; i++) {
    dynamicArray[i] = new Array(cols).fill(0); // Filling with 0s -> [[0,0,0,0],[0,0,0,0],[0,0,0,0]]
}
console.log(dynamicArray);

// Modifying elements
dynamicArray[1][2];
console.log(dynamicArray[1][2]); // Output: 0
dynamicArray[1][2] = 5;
console.log(dynamicArray[1][2]); // Output: 5

// Jagged Array (array of arrays with different lengths)
let jaggedArray = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];
console.log(jaggedArray[1][1]); // Output: 5
console.log(jaggedArray[2][3]); // Output: 9

// Note: Accessing an out-of-bounds index will return undefined

// Example: Accessing out-of-bounds
console.log(jaggedArray[0][3]); // Output: undefined