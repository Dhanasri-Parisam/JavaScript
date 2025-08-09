/**
 * Demonstrates basic object operations in JavaScript, including:
 * - Creating objects with various property types (string, number, boolean, array, symbol)
 * - Defining and calling methods within objects
 * - Modifying object properties
 * - Accessing symbol-keyed properties
 * - Iterating over object properties (excluding symbol properties)
 * - Creating singleton and non-singleton objects
 * - Adding properties to objects after creation
 * - Creating nested objects and accessing deeply nested properties
 *
 * @function objectBasicsDemo
 * @returns {void}
 */

/**
 * Singleton object created using the Object constructor.
 * @type {Object}
 */

/**
 * Non-singleton object created using object literal syntax.
 * Properties 'name' and 'age' are added after creation.
 * @type {Object}
 * @property {string} name - The name of the person.
 * @property {number} age - The age of the person.
 */

/**
 * Object containing nested objects for user details.
 * @type {Object}
 * @property {string} fullname - The full name of the user.
 * @property {number} age - The age of the user.
 * @property {string} location - The location of the user.
 * @property {Object} userfullname - Nested object with first and last name.
 * @property {string} userfullname.firstName - The user's first name.
 * @property {string} userfullname.lastName - The user's last name.
 * @property {Object} userage - Nested object with ages of different users.
 * @property {number} userage.user1age - Age of user 1.
 * @property {number} userage.user2age - Age of user 2.
 */
// Function to create and demonstrate basic object operations
function objectBasicsDemo() {
    // Create a unique symbol to use as a property key
    const mysym = Symbol("male");

    // Define an object with various properties and a method
    const details = {
        name: "Dhanu",
        age: 19,
        location: "kakinada",
        isLogged: true,
        lastActive: ["monday", "tuesday"],

        // Method to greet using the object's name property
        greet: function () {
            console.log(`Hello, ${this.name}`); // Output: Hello, Dhanu
        },

        // Symbol-keyed property
        [mysym]: "male"
    };

    // Modify a property
    details.isLogged = false;
    console.log("Is logged in after update:", details.isLogged);
    // Output: Is logged in after update: false

    // Access symbol-keyed property
    console.log("Symbol property value:", details[mysym]);
    // Output: Symbol property value: male

    // Call the greet method
    details.greet();
    // Output: Hello, Dhanu

    // Loop through object properties (symbol properties are not included)
    console.log("Looping through object properties:");
    for (let key in details) {
        console.log(key, ":", details[key]);
    }
    // Output:
    // name : Dhanu
    // age : 19
    // location : kakinada
    // isLogged : false
    // lastActive : monday,tuesday
    // greet : [Function: greet]
}

// Call the function to run the demo
objectBasicsDemo();


// object creation and manipulation
// sigleton object

const singleton = new Object();
console.log(singleton); // Output: {}

// non-signleton object
const nonSingleton  = {}
console.log(nonSingleton); // Output: {}

nonSingleton.name = "John";
nonSingleton.age = 30;

console.log(nonSingleton); // Output: { name: 'John', age: 30 }

//object inside object
// Create an object with nested objects for user details
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

// Access deeply nested properties and print their values
console.log(userdetails.userfullname.userage.user1age); // Output: 30
console.log(userdetails.userfullname.userage.user2age); // Output: 18

// Demonstrate optional chaining with a misspelled property (returns undefined, no error)
console.log(userdetails.userfullnae?.firstName); // Output: undefined

// combine objcts
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
console.log({ obj1, obj2 }); // Output: { obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }
console.log({ ...obj1, ...obj2 }); // Output: { a: 1, b: 2, c: 3, d: 4 }
console.log(Object.assign({}, obj1, obj2)); // Output: { a: 1, b: 2, c: 3, d: 4 }


// object inside array
const objectInArray = [
    { usersdetails: "name" },
    { usersdetails: "age" },
    { usersdetails: "location" },
    { userdetails: "gender" }
]

console.log(objectInArray[0]); // { usersdetails: 'name' }
console.log(Object.keys(userdetails)); // [ 'fullname', 'age', 'location', 'userfullname' ]
console.log(Object.values(objectInArray[0])); // [ 'name' ]
console.log(Object.entries(objectInArray[0])); // [ [ 'usersdetails', 'name' ] ]
console.log(objectInArray.hasOwnProperty('usersdetails')); // false (it's a key on element 0, not on the array itself)
console.log(objectInArray.hasOwnProperty.call(objectInArray[0], 'usersdetails')); // true (checking if the first object has the property 'usersdetails')

// anything else in objects
const objectBasics = [
    { usersdetails: "name" },
    { usersdetails: "age" },
    { usersdetails: "location" },
    { userdetails: "gender" }
]

console.log(objectBasics.at(0)); // { usersdetails: 'name' }
console.log(objectBasics.at(-1)); // { userdetails: 'gender' }
// Note: Property is 'usersdetails' (with an 's'). Using 'userdetails' returns undefined/-1.
console.log(objectBasics.find(obj => obj.usersdetails === "name")); // { usersdetails: 'name' } — returns the matching object
console.log(objectBasics.findIndex(obj => obj.usersdetails === "location")); // 2 — returns the index of the matching object

