// stack heap memory
// Stack memory: used for static memory allocation
// Heap memory: used for dynamic memory allocation

let stackVariable = 10; // Stack memory
let heapVariable = { value: 20 }; // Heap memory 
let anotherHeapVariable = heapVariable; // Reference to the same object in heap memory
console.log(stackVariable); // 10
console.log(heapVariable.value); // 20
console.log(anotherHeapVariable.value); // 20


let object1 = { name: "Sai", age: 25 }; // Heap memory
let object2 = object1; // Reference to the same object in heap memory
object2.age = 30; // Modifying the object through object2
console.log(object1.age); // 30, since object1 and object2 reference the same object
console.log(object2.age); // 30

let array1 = [1, 2, 3]; // Heap memory
let array2 = array1; // Reference to the same array in heap memory
array2.push(4); // Modifying the array through array2
console.log(array1); // [1, 2, 3, 4], since array1 and array2 reference the same array
console.log(array2); // [1, 2, 3, 4]

// Primitive types are stored in stack memory
let num1 = 5; // Stack memory
let num2 = num1; // Copy of the value, stored in stack memory
num2 = 10; // Changing num2 does not affect num1
console.log(num1); // 5
console.log(num2); // 10

// Functions are also objects in JavaScript and are stored in heap memory
function greet() {
    console.log("Hello, World!");
}
let greetFunction = greet; // Reference to the function in heap memory
greetFunction(); // Calling the function

// Function expressions are also stored in heap memory
let greetExpression = function() {
    console.log("Hello from function expression!");
}
greetExpression(); // Calling the function expression

// Arrow functions are also stored in heap memory
let greetArrow = () => {
    console.log("Hello from arrow function!");
}
greetArrow(); // Calling the arrow function

// Closure example
function createCounter() {
    let count = 0; // count is stored in heap memory
    return function() {
        count++; // Accessing the outer function's variable
        console.log(count);
    };
}
let counter = createCounter(); // counter is a function that has access to count
counter(); // 1
counter(); // 2
counter(); // 3 

// Memory management in JavaScript is handled by the garbage collector
// It automatically frees up memory that is no longer in use
// However, it's good practice to nullify references to large objects when they are no longer needed
heapVariable = null; // Nullifying the reference to the heap object
anotherHeapVariable = null; // Nullifying the reference to the same heap object