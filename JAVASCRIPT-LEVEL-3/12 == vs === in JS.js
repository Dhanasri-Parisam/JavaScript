/************************************************************************
 * 12. Understanding '==' vs '===' in JavaScript

    ==  -> Equality operator (loose equality)
          Compares values after type coercion
          Example: 2 == '2' is true

    === -> Strict equality operator
          Compares both value and type without coercion
          Example: 2 === '2' is false

    Key Points:
    - Use '===' to avoid unexpected type coercion
    - '==' can lead to bugs due to implicit conversions
    - Always be explicit about types when comparing values

**************************************************************************/
// EXAMPLES:

console.log(2 == 2);   // true (same value) and different type
console.log(2 === 2);  // true (same value and type)

console.log(2 == '2'); // true (same value) but different type
console.log(2 === '2'); // false (different type)

console.log(0 == false); // true (0 is falsy) but different type
console.log(0 === false); // false (different type)

console.log(null == undefined); // true (both represent absence of value)
console.log(null === undefined); // false (different types)

console.log([] == false); // true (empty array is falsy) but different type
console.log([] === false); // false (different types)

console.log([1,2] == '1,2'); // true (array coerced to string) but different type
console.log([1,2] === '1,2'); // false (different types)

/************************************************************************
// what type of question ask in interviews
// 1. What is the difference between '==' and '===' in JavaScript?
// 2. When should you use '===' over '=='?
// 3. Can you give examples where '==' and '===' yield different results?
// 4. How does type coercion work with the '==' operator?
// 5. What are some common pitfalls of using '==' in comparisons?

// answers to the above questions

// 1. '==' checks for value equality with type coercion, while '===' checks for both value and type equality without coercion.
// 2. Use '===' to avoid unexpected results from type coercion and ensure both value and type match.
// 3. Examples:
//    - 2 == '2' is true, but 2 === '2' is false.
//    - 0 == false is true, but 0 === false is false.
// 4. With '==', JavaScript converts the operands to a common type before comparison, which can lead to unexpected results.
// 5. Common pitfalls include unexpected true results due to type coercion, such as comparing different types like numbers and strings or null and undefined.

*************************************************************************/