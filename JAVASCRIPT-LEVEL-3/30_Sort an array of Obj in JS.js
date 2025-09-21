// ---------------------------------------------------
// Sorting an Array of Objects in JavaScript
// ---------------------------------------------------


// Sample array of objects
let data = [
    { id: 3, name: "Charlie", age: 25 },
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 20 }
];

let asc = data.sort((a, b) => {
    if (a.id > b.id) return 1;
    else if (a.id < b.id) return -1;
    else return 0;
});
console.log(asc);


let users = [
    { id: 3, name: "Charlie", age: 25 },
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 20 }
];

// ---------------------------------------------------
// 1. Sort by Numeric Property (age)
// ---------------------------------------------------
// Ascending order (small → large)
let sortByAgeAsc = users.sort((a, b) => a.age - b.age);
console.log("Age Asc:", sortByAgeAsc);
// Output:
// [ {id:2, name:'Bob', age:20}, {id:3, name:'Charlie', age:25}, {id:1, name:'Alice', age:30} ]

// Descending order (large → small)
let sortByAgeDesc = users.sort((a, b) => b.age - a.age);
console.log("Age Desc:", sortByAgeDesc);
// Output:
// [ {id:1, name:'Alice', age:30}, {id:3, name:'Charlie', age:25}, {id:2, name:'Bob', age:20} ]


// ---------------------------------------------------
// 2. Sort by String Property (name)
// ---------------------------------------------------
// Ascending order (A → Z)
let sortByNameAsc = users.sort((a, b) => a.name.localeCompare(b.name));
console.log("Name Asc:", sortByNameAsc);
// Output:
// [ {id:1, name:'Alice', ...}, {id:2, name:'Bob', ...}, {id:3, name:'Charlie', ...} ]

// Descending order (Z → A)
let sortByNameDesc = users.sort((a, b) => b.name.localeCompare(a.name));
console.log("Name Desc:", sortByNameDesc);
// Output:
// [ {id:3, name:'Charlie', ...}, {id:2, name:'Bob', ...}, {id:1, name:'Alice', ...} ]


// ---------------------------------------------------
// 3. Sort by Multiple Properties
// ---------------------------------------------------
// Example: First sort by age, if equal → sort by name
let sortByAgeThenName = users.sort((a, b) => {
    if (a.age === b.age) {
        return a.name.localeCompare(b.name); // tie-breaker
    }
    return a.age - b.age; // sort by age first
});
console.log("Age then Name:", sortByAgeThenName);


// ---------------------------------------------------
// 📌 Summary Notes
// ---------------------------------------------------
// - sort() changes (mutates) the original array
// - For numbers → (a, b) => a.property - b.property
// - For strings → (a, b) => a.property.localeCompare(b.property)
// - For multiple properties → use if/else or logical operators
// ---------------------------------------------------
