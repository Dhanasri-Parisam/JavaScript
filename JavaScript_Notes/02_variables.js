
/*
| Keyword | Scope    | Re-declaration | Updatable | Hoisted | Use Case               |
|---------|----------|----------------|-----------|---------|------------------------|
| var     | Function | Yes            | Yes       | Yes     | Older JS, avoid in ES6 |
| let     | Block    | No             | Yes       | No      | Variables (changeable) |
| const   | Block    | No             | No        | No      | Constants (no change)  |

*/

const accountId = 14445533
let accountEmail = "parisamdanush@gmail.com"
var accountPassword = "12345"
accountCity = "India"

accountEmail = "shs@gmai.com"
accountPassword = "9237209"
accountCity = "Jaipur"
let accountState;

// Function Scope: Variable exists inside the function only (var).

// Block Scope: Variable exists inside curly braces {} only (let, const).

if (true) {
  var x = 100;    // Function scoped
  let y = 200;    // Block scoped
  const z = 300;  // Block scoped
}
console.log(x); // Output: 100 (var leaks outside the block)
// console.log(y); // ERROR: "y" is not defined
// console.log(z); // ERROR: "z" is not defined


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity]);