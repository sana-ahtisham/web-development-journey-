//CHAPTER # 38-44
//  Event
//CHAPTER # 43-48
//CHAPTER # 48-52

//FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS
//FUNCTIONS| SWITCH | WHILE.. DO-WHILE |
//Q 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
//Method 1:
// function power(a,b) {
//   return a ** b
// }
//Method 2:
// function power(a,b) {
//   return Math.pow(a, b);
// }
// console.log(power(3,2));
//Q 2: Any year is entered through the keyboard .write a function to determine whether the year is a leap year or not?
// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true;
//             } else {
//                 return false; // 400 se divide nahi hota, toh leap year nahi
//             }
//         } else {
//             return true; // 100 se divide nahi hota, lekin 4 se hota hai, toh leap year hai
//         }
//     } else {
//         return false; // Agar 4 se bhi divide nahi hota, toh leap year nahi hai
//     }
// }
//Q :# 3 ;If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions ?
// function findS(a,b,c){
//   return (a+b+c)/2
// }
// function findArea(a,b,c){
//   var s=findS(a,b,c);
//   var area= Math.sqrt(s*(s-a)*(s-b)*(s-c))
//   return area
// }
//   console.log(area=findArea(10,12,15))
//   console.log(area);
//Q :4, Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.
// Function to calculate average of marks?

// function marksSubject(marks){
//   var totalSum = marks[0] + marks[1] + marks[2];
//   var avg = totalSum / 3;
//   return avg;
// }

// function percentage(marks){
//   var totalSum = marks[0] + marks[1] + marks[2];
//   var percentage = (totalSum * 100) / 300;
//   return percentage;
// }

// function mainFunction(student1, student2, student3){
//   var marks = [student1, student2, student3];
//   var avg = marksSubject(marks);
//   var percen = percentage(marks);
//   console.log("Average of marks is:", avg);
//   console.log("Percentage of marks is:", percen);
  
//   // Return the average and percentage as an object
//   return { average: avg, percentage: percen };
// }

// var result = mainFunction(90, 80, 70);
// console.log(result);


//Q;5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

/*function findIndexOf(string,char){
  for(var i=0;i<string.length;i++){
    if(string[i]==char){
      return i
      }
  }
  return -1
}
var r=findIndexOf("sana","n")
console.log( r)*/
//method #2:
// function findIndexOf(string, char) {
//   let index = string.indexOf(char);
//   if (index >= 0) {
//       return index;
//   }
//   return -1;
// }
// var r = findIndexOf("sana", "n");
// console.log(r);  // Output: 2

//Q 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

  // var vowels = "aeiouAEIOU";
  // var result = "";
  // function deleteVowel(sentence){
  //   for (var i = 0; i < sentence.length; i++) {
  //     if (vowels.indexOf(sentence[i]) == -1) {
  //       result += sentence[i];
  //       }       
  //       }
  //       return result;
  // } 
  //     console.log(deleteVowel( "I am SanaAhtisham."));
//Q :7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence
//“Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui?

// Function to count successive vowels
// function successiveVowels(text) {
//   var count = 0;
//   var vowels = "aeiouAEIOU";
//   for (var i = 0; i < text.length - 1; i++) {
//     var currentChar = text[i];
//     var nextChar = text[i + 1];
//     switch (currentChar) {
//       case 'a': case 'e': case 'i': case 'o': case 'u':
//       case 'A': case 'E': case 'I': case 'O': case 'U':
//         if (vowels.indexOf(nextChar) !== -1) {
//           count++;
//         }
//         break;
//       default:
//         break;
//     }
//   }

//   return count;
// }
// var sentence = "Pleases read this application and give me gratuity";
// var result = successiveVowels(sentence);
// console.log("Number of successive vowels:", result);
// //Q :8. The distance between two cities (in km.) is input through the keyboard.Write four functions to convert and print this distance in meters, feet, inches and centimeters.

// Function to convert kilometers to meters
// function convertToMeters(km) {
//   return km * 1000; // 1 km = 1000 meters
// }
// function convertToFeet(km) {
//   return km * 3280.84; // 1 km = 3280.84 feet
// }
// function convertToInches(km) {
//   return km * 39370.1; // 1 km = 39370.1 inches
// }
// function convertToCentimeters(km) {
//   return km * 100000; // 1 km = 100000 cm
// }

// // // Main function to call all conversion functions
// function mainFunction(km) {
//   console.log("Distance in meters: " + convertToMeters(km) + " meters");
//   console.log("Distance in feet: " + convertToFeet(km) + " feet");
//   console.log("Distance in inches: " + convertToInches(km) + " inches");
//   console.log("Distance in centimeters: " + convertToCentimeters(km) + " cm");
// }var distanceInKm = 5;
// mainFunction(distanceInKm);
//Q:9 Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
// Function to calculate overtime pay
// function calculateOvertimePay(hoursWorked) {
//   var overtimeRate = 12.00; // Rs. 12 per overtime hour
//   var regularHours = 40; // Regular working hours
//   var overtimeHours = 0;
//   var overtimePay = 0;

//   // Check if employee worked more than 40 hours
//   if (hoursWorked > regularHours) {
//     overtimeHours = hoursWorked - regularHours; // Calculate overtime hours
//     overtimePay = overtimeHours * overtimeRate; // Calculate overtime pay
//   }

//   return overtimePay;
// }
// // Main function to test with an example
// function mainFunction(hoursWorked) {
//   var overtimePay = calculateOvertimePay(hoursWorked);

