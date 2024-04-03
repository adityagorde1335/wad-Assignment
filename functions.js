// 1)
// function hello()
// {
//     console.log("Hello");
// }
// hello();

// 2)
// function printName()
// {
//     console.log("Aditya");
// }
// printName();

// // Print 1 to 5 numbers

// function printNumbers()
// {
//     for(let i=0;i<=5;i++)
//     {
//         console.log(i);
//     }
// }
// printNumbers();


// function isadult()
// {
//    let age=18;
//    if(age>=18)
//    {
//     console.log("Adult");
//    }
//    else{
//     console.log("Not Adult");
//    }
// }

// isadult();


// Print a poem

// function printPoem()
// {
//     console.log("Twinkle twinkle, little star");
//     console.log("how I wonder what you are");
// }

// printPoem();

//Q)Create a function to roll a dice and always display the value of the dice (1 to 6)

// function dice()
// {
//     let rand = Math.floor(Math.random()*6)+1;
//      console.log(rand);
// }

// dice();


// FUNCTIONS WITH ARGUMENTS

// function myinfo(name,age)
// {
//     console.log(`${name}'s age is ${age}`);
// }

// myinfo("Aditya",21);
// myinfo("Pavann",20);


// ADDITION USING FUCCTION
// function sum(a,b)
// {
//     let add = a+b;
//     console.log("Addition is :",add);
// }
// sum(6,6);
// sum(6,4);
// sum(3,7);

// PRACTICE QUESTION
// CREATE A FUNCTION THAT GIVES US THE AVERAGE OF THREE NUMBERS

// function average(a,b,c)
// {
//     let avg=(a+b+c)/3;
//     console.log(`Average is:${avg}`);
// }

// average(2,4,6);


// CREATE A FUNCTION THAT PRINTS THE MULTIPLICATION TABLE OF NUMBER

// function table(n)
// {
//    console.log("Multiplication table of",n);
//    for(let i=n; i<=n*10 ; i+=n)
//    {
//     console.log(i)
//    }
// }
// table(8);
    

// RETURN KEYWORD IN JS

// function sum(a,b)
// {
//     return a+b;
// }
// console.log(sum(sum(5,6),4));


// function isadult(age)
// {
//     if(age>=18)
//     {
//         return "Adult";
//     }
//     else{
//         return "Not Adult";
//     }
// }
// console.log(isadult(17));


// CREATE A FUNCTION THAT  RETURNS THE SUM OF NUMBERS FROM 1 TO N

// function sum_1_to_n(n)
// {
//    let sum=0;
//    for(let i=1;i<=n;i++)
//    {
      
//       sum=sum+i;
     
//    }
    
//    return sum;

// }
// console.log(sum_1_to_n(100));


// Q) CREATE A FUNCTION THAT RETURN CONCATINATION OF ALL STRINGS IN AN ARRAY


// let arr = ["Hi","My","Name","is","Aditya"];

// function concat(arr)
// {
//    let result="";

//    for(let i=0; i<arr.length; i++)
//    {
//       result += arr[i];
//    }
//    return result;
// }
//console.log(concat(arr));


// *********Practice Question find output**********************

// let greet = "hello";//global scope

// function changegreet()
// {
//    let greet = "Namaste";//function scope
//    console.log(greet);

//    function innergreet()
//    {
//       console.log(greet);//lexical scope
//    }
//    innergreet();
// }

// console.log(greet);
// changegreet();


//*************FUNCTION EXPRESSION************** 


// let sum = function(a,b)
// {
//    return a+b;
// }
// console.log(sum(2,3));


// let hello =  function()
// {
//    console.log("hello");
// }
// hello= function()
// {
//    console.log("Namaste");
// }
// hello();


//****************  HIGHER ORDER FUNCTION ************

//****************TYPE-1**************************
// function multiplegreet(func,n)
// {
//     for(let i=1;i<=n;i++)
//     {
//         func();
//     }
// }

// let greet = function()
// {
//     console.log("Hello");
// }

// multiplegreet(greet,400);


//**************************TYPE-2******************* */


// function multiplegreet(func,n) // HIGHER ORDER FUNCTION
// {
//     for(let i=1;i<=n;i++)
//     {
//         func();
//     }
// }

// let greet = function()
// {
//     console.log("Hello");
// }

// multiplegreet(function num(){ console.log("Namaste");},400);


//****************  HIGHER ORDER FUNCTION ************
//***************RETURN FUNCTION AS AN OUTPUT************


// function oddEvenFactory(request)
// {
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }

       
//     }

//     else if(request == "even"){
//         return function(n){
//             console.log(n%2==0);
//         }

      
//     }

//     else{
//         console.log("Wrong Request");
//     }
// }

// let request = "even";


//******************* METHODS IN JS******************* 

//***************TYPE-1************************** */
// const calculator =
// {
//     add : function(a,b){
//         return a+b;
//     },

//     sub : function(a,b){
//         return a-b;
//     },

//     mul : function(a,b){
//         return a*b;
//     },

//     div : function(a,b){
//         return a/b;
//     }
// }

//**********************TYPE-2********************** 

// const calculator =
// {
//     add(a,b){
//         return a+b;
//     },

//     sub(a,b){
//         return a-b;
//     },

//     mul(a,b){
//         return a*b;
//     },

//     div(a,b){
//         return a/b;
//     }
// }

//***********************PRACTICE QUESTIONS******************


//*************QUESTION NO.1********************* */

// Write a JavaScript function that returns array elements larger than a number.

// let arr = [1,8,9,5,3,8,2,4,1,99,3,2];

// let num = 5;

// function elements(arr,num)
// {
//    for( let i=0; i<arr.length; i++)
//    {
//     if(arr[i] > num){
//      console.log(arr[i]);
//    }
// }
// }
// elements(arr,num);



//***********************QUESTION-2*************************
//Write a JavaScript function to extract unique characters from a string.
//Example: str = “abcdabcdefgggh” ans = “abcdefgh”


let str = "abcdabcdefgggh";
function uniquestring(str)
{
    let ans="";
    for(let i=0; i<str.length;i++)
    {
       let currChar = str[i];

       if(ans.indexOf(currChar) == -1){
       
       ans += currChar;
       
     }
    }

    return ans;
}
console.log(uniquestring(str));


























