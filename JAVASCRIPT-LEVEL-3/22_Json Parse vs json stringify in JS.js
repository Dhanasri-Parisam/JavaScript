// Json Parse vs json stringify in JS

// Json Parse: Converts a JSON string into a JavaScript object.
const jsonString = '{"name": "Alice", "age": 25}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Alice
console.log(jsonObject.age);  // 25

// Json Stringify: Converts a JavaScript object into a JSON string.
const jsObject = { name: 'Bob', age: 30 };
const jsString = JSON.stringify(jsObject);
console.log(jsString); // '{"name":"Bob","age":30}'