//   if (overtimePay > 0) {
//     console.log("Overtime pay is Rs. " + overtimePay);
//   } else {
//     console.log("No overtime pay.");
//   }
//   return
// }
// // Test the program
// var hoursWorked = 45; // Employee worked 45 hours
// mainFunction(hoursWorked); // Expected output: Overtime pay is Rs. 60

//Q :10 A cashier has currency notes of denominations 10,50 and 100 . If the amount to be with drawn is input through the keyboard in hundreds,find the total number of currency notes of each denomination the cashier will have to give to withdrawer?

//  function calculateCurrencyNotes(amount) {
//   var notesOf100 = Math.floor(amount/100);
//   amount=amount%100

//  var notesOf50 = Math.floor(amount/50);
//  amount=amount%50
//  var notesOf10=Math.floor(amount/10);
//  amount=amount%10;
//  return console.log(`you will have ${ notesOf100 } hundred notes ${notesOf50 } fifty notes ${notesOf10 } ten notes`);

// }
// calculateCurrencyNotes(470);

// chapter #43-48

// Q: 1:Show an alert box on click on a link?
// function showAlert() {
//   alert("Hello, world!");
// }

// Q:2 Display some Mobile images in the browser and show an alert when an image is clicked:
//start
// const img1=document.getElementById('img1');
// const img2=document.getElementById('img2');
// const img3=document.getElementById('img3');
// const img4=document.getElementById('img4');
// const image=document.getElementsByTagName('img');
// console.log(image);
// for (var i=0 ;i<image.length;i++){
// image[i].addEventListener('click',()=>{
//   alert('“Thanks for purchasing a phone from us”.')
// })}
//end
//  Q:3 display 10 student records in table and each row should contain a delete button .if you click on a button to delete a record ,entire row should be deleted?
//start
// with the help of jquery
// $(document).ready(function() {
// $('button').click(function(e){
//   $(this).parent().parent().remove();
// });
// });
// end jquery


// const buttons = document.getElementsByTagName("button");
// console.log(buttons);
// for (let button of buttons) {
//   button.addEventListener("click", (event) => {
//     const row = event.target.parentElement.parentElement;
//     row.remove();
//   });
// }
//end
// start Q:4
// Q:4 Display an image in browser .change the picture on mouseover and set the first picture on mousrout? 
// Function to change the image
// function changeInPic(event) {
//   if (event.type === "mouseover") {
//       event.target.style.width = "300px";
//       event.target.src = "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   } 
//   else if (event.type === "mouseout") {
//       event.target.src = "https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=nyP4c-s5cSZy1nv1K0xn1ynC-Xuc1sY4Y29ZQqcrztA=";
//       event.target.style.width = "300px";
//   }
// }
// end Q:4 
// Start Q:5
//Q : 5 show  a counter in brower .Counter should increase on click on increse button and decrese on click on decrese button and show updated counter value in browser?
// let count=0
// function increaseCount() {
//   count++
//   document.getElementById("counter").textContent=count;
// }
// function decreaseCount() {
//   count--
//   document.getElementById("counter").textContent=count; 
// }

// end Q:5
//              Assignment # 49-52

// Q: 1 Create the signup form and display form data in your web page?
//start
// const signForm=document.getElementById('signForm');
// const button=document.getElementById('button');
// const firstname=document.getElementById('firstname');
// const lastname=document.getElementById('lastname');
// const email=document.getElementById('email');
// const data=document.querySelector('.data');
// console.log(data);

// button.addEventListener('click',function(event){
// event.preventDefault();
//   if(firstname.value===""||lastname.value===""||email.value===""){
//     alert("Please fill all the fields");
//     return
//     }
//     data.innerHTML=`
//     <p>firstname: ${firstname.value}</p>
//     <p>lastname: ${lastname.value}</p>
//     <p>email: ${email.value}</p>   `

// })
//end question.
//Q : 2 Suppose in your webpage there is content area in which you have entered your item details,but user can only see some details on first look ,whenvuser clicks on :Read more" button, full etail of that particular item will be displayed? 
//start
// function readMore() {
//   var readMore=document.getElementById("readmore");
//   var readText=document.getElementById("readtext");
//   if(readMore.style.display=="none"){
//       readMore.style.display="inline";
//       readText.innerHTML="<em>Read less</em>";
//       readText.innerHTML="<em style=color:blue;>Read less</em>";}
//   else{
//       readMore.style.display="none";
//       readText.innerHTML="<em>Read More</em>";
//       readText.innerHTML="<em style=color:blue;>Read More</em>"
//   }

// }                    



//Q 3 :
// const editForm=document.getElementById('editForm');
// const Name=document.getElementById('Name');
// const Age=document.getElementById('Age');
// let currentRow = null;
// const savebutton=document.getElementById('savebutton');
// document.querySelectorAll('.edit').forEach(button=>{
//   button.addEventListener('click',function(){
//      currentRow=this.parentElement.parentElement;
//      Name.value=currentRow.cells[0].innerText;
//      Age.value=currentRow.cells[1].innerText;
//      editForm.style.display="block";

//     })

// })
// savebutton.addEventListener('click',function(event){
//   event.preventDefault();
//   currentRow.cells[0].innerText=Name.value;
//   currentRow.cells[1].innerText=Age.value;
//   editForm.style.display="none";
// })
// document.querySelectorAll('.delete').forEach(
//   button=>{
//     button.addEventListener('click',function(){
//       const row=this.parentElement.parentElement;
//       row.remove();

//     }
// )})
