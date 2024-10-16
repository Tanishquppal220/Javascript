// Diffrent ways to declare variables
const id = 100; // const variable cannot be reassigned
let fullname = "John"; // let variable can be reassigned
var age = 30; // var variable can be reassigned
city = "Jalandhar"; // variable without any keyword is global variable
let place;

// id=1
// Normal way to print variables
console.log(id);
console.log(fullname);
console.log(age);
console.log(city);
/* 
Please use let or const to declare variables.
var is old way to declare variables. 
dont declare variables without any keyword.
 */

console.table({id, fullname, age, city, place}); // Print variables in table format
