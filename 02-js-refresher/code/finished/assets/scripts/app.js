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
