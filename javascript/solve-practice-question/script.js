// IT WILL DEFINITELY BUILD YOUR CONFIDENCE AND ALSO BUILD YOUR LOGIC
//PROMBLEMS RELATED TO JAVASCRIPT
//Q;1    Reverse letter in each word through  the sentence
// var seedha="sana is good";
// var ulta=seedha.split(" ").map(function(word){
//     return word.split("").reverse().join("");
// })
// console.log(ulta.join(' '));
//Q;2  check element is array or object?
// var arr=[1,2,3,4,5];
// var obj={a:1,b:2,c:3,d:4,e:5};
// function checkArray(element) {
//     return Array.isArray(element);
// }
//console.log(checkArray(arr));
//console.log(checkArray(obj));
//Q;3  how to array empty donot use lopp for pop each to delete array and donot reset it to new array
// var arr=[1,2,3,4,5,6,7];
//method#1
// var arr2=arr.splice(0,7);
// console.log(arr);
//method#2
//arr.length=0;
//console.log(arr.length);
//Q;4  how to find integer 0r not?
// var num=3;
//method#1
// if(Number.isInteger(num)){
//     console.log("yes");}else{
//         console.log("no");
//     }
//method#2
//  if(num%1===0){
//     console.log("yes");
//     }else{
//         console.log("no");
//         }
//Q;5  how to find the first and last index of array element
// var arr=[1,2,3,30,5,6,7];
// var index=arr.indexOf(30);
// console.log(index);
// var lastIndex=arr.lastIndexOf(2);
// console.log(lastIndex);
//Q;6 dublicate array value  in same array?
// var arr=[1,2,3,4,5,2,3,4,5];
// function dublicateSAmeValuAgain(arr) {
//     return arr=arr.concat(arr)
// }
//console.log(dublicateSAmeValuAgain([1,2,3,4,5]));
//Q;7  how to find the index of array element in array of object?
// var arr=[{a:1,b:2,c:3},{a:4,b:5}]
// var index=arr.findIndex(function(obj){
//     return obj.a===4
//     })
//     console.log(index);
// In this case:
// For the first object { a: 1, b: 2, c: 3 }, obj.a is 1, so this condition fails (1 !== 4).
// For the second object { a: 4, b: 5 }, obj.a is 4, so the condition passes (4 === 4), and findIndex() stops and returns the index of that object, which is 1.
//Q;8 reverse the number?
//method#1:
// function reverseKarDo(num){
//     return Number(num.toString().split("").reverse().join(""));
// }
//console.log(reverseKarDo(2345));
// method #2:
// function reverseKarDo(num) {
//     var reverse=0
//     while(num>0){
//         reverse=reverse*10+num%10
//         num=Math.floor(num/10)
//         }
//         return reverse;
//     }

//Q;9 check string is palindrome or not
// var word = "sana";
// var e = "";
//   e = word.split("").reverse().join("");
//   console.log(e);
// if (word === e) {
//   console.log("Palindrome"); } else {
//   console.log("Not a palindrome"); }
//Q;10 check the number is integer or not?
// var num = +prompt("Enter a number");

// function checkInteger(num) {
//   if (Number.isInteger(num)) {
//     console.log("Integer");
//   } else {
//     console.log("Not an integer");
//   }
// }

// checkInteger(num);

//Q :11 is mei mein nay kaisy poray form mei kia kia function lagaty hai bataye hai matlab ager koi bhi empty string ho tu agy nahi jaye ga massage errror show kary ga us kay baad ager fill kary sary input tu congrat messege aye aur phir ager chaty ho kay us page ko redirect kara do kisi page kay sath tu kara sakty hai

// function checkAddress() {
//     var isValid = true; // Track if all fields are valid

//     // Multiple field validation
//     var fields = [
//       { id: 'email', errorId: 'email-error', message: 'Email address is required.' },
//       { id: 'phone', errorId: 'phone-error', message: 'Phone number is required.' },
//       { id: 'password', errorId: 'password-error', message: 'Password is required.' }
//     ];

//     // Loop through each field using a simple for loop
//     for (var i = 0; i < fields.length; i++) {
//       var field = fields[i];
//       var fieldValue = document.getElementById(field.id).value;
//       var errorMessage = document.getElementById(field.errorId);

