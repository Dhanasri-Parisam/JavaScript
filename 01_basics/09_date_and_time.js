// Date

let date = new Date();
console.log(date); // Current date and time
console.log(date.toDateString()); // "Sat Oct 01 2023" (example output)
console.log(date.toLocaleString()); // "10/1/2023, 12:00:00 AM" (example output)
console.log(date.toISOString()); // "2023-10-01T00:00:00.000Z" (example output)

let date2 = new Date(2025, 3, 1, 4, 12);
console.log(date2); // "2025-03-01T04:12:00.000Z" (example output)

// Creating Dates:
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
// Months are 0-indexed (0 = January)
let specificDate = new Date(2023, 9, 1); // October 1, 2023
console.log(toString(specificDate)); // "Sun Oct 01 2023 ..."

// Parsing Dates:
// Date.parse("2023-10-01") → milliseconds since epoch
let parsedDate = Date.parse("2023-10-01");
console.log(parsedDate); // Milliseconds since Jan 1, 1970

// Date Methods:
// date.getFullYear(), date.getMonth(), date.getDate()
// date.getHours(), date.getMinutes(), date.getSeconds()
let now = new Date();
console.log(now.getFullYear()); // Current year
console.log(now.getMonth());    // Current month (0-11)
console.log(now.getDate());     // Current day of the month
console.log(now.getHours());    // Current hour
console.log(now.getMinutes());  // Current minutes
console.log(now.getSeconds());  // Current seconds

newDate.toLocaleString('default',{
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
})
console.log(newDate.toLocaleString('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
})); // "October 01, 2023, 12:00 AM" (example output)