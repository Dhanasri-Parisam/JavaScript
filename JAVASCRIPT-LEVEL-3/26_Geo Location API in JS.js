// ---------------------------
// GEOLOCATION API IN JAVASCRIPT
// ---------------------------
// The Geolocation API allows web applications to access the user's geographical position.
// It is available through the 'navigator.geolocation' object.
// It provides methods like:
// - getCurrentPosition(): Get user's current location (latitude, longitude, etc.).
// - watchPosition(): Keep tracking the user's position whenever it changes.
// - clearWatch(): Stop watching the user's position.

// ---------------------------
// Basic Syntax:
// navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
// ---------------------------
// successCallback → Function that runs when location is fetched successfully
// errorCallback   → Function that runs when there is an error
// options         → (Optional) Object to control accuracy, timeout, cache, etc.

// Example 1: Getting user's current location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        getLatLong,  // success callback
        error,       // error callback
        {
            maximumAge: 10,          // Use a cached position if it's not older than 10ms
            timeout: 10000,          // Maximum wait time = 10 seconds
            enableHighAccuracy: true // Try to use GPS for highest accuracy
        }
    );
} else {
    console.log("Geolocation is not supported by this browser.");
}

// Function to handle success
function getLatLong(data) {
    console.log(data);  // Entire position object
    console.log("Latitude: " + data.coords.latitude);   // Example: 13.067439
    console.log("Longitude: " + data.coords.longitude); // Example: 80.237617
    console.log("Accuracy (in meters): " + data.coords.accuracy);
}

// Function to handle error
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    // Error codes:
    // 1 → PERMISSION_DENIED (user denied location request)
    // 2 → POSITION_UNAVAILABLE (location data unavailable)
    // 3 → TIMEOUT (request timed out)
}

// Example 2: Watching user's position
// Example 2: Watch Position (keeps tracking location in real-time)
if (navigator.geolocation) {
    let watchID = navigator.geolocation.watchPosition(
        function (pos) {
            console.log("Updated Latitude: " + pos.coords.latitude);
            console.log("Updated Longitude: " + pos.coords.longitude);
        },
        function (err) {
            console.error("Error watching position: " + err.message);
        },
        { enableHighAccuracy: true }
    );

    // Stop watching after 30 seconds
    setTimeout(() => {
        navigator.geolocation.clearWatch(watchID);
        console.log("Stopped watching location.");
    }, 30000);
}


// Example 3: Using Geolocation with Google Maps API
// Note: You need to include Google Maps JavaScript API script in your HTML for this to work.

