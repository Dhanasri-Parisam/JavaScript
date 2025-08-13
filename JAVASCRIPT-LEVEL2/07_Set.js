// Set is collection of unique elements
// array is collection of values

// some of the rules:
// 1. set don't contain duplicate values
// 2. set is iterable
// 3. set is not index based
// 4. set can contain any type of values (primitive or non-primitive)
// 5. set can be converted to array

let set1 = new Set();
console.log(set1); // Output: Set(0) {}
console.log(typeof set1); // Output: object

// set operations
set1.add(1);
set1.add(2);
set1.add(3)
    .add(4)
    .add(5)

console.log(set1); // Output: Set(5) { 1, 2, 3, 4, 5 }


// convert array in set
let arr = [1, 2, 3, 4, 5];
let newset = new Set(arr);
console.log(newset); // Output: Set(5) { 1, 2, 3, 4, 5 }

// convert string into set
let stringname = "Hello";
let nameSet = new Set(stringname);
console.log(nameSet); // Output: Set(5) { 'H', 'e', 'l', 'o' }

// set can contain any type of values
let mixedSet = new Set([1, "Hello", true, null, undefined, { key: "value" }]);
console.log(mixedSet); // Output: Set(6) { 1, 'Hello', true, null, undefined, { key: 'value' } }

// remove values from the set
mixedSet.delete(1);
mixedSet.delete("Hello");
console.log(mixedSet); // Output: Set(4) { true, null, undefined, { key: 'value' } }

// check if value exists in the set
// let exist = mixedSet.has(tru);
// console.log(exist); // not in the set: false

// case sensitive check
let mySet = new Set(["Hello","return"]);
console.log(mySet.has("hello"));      // false
console.log(mySet.has("Hello"));  // true

// size of the set
console.log(mySet.size); // Output: 2

// clear the set
mySet.clear();
console.log(mySet.size); // Output: 0


// iterate through the set using foreach
const iterableSet = new Set(["array", "linkedlist", "trees", "graphs"]);

// Iterate through the Set
iterableSet.forEach(function(item) {
    console.log(item); // output: array linkedlist trees graphs
});
console.log(iterableSet); 
// Output: Set(4) { 'array', 'linkedlist', 'trees', 'graphs' }

// iterate using for..of
for (let item of iterableSet) {
    console.log(item);
}
// output: array linkedlist trees graphs

// getting each word from the string
let eachword = new Set("LinkedList");
for( let word of eachword){
    console.log(word); // output: L i n k e d s t
}

//entries in set
let s1 = "geography";
let s1Set = new Set(s1);
console.log(s1Set); // Output: Set(8) { 'g', 'e', 'o', 'r', 'a', 'p', 'h', 'y' }

// Iterate through the Set using entries
for (let [index, value] of s1Set.entries()) {
    console.log(`${index}: ${value}`); // output: 0: g 1: e 2: o 3: r 4: a 5: p 6: h 7: y
    console.log(index, value); // output: 0 g 1 e 2 o 3 r 4 a 5 p 6 h 7 y
}

// move each character one by one
let s2 = new Set("javascript");
let s2Entries = s2.entries();
console.log(s2Entries.next().value); // Output: [0, 'j']
console.log(s2Entries.next().value); // Output: [1, 'a']
console.log(s2Entries.next().value); // Output: [2, 'v']
console.log(s2Entries.next().value); // Output: [3, 'a']

console.log(s2Entries.next());