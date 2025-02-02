                                      //  Assignment # 2
                                      //  CHAPTER # 6-8
                                      //  Question 1 - 6
                                     //  CHAPTER # 9-11
                                     //  Question 1 - 11
                                    //  CHAPTER # 12-13
                                    //  Question 1 - 7
                                    //  CHAPTER # 14-16
                                    //  Question 1 - 15
                                    //  CHAPTER # 17-20
                                    //  Question 1 - 10

                                //  Assignment # 2 (MATH EXPRESSIONS),6-8 chapters cover , Question 1 - 6
                                //   JAVASCRIPT solution

//Q 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a = 10;

// document.write("The value of a is : " +  a  +"<br>");

// document.write("The value of ++a is" +  ++a +"<br> Now the value of a is : " + a +"<br>");
// document.write("The value of a++ is" +  a++ +"<br> Now the value of a is : " + a +"<br>");
// document.write("The value of --a is" +  --a +"<br> Now the value of a is : " + a +"<br>");
// document.write("The value of a-- is" +  a-- +"<br> Now the value of a is : " + a +"<br>");

// Q: 2. What will be the output in variables a, b & result after
// execution of the following script:

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2, b = 1;
// document.write("--a ; a become 1.")
// document.write("<br>--a - --b ; a become 1 and b become 0 so result is 1 - 0 = 1");
// document.write("<br> --a - --b + ++b ; a is 1 . b is 0 , then incremented to 1.Result is 1 - 0 + 1 = 2 ");
// document.write("<br> --a - --b + ++b + b-- ; a is 1 . b is 0 , incremented to 1 , and used as 1 before decrementing . Result is 1 - 0 + 1 + 1 = 3 . After this operation , b becomes 0 . Thus, the final values are : <br>")
// document.write(--a - --b + ++b + b--);

// a = 1 , b = 0 , result = 3

// Q:3.Write a program that takes input a name from user &
// greet the user.

// var yourName=prompt("ENTER YOUR NAME");
// document.write("Hello " + yourName + " !");
//Q.4 was empty in pdf assignment?
// Q.5 Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5
// should be displayed by default.
// var a = prompt("Enter a number");
// if (a === null || a === "") {
//     a = 5;
// } else {
//     a = a;
// }

// document.write("Table of " + a + "<br>");
// for (var i = 1; i <= 10; i++) {
//     document.write(a + " x " + i + " = " + (a * i) + "<br>");
// }

// Q :6. Take a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
// a) Take three subjects name from user and store them in 3 different variables
//  var subject1 = prompt("Enter the name of the first subject");
//  var subject2 = prompt("Enter the name of the second subject");
//  var subject3 = prompt("Enter the name of the third subject");

// b) Total marks for each subject is 100, store it in another variable
//  var totalMarksPerSubject = 100;

// c) Take obtained marks for first subject from user and store it in different variable
//  var obtainedMarks1 = +prompt("Enter obtained marks for " + subject1);

// d) Take obtained marks for remaining 2 subjects from user and store them in variables
//  var obtainedMarks2 =+prompt("Enter obtained marks for " + subject2);
//  var obtainedMarks3 =+prompt("Enter obtained marks for " + subject3);

// e) Calculate total marks and percentage
//  var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
//  var totalMaximumMarks = totalMarksPerSubject * 3;
//  var percentage = (totalObtainedMarks / totalMaximumMarks) * 100;

// Display the result in a table
//  document.write("<table border='1'>");
//  document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
//  document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
//  document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
//  document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
//  document.write("<tr><th>Total</th><th>" + totalObtainedMarks + "</th><th>" + totalMaximumMarks + "</th></tr>");
//  document.write("<tr><th>Percentage</th><th colspan='2'>" + percentage.toFixed(2) + "%</th></tr>");
//  document.write("</table>");

// Display the result  of % of subjects in a break line:

// document.write("Subject1 : " + subject1 + "<br>Obtained Marks : "
//    + sub1Obtained + "<br>Total Marks : " + totalMarks + "<br>Percentage : "+ percentage1 + "<br>Subject2 : " + subject2 +
//     "<br>Obtained Marks : " + sub2Obtained + "<br>Total Marks : " + totalMarks + "<br>Percentage2 : " +percentage2 + "<br>< br>Subject3 : " + subject3 + "<br>Obtained Marks : "
//    + sub3Obtained + "<br>Total Marks : " + totalMarks + "<br>Percentage3 : " + percentage3 + "<br><br>Total : " + total + "<br>Percentage : " + percentage + "<br> Grade : " + percentage + "<br>Remarks : " + percentage + "<br><br>"

                                    //  Assignment # 2(USER INPUT & CONDITIONAL STATEMENT)
                                    //  chapter # 9-11
                                    //  CHAPTER # 9 :Prompt
                                    //  CHAPTER # 10:Math expressions: if statements
                                    //  CHAPTER # 11:Math    expressions:Comparison operator
                                    //   Questions cover
                                    //  JAVASCRIPT solution

