// const Array = ["superman", "batman", "spiderman", "ironman"];
// console.log(Array);
// console.log(Array[0]); // superman

// Array.push("hulk");
// console.log(Array); // ["superman", "batman", "spiderman", "ironman", "hulk"]
// console.log(Array.length); // 5

// Array.pop();
// console.log(Array); // ["superman", "batman", "spiderman", "ironman"]
// console.log(Array.length); // 4

// Array.unshift("thor");
// console.log(Array); // ["thor", "superman", "batman", "spiderman", "ironman"]

// Array.shift();
// console.log(Array); // ["superman", "batman", "spiderman", "ironman"]

// Array.splice(1, 2, "captain america", "black widow");
// console.log(Array); // ["superman", "captain america", "black widow", "spiderman", "ironman"]

// Array.sort();
// console.log(Array); // ["batman", "black widow", "captain america", "ironman", "spiderman", "superman"]

// Array.reverse();
// console.log(Array); // ["superman", "spiderman", "ironman", "captain america", "black widow", "batman"]

// console.log(Array.includes("batman")); // true
// console.log(Array.includes("hulk")); // false
// console.log(Array.indexOf("spiderman")); // 2
// console.log(Array.indexOf("hulk")); // -1
// console.log(Array.join(", ")); // "superman, spiderman, ironman, captain america, black widow, batman"
// console.log(Array.toString("-")); // "superman-spiderman-ironman-captain america-black widow-batman"
// console.log(Array.slice(1, 4)); // ["spiderman", "ironman", "captain america"]

// const marvel_heros = ["thor", "hulk", "spiderman", "loki"];
// const moneyheist_heros = ["proffiesor", "berlin", "rio", "helsangi"];

// marvel_heros.push(moneyheist_heros); 
// console.log(marvel_heros[4]); 

// const allheros = marvel_heros.concat(moneyheist_heros);
// console.log(allheros);  // ["thor", "hulk", "spiderman", "loki", "proffiesor", "berlin", "rio", "helsangi"]

//spred operator
// ...marvel takes each element from the marvel array and inserts them individually into the new array.
// ...dc does the same for the dc array.
// The result is a new array that combines all elements from both arrays, without nesting.
// const marvel = ["thor", "hulk"];
// const dc = ["batman", "superman"];
// const allHeros = [...marvel, ...dc];
// console.log(allHeros); // Output: ["thor", "hulk", "batman", "superman"]


// const nested_array = [1,2,[3,4],5,6,7,[8,9,10],[11,12,13],14,15];
// const flat_array = nested_array.flat(Infinity);
// console.log(flat_array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(Array.isArray("hulk"));
console.log(Array.from("hulk"));
console.log(typeof(Array.from("hulk")));

console.log(Array.from({name : "hulk"}));

let val1 = 10;
let val2 = 20;
let val3 = 30;
console.log(Array.of(val1,val2,val3));