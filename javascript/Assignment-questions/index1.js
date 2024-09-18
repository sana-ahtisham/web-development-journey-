// Assignment # 12-13

// CHAPTER #12 :IF...ELSE & ELSE IF STATEMENT,
// CHAPTER # 13 TESTING SET OF CONDITION | JAVASCRIPT

//    Q: 1. Write a program that takes a character (number or string)
//     in a variable & checks whether the given input is a
//     number, uppercase letter or lower case letter. (Hint: ASCII
//     codes:- A=65, Z=90, a=97, z=122).?
// hints A=65-Z=90,a=97-z=122,0=48-9=57

// var input = prompt("Enter any character (number or string)?");

// if (input) {
//     var asciiCode = input.charCodeAt(0);

//     if (asciiCode >= 48 && asciiCode <= 57) {
//         alert("The character is a number");
//     } else if (asciiCode >= 65 && asciiCode <= 90) {
//         alert("The character is an uppercase letter");
//     } else if (asciiCode >= 97 && asciiCode <= 122) {
//         alert("The character is a lowercase letter");
//     } else {
//         alert("The character is neither a number nor a letter");
//     }
// } else {
//     alert("Please enter a valid character");
// }

// Q:2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.?
// method one to solve question?
// var num1 = +(prompt("Enter first number?"));
// var num2 = +(prompt("Enter second number?"));
// if (num1 > num2) {
//     alert("First number is larger");
// } else if (num2 > num1) {
//     alert("Second number is larger");
// } else {
//     alert("Both numbers are equal");
// }
// method two to solve question?

// function displayLarger(a, b) {
//     if (a === b) {
//         console.log("The two integers are equal.");
//     } else if (a > b) {
//         console.log("The larger integer is " + a);
//     } else {
//         console.log("The larger integer is " + b);
//     }
// }

// // Test the function
// displayLarger(5, 10);  // Output: The larger integer is 10
// displayLarger(10, 5);  // Output: The larger integer is 10
// displayLarger(5, 5);   // Output: The two integers are equal.

// Q:3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.?
// method first to solve question?

// var num = +prompt("enter any number");
// if (num > 0) {
//   alert("number is positive");
// } else if (num < 0) {
//   alert("number is negative");
// } else {
//   alert("number is zero");
// }

// method second to solve question?
// function checkInteger(num) {
//   if (num > 0) {
//     console.log("The number is positive");
//   } else if (num < 0) {
//     console.log("The number is negative");
//   } else if ((num = 0)) {
//     console.log("The number is zero");
//   } else {
//     console.log("Invalid input");
//   }
// }
// Write a program that takes a character (i.e. string of    length 1) and returns true if it is a vowel, false otherwise?

// function isVowel(char) {
//     // Convert the character to lowercase to handle both uppercase and lowercase vowels
//     var lowerChar = char.toLowerCase();

//     // Check if the character is a vowel
//     if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//         return true;
//     } else {
//         return false;
//     }
// }
// var input = prompt("Enter a character:");
// if (input.length === 1) {
//     var result = isVowel(input);
//     alert(result);
// } else {
//     alert("Please enter a single character");
// }

// Q:5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var correctPass = "s2a45";
// var userPass = prompt("Enter your password:");
// if (userPass.length === 0) {
//   alert("Please enter your password");
// } else if (userPass === correctPass) {
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }

//Q: 6. This if/else statement does not work. Try to fix it:
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// solve the problem:

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day"}
// else{
// greeting = "Good evening";
// }

// Q:7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements?

// var time = prompt("Enter time in 24-hour format (e.g., 1900):");

// // Convert the input to an integer for easier comparison
// time = parseInt(time);

// if (time >= 0 && time < 1200) {
//     if (time === 0) {
//         alert("12 AM");
//     } else {
//         alert(time + " AM");
//     }
// } else if (time >= 1200 && time < 1300) {
//     if (time === 1200) {
//         alert("12 PM");
//     } else {
//         alert(time + " PM");
//     }
// } else if (time >= 1300 && time <= 2359) {
//     var hour = time - 1200;
//     if (hour < 1000) {
//         alert(hour + " PM");
//     } else {
//         alert(hour + " PM");
//     }
// } else {
//     alert("Invalid time entered. Please enter a time between 0000 and 2359.");
// }

// 2nd methed with : colon in time

// var time = prompt("Enter time in 24-hour format (e.g., 1900):");

// if (time.length !== 4) {
//     alert("Please enter the time in the correct format (e.g., 1900).");
// } else {
//     // Extract the hour and minute components
//     var hour = parseInt(time.substring(0, 2));
//     var minutes = time.substring(2, 4);
//     var period;

//     if (hour >= 0 && hour < 12) {
//         period = "AM";
//         if (hour === 0) {
//             hour = 12;  // Midnight case
//         }
//     } else if (hour === 12) {
//         period = "PM";
//     } else if (hour > 12 && hour <= 23) {
//         hour = hour - 12; // Convert to 12-hour format
//         period = "PM";
//     }

//     if (hour < 10) {
//         hour = "0" + hour; // To ensure proper format (e.g., 07:00 PM)
//     }

//     alert(hour + ":" + minutes + " " + period);
// }

// Q:7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements?

// var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));

// if (time >= 0 && time < 1200) {
//     alert("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good evening!");
// } else if (time >= 2100 && time <= 2359) {
//     alert("Good night!");
// } else {
//     alert("Invalid time entered. Please enter a time between 0000 and 2359.");
// }
