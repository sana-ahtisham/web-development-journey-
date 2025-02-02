                    //  assignment   CHAPTER# 21 - 25
                    //  CHAPTER STRING METHODS
                    //  assignment   CHAPTER# 26- 30
                    //  MATH METHODS




                //       CHAPTER# 21 - 25
                //       questions # 1-8
//Q :1  Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name?
// var firstName=prompt("Enter your First name");
// var lastName=prompt("Enter your Last name");
// var fullName=firstName+" "+lastName;
// alert("hello," +fullName);
//Q :2 Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser?
// var phoneModel=prompt("Enter mobile phone model");
// alert("My Favorite Phone Is:" + phoneModel.length);
//Q :3 Write a program to find the index of letter “n” in the word "Pakistani" and display the result in your browser ?
// var letter="Pakistani";
// var index=letter.indexOf("n");
// console.log('the index of letter "n" is : '+ index);
//Q : 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser?
// var letter="Hello World";
// var index=letter.lastIndexOf("l");
// console.log('the last index of letter "l" is : '+index);
// Q :5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser?

// var letter="Pakistani";
// var character=letter.charAt(3)
// console.log('character at index 3 is : '+character);
//Q :6. Repeat Q1 using string concat() method?
// var firstName=prompt("Enter your First name");
// var lastName=prompt("Enter your Last name");
// var fullName=firstName.concat(" ",lastName)
// alert("hello,"+ fullName );
//Q : 7 Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser?
// var word="Hyderabad";
// var word=word.replace("Hyder","Islam");
// console.log(word);
//Q : 8 Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser?
//var message = “Ali and Sami are best friends. They play cricket and football together.”;
//note for understanding concept of (/any word change/g):
// /and/g:This is a regular expression (also called a "regex") that looks for the word "and".
// /and/: This part searches for the string "and".
// g: The g stands for "global," meaning it will replace all occurrences of "and" in the string, not just the first one.
// var message = "Ali and Sami are best friends. They play cricket and football together"
// message=message.replace(/and/g,"&");
// console.log(message);
//Q : 9  Write a program that converts a string “472” to a number 472. Display the values & types in your browser?
//  var str="472";
// console.log("value of string is: "+str);
// console.log(typeof str);
//  number=parseInt(str);
//  console.log("value of number is: "+number); 
//  console.log(typeof number);
//Q :10 Write a program that takes user input. Convert and show the input in capital letters?
// var input=prompt("hi,how are you");
// var answer=input.toUpperCase();
// console.log(answer);
// Q: 11 Write a program that takes user input. Convert and show the input in title case?
// var userInput=prompt('enter any sentence');
// userInput=userInput.toLowerCase().split(' ');
// for(var i=0;i<userInput.length;i++){
//     userInput[i]=userInput[i].charAt(0).toUpperCase()+userInput[i].slice(1);      
// }
// console.log(userInput.join(" "))
// Q :12 Write a program that converts the variable num to string.var num = 35.36 ; Remove the dot to display “3536” display in your browser?
// var num = 35.36 ; 
// var num=num.toString();
// resultNum=num.replace(".","");
// console.log(resultNum);
// Q :13 Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.For character codes of [@ ?

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
//one method:
// var username=prompt("Enter your username");
// if(username.includes("@") || username.includes(".") || username.includes("!") || username.includes(",")){
//     alert('enter a valid username.')}
//2nd method:
//  var username = prompt("Enter a username:");
// var isValid = true;

// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);
//     if (charCode == 33 || charCode == 44 || charCode == 46 || charCode == 64) {
//         isValid = false; 
//         alert("Please enter a valid username. Special characters like @, ., , , ! are not allowed.");
//         break; // Loop ko stop karo kyunki invalid character mil gaya
//     }
// }

// if (isValid) {
//     alert("Valid username!"); // Agar koi special character nahi mila to valid username hai
// }
//3rd method:
//  var username=prompt("Enter your username").toLowerCase();
//  if(/[@.,!]/.test(username)){
//     alert('enter a valid username.');
// }
//     else{
//         alert('valid username');
// } 
//end
//Q :14 You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
// var arr=["cake","apple pie","cookie","chips","patties"];
// var search=prompt("Welcome to my bakery /n Do you want to order item").toLowerCase();
// if(arr.includes(search)){
//     alert(search + " is available at the bakery.");
// }else{
//     alert(search + " is not available at the bakery.");
// }
//method 2:
// var arr=["cake","apple pie","cookie","chips","patties"];
// var search=prompt("Welcome to my bakery /n Do you want to order item").toLowerCase();
// var flag=true
// for(var i=0;i<arr.length;i++){
//     if(arr[i].toLowerCase()==search){
//         flag=false;
//         alert(search +"is available at"+ arr[i] +"in our bakery" )
//         flag=false;
//         break;}       

