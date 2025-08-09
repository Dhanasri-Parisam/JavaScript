// JSON API INTRO

const course = {
    coursename : "alpha JS",
    price : 5000,
    duration : "3 months",
    topics : ["basics", "arrays", "objects", "functions", "DOM"],
    isPaid : true,
}

console.log(course.topics);

const {topics} = course
console.log(topics); // ["basics", "arrays", "objects", "functions", "DOM"]
console.log(typeof topics); // object (because arrays are objects in JS)

const {isPaid : student} = course;
console.log(student); // true

// destructure in JSON
const jsonString = JSON.stringify(course);
const jsonObject = JSON.parse(jsonString);
const {coursename, price} = jsonObject;
console.log(coursename); // "alpha JS"
console.log(price); // 5000

// JSON vs JavaScript Object
/**
 * JSON-encoded string containing course metadata (e.g., name, price, duration, topics, and payment status).
 *
 * JSON vs JavaScript Object:
 * - JSON is a text format for data interchange; a JS object is an in-memory data structure.
 * - JSON keys and string values must use double quotes; JS objects can use identifiers without quotes and single quotes for strings.
 * - JSON cannot contain functions, undefined, Symbols, comments, or trailing commas; JS objects can.
 * - JSON supports only string, number, boolean, null, array, and object; JS objects support many more types.
 * - Convert JSON text to a JS object with JSON.parse(), and serialize a JS object to JSON with JSON.stringify().
 *
 * @constant
 * @type {string}
 * @example
 * // Parse into a JavaScript object
 * const data = JSON.parse(jsonDeclaration);
 * // Serialize a JavaScript object back to JSON
 * const json = JSON.stringify(data);
 */

// API intro in javascript json

const apiResponse = {
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Jennie",
                "last": "Nichols"
            },
            "location": {
                "street": {
                    "number": 8929,
                    "name": "Valwood Pkwy"
                },
                "city": "Billings",
                "state": "Michigan",
                "country": "United States",
                "postcode": "63104",
                "coordinates": {
                    "latitude": "-69.8246",
                    "longitude": "134.8719"
                },
                "timezone": {
                    "offset": "+9:30",
                    "description": "Adelaide, Darwin"
                }
            },
            "email": "jennie.nichols@example.com",
            "login": {
                "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
                "username": "yellowpeacock117",
                "password": "addison",
                "salt": "sld1yGtd",
                "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
                "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
                "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
            },
            "dob": {
                "date": "1992-03-08T15:13:16.688Z",
                "age": 30
            },
            "registered": {
                "date": "2007-07-09T05:51:59.390Z",
                "age": 14
            },
            "phone": "(272) 790-0888",
            "cell": "(489) 330-2385",
            "id": {
                "name": "SSN",
                "value": "405-88-3636"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/75.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            "nat": "US"
        }
    ],
    "info": {
        "seed": "56d27f4a53bd5441",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
};

console.log(apiResponse.results[0].name.first); // Jennie
console.log(apiResponse.info.results); // 1