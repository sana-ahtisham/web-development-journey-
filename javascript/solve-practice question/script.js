// IT WILL DEFINITELY BUILD YOUR CONFIDENCE AND ALSO BUILD YOUR LOGIC
//PROMBLEMS RELATED TO JAVASCRIPT
//Q;1    Reverse letter in each word through  the sentence
var seedha="sana is good";
var ulta=seedha.split(" ").map(function(word){
    return word.split("").reverse().join("");
})
console.log(ulta.join(' '));
//Q;2  check element is array or object?
var arr=[1,2,3,4,5];
var obj={a:1,b:2,c:3,d:4,e:5};
function checkArray(element) {
    return Array.isArray(element);    
}
console.log(checkArray(arr));
console.log(checkArray(obj));
//Q;3  how to array empty donot use lopp for pop each to delete array and donot reset it to new array
var arr=[1,2,3,4,5,6,7];
//method#1
var arr2=arr.splice(0,7);
console.log(arr);
//method#2
arr.length=0;
console.log(arr.length);
//Q;4  how to find integer 0r not?
var num=3;
//method#1
if(Number.isInteger(num)){
    console.log("yes");}else{
        console.log("no");    
    }
 //method#2
 if(num%1===0){
    console.log("yes");
    }else{
        console.log("no");
        }
//Q;5  how to find the first and last index of array element
var arr=[1,2,3,30,5,6,7];
var index=arr.indexOf(30);
console.log(index);
var lastIndex=arr.lastIndexOf(2);
console.log(lastIndex);
//Q;6 dublicate array value  in same array? 
var arr=[1,2,3,4,5,2,3,4,5];
function dublicateSAmeValuAgain() {
    return arr=arr.concat(arr)
}
console.log(dublicateSAmeValuAgain());
//Q;7  how to find the index of array element in array of object?
var arr=[{a:1,b:2,c:3},{a:4,b:5}]
var index=arr.findIndex(function(obj){
    return obj.a===4
    })
    console.log(index);
    // In this case:
// For the first object { a: 1, b: 2, c: 3 }, obj.a is 1, so this condition fails (1 !== 4).
// For the second object { a: 4, b: 5 }, obj.a is 4, so the condition passes (4 === 4), and findIndex() stops and returns the index of that object, which is 1.   
//Q;8 reverse the number?

function reverseKarDo(num){
    return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseKarDo(2345));
//Q;9 check string is palindrome or not
var word = "sana"; 
var e = ""; 
  e = word.split("").reverse().join("");
  console.log(e); 
if (word === e) {
  console.log("Palindrome"); } else {
  console.log("Not a palindrome"); }
//Q;10 check the number is integer or not?

//is mei mein nay kaisy poray form mei kia kia function lagaty hai bataye hai matlab ager koi bhi empty string ho tu agy nahi jaye ga massage errror show kary ga us kay baad ager fill kary sary input tu congrat messege aye aur phir ager chaty ho kay us page ko redirect kara do kisi page kay sath tu kara sakty hai

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




// Constructor For Car 
function Car(make,model,year,price,fuelEfficiency){
    this.Manufacturer = make;
    this.Model = model;
    this.Year = year;
    this.Price = price;
    this.fuelEfficiency = fuelEfficiency;
    this.printDetail = function(){
        console.log(`Manufacturer = ${this.Manufacturer}, Model = ${this.Model}, Year = ${this.Year}, Price = ${this.Price};`)
    }
    this.updatePrice = function(newPrice){
        this.Price = newPrice;
    }
    this.isClassic = function(currentYear){
        if ((currentYear - this.Year) > 25){
            return true;
        }
        return false
    }  
    this.calculateFuel = function(ditanceInMiles){
        return Math.round(ditanceInMiles / this.fuelEfficiency)
    }
}
Car.prototype.adjustFuelEfficiency = function(){
    var carAge = this.calculateAge()
    switch(carAge){
        case (carAge >= 5 && carAge <= 10 ):
            this.fuelEfficiency -= 1
            break;
        case (carAge > 10):
            this.fuelEfficiency -= 2
            break;
    }
}
Car.prototype.calculateAge = function(){
    var currentYear = new Date().getFullYear()
    return currentYear - this.Year
}

// Object creation
var car1 = new Car("Toyota","Camry",2000,25000,30);
localStorage.setItem('car1',JSON.stringify(car1));
var arr = [1,2,3,]
localStorage.setItem('arr',JSON.stringify(arr))
console.log(Storage.getItem('arr'))
// var car2 = new Car("Honda","Civic",2015,18000,32);
//ons var car3 = new Car("Ford","Mustang",2018,32000,120);

// Printing details of each car
// car1.printDetail();

// // Updating price of car1
//  car1.updatePrice(28000);
//  car1.printDetail();

 // Checking if car1 is a classic car
 console.log(`Is ${car1.Model} a classic car? ${car1.isClassic(2028)}`);
 
 // Calculating fuel consumption for car1
 console.log(`${Ccar1.Model} fuel consumption For 200 miles: ${car1.calculateFuel(200)} Galoons`);


for (i in car1){
    // Methods are also properties of an object, and you can check for their existence just like regular properties.
    console.log(`${i}`);
}
for (i in car1){
   if(car1.hasOwnProperty(i)){       //will not include property by prototype
       console.log(`${i}`);
}}

function listProperties(obj) {
    var props = [];
    for (var prop in obj) {
      if (typeof obj[prop] !== 'function' && obj.hasOwnProperty(prop)) {
        props.push(prop);
      }
    }
    return props;
  }
  console.log(listProperties(car1));