// }
// if (flag==true) {
//     alert(`sorry ${search} is not available in our bakery.`); 
// }
//Q : 15 Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// function isValidPassword(password) {
//     // Check if the password is at least 6 characters long
//     if (password.length < 6) {
//         return false;
//     }

//     // Check if the first character is a number
//     if (/[0-9]/.test(password.charAt(0))){
//         return false;
//     }

//     // Check for alphabets and numbers
//     var hasAlphabet = false;
//     var hasNumber = false;

//     for (var i = 0; i < password.length; i++) {
//         var charCode = password.charCodeAt(i);
//         // Check for alphabets (A-Z, a-z)
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasAlphabet = true;
//         }
//         else if (charCode >= 48 && charCode <= 57) {
//             hasNumber = true;
//         }
//     }
//     return hasAlphabet && hasNumber;
// }

// // Main program
// var password;

// do {
//     password = prompt("Enter your password (must be at least 6 characters, contain letters and numbers, and not start with a number):");

//     if (!isValidPassword(password)) {
//         alert("Invalid password! Please enter a valid password.");
//     }
// } while (!isValidPassword(password));

// alert("Password is valid!");

// Q :16 Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser?

// var university = "University of Karachi"; 
// var universityArray = university.split("");
// for (var i=0;i<universityArray.length;i++){
//     console.log(universityArray[i]);  
// }
//Q : 17 Write a program to display the last character of a user input?

// var userInput="Pakistan";
// var lastChar=userInput.charAt(userInput.length-1);
// console.log(lastChar);
//Q :18 You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string?
//method #1:
// var str = "The quick brown fox jumps over the lazy dog";
// var lowerCase=str.toLowerCase().split(" ")
// var count=0;
// for(var i=0;i<lowerCase.length;i++){
//     if(lowerCase[i]=="the"){
//         count++;
       
        
//         }
//         console.log(`there are ${ count } occurences of "the"`);
// }
//method #2:
// var str = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for (var i = 0; i < str.length; i++) {
//     if (str.substring(i, i + 3) == "the") {

//         count++;
//         console.log(count);
// }
// }

                    //         CHAPTER# 26 - 30
                    //         chapter# MATH METHODS
                    //         questions # 1-8


//Q:1 Write a program that takes a positive integer from user &display the following in your browser?
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var float=parseFloat(prompt("enter number"))
// console.log(`number: is ${float}`);
// console.log(`round off value of the number: is ${Math.round(float)}`);
// console.log(`floor value of the number: is ${Math.floor(float)}`);
// console.log(`Ceil value of the number: is ${Math.ceil(float)}`);

// Q:2 Write a program that takes a negative floating point number from user & display the following ?
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var float=parseFloat(prompt("enter number"))
// console.log(`number: is ${float}`)
// console.log(`round off value of the number: is ${Math.round(float)}`)
// console.log(`floor value of the number: is ${Math.floor(float)}`)
// console.log(`Ceil value of the number: is ${Math.ceil(float)}`
// );
//Q:3 Write a program that displays the absolute value of a number.E.g. absolute value of -4 is 4 & absolute value of 5 is 5?
// method # 1
// function absoluteValue(num) {
//     if (num < 0) {
//       return -num;
//     } else {
//       return num;
//     }
//   }  
//   let number = -4;
//   console.log("The absolute value of " + number + " is " + absoluteValue(number));  
//   number = 5;
//   console.log("The absolute value of " + number + " is " + absoluteValue(number));
//     method # 2
// let number1=-4;
// console.log("The absolute value of " + number1 + " is " + Math.abs(number1));
// let number2=5;
// console.log("The absolute value of " + number2 + " is " + Math.abs(number2));
// Q:4 Write a program that simulates a dice using random()method of JS Math class. Display the value of dice in your browser?
// var dice=Math.floor(Math.random()*6)+1;
// console.log(`the value of dice is ${dice}`);
// Q :5 Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser?
// var coin=Math.floor(Math.random()*2)+1;
// console.log(`the value of coin is ${coin}`);
// Q:6 Write a program that shows a random number between 1 and 100 in your browser.
// var randomNumber=Math.floor(Math.random()*100)+1;
// console.log(randomNumber);
// Q :7 Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// var weight=parseFloat(prompt("enter your weight"))
// console.log(`your weight is ${weight} kgs`);
// Q :8 Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user?
// var randomNumber=Math.floor(Math.random()*10)+1;
// var userNumber=parseInt(prompt("enter a number between 1 to 10"));
// if(userNumber===randomNumber){
//     console.log("congratulations you guessed the number");
//     }else{
//         console.log("sorry you guessed the wrong number try again");
//     }

 



  
















 

 