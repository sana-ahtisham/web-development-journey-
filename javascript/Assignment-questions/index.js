//question and answer related to first chapter:ALERT
//      ASSIGNMENT # 1 JAVASCRIPT CHAPTER 1 TO 5
//       Assignment # 1 JAVASCRIPT Q-1  To  Q-7
//     (  chapter #01   ALERT :)
//       Assignment # 1 JAVASCRIPT  Q-1  To  Q-7
//      ( chapter#02  VARIABLES FOR STRINGS:)
//       Assignment # 1 JAVASCRIPT  Q-1  To  Q-4
//       (chapter#03   VARIABLES FOR NUMBERS:)
//       Assignment # 1 JAVASCRIPT  Q-1  To  Q-3
//      (chapter#04  LEGAL & ILLLEGAL VARIABLE:)
//       Assignment # 1 JAVASCRIPT  Q-1  To  Q-13
//      (     CHAPTER 5 :MATH EXPRESSIONS)


// q:1  Write a script to greet your website visitor using JS alert box?
// var greet="WELCOME TO MY WEBSITE";
// alert(greet);
// q:2 Write a script to display following message on your web page ouput :error! please enter a valid pasword
// var message="Error! Please enter a valid password";
// alert(message);
// or you can put message directly without using variabe;
// alert("Error! Please enter a valid password");
// q:3 Write a script to display following message on your web page: (Hint : Use line break)
// alert("Welcome to JS land..\nHappy Coding!")
// q:4 Write a script to display following messages in sequence:
// alert("Welcome to js land");
// alert("Happy Coding\n Prevent the page frrom creating additional dialogs");
// q:5  Generate the following message through browser’s developer console:
// console.log("Hello..I cam run JS through my web browser's console");
// q:6  Make use of alerts in your new/existing HTML & CSS project.
// alert("hello! my existing website");
// 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head 
// b. Body (before your page’s HTML),
// c. Body (inside your page’s HTML),
// d. Body (after your page’s HTML)
// aap in ko html file mei aik aik kar kay check kar sakty hai mei nay js mei hi comment kar dia hai question kay neechy hi but ye yahan run nai ho ga 
// a. head
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>JavaScript in Head</title>
//     <script>
//         alert("JavaScript is in the Head section");
//     </script>
// </head>
// <body>
//     <h1>Hello World</h1>
// </body>
// </html>
// b. Body (before your page’s HTML):
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>JavaScript at Start of Body</title>
// </head>
// <body>
//     <script>
//         alert("JavaScript is at the start of the Body section");
//     </script>
//     <h1>Hello World</h1>
// </body>
// </html>
// c. Body (inside your page’s HTML):
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>JavaScript in Middle of Body</title>
// </head>
// <body>
//     <h1>Hello World</h1>
//     <script>
//         alert("JavaScript is in the middle of the Body section");
//     </script>
//     <p>This is a paragraph after the script.</p>
// </body>
// </html>
// d. Body (after your page’s HTML):
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>JavaScript at End of Body</title>
// </head>
// <body>
//     <h1>Hello World</h1>
//     <p>This is a paragraph before the script.</p>
//     <script>
//         alert("JavaScript is at the end of the Body section");
//     </script>
// </body>
// </html>
// its means that:
/* <head>: Loads JavaScript before rendering the page.
<body> (before content): Executes JavaScript before the HTML content is displayed.
<body> (inside HTML): Executes JavaScript after some HTML content is displayed.
<body> (after content): Loads JavaScript last, once all HTML content is displayed (ideal for scripts that interact with the entire page). */ 

//                          chapter# 1 end

//question and answer related to 2nd chapter:

//       Assignment # 1 JAVASCRIPT
//       chapter#02  VARIABLES FOR STRINGS:

// q:1 Declare a variable called username?

// var username;
// q:2: Declare a variable called myName & assign to it a string that represents your Full Name.

// var myName="sana ahtisham";
// q:3  Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
// var message;
// meesage=="Hello World";
// alert(message);
// q:4 Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// var myName="Jhone Doe";
// var myAge="15 Years Old";
// var myCourse="Certified Mobile Application Developnment";
// alert(myName);
// alert(myAge);
// alert(myCourse);
// q:5 write a sript to display the following alert using one JS variable
// var food="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(food);
// q:6 declare a variable called email and assign to it a string that represent your email address(e-g example@example.com)' show the blow mentioned message in an alert box (Hint:use string concatenation)?
// var email="san@gmail.com";
// alert("My email address is" + " " + email);
// q:7 declare a variable called book & give the value 'A Smarter Way to Learn Javasript'.display the following message in an alert box?
// var book="'A Smarter Way to Learn Javasript'";
// alert(" I am trying to learn from the Book" + "  " +  book);
// store following string in a variable and show in alert and browser though JS


