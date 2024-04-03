
//****************THIS KEYWORD************************** */

// const student={
//     name:"Aditya",
//     age:21,
//     roll_no:21,
//     sci:70,
//     eng:71,
//     math:90,
//     getAvg() {
//         let avg = (this.sci+this.eng+this.math) / 3;
//         console.log(`${this.name} got avg marks ${avg}`);
        
//     }
    
// }
// console.log(this);


//*********************TRY AND CATCH BLOCK*************** */

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// try{
//     console.log(a);
// }
// catch(err){
//     console.log("Cought error..a is not defined");
// }


// console.log("Hello2");
// console.log("Hello2");
// console.log("Hello2");


//*******************MISCELLANEOUS TOPICS*********** */

//*******************ARROW FUNCTIONS****************** */

//*********************TYPE-1**********************
// const num = (a,b) =>{
//     console.log(a+b);
// };
// num(3,4);

//*********************TYPE-2**********************
// const cube = n =>{
//     return n*n*n;
   // };
// cube(3);


//*********************TYPE-3**********************
// const pow = (a,b) =>{
//     return a**b;
// };

//*********************TYPE-4**********************
// let hello = () =>{
//     console.log("Hello world");
// };
// hello()


//***************ARROW FUNCTION IMPLICIT RETURN********** */
// const pow = (a,b) =>(
//       a**b
// );



// const cube = (n) =>(
//         n*n*n
// );
  

// const num = (a,b) =>(
//       a+b
// );



//***********************SET TIMEOUT FUNCTION************* */
// ************TYPE-1 */
// console.log("Hii there!!");

// setTimeout( ()=>{
//    console.log("apnacollege");
// },4000);

// console.log("Welcome to");


//***********************SET INTERVAL FUNCTION************* */
//************TYPE-1 */

// let id = setInterval( ()=>{
//    console.log("apnacollege");
// },2000);

// let id2 = setInterval( ()=>{
//    console.log("Hello World");
// },3000);

//***********************THIS KEYWORD WITH ARROW FUNCTIONS******* */


// const student={
//    name:"aditya",
//    marks:78,
//    roll_no:21,
//    prop:this,  //global scope

//    getName:function(){
//       console.log(this); //student
//       return this.name;
//    },

//    getMarks: () =>{
//       console.log(this); //parent scope - window
//       return this.marks;
//    },

//    getInfo1:function(){
//       setTimeout( ()=>{  //parent scope- student
//          console.log(this);
//       },2000);
//    },

//    getInfo2:function(){
//       setTimeout( function(){ //window
//          console.log(this);
//       },2000);
//    }
// }



//********************PRACTICE QUESTION */

//*************QUESTION-1 WRITE AN ARROW FUNCTION THAT RETURN THE SQUARE OF NUMBERS 'N' */

// const square = (n) => ( n*n); //single argument thats why does noot use curly braces
// console.log(square(7));


//**********QUESTION-2  WRITE A FUNCTION THAT PRINTS "HELLO WORLD" 5 TIMES AT INTERVAL OF TWO SECONDS */

// let id = setInterval( ()=>{
//    console.log("Hello World");
// },2000);

// setTimeout(()=>{
//    clearInterval(id);
//    console.log("clear interval ran");
// },10000);












