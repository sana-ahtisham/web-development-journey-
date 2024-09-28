// Assignment # 15-16
// CHAPTER #    Arrays

// 1. Declare an empty array using JS literal notation to store
// student names in future.
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:?
// 1. Declare an empty array using JS literal notation to store student names in future.
// var studentNamesLiteral = [];

// 2. Declare an empty array using JS object notation to store student names in future.
// var studentNamesObject = new Array();

// 3. Declare and initialize a strings array.
// var stringsArray = ["apple", "banana", "cherry"];

// 4. Declare and initialize a numbers array.
// var numbersArray = [10, 20, 30, 40, 50];

// 5. Declare and initialize a boolean array.
// var booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array.
// var mixedArray = ["John", 25, true, { grade: "A" }];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan.
// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Displaying the education qualifications in the browser:
// document.write("<h3>Available Education Qualifications in Pakistan:</h3>");
// document.write("<ul>");
// for (let i = 0; i < educationQualifications.length; i++) {
//     document.write("<li>" + educationQualifications[i] + "</li>");
// }
// document.write("</ul>");

// 2) Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// 1. Declare an array to store 3 student names.
// var studentNames = ["Ali", "Sara", "John"];

// 2. Declare another array to store the scores of the 3 students.
// var studentScores = [400, 350, 450];

// Assume total marks for each student.
// var totalMarks = 500;

// 3.  Display the scores and percentages of each student.
// document.write("<h3>Student Scores and Percentages:</h3>");
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (studentScores[i] / totalMarks) * 100;
//     document.write(" <h4>Score of " + studentNames[i] + " is " +  studentScores[i]+" </h4> " + "  percentage is" + percentage.toFixed(2) + "%<br><br>");
// }
// 4 . Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// 5 . Initialize an array with color names
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// Display the initial array elements in the browser
// document.write("<h3>Initial Colors Array:</h3>");
// for (var i=0;i<colors.length;i++){
//     document.write(colors[i] + ",");
// }
// 6 . Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// Initialize the colors array
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// // Sort the colors array once
// var b = colors.join(" , ");
// document.write("<br>");
// document.write(b);
// var a = colors.sort();
// document.write("<br>");
// document.write(a);

// 7 . Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("<h3>Original Cities Array:</h3>");
// document.write(cities);
// var selectedCities = cities.slice(1, 4);
// document.write("<h3>Selected Cities Array:</h3>");
// document.write(selectedCities);
// 8 . Write a program to create a single string from the
// below mentioned array:
// var arr = ['This ', 'is ', ' my ', 'cat'];
// (Use array’s join method)
// document.write(ar +"<br>")
// var initail=arr.join( "  ");
// document.write(initail);
// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// Initialize an empty array (FIFO structure)
// (FIFO structure) solve push one by one then to add them then delete one by one by shift

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