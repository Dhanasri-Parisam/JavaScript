
// basic array declaration in two types
const array1 = new Array(1, 2, 3, 4, 5);
console.log(array1[3]); // output: 4

const array2 = [6, 7, 8, 9, 10];
console.log(array2[2]); // output: 8

const Array = ["superman", "batman", "spiderman", "ironman"];
console.log(Array);
console.log(Array[0]); // superman

Array.push("hulk");
console.log(Array); // ["superman", "batman", "spiderman", "ironman", "hulk"]
console.log(Array.length); // 5

Array.pop();
console.log(Array); // ["superman", "batman", "spiderman", "ironman"]
console.log(Array.length); // 4

Array.unshift("thor");
console.log(Array); // ["thor", "superman", "batman", "spiderman", "ironman"]

Array.shift();
console.log(Array); // ["superman", "batman", "spiderman", "ironman"]

Array.splice(1, 2, "captain america", "black widow");
console.log(Array); // ["superman", "captain america", "black widow", "spiderman", "ironman"]

Array.sort();
console.log(Array); // ["batman", "black widow", "captain america", "ironman", "spiderman", "superman"]

Array.reverse();
console.log(Array); // ["superman", "spiderman", "ironman", "captain america", "black widow", "batman"]

console.log(Array.includes("batman")); // true
console.log(Array.includes("hulk")); // false
console.log(Array.indexOf("spiderman")); // 2
console.log(Array.indexOf("hulk")); // -1
console.log(Array.join(", ")); // "superman, spiderman, ironman, captain america, black widow, batman"
console.log(Array.toString("-")); // "superman-spiderman-ironman-captain america-black widow-batman"
console.log(Array.slice(1, 4)); // ["spiderman", "ironman", "captain america"]

const marvel_heros = ["thor", "hulk", "spiderman", "loki"];
const moneyheist_heros = ["proffiesor", "berlin", "rio", "helsangi"];

marvel_heros.push(moneyheist_heros);
console.log(marvel_heros); // ["thor", "hulk", "spiderman", "loki", ["proffiesor", "berlin", "rio", "helsangi"]]
console.log(marvel_heros[4]);  // output: ["proffiesor", "berlin", "rio", "helsangi"]

const allheros = marvel_heros.concat(moneyheist_heros);
console.log(allheros);  // ["thor", "hulk", "spiderman", "loki", "proffiesor", "berlin", "rio", "helsangi"]

// spread operator
// ...marvel takes each element from the marvel array and inserts them individually into the new array.
// ...dc does the same for the dc array.
// The result is a new array that combines all elements from both arrays, without nesting.
const marvel = ["thor", "hulk"];
const dc = ["batman", "superman"];
const allHeros = [...marvel, ...dc];
console.log(allHeros); // Output: ["thor", "hulk", "batman", "superman"]


const nested_array = [1,2,[3,4],5,6,7,[8,9,10],[11,12,13],14,15];
const flat_array = nested_array.fill(0,2);
console.log(flat_array); //output : [1, 2, 0, 0, 5, 6, 7, 0, 0, 0, 14, 15]
console.log(flat_array.flat()); // output: [1, 2, 0, 0, 5, 6, 7, 0, 0, 0, 14, 15]
console.log(Array.isArray([3,4])); // output: true
console.log(Array.from("hulk")); // ["h", "u", "l", "k"]
console.log(typeof(Array.from("hulk"))); // "object"

console.log(Array.from({name : "hulk"})); // []

let val1 = 10;
let val2 = 20;
let val3 = 30;
console.log(Array.of(val1,val2,val3)); // [10, 20, 30]

// what is destructuring in arrays
const superheroes = ["thor", "hulk", "spiderman"];
const [first, second, third] = superheroes;
console.log(first); // "thor"
console.log(second); // "hulk"
console.log(third); // "spiderman"
console.log(superheroes[0]); // "thor"
console.table(superheroes); // Displays the array in a table format in the console


// array all methods with definition
console.log("Array Methods:");
console.log("1. push() - Adds one or more elements to the end of an array and returns the new length of the array.");
console.log("2. pop() - Removes the last element from an array and returns that element.");
console.log("3. shift() - Removes the first element from an array and returns that element.");
console.log("4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.");
console.log("5. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.");
console.log("6. slice() - Returns a shallow copy of a portion of an array into a new array.");
console.log("7. concat() - Merges two or more arrays and returns a new array.");
console.log("8. join() - Joins all elements of an array into a string.");
console.log("9. includes() - Determines whether an array includes a certain value.");
console.log("10. indexOf() - Returns the first index at which a certain element can be found.");
console.log("11. toString() - Returns a string representation of the array.");
console.log("12. fill() - Fills all the elements of an array from a start index to an end index with a static value.");
console.log("13. flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.");
console.log("14. isArray() - Determines whether the passed value is an Array.");
console.log("15. from() - Creates a new Array instance from an array-like or iterable object.");
console.log("16. of() - Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.");
console.log("17. entries() - Returns a new Array Iterator object that contains the key/value pairs for each index in the array.");
console.log("18. keys() - Returns a new Array Iterator object that contains the keys for each index in the array.");
console.log("19. values() - Returns a new Array Iterator object that contains the values for each index in the array.");
console.log("20. find() - Returns the value of the first element in the array that satisfies the provided testing function.");
console.log("21. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function.");
console.log("22. filter() - Creates a new array with all elements that pass the test implemented by the provided function.");
console.log("23. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.");
console.log("24. reduce() - Executes a reducer function on each element of the array, resulting in a single output value.");
console.log("25. reduceRight() - Executes a reducer function on each element of the array, from right to left, resulting in a single output value.");
