console.log("Scope in javascript");

// scopes in javascript 3 types:
// Scope          Type	                            Where Declared	Accessible From
// Global Scope	  Outside any function/block	    Anywhere in code
// Local Scope	  Inside a function	                Only inside that function
// Block Scope	  Inside {} using let or const	    Only inside that block

// Global Scope Example accessible anywhere (let const var)
let globalVar = "I am global";

function globalScopeExample() {
    console.log(globalVar); // Accessible let
}

const globalVariable = "I am also global";

function anotherGlobalScopeExample() {
    console.log(globalVariable); // Accessible const
}

var globalvariable3 = "I am also global with var";

function yetAnotherGlobalScopeExample() {
    console.log(globalvariable3); // Accessible var
}

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

// conclusion
// global scope = accessible anywhere
// local scope = accessible only within the function
// block scope = accessible only within the block