// Q: 1.Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// Take city name as input from the user
//   var city = prompt("Enter the name of your city");

//   // Check if the entered city is "Karachi"
//   if (city.toLowerCase() === "karachi") {
//       document.write("Welcome to city of lights");
//   } else {
//       document.write("Welcome to " + city);
//   }
// Q :2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

//   var gender = prompt("Enter your gender");

//   // Check if the entered city is "Karachi"
//   if (gender.toLowerCase() === "female") {
//       document.write("Good Morning maam.");
//   }
//   else if(gender.toLowerCase() === "male"){
//       document.write("Good Morning sir.");
//   }
//   else{
//    document.write("enter your gender.");
//   }
//  Q:3. Write a program to take input color of road traffic signal
//  from the user & show the message according to this table:
//  var color = prompt("Enter any color of traffic signal");
//  if(color.toLowerCase() === "red"){
//    document.write("Must Stop");
//  }
//  else if(color.toLowerCase() === "yellow"){
//    document.write("Ready to move");
//    }
//  else if(color.toLowerCase() === "green"){
//       document.write("Move now");
//    }
// else{
//       document.write("Enter the correct signal color");
//    }
//  Q :4.Write a program to take input remaining fuel in car (in
//    litres) from user. If the current fuel is less than 0.25litres,
//    show the message “Please refill the fuel in your car”
//   var fuel = +prompt("How many remaining fuel in your car");
//   if (fuel<=0.25) {
//       document.write("Please refill the fuel in your car");
//   } else if (fuel>0.25){
//       document.write( "the fuel is enough in your car");
//   }
//   else{
//    document.write("enter the correct value");
//   }
// Q:5. Run this script, & check whether alert message would be
//    displayed or not. Record the outputs.
// (a):
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// answer:alert show
// (b):
// var b = 82;
// if (b++ === 83){
//    alert("given condition for variable b is true");
//    }
// answer:alert not show
// (c):
//  var c = 12;
//  if (c++ === 13){
//  alert("condition 1 is true");
//  }
//  if (c === 13){
//  alert("condition 2 is true");
//  }
//  if (++c < 14){
//  alert("condition 3 is true");
//  }
//  if(c === 14){
//  alert("condition 4 is true");
//  }
// answer:condition 2 is true
// (d):
//  var materialCost = 20000;
//  var laborCost = 2000;
//  var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
//  }
// answer:The cost equals
// (e):
// if (true){
//  alert("True");
//  }
//  if (false){
//  alert("False");
//  }
// answer:true
// ( f).
// if("car" < "cat"){
//    alert("car is smaller than cat");
// }
// answer:car is smaller than cat
// 6. Write a program to take input the marks obtained in three
//    subjects & total marks. Compute & show the resulting
//    percentage on your page. Take percentage & compute
//    grade as per following table:
//    Percentage Grade
//    80-100 A
//    70-79 B
//    60-69 C
//    50-59 D
//    0-49 F

//  document.write("<table border='1'>");
//  document.write("<tr><th> Percentage</th><th>Grade</th><th>Remarks</th></tr>");
//  document.write("<tr><td> Greater than or equal to 80 </td><td> A </td><td> Excellent </td></tr>");
//  document.write("<tr><td> Greater than or equal to 70 </td><td> B </td><td> Good </td></tr>");
//  document.write("<tr><td> Greater than or equal to 60 </td><td> C </td><td> You need to improve </td></tr>");
//  document.write("<tr><td> Greater than or equal to 50 </td><td> D </td><td> Fair </td></tr>");
//  document.write("<tr><td>Less than 50 </td><td> F </td><td> Sorry </td></tr>");
//  document.write("</table>");

//  var sub1 = +prompt("Enter the marks of subject 1:");
//  var sub2 = +prompt("Enter the marks of subject 2:");
//  var sub3 = +prompt("Enter the marks of subject 3:");
//  var obtainedTotal = sub1 + sub2 + sub3;
//  var total = 300;
//  var percentage = obtainedTotal / total * 100;

