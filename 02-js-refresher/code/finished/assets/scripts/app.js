//import apiKey from "./util.js"; //using default
//import { apiKey, abc as content } from "./util.js";
//import * as util from "./util.js"; //grab all vars from util as an object
//console.log(apiKey);
//console.log(util.abc);
//console.log(content);

const userMessage = "Hello World!!";
//console.log(userMessage);
//console.log(userMessage);

// 20. revisting functions and parameters
function createGreeting(userName, message = "Hello!") {
  //console.log(`Hello ${userName}, ${message}!`);
  return `Hello, ${userName}, ${message}!`;
}

const greeting1 = createGreeting("Max");
//console.log(greeting1);

const greeting2 = createGreeting("Max", "Sup brah!");
//console.log(greeting2);

// 21. Arrow functions
// export default (userName, message) => {
//   console.log("Hello");
//   return `Hello, ${userName}, ${message}!`;
// };

// 23. revisting objects and classes
// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Hello!");
//     console.log(this.age);
//   },
// };

// console.log(user);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hello!");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();

// 24. Arrays and Array methods like Map()
// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Cross stitching");
// console.log(hobbies);

// const findIndexOfSports = hobbies.findIndex((item) => item === "Sports");

// console.log(findIndexOfSports);

// const addExclamation = hobbies.map((item) => `${item}!`);
// console.log(addExclamation);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// 25. destructuring
// const userNameData = ["Michele", "Cheow"];
// //const firstName = userNameDate[0];
// //const lastName = userNameDate[1];

// const [firstName, lastName] = ["Michele", "Cheow"];
// console.log(firstName);
// console.log(lastName);

// //have to use field names in Object
// const { name: userName, age } = {
//   name: "Max",
//   age: 34,
// };

// console.log(userName, age);

//27. The spread operator
// const hobbies = ["Sports", "Cooking", "Reading"];
// const newHobbies = ["Sleeping"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
//   name: "Max",
//   age: 34,
// };

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };
// console.log(extendedUser);

//28. Control Structures
//const password = prompt("Enter password");
// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted");
// }

// //for of loop
// const hobbies = ["Sports", "Cooking"];
// for (const hobby of hobbies) {
//   console.log(hobby);
// }

//30. Using functions as Values
// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => console.log("Timed out... again!");
// // leave off () to execute function so that the function does not run right away
// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 2000);
// setTimeout(() => {
//   console.log("More timing out");
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log("Hi"));

// 31. defining functions inside of functions
// function init() {
//   function greet() {
//     console.log("hi");
//   }

//   greet();
// }

// init();

//32. Reference vs. primitive values
let userMessage1 = "hello!";
userMessage1 = userMessage1.concat("!!!");

const hobbies = ["Sports", "Cooking"];
hobbies.push("Working");
console.log(hobbies);
