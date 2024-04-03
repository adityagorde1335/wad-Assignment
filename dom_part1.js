//*****************getElementsByClassName***********************

// let smallImg = document.getElementsByClassName("img1");

// for(let i=0; i<smallImg.length; i++)
// {
//    smallImg[i].src= "https://tse3.mm.bing.net/th?id=OIP.NOjLjY5FRyAQ7tjkA7jbrQHaEo&pid=Api&P=0&h=180";
   
//     console.log(`value of img no.${i} is changed`);
// }


//**********************************QUERY SELECTOR*******************8 */

// console.dir(document.querySelectorAll("p"));

// console.dir(document.querySelector("#para"));

// console.dir(document.querySelector(".img1"));

// console.dir(document.querySelectorAll("div img"));

//**********DOM MANIPULATION USING PROPERTIES AND METHODS************** */

//innerText
//innerHTML
//textContent


//*******************MANIPULATING ATTRIBUTES*************** */


// let image = document.querySelector("img");
// console.log(image);

// // let links = document.querySelectorAll('.class1 a');


// // for(link of links){
// //     link.style.color = "yellow";
// }
// for( let i=0; i<links.length ; i++){
//     links[i].computedStyleMap.color="green";
// }


//******************MANUPULATING STYLE USING CLASSLIST******* */

//***************NAVIGATION ON PAGE***************8 */



//******************** FIRST PART ********************* */
// let para1 = document.createElement('p');
// para1.innerText=("Hey I'am red");
// document.querySelector('body').append(para1);

// para1.classList.add("red");

//************************ SECOOND PART ********************888 */
// let h3 = document.createElement('h3');
// h3.innerText="I am a blue h3!!";
// document.querySelector('body').append(h3);

// h3.classList.add("blue");

//************************** THIRD PART ********************* */
// let div = document.createElement('div'); 
// let h1 = document.createElement('h1');
// let p1 = document.createElement('p');


// h1.innerText= "I'am in a div";
// p1.innerText="ME TOO!!";

// div.append(h1);
// div.append(p1);

// div.classList.add("box");
// document.querySelector('body').append(div);


//******************PRACTICE QUESTIONS****************** */

//***********QUESTION-1 */
// Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'


let btn = document.createElement("button");
let input = document.createElement("input");

btn.innerText="Click Me!!";

let body = document.querySelector("body");

body.append(input);
body.append(btn);


//**********QUESTION-2****************** */

// Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn"

btn.setAttribute("id","btn");
input.setAttribute("placeholder","username");


//********* QUESTION-3************* */

//Access the btn using the querySelector and button id. Change the button background 
//color to blue and text color to white


let btn1 = document.querySelector("#btn");
btn1.classList.add("abc");


//********* QUESTION-4************* */

// Create an hl element on the page and set its text to "DOM Practice" underlined. 
// Change its color to purple.

let h1 = document.createElement("h1");
h1.innerHTML="<u>DOM PRACTICE</u>"

body.append(h1);


//************** QUESTION-5 *******************8 */

// Create a p tag on the page and set its text to "Apna College Delta Practice",
//where Delta is bold

let p1 = document.createElement("p");
p1.innerHTML="Apna College <b>Delta</b> Practice";                        

body.append(p1);









































































































