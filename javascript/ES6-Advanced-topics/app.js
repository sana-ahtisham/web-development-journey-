// 1. Write a function that uses both var, let, and const to create three variables with different scoping. Use a template literal to return a string explaining the scopes of each variable. Test this function and print the result?
function abc() {
  var name = "ali";
  let letMessage;
  const myName = "sanaahti";
  if (true) {
    let blockLetVariable = "I am a let variable";
    letMessage = blockLetVariable;
  }
  return `
Scopes of variables:
1. varVariable: "${name}" is declared with var and accessible throughout the entire function.
2. letVariable: "${letMessage}" is declared inside the block and accessible outside through assignment.
3. constVariable: "${myName}" is block-scoped and its value cannot be reassigned.
  `;
}

// Call the function and log the result
console.log(abc());

// 2): Create a function called createMultiplier that takes a single parameter multiplier. This function should return another function that takes a numbercas input and returns that number multiplied by the original multiplier. Demonstrate this closure by creating functions like double and triple using createMultiplier and calling them with different numbers.?
function createMultiplier(multiplier) {
  return function multiply(number) {
    return number * multiplier;
  };
}
let double = createMultiplier(2);
let triple = createMultiplier(3);
let innerFunc1 = double(5);
let innerFunc2 = triple(4);
console.log(innerFunc1);
console.log(innerFunc2);
// 3):  Create a function that accepts an object with properties name, age, country,and city. Destructure these properties in the function parameters and setdefault values for country and city. The function should return a string using the destructured values with template literals.
function obj({ name, age, country = "Pakistan", city = "Karachi" }) {
  return `${name}  at age  ${age} study in  ${country} lives  in  ${city}`;
}
console.log(
  obj({
    name: "sana",
    age: 16,
  })
);
//  4. Write a function called calculateTotal that takes a price and a variable number of discounts as arguments (use rest parameters). Subtract each discount from the price using the spread operator and return the final discounted price.
function calculateTotal(price, ...discounts) {
  let totalDiscount = discounts.reduce((acc, current) => acc + current, 0);
  return price - totalDiscount;
}
console.log(calculateTotal(100, 10, 20, 30));
// 5: Create an object calculator that has two methods: add and subtract. Use enhanced object literals and arrow functions to define these methods. Each method should take two numbers and return the result. Test these methods by calling them with different numbers.
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};
console.log(calculator.add(5, 10));
console.log(calculator.subtract(5, 10));
//  6. Create an array of objects representing books with properties title, author, and yearPublished. Write a function that uses a for..of loop to iterate over this array and logs each book's information in a formatted string.
let books = [
  { title: "Book1", author: "Author1", yearPublished: 2000 },
  { title: "Book2", author: "Author2", yearPublished: 2001 },
  { title: "Book3", author: "Author3", yearPublished: 2002 },
];
function stringOfBooks(books) {
  for (let book of books) {
    console.log(
      ` title: "${book.title}", author: "${book.author} "yearPublished: ${book.yearPublished} `
    );
  }
}
stringOfBooks(books);

// 7. Write a generator function called idGenerator that generates unique IDs starting from 1. Call this generator multiple times to get unique IDs and print them.

function* idGenerator(start = 1, end = 10, step = 3) {
  var id = start;
  while (id < end) {
    yield id;
    id += step;
  }
}
let result = idGenerator();
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);

// 8. Create a module named mathOperations.js with functions for basic math operations (add, subtract, multiply, and divide).Import these functions into a new file app.js, and use them to perform calculations. Log each result.

