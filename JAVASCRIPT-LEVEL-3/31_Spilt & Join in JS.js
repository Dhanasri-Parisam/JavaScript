// Spilt and Join in JS

// spilt() -> It is used to split a string into an array of substrings based on a specified separator.
// join() -> It is used to join all elements of an array into a single string, with a specified separator between each element.

// syntax:
// string.split(separator, limit)
// array.join(separator)

// example using limit:
let text = "apple, banana, cherry, date";
let limitedArray = text.split(", ", 2); // Limit to 2 splits
console.log(limitedArray); // ["apple", "banana"]

// Example of split()
let str = "Hello, how are you?";
let wordsArray = str.split(" "); // Splitting by space

console.log(wordsArray); // ["Hello,", "how", "are", "you?"]

// Example of join()
let arr = ["Hello,", "how", "are", "you?"];
let joinedStr = arr.join(" "); // Joining with space
console.log(joinedStr); // "Hello, how are you?"

// Example of split() with different separator
let csv = "apple,banana,cherry";
let fruitsArray = csv.split(",");
console.log(fruitsArray); // ["apple", "banana", "cherry"]

// Example of join() with different separator
let fruits = ["apple", "banana", "cherry"];
let csvStr = fruits.join(", ");
console.log(csvStr); // "apple, banana, cherry"

// Example of split() without separator (returns the whole string as a single element array)
let singleElementArray = str.split();
console.log(singleElementArray); // ["Hello, how are you?"]

// Example of join() without separator (defaults to comma)
let commaJoinedStr = arr.join();
console.log(commaJoinedStr); // "Hello,,how,are,you?"

// Example of split() with regex separator
let regexStr = "one1two2three3four";
let regexArray = regexStr.split(/\d/); // Splitting by digits
console.log(regexArray); // ["one", "two", "three", "four"]

// Example of join() with empty string separator (concatenates all elements)
let concatenatedStr = arr.join("");
console.log(concatenatedStr); // "Hello,howareyou?"

