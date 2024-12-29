

// 1. Write a function that uses both var, let, and const to create three variables with different scoping. Use a template literal to return a string explaining the scopes of each variable. Test this function and print the result?
function abc() {
  var name = "ali"; 
  let letMessage; 
  const myName= "sanaahti";
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
let innerFunc2= triple(4);
console.log(innerFunc1);
console.log(innerFunc2);
// 3):  Create a function that accepts an object with properties name, age, country,and city. Destructure these properties in the function parameters and setdefault values for country and city. The function should return a string using the destructured values with template literals.
function obj({ name, age, country ="Pakistan", city = "Karachi" }) {
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
  for(let book of books){
    console.log(` title: "${book.title}", author: "${book.author} "yearPublished: ${book.yearPublished} `);
  }  
}
stringOfBooks(books);

// 7. Write a generator function called idGenerator that generates unique IDs starting from 1. Call this generator multiple times to get unique IDs and print them.

function* idGenerator(start=1,end=10,step=3){
  var id=start;
  while(id<end){
    yield id
   id+=step;
    }
}
let result=idGenerator();
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);

// 8. Create a module named mathOperations.js with functions for basic math operations (add, subtract, multiply, and divide).Import these functions into a new file app.js, and use them to perform calculations. Log each result.

import {add,subtract,multiply,divide} from "./mathOperation.js";
const num1=4;
const num2=5;
 console.log(add(num1,num2));
 console.log(subtract(num1,num2));
 console.log(multiply(num1,num2));
 console.log(divide(num1,num2));