import { add, subtract, multiply, divide } from "./mathOperation.js";
const num1 = 4;
const num2 = 5;
console.log(add(num1, num2));
console.log(subtract(num1, num2));
console.log(multiply(num1, num2));
console.log(divide(num1, num2));
//  9. Create an object student with properties name, age, grade, and subjects
// (an array of subjects). Use a for..in loop to iterate over the properties of the
// object and log each property and its value.
const student = {
  name: "Sadia",
  age: 20,
  grade: "A",
  subjects: ["Math", "Science", "English"],
};
function propertiesOfStudent(student) {
  for (let key in student) {
    console.log(`${key}: ${student[key]}`);
  }
}
propertiesOfStudent(student);
// 10.  Given an array of numbers, use the map method to create a new array where
// each element is the square of the original array elements. Print both the original
// and the modified array. let numbers = [1, 2, 3, 4];
let numbers = [1, 2, 3, 4];
let modifiedNumber = numbers.map((num) => {
  return num ** 2;
});
console.log(modifiedNumber);
console.log(numbers);

// 11. Write a function operate that takes two numbers and a callback function as
// arguments. The callback will perform a mathematical operation (e.g., addition,
// subtraction) on the two numbers. Define separate functions for addition and
// subtraction, and pass them as callbacks to operate.

function operate(num1, num2, callback) {
  return callback(num1, num2);
}
function addCallback(numb1, numb2) {
  return numb1 + numb2;
}
function subtractallback(numb1, numb2) {
  return numb1 - numb2;
}
console.log(operate(10, 5, addCallback));
console.log(operate(10, 5, subtractallback));
//   12  .Use setTimeout to create a function that prints "Hello, World!" after a delay of 3
// seconds.
// one method to solve
function printHelloWorld() {
  console.log("Hello, World!");
}
setTimeout(printHelloWorld, 3000);
//   // another method to solve
setTimeout(() => {
  console.log("Hello, World!");
}, 3000);

//   13.  Use setInterval to create a function that logs the current time every 2  seconds. After 10 seconds, clear the interval?

// let intervalId = setInterval(() => {
//   const currentTime = new Date();
//   console.log(currentTime.toLocaleString());
// }, 2000);
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval cleared.");
// }, 10000);
// 14.Create a function fetchData that returns a promise. Inside the function, use setTimeout to simulate a network request that resolves with a message ("Data received!") after 2 seconds. Then, call fetchData and handle the response with .then() and .catch().

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received!");
//     }, 2000);
//   });
// }
// fetchData()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}
fetchData()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
// 15. Rewrite the fetchData function (from Question 5: Create an object calculator that has two methods: add and subtract. Use enhanced object literals and arrow functions to define these methods. Each method should take two numbers and return the result. Test these methods by calling them with different numbers.) using async and await.Call this new function and log the result.
const calculatorBSync = {
  add: (a, b) => {
    return a + b;
  },
  substract: (a, b) => {
    return a - b;
  },
};
console.log("Addition Result:", calculatorBSync.add(5, 3));
console.log("Subtraction Result:", calculatorBSync.substract(10, 4));
async function fetchData1() {
  const fetchData1 = async () => {
    const resultawait = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data received!");
      }, 2000);
    });
  };
  return resultawait;
}
fetchData1()
  .then((data) => {
    console.log("Data received! :fetchData1", data);
  })
  .catch((error) => {
    console.log("error", error);
  });
// 16. Write a function that accepts two parameters, base and exponent, and uses the exponentiation operator (**) to calculate and return the result. Test this function with different values.
function exponentiation(base, exponent) {
  return base ** exponent;
}
console.log(exponentiation(2, 3));
console.log(exponentiation(3, 3));
console.log(exponentiation(4, 2));

// 17.Define a class Animal with a constructor that accepts name and species. Add a method speak that logs a message like "Dog says Woof!" Create instances of this class with different animals and call the speak method for each.

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    console.log(`${this.species} says ${this.speakSound()}`);
  }
  speakSound() {
    switch (this.species) {
      case "Dog":
        return "Woof!";
      case "Cat":
        return "Meow!";
      default:
        return "I don't know what sound this animal makes!";
    }
  }
}
// Create instances of the Animal class 
const dog = new Animal("hack", "Dog");
const cat = new Animal("oreo", "cat");
dog.speak(); // Buddy says Woof!
cat.speak();