//       // If the field is empty, display the error
//       if (fieldValue === "") {
//         errorMessage.innerHTML = field.message;
//         errorMessage.style.color = "red";
//         errorMessage.style.display = "block";
//         isValid = false; // Form will not submit if any field is invalid
//       } else {
//         errorMessage.style.display = "none";
//       }
//     }

//     // If all fields are valid, show the success message and redirect
//     if (isValid) {
//       alert("Form submitted successfully!");
//       // Call redirect function here
//       redirect();
//     }

//     return false; // Prevent form submission for now
//   }

//   // Remove error when user starts typing using basic JS
//   function removeErrorOnInput(fieldId, errorId) {
//     var fieldValue = document.getElementById(fieldId).value;
//     var errorMessage = document.getElementById(errorId);

//     if (fieldValue !== "") {
//       errorMessage.style.display = "none"; // Hide error when input is filled
//     }
//   }
// Redirect function
//  function redirect() {
//     window.location.href = 'javascript/Assignment-questions/index5.js'; // Update with the correct URL path
//   }
//form question end

// Q :12  how to empty an array in javascript?

// var arr=[1,2,3,4,5,6,7]
// arr.length=0;
// console.log(arr); // Output: []
// or
// var arr=[1,2,3,4,5,6,7]
// arr.splice(0,arr.length);
// console.log(arr); // Output: []
//Q : 13 write javascript function that accept a string as a parameter and converts the first letter of each word of string in uppercase?
// function convertToTitleCase(str) {
//     var words = str.split(' ');
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice
//             (1).toLowerCase();
//     }
//     return words.join(' ');
// }
//Q :14  read more and read less concept show in paragraph
// function readMore() {
//   var readMore = document.getElementById("readmore");
//   var readText = document.getElementById("readtext");
//   var show = document.getElementById("show");

//   if (readMore.style.display === "none") {
//     readMore.style.display = "inline";
//     readText.innerHTML = "<em style='color:blue;'>Read less</em>";
//   } else {
//     readMore.style.display = "none";
//     readText.innerHTML = "<em style='color:blue;'>Read More</em>";
//   }

//   // Update the content of 'show'
//   show.innerHTML = `<p>adipisci blanditiis asperiores totam. Eligendi assumenda perferendis voluptatem, neque aliquam natus ducimus enim</p>`;
//   console.log(show.innerHTML);
// }

// Q : 15 hum class js mein get kar sakty hai baghair class diye html mein aur style mein kuch bhi change kar sakty hai?
// function makeInvisible() {
//     document.getElementById("ugly").className = "img";
// }
// //Q :16
// function showAnswer(){
// var answer=document.getElementById('answer');
// var button=document.getElementById('button')

// if (answer.style.display==="none"){
//   answer.style.display="block";
//   button.textContent = "Hide Answer";
// }else{
//   answer.style.display="none";
//   button.textContent = "show Answer";
// }}
// showAnswer();
// Q :17 accordian
// function toggleAccordion(sectionId) {
//   var sections = document.querySelectorAll("div");
//   sections.forEach(section => section.style.display = "none");
//    var currentSection = document.getElementById(sectionId);
//   currentSection.style.display = "block";
// }
// Q :18 Modal Popup Show/Hide -->
// function showModal() {
//   document.getElementById("myModal").style.display = "block";
// }

// function closeModal() {
//   document.getElementById("myModal").style.display = "none";
// }

// Q :17 check bracket are balance or not
var input = "(([]})";
var arr = [];
var balanced = true;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" || input[i] === "[" || input[i] === "{") {
    arr.push(input[i]);
    console.log(arr);
  } else if (input[i] === ")" || input[i] === "]" || input[i] === "}") {
    var last = arr.pop();
    console.log(last);

    if (
      (input[i] === ")" && last !== "(") ||
      (input[i] === "]" && last !== "[") ||
      (input[i] === "}" && last !== "{")
    ) {
      balanced = false;
      break;
    }
  }
}
if (balanced && arr.length === 0) {
  console.log("balanced");
} else {
  console.log("not balanced");
}
