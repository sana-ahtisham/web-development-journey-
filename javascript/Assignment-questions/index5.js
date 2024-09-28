//CHAPTER # 38-44 
//FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS
//FUNCTIONS| SWITCH | WHILE.. DO-WHILE |
//Q 1. Write a custom function power ( a, b ), to calculate the value of a raised to b. 
// function power(a,b) {
//     if(b===0){
//         return 1;
//     }
//     var result=1;
//     for (var i=1;i<=b;i++){
//         result*=a;        
//     }
//     return result    
// }
// console.log(power(3,2));
// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true;  // Agar 400 se divide hota hai, toh leap year hai
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

/*function marksSubject(marks){
totalSum=marks[0],marks[1],marks[2]
 var avg=totalSum/3
 return avg
}
function percentage(marks){
  totalSum=marks[0]+marks[1]+ marks[2];
  var percentage=(totalSum*100)/300
  return percentage;
}
function mainFunction(student1,student2,student3){
  marks=[student1,student2,student3];
  avg=marksSubject(marks);
  percen=percentage(marks);
  console.log("Average of marks is: ",avg);
  console.log("Percentage of marks is: ",percen);
}
var result=mainFunction(90,80,70);
console.log(result);*/


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
//Q 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long. 
// function deleteVowel(sentence){
//   var vowels = "aeiouAEIOU";
//   var result = "";
//   for (var i = 0; i < sentence.length; i++) {
//     if (vowels.indexOf(sentence[i]) == -1) {
//       result += sentence[i];
//       }
//       }
//       return result;
//       }
//       var sentence = "I am SanaAhtisham.";
//       console.log(deleteVowel(sentence));
//Q :7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentenc
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
// //Q :8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

// // Function to convert kilometers to meters
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

// // Main function to call all conversion functions
// function mainFunction(km) {
//   console.log("Distance in meters: " + convertToMeters(km) + " meters");
//   console.log("Distance in feet: " + convertToFeet(km) + " feet");
//   console.log("Distance in inches: " + convertToInches(km) + " inches");
//   console.log("Distance in centimeters: " + convertToCentimeters(km) + " cm");
// }var distanceInKm = 5;
// mainFunction(distanceInKm);
//Q: Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour. 
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
// }

// // Test the program
// var hoursWorked = 45; // Employee worked 45 hours
// mainFunction(hoursWorked); // Expected output: Overtime pay is Rs. 60








 