//                          chapter# 2 end


//                     chapter#03 VARIABLES FOR NUMBERS:
//                    Assignment # 1 JAVASCRIPT  Q-1  To  Q-4

//q:1 Declare a variable called age & assign to it your age. Show your age in an alert box.
//  var age=20;
//  alert("I am " + age +" years old");
//q:2 Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
// Declare a variable to keep track of the number of visits
// var visitCount = 1;
// var visitCountEnd="unlimited Times";

// Display the visit count on the web page
//  alert("You have visited this site " + visitCount++ + " times.");
//  alert("You have visited this site " + visitCount++ + " times.");
//  alert("You have visited this site " + visitCount++ + " times.");
//  alert("You have visited this site " + visitCount++ + " times.");
//  alert("You have visited this site " + visitCount++ + " times.");
//  alert("You have visited this site " + visitCountEnd);

//q:3 Declare a variable called birthYear and assign your birth year to it
//   var birthYear = 1990;
//   console.log ("My birth year is " + birthYear + ".");
//q:4  www.xyzClothing.com . Write a script to store in variables
//     the following information:
//        a. Visitor’s name
//        b. Product title
//        c. Quantity i.e. how many products a visitor wants to
//     order
//     Show the following message in your browser: “John
//     Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
//     A visitor visits an online clothing store
// Get the visitor's name
//   var visitorName = prompt("Please enter your name:");

//    // Get the product title
//   var productTitle = prompt("Please enter the product title:");

//   // Get the quantity
//   var quantity = +prompt("Please enter the quantity:");

//  // Display the message
//  console.log(visitorName +  " ordered " + quantity +" " +productTitle +"(s) on XYZ Clothing store." );

//                          chapter# 3 end

// chapter#04 LEGAL & ILLEGAL:
//  ASSIGNMENT #1 Q-1 to Q-3

//   1. Declare 3 variables in one statement.

//  var x, y, z;

//  2. Declare 5 legal & 5 illegal variable names.
// 5 legal:
// var firstName;
// var $age;
// var _address;
// var myVar123;
// var user_name;
// 5 illegal:
// var 1stName;
// var @age;
// var -address;
// var my Var;
// var user-name;
// Q 3. Display this in your browser
//  a) A heading stating “Rules for naming JS variables”
//  b) Variable names can only contain ______, ______,
//  ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
// see answer in js by uncomment

// document.write(`<h1>Rules for Naming JS Variables</h1>
//     <p>Variable names can only contain <strong>letters</strong>, <strong>numbers</strong>, <strong>dollar signs ($)</strong>, and <strong>underscores (_)</strong>.<br>
//        For example: <code>$my_1stVariable</code></p>
    
//     <p>Variables must begin with a <strong>letter</strong>, <strong>dollar sign ($)</strong>, or <strong>underscore (_)</strong>.<br>
//        For example: <code>$name</code>, <code>_name</code>, or <code>name</code></p>
    
//     <p>Variable names are case <strong>sensitive</strong>.</p>
    
//     <p>Variable names should not be JS <strong>keywords</strong>.</p>
// `);
//                          chapter# 4 end

//                    CHAPTER 5 :MATH EXPRESSIONS
//                    ASSIGNMENT #1 :Q-1 TO Q-13

//  Q 1.Write a program that take two numbers & add them in a
//  new variable. Show the result in your browser.
//  var num1=+prompt("ENTER NUMBER 1");
//  var num2=+prompt("ENTER NUMBER 2");
//  var sum=num1+num2;
// alert("THE addition OF THESE TWO NUMBER ARE:" +sum);
//  console.log(sum);
// Q:2. Repeat task1 for subtraction, multiplication, division &
// modulus.
//  var num1=+prompt("ENTER NUMBER 1");
//  var num2=+prompt("ENTER NUMBER 2");
//  var sub=num1-num2;
//  alert("THE subtraction OF THESE TWO NUMBER ARE:" + sub);
//  console.log(sub);

//  var num1=+prompt("ENTER NUMBER 1");
//  var num2=+prompt("ENTER NUMBER 2");
//  var division=num1/num2;
//  alert("THE division OF THESE TWO NUMBER ARE:" + division);
//  console.log(division);

//  var num1=+prompt("ENTER NUMBER 1");
//  var num2=+prompt("ENTER NUMBER 2");
//  var multiply=num1*num2;
// alert("THE multiplcation OF THESE TWO NUMBER ARE:" +multiply);
//  console.log(multiply);

//  var num1=+prompt("ENTER NUMBER 1");
//  var num2=+prompt("ENTER NUMBER 2");
//  var modulus=num1 % num2;
//  alert("THE  remainder OF THESE TWO NUMBER ARE:" +modulus);
//  console.log(modulus);

