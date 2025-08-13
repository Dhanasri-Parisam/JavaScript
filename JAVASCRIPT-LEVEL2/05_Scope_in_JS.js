console.log("Scope in javascript");

// 1. Global Scope
// Declared outside any function or block.

// Accessible anywhere after declaration (inside functions, blocks, outside).

// var binds to the global object (browser: window), let & const do not.

// 2. Local (Function) Scope
// Declared inside a function with var, let, or const.

// Accessible only inside that function.

// Cannot be accessed outside.

// 3. Block Scope
// A block = anything inside { } (loops, if statements, etc.).

// let and const → block-scoped (accessible only inside the { }).

// var → NOT block-scoped (it ignores the block and acts like it was declared outside the block, but still respects function scope).

// Global declarations
var a = 10;
let b = 20;
const c = 30;

function test() {
    console.log(a); // ✅ Accessible (var is global)
    console.log(b); // ✅ Accessible (let is in global scope)
    console.log(c); // ✅ Accessible (const is in global scope)
}

test();

// Access outside (still in global scope)
console.log(a); // ✅ 10
console.log(b); // ✅ 20
console.log(c); // ✅ 30


// block scope
if (true) {
    let y = 200;
    const z = 300;
    var w = 400; // var is function-scoped, not block-scoped
}
console.log(y); // ❌ Error
console.log(z); // ❌ Error
console.log(w); // Accessible here

// local scoped =. inside function only
function localScopeExample() {
    let localVar = "I am local";
    console.log(localVar);
}
localScopeExample();