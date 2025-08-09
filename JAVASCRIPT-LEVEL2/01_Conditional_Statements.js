console.log("All about Conditional statements");

// let a = 20
// let b = 30
// console.log(a > b);

// if(b > a){
//     console.log("b is greater than a"); // output : true
// }

// you can drive or not
// let age = 35;
// if(age >= 18){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

// let age = 15;
// let grace = 5;
// if(age + grace >= 18){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

// add output for each console log in comments

// if else if ladder

// let age = 20;
// if(age >= 18){
//     console.log("You can drive"); // Output: You can drive
// }
// else if(age + grace >= 18){
//     console.log("You can drive with grace");
// }
// else{
//     console.log("You cannot drive");
// }

// ternory operator
// let a = 10;
// let b = 20;
// a > b ? console.log("a is greater than b") : console.log("b is greater than a"); // Output: b is greater than a

// switch statement
// let fruit = "apple";
// switch(fruit){
//     case "banana":
//         console.log("Banana is yellow");
//         break;
//     case "apple":
//         console.log("Apple is red");
//         break;
//     default:
//         console.log("Unknown fruit");
// }

// if(true){
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }

//nested if statements
// let age = 20;
// if(age >= 18){
//     console.log("You can drive");
//     if(true){
//         console.log("You are eligible to license");
//     }
// }
// else{
//     console.log("You cannot drive");
//     if(true){
//         console.log("You can apply for a learner's permit");
//     }
// }

// logical operators in conditions:

let a = 15;
let b = 25;
if (a < 20 && b > 20) {
    console.log("Both conditions are true");
}

let c = 30;
if (c > 20 || a < 10) {
    console.log("At least one condition is true");
}

// Short-circuit evaluation
let result = a > 10 && b < 30 ? "Both conditions are true" : "At least one condition is false";
console.log(result); // Output: Both conditions are true

// nullish coalescing
let user = null;
let name = user?.name ?? "Guest";
console.log(name); // Output: Guest

// Guard clause
if (!user) {
    console.log("No user found");
    return;
}
else{
    console.log("User found");
}

/*
Other conditional statement concepts you might explore:

1. Nested if statements:
    if (condition1) {
         if (condition2) {
              // code
         }
    }


2. Logical operators in conditions:
    if (a > 10 && b < 20) {
         // code
    }

3. Short-circuit evaluation:
    let result = condition && value;

4. Optional chaining and nullish coalescing (ES2020+):
    let name = user?.name ?? "Guest";

5. Guard clauses:
    if (!user) return;

These cover most practical uses of conditional statements in JavaScript.
*/