// Q:3:  Do the following using JS Mathematic Expressions:
// a. Declare a variable.
// var myVar;
// b.  Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// document.write("Value after variable declaration is: " + myVar + "<br>");
// answer is undefined

// c. Initialize the variable with some number.
//  myVar = 5;
//// d. Show the value of variable in your browser like “Initial value: 5”.
//  document.write("Initial value: " + myVar + "<br>");
// e. Increment the variable.
// myVar++;
// f. Show the value of variable in your browser like “Value after increment is:
// document.write("value after increment is:" + myVar + "<br>");
// g. Add 7 to the variable.
// myVar += 7;
// console.log(myVar);
// h. Show the value of variable in your browser like “Value after addition is:
// document.write("Value after addition is: " + myVar + "<br>");
// value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// myVar--;

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// document.write("Value after decrement is: " + myVar + "<br>");
// // k. Show the remainder after dividing the variable’s value by 3.
//  var remainder = myVar % 3;
//  document.write("The remainder is : 0" + remainder +"<br>");

//  Q: 4. Cost of one movie ticket is 600 PKR. Write a script to
//  store ticket price in a variable & calculate the cost of buying 5
//  tickets to a movie. Example output:
// var movieTicket=600;
// var buyingTickets =movieTicket*5;
// document.write("Total cost to buy 5 tickets to a movie is " + buyingTickets +"<br>");
//     5. Write a script to display multiplication table of any
// number in your browser. E.g
// var num=5;
//  OR
// var num=+prompt("enter any table and you will get solution");
// var i;
// for(i=1;i<=10;i++){
//     document.write(num + "x" + i + "=" + num*i + "<br>")
// }
// 6. The Temperature Converter: It's hot out! Let's make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output "NNoF is NNoC".
// Conversion Formulae:
// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F" +"<br>");
// var fahrenheit = 70;
// var celsius = (fahrenheit - 32) * 5/9;
// document.write(fahrenheit + "°F is " + celsius + "°C" +"<br>");

// Q 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.
// Sample data: Item 1 Price: 250; Item 2 Price: 100
// Quantity of Item 1: 3; Quantity of Item 2: 7;
// Shipping Charges: 100. Total Cost of your order: 1000
// var item1Price = 650;
// var item2Price = 100;
// var item1Quantity = 3;
// var item2Quantity = 7;
// var shippingCharges = 100;
// document.write("Price of item 1 is:" + item1Price +"<br>");
// document.write("Price of item 2 is:" + item2Price+"<br>");
// document.write("quantity of item 1 is:" + item1Quantity+"<br>");
// document.write("quantity of item 2 is:" + item2Quantity+"<br>");
// var totalCost = (item1Price * item1Quantity) + (item2Price *item2Quantity) +shippingCharges;
// document.write("Total Cost of your order:" + totalCost+"<br>");
//Q :8.   Store total marks & marks obtained by a student   in 2 variables. Compute the percentage & show the result in your browser
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained/totalMarks)*100;
// document.write("Total Marks:" + totalMarks +"<br>");
// document.write("Marks Obtained:" + marksObtained +"<br>");
// document.write("Percentage:" + percentage + "%" +"<br>");
//   Q :9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
// var usDollar = 10;
// var saudiRiyal = 25;
// var exchangeRate = 104.80;
// var exchangeRate2 = 28;
// var totalCurrency = (usDollar * exchangeRate) + (saudiRiyal* exchangeRate2);
// document.write("Total Currency in PKR:" + totalCurrency +"<br>");
// Q :10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// var number = 3;
// var result = (number + 5) * 10 / 2;
// document.write("Result:" + result +"<br>");
// Q:11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.
// var currentYear=2024;
// var birthYear=1988;
// var age1 = currentYear - birthYear;
// var age2 = currentYear - birthYear - 1;
// document.write("Current Year:" + currentYear +"<br>");
// document.write("Birth Year:" + birthYear +"<br>");
// document.write("your age is " + age1+"<br>");
// document.write("maybe your age is " + age2+"<br>");
// Q:12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// var radius=10;
// var circumference = 2 *3.14 *radius;
// document.write("the circumferrence is :" + circumference + "<br>");
// var area = 3.14 * radius * radius;
// document.write("the area is :" + area);

// Q:13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// var snack = "chocolate";
// var currentAge = 38;
// var maxAge = 65;
// var amountPerDay = 3;
// var totalSnack = (maxAge - currentAge) * amountPerDay;
// document.write("you will need " + totalSnack + " " + snack + " to last you until the ripe old age of " + maxAge +"<br>");
// NNNN to last you until the ripe old age of NN”.
//                    CHAPTER #5 END

// CHAPTER # 1 TO 5 SOLUTIONS THE END

