// all types of console.log methos in javascript
/* 
1. console.log()
2. console.error()
3. console.warn()
4. console.info()
5. console.debug()
6. console.table()
7. console.assert()
8. console.group()
9. console.clear()
10. console.count();
11. console.countReset();
12. console.time()
13. console.timeEnd()
14. console.timeLog()
15. console.trace()
16. console.groupEnd()
*/

//1. console.log()
console.log("This is a log message."); // Standard log message

// 2.console.error
console.error("This is an error message."); // Error message, typically displayed in red


// 3. console.info()
console.info("This is an info message."); // Informational message, similar to log but can be styled differently in some browsers

// 4. console.warn()
console.warn("This is a warning message."); // Warning message, typically displayed in yellow

// 5. console.table
console.table([{ name: "John", age: 30 }, { name: "Jane", age: 25 }]);

// 6.console.clear
console.clear();

// 7.console.assert
console.assert(1 === 2, "This assertion failed!"); // Will log the message if the condition is false

//8. console.count
console.count("Counter"); // Counts the number of times this label has been called

// 9. console.countReset
console.count("Counter"); // Will now start counting from 1 again
console.count("Counter"); // Will now show 2
console.countReset("Counter");
// console.count("Counter"); // Will now show 1 again

//10. console.time
// give me example with while loop
console.time("Loop Time"); // Start the timer
let i = 0;
while (i < 5) {
    console.timeLog("Loop Time"); // Log the current time without stopping the timer
    i++;
}
console.timeEnd("Loop Time"); // End the timer and log the duration

// 11. console.group
console.group("group1");
console.log("group2");
console.log("group3");
console.groupEnd(); // Ends the current group

// 12. console.groupCollapsed
console.groupCollapsed("Collapsed Group");
console.log("This group is collapsed by default.");
console.groupEnd(); // Ends the current group

// 13. console.trace
console.trace("Trace message"); // Logs the current stack trace // output: Trace message

// 14. console.debug
console.debug("This is a debug message."); // Debug message, similar to log but can be filtered out in some environments
