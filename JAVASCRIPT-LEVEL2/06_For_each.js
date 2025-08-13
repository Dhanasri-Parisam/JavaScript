var salaries = [1000, 20000];

salaries.forEach((element, index, array) => {
    console.log("Salary:", element);        // element
    console.log("Index:", index);          // index
    console.log("Length:", array.length);  // length of array
});
// Salary: 1000
// Index: 0
// Length: 2
// Salary: 20000
// Index: 1
// Length: 2


// increment the employees salary 10%
// before increment
console.log(salaries); // Output: [1000, 20000]
salaries.forEach((element, index, array) => {
    array[index] = element * 1.1;
});
console.log(salaries); // Output: [1100, 22000]

// using named function 

const functionExample = (element, index, array) => {
    array[index] = element * 1.1;
};
let salaries2 = [1000, 20000];
salaries2.forEach(functionExample);
console.log(salaries2); // Output: [1100, 22000]

// using anonymous function
salaries2.forEach((element, index, array) => {
    array[index] = element * 1.1;
});
console.log(salaries2); // Output: [1210, 24200]

// USING IIFE
(function() {
    let salaries3 = [1000, 20000];
    salaries3.forEach((element, index, array) => {
        array[index] = element * 1.1;
    });
    console.log(salaries3); // Output: [1100, 22000]
})();