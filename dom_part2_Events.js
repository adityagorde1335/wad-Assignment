 
//*************ONCLICK FOR SINGLE BUTTON************
//let btn = document.querySelector("button");

//  btn.onclick = function (){
//     alert("Button was clicked");
//  }
//  btn.onmouseenter = function(){
//  console.log("You entered the button");
// }





//**** ONCLICK AND ONMOUSEENTER FOR MULTIPLE BUTTONS********

// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick= sayhello;
//     btn.onmouseenter = function(){
//         console.log("You entered the button");
//     }
// }        
    
// function sayhello(){
//     alert("Hello");
// }


//*************CLICK AND DBLCLICK*************************** */
// let btns = document.querySelectorAll("button");

// for(btn of btns){
    
//     btn.addEventListener("click",sayhello);
//     btn.addEventListener("click",sayName);
    // btn.addEventListener("dblclick", function () {
    //     console.log("You double clicked");
    // });
// }        
    
// function sayhello(){
//     alert("Hello");
// }

// function sayName(){
//     alert("apna college");
// }

// function say() {
//     alert("You double clicked");
// }

//***************DBL CLICK****************
// let btn = document.querySelector("button");

// btn.addEventListener("dblclick", function () {
//     console.log("You double clicked");
// });




//************************ACTIVITY******************************

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
// });

// function getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }


//*********************EVENT LISTENERS FOR ELEMENTS*************

// let p = document.querySelector("p");
// p.addEventListener("dblclick",function(){
//     console.log("Para was clicked");
// });


// let box = document.querySelector(".box");

// box.addEventListener("mouseenter",function(){
//     console.log("Cursor is in the  box");
// });



// *************THIS KEYWORD IN EVENT LISTENER********************

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function content(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "pink";
// }

// btn.addEventListener("click",content);

// h1.addEventListener("click",content);

// h3.addEventListener("click",content);

// p.addEventListener("click",content);




//***************KEYBOARD EVENTS******************* */




// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("key=",event.key);
//     console.log("code=",event.code);
//     console.log("key was pressed");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keyup",function(e){
//     console.dir(e);
//     console.log("key was released");
// });



// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function(event){

//     console.log("code=",event.code);//ArrowUp ArrowDown ArrowRigth ArrowLeft
    
//     if(event.code=="KeyU"){
//         console.log("Character moves up")
//     }
//     else if(event.code=="KeyD"){
//         console.log("Character moves down")
//     }
//     else if(event.code=="KeyL"){
//         console.log("Character moves Left")
//     }
//     else if(event.code=="KeyR"){
//         console.log("Character moves Right")
//     }
// });



//****************FORM EVENT LISTENER******************** */

// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form is submitted");
// });


//**********************EXTRACTING FORM DATA**************** */

// let form = document.querySelector("form");


// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value} your password is set to ${pass.value}`);
    
// });


//**********BY USING FORMS DIRECT Extract THE VALUES*********** */
// let form = document.querySelector("form");


// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value} your password is set to ${pass.value}`);
    
// });


//*********************MORE EVENTS********************* */
// let form = document.querySelector("form");


// form.addEventListener("submit",function(event){
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change",function(){
//     console.log("Change event");
//     console.log("Final value=",this.value);
// });


// user.addEventListener("input",function(){
//     console.log("Input event");
//     console.log("Final value=",this.value);
// });


//************************CREATE TEXT EDITOR************************ */

// let input = document.querySelector("input");
// let p = document.querySelector("p");

// input.addEventListener("input",function(){
//       console.log(input.value);
//       console.log(p.innerText=input.value);
// });







