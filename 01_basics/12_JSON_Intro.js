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