//  if (percentage >= 80 && percentage <= 100) {
//      document.write("<h1>Total Marks:</h1> <br>Marks Obtained: " + obtainedTotal + "<br> Percentage: " +
//          percentage.toFixed(2) + "<br> Grade: A <br> Remarks: Excellent <br> ");
//  } else if (percentage >= 70 && percentage < 80) {
//      document.write("<h1>Total Marks:</h1> <br>Marks Obtained: " + obtainedTotal + "<br> Percentage: " +
//          percentage.toFixed(2) + "<br> Grade: B <br> Remarks: Good <br> ");
//  } else if (percentage >= 60 && percentage < 70) {
//      document.write("<h1>Total Marks:</h1> <br>Marks Obtained: " + obtainedTotal + "<br> Percentage: " +
//          percentage.toFixed(2) + "<br> Grade: C <br> Remarks: You need to improve <br> ");
//  } else if (percentage >= 50 && percentage < 60) {
//      document.write("<h1>Total Marks:</h1> <br>Marks Obtained: " + obtainedTotal + "<br> Percentage: " +
//          percentage.toFixed(2) + "<br> Grade: D <br> Remarks: Fair <br> ");
//  } else {
//      document.write("<h1>Total Marks:</h1> <br>Marks Obtained: " + obtainedTotal + "<br> Percentage: " +
//          percentage.toFixed(2) + "<br> Grade: F <br> Remarks: Sorry <br> ");
//  }

// Q:7. Guess game:
// Prompt user to guess the secret number.
// Store a secret number (ranging from 1 to 10) in a variable.
// a. If user guesses the same number, show “Bingo! Correct Answer."
// b. If the guessed number +1 is the secret number, show  “Close enough to the correct answer”.
// c. If the guessed number -1 is the secret number, show “Close enough to the correct answer”.
// d. If the guessed number is not the secret number, show “Try again”.
// var userInput = +prompt("Enter Number and guess it is matching from my number");
// var secretNumber = 5;
// if (userInput == secretNumber) {
//   alert("Bingo! Correct Answer");
// } else if (userInput + 1 == secretNumber) {
//   alert("Close enough to the correct answer");
// } else if (userInput - 1 == secretNumber) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Try again");
// }

// Q:8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.?
// var myNumber = +prompt("Enter a number");
// if (myNumberumber % 3 == 0) {
//   alert("Number is divisible by 3");
// } else {
//   alert("Number is not divisible by 3");

// Q:9. Write a program that checks whether the given input is an
// even number or an odd number.?
// var myNumber = +prompt("Enter a number");
// if (myNumber % 2 == 0) {
//   alert("Number is even");
// } else {
//   alert("Number is odd");
// Q:10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”?

// var temperature = +prompt("Enter temperature");
// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } else {
//   alert("Invalid temperature");
// }

// Q:11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.?
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var operation = prompt("Enter operation");
// if (operation == "+") {
//   alert(num1 + num2);
// } else if (operation == "-") {
//   alert(num1 - num2);134rd44
// } else if (operation == "*") {
//   alert(num1 * num2);
// } else if (operation == "/") {
//   if (num2 != 0) {
//     alert(num1 / num2);
//   } else {
//     alert("Error! Division by zero is not allowed");}
// } else if (operation == "%") {
//   if (num2 != 0) {
//     alert(num1 % num2);
//   } else {
//     alert("Error! Division by zero is not allowed");}

                                                //  Assignment # 2(IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS)
                                                //  chapter # 12-13
                                                //   Questions cover 1 -7
                                                //  JAVASCRIPT solution

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

// Q:7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements?

// var time = prompt("Enter time in 24-hour format (e.g., 1900):");

// Convert the input to an integer for easier comparison
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

                                                //  Assignment # 2(ARRAYS)
                                                //  chapter # 13 - 16
                                                //   Questions cover 1 -15
                                                //  JAVASCRIPT solution


//Q : 1 Declare an empty array using JS literal notation to store student names in future.
// var studentNamesLiteral = [];

// Q : 2 Declare an empty array using JS object notation to store student names in future.
// var studentNamesObject = new Array();

// Q : 3 Declare and initialize a strings array.
// var stringsArray = ["apple", "banana", "cherry"];

