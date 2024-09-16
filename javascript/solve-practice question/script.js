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






