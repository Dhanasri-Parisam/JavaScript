/**
 * Demonstrates basic object operations in JavaScript:
 * - Object creation (singleton & non-singleton)
 * - Nested objects & optional chaining
 * - Adding/modifying properties
 * - Symbols as keys
 * - Combining objects
 * - Objects inside arrays
 * - hasOwnProperty usage
 * - Array object methods on objects
 * - Bracket vs Dot notation
 * - Special behavior of object keys
 */

// -------------------- SYMBOLS & OBJECT BASICS --------------------
function objectBasicsDemo() {
    // Create a unique symbol — Symbol values are always unique
    const mysym = Symbol("male");

    // Object literal with different property types
    const details = {
        name: "Dhanu",             // String property
        age: 19,                   // Number property
        location: "kakinada",      // String property
        isLogged: true,            // Boolean property
        lastActive: ["monday", "tuesday"], // Array property

        // Method using `this` to access object's own properties
        greet: function () {
            console.log(`Hello, ${this.name}`); // Hello, Dhanu
        },

        // Symbol-keyed property (won't show up in normal loops)
        [mysym]: "male"
    };

    // Modify an existing property
    details.isLogged = false;
    console.log("Is logged in after update:", details.isLogged); // false

    // Access symbol-keyed property — must use the same Symbol reference
    console.log("Symbol property value:", details[mysym]); // male

    // Call the method inside the object
    details.greet(); // Hello, Dhanu

    // Iterate over object properties (Symbol keys excluded)
    console.log("Looping through object properties:");
    for (let key in details) {
        console.log(key, ":", details[key]);
    }
}
objectBasicsDemo();

// -------------------- SINGLETON VS NON-SINGLETON --------------------

// Singleton object — created with Object constructor
// Technically, it’s not a true singleton in JS (since JS doesn't enforce single instance),
// but it's called "singleton pattern" when reused as the same object reference.
const singleton = new Object();
console.log(singleton); // {}

// Non-singleton object — created with object literal syntax
// Each `{}` creates a separate object instance.
const nonSingleton = {};
console.log(nonSingleton); // {}

nonSingleton.name = "John";
nonSingleton.age = 30;
console.log(nonSingleton); // { name: 'John', age: 30 }

// -------------------- NESTED OBJECTS --------------------
const userdetails = {
    fullname: "John Doe",
    age: 30,
    location: "New York",
    userfullname: {
        firstName: "John",
        lastName: "Doe",
        userage: {
            user1age: 30,
            user2age: 18
        }
    },
};

// Access deeply nested properties
console.log(userdetails.userfullname.userage.user1age); // 30
console.log(userdetails.userfullname.userage.user2age); // 18

// Optional chaining — avoids error if property path doesn't exist
console.log(userdetails.userfullnae?.firstName); // undefined (typo in key)

// -------------------- COMBINING OBJECTS --------------------
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Different ways to combine objects:
console.log({ obj1, obj2 }); // Nested objects: { obj1: {...}, obj2: {...} }
console.log({ ...obj1, ...obj2 }); // Spread syntax: { a: 1, b: 2, c: 3, d: 4 }
console.log(Object.assign({}, obj1, obj2)); // assign(): { a: 1, b: 2, c: 3, d: 4 }

// -------------------- OBJECTS INSIDE ARRAYS --------------------
const objectInArray = [
    { usersdetails: "name" },
    { usersdetails: "age" },
    { usersdetails: "location" },
    { usersdetails: "gender" },
    { details: ["name", "age", "location", "gender"] }
];

console.log(objectInArray[0]); // { usersdetails: 'name' }
console.log(Object.keys(userdetails)); // [ 'fullname', 'age', 'location', 'userfullname' ]
console.log(Object.values(objectInArray[0])); // [ 'name' ]
console.log(Object.entries(objectInArray[0])); // [ ['usersdetails', 'name'] ]

// -------------------- hasOwnProperty EXAMPLES --------------------
let objectInArr = [{ name: "John" }];

// Case 1: Adding property directly to the array object
objectInArray.details = "array property";
console.log(objectInArray.hasOwnProperty('details')); // true — property exists on array itself
console.log(objectInArray[0].hasOwnProperty('usersdetails')); // false — not yet on first object

// Case 2: Adding property to the first object in array
objectInArray[0].usersdetails = "object property";
console.log(objectInArray.hasOwnProperty('details')); // true — still on array
console.log(objectInArray[0].hasOwnProperty('usersdetails')); // true — now on object

// -------------------- ARRAY METHODS ON OBJECTS --------------------
const objectBasics = [
    { usersdetails: "name" },
    { usersdetails: "age" },
    { usersdetails: "location" },
    { userdetails: "gender" }
];

console.log(objectBasics.at(0)); // { usersdetails: 'name' }
console.log(objectBasics.at(-1)); // { userdetails: 'gender' } — negative index counts from end

// find() — returns first matching object
console.log(objectBasics.find(obj => obj.usersdetails === "name")); // { usersdetails: 'name' }

// findIndex() — returns index of first matching object
console.log(objectBasics.findIndex(obj => obj.usersdetails === "location")); // 2

// -------------------- TWITTER POST OBJECT --------------------
const twitter_post = {
    username: "Dhanu",
    content: "This is my new post",
    likes: 50,
    repost: 2,
    tags: ["new post", "details", "likes"]
};
console.log(twitter_post);

// -------------------- DOT VS BRACKET NOTATION --------------------
const person = { name: "Alice", age: 30 };
console.log(person.name); // Dot notation — "Alice"
console.log(person["age"]); // Bracket notation — 30

const prop = "name";
console.log(person[prop]); // Bracket notation with variable — "Alice"

const obj = { "favorite color": "blue" };
console.log(obj["favorite color"]); // Bracket notation for unusual property names

// -------------------- TRICKY PART: KEYS ARE STRINGS --------------------
const trickyObject = {
    1: "a",          // Key stored as "1" (string)
    2: "b",          // Key stored as "2"
    3: "c",          // Key stored as "3"
    null: "d",       // Key stored as "null" (string)
    undefined: "e"   // Key stored as "undefined" (string)
};

// Numbers/null/undefined as keys become strings internally
console.log(trickyObject[1]); // "a"
console.log(trickyObject["null"]); // "d"
console.log(trickyObject["undefined"]); // "e"

// Delete a property by its string key
delete trickyObject[1]; // deletes key "1"