// Q :4 Declare and initialize a numbers array.
// var numbersArray = [10, 20, 30, 40, 50];

// Q : 5 Declare and initialize a boolean array.
// var booleanArray = [true, false, true, false];

// Q : 6 Declare and initialize a mixed array.
// var mixedArray = ["John", 25, true, { grade: "A" }];

// Q :7 Declare and Initialize an array and store available education qualifications in Pakistan.
// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Displaying the education qualifications in the browser:
// document.write("<h3>Available Education Qualifications in Pakistan:</h3>");
// document.write("<ul>");
// for (let i = 0; i < educationQualifications.length; i++) {
//     document.write("<li>" + educationQualifications[i] + "</li>");
// }
// document.write("</ul>");

// Q : 8 Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
// a). Declare an array to store 3 student names.
// var studentNames = ["Ali", "Sara", "John"];

// b). Declare another array to store the scores of the 3 students?
// var studentScores = [400, 350, 450];

// Assume total marks for each student.
// var totalMarks = 500;

// c).  Display the scores and percentages of each student.
// document.write("<h3>Student Scores and Percentages:</h3>");
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (studentScores[i] / totalMarks) * 100;
//     document.write(" <h4>Score of " + studentNames[i] + " is " +  studentScores[i]+" </h4> " + "  percentage is" + percentage.toFixed(2) + "%<br><br>");
// }
// Q:9 . Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array.Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// a. Initialize an array with color names
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// Display the initial array elements in the browser
// document.write("<h3>Initial Colors Array:</h3>");
// for (var i=0;i<colors.length;i++){
//     document.write(colors[i] + ",");
// }
// Q:10 . Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. Initialize the colors array
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// Sort the colors array once var b = colors.join(" , "); document.write("<br>");
// document.write(b);
// var a = colors.sort();
// document.write("<br>");
// document.write(a);

// Q: 11 . Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("<h3>Original Cities Array:</h3>");
// document.write(cities);
// var selectedCities = cities.slice(1, 4);
// document.write("<h3>Selected Cities Array:</h3>");
// document.write(selectedCities);
// Q:12 . Write a program to create a single string from the below mentioned array:
// var arr = ['This ', 'is ', ' my ', 'cat'];
// (Use array’s join method)
// document.write(ar +"<br>")
// var initail=arr.join( "  ");
// document.write(initail);
// Q:13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) Initialize an empty array (FIFO structure) (FIFO structure) solve push one by one then to add them then delete one by one by shift

// var empty=[]
// empty.push("Keyboard");
// document.write(empty +"<br>");
// empty.push("Mouse");
// document.write(empty +"<br>"); 
// empty.push("printer");
// document.write(empty +"<br>");
// empty.push("moniter");
// document.write(empty +"<br>");
// var removedElement1 = empty.shift();
// document.write("Removed Element: " + removedElement1 +"<br>");
// document.write(empty +"<br>")
// var removedElement2 = empty.shift();
// document.write("Removed Element: " + removedElement2 +"<br>");
// document.write(empty +"<br>")
// var removedElement3 = empty.shift();
// document.write("Removed Element: " + removedElement3 +"<br>");
// document.write("Array After Third Removal: " + empty +"<br>")
// var removedElement4 = empty.shift();
// document.write("Removed Element: " + removedElement4 +"<br>");
// document.write("Array After forth Removal: " + empty +"<br>")

// 14. Create a new array. Store values one by one in such a waythat you can access the values in reverse order. (Last In- First Out):


// var stack = [];
// // Push elements onto the stack
// stack.push("Keyboard");
// document.write("Added Element: Keyboard<br>");
// stack.push("Mouse");
// document.write("Added Element: Mouse<br>");
// stack.push("Printer");
// document.write("Added Element: Printer<br>");
// stack.push("Monitor");
// document.write("Added Element: Monitor<br><br>");

// // Pop elements in LIFO order
// var removedElement1 = stack.pop();
// document.write("Removed Element: " + removedElement1 + "<br>");
// var removedElement2 = stack.pop();
// document.write("Removed Element: " + removedElement2 + "<br>");
// var removedElement3 = stack.pop();
// document.write("Removed Element: " + removedElement3 + "<br>");
// var removedElement4 = stack.pop();
// document.write("Removed Element: " + removedElement4 + "<br>");

// 15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method:


// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");

// // Loop through the array and create each dropdown option
// for (var i = 0; i < manufacturers.length; i++) {
//   document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
// }

// document.write("</select>");
