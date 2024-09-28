// Assignment chapter 58-67
//    DOM
/*1. Consider you have following code snippet: (Copy it in your HTML file)
Q: code is present in index.html file check for first uncomment 
 i. Get element of id "main-content" and assign them in a variable. ii. Display all child elements of “main-content” element. iii. Get all elements of class “render” and show their innerHTML in browser. iv. Fill input value whose element id first-name using javascript. v. Repeat part iv for id ”last-name” and “email”. */
 //i. Get Element of id main-content and Assign to a Variable:
//  var mainContent = document.getElementById("main-content");
//  console.log(mainContent);
 
 //ii. Display all child elements of “main-content” element:
// console.log(mainContent.children);
/*iii. Get All Elements of Class render and Show Their innerHTML in Browser:*/
// var renderElements = document.getElementsByClassName("render");
// for (var i = 0; i < renderElements.length; i++) {
//     console.log(renderElements[i].innerHTML);
// }
/*iv. Fill Input Value Whose Element Id First-name Using Javascript:*/
// var firstNameInput = document.getElementById("first-name");

// var firstNameInputValue=firstNameInput.innerHTML = "sana";     or
// var firstNameInputValue=firstNameInput.value = "sana";
// console.log(firstNameInputValue);

/*v. Repeat Part iv for id ”last-name” and “email”:*/
// var lastNameInput = document.getElementById("last-name");
// var lastNameInput=document.getElementById("last-name");
// lastNameInput.value = "ali";
// console.log(lastNameInput.value);
//for email
// var emailInput=document.getElementById("email")
// emailInput.value = "sanaalii@gmail.com"
// console.log(emailInput.value);
/*2.  use HTML code of question 1 and  show the result on browser. i. What is node type of  element having id “form-content”. ii. Show node type of element having id “lastName” and its child node. iii. Update child node of element having id “lastName”. iv. Get First and last child of id “main-content”. v. Get next and previous siblings of id “lastName”. vi. Get parent node and node type of element having id “email”*/
//i. What is node type of element having id “form-content”?
// var formContent=document.getElementById("form-content");
// console.log(formContent.nodeType);
// var last_name=document.getElementById("last-Name");
// console.log(last_name);
// console.log(last_name.nodeType);


  










    





 
