// Local Storage vs Session Storage in JS

// Local Storage and Session Storage are both part of the Web Storage API, which allows web applications to store data in the browser. However, they have some key differences:
// 1. Persistence:
//    - Local Storage: Data stored in Local Storage has no expiration time. It remains until explicitly deleted by the user or the application.
//    - Session Storage: Data stored in Session Storage is only available for the duration of the page session. It is cleared when the page session ends, which typically happens when the browser or tab is closed.

// 2. Scope:
//    - Local Storage: Data is shared across all tabs and windows from the same origin (domain).
//    - Session Storage: Data is specific to a single tab or window. Each tab has its own separate Session Storage.

// 3. Storage Limit:
//    - Both Local Storage and Session Storage typically have a storage limit of around 5-10 MB per origin, but this can vary between browsers.
//    - Local Storage and Session Storage have similar storage limits, but Local Storage is generally used for larger amounts of data that need to persist longer.

// 4. Use Cases:
//    - Local Storage: Suitable for storing data that needs to persist across sessions, such as user preferences, themes, or offline data.
//    - Session Storage: Ideal for storing temporary data that is only needed for the duration of a session, such as form data or temporary state information.

// Definitions:
// Local Storage: A web storage mechanism that allows websites to store data in the browser with no expiration time.
// Session Storage: A web storage mechanism that allows websites to store data for the duration of a page session, which is cleared when the session ends.

// Example Usage:

// =================== Local Storage ===================

// Save data
localStorage.setItem('username', 'JohnDoe');

// Overwrites existing value
localStorage.setItem('username', 'Ram');

// Get data
console.log(localStorage.getItem('username')); // Ram

// Remove specific key
localStorage.removeItem('username');

// Clear everything
localStorage.clear();

// Check number of items
console.log(localStorage.length);

// Get key at index
console.log(localStorage.key(0));


// =================== Session Storage ===================

// Save data
sessionStorage.setItem('sessionID', '123456');

// Get data
console.log(sessionStorage.getItem('sessionID')); // 123456

// Remove key
sessionStorage.removeItem('sessionID');

// Clear all
sessionStorage.clear();


// =================== Objects & Arrays ===================

// Wrong way → Stored as [object Object]
localStorage.setItem('user', { name: 'Alice', age: 25 });

// Correct way → Convert to JSON string
const user = { name: 'Alice', age: 25 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieve & parse back
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // Alice


// Arrays (same process)
const colors = ['red', 'green', 'blue'];
localStorage.setItem('colors', JSON.stringify(colors));
console.log(JSON.parse(localStorage.getItem('colors'))); // ['red', 'green', 'blue']

// Note: Session Storage works the same way for objects and arrays.