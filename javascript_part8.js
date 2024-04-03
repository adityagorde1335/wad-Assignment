//*******************ARRAY METHODS***************** */

// let arr = [1,2,3,4,5];

// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print);

// arr.forEach(function(el) {
//     console.log(el);
// });

// arr.forEach((el)=> {
//     console.log(el);
// });


//example 2

// let arr = [
//     {name:"aditya",
//     marks:78},

//     {name:"pavan",
//     marks:88},

//     {name:"rohit",
//     marks:89}
// ];

// arr.forEach( (students)=>{
//      console.log(students.marks);
// });


//*********************MAP FUNCTION********************

//Example-1
// let num = [1,2,3,4,5];

// let double =num.map( function(el){
//     return el*2;
// });

// let double =num.map( (el)=>{
//     return el*el;
// });

//****************Example-2*******************

// let students = [
//     {name:"aditya",
//     marks:78},

//     {name:"pavan",
//     marks:88},

//     {name:"rohit",
//     marks:89}
// ];

// let newArr = students.map( (elements)=>{
//     return elements.marks;
// });

//*********************FILTER FUNCTION********************

// let nums = [2,4,1,5,6,2,7,8,9];

// let ans = nums.filter((el)=>{
//     return el%2 != 0;  //even -> true  odd-> false
// });

// console.log(ans);

//*******************REDUCE FUNCTION/METHOD*************** */

//**********Example-1 */
// let nums = [1,2,3,4];

// let finalValue = nums.reduce((res,el)=>{
//     console.log(res);
//     return res + el;
// });

// console.log(finalValue);


//**********Example-2 */

// let nums = [3,8,9,4,1,6,23,14,7];
// find greatest using loop
// let max = 0;
// for(let i=0; i<nums.length; i++)
// {
//     if(max < nums[i])
//     {
//         max = nums[i];
        
//     }
// }
// console.log(max);


// find greatest using reduce function

// let nums = [3,8,9,4,1,6,23,14,7];
// let max = nums.reduce((max,el)=>{
//     if(max < el){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(max);

//*********************PRACTICE QUESTION */
//CHECK ALL NUMBERS IN ARRAY ARE MULTIPLE OF 10 OR NOT****

// let arr = [10,20,30,60];

// let ans = arr.every((num)=>{
//     return num%10==0;
// });

// console.log(ans);

//question-2 create function and find minimum number in an array

//***********************type-1************************


//***********************type-2************************
// let nums = [3,8,9,4,16,6,23,14,7];

// function ans(nums){
//     let min = nums.reduce((min,el)=>{
//         if(min<el){
//             return min;
//         }
//         else{
//             return el;
//         }
//     });
//     return min;
// }


//*************************DEFAULI PARAMETER******** */

// function sum(a,b=4){
//     return a+b;
// }
// console.log(sum(2,7));
//***************************************
// function diff(a=8,b){
//     return a-b;
// }
// console.log(diff(7));



//**************************SPREAD FUNCTION***************** */

//***************SPREAD WITH ARRAY LITERALS***************** */


// let arr = [1,2,3,4,5];
// let newarr = [...arr];
// console.log(newarr);

// let str = [..."ADITYAGORDE"];
// let newStr = [...str];
// console.log(newStr);

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// let nums = [...even,...odd];


//***************SPREAD WITH OBJECT LITERALS***************** */

// const info = {
//     name:"aditya",
//     email:"adityagorde853@gmail.com",
//     password:"123456"
// }
// let info1 = {...info,roll_no:21}
// console.log(info1);


//****************************REST FUNCTION**************************

// function sum(...args){
//    return args.reduce((add,el)=>{
//     return add+el;
//    });
// }
// console.log(sum(1,2,3,4));



// function min(msg,...args){
//     console.log(msg);
//     return args.reduce((min,el)=>{
//         if(min < el){
//             return min;
//         }
//         else{
//             return el;
//         }
//     });
// }
// console.log(min("hello",4,9,2,7,56));

//*******************DESTRUCTURING****************** */

// const studentInfo = {
//     name:"Aditya",
//     age:21,
//     subjects:["math","science","history","physics"],
//     username:"aditya@123",
//     password:"abcd",
//     city:"Mhaskewadi"
// }

// const{ username:user,password:pass,city:place="mumbai"}=studentInfo;


//***********************QUESTION ****************** */

//Qs1. Square and sum the array elements using the arrow function and then find the
//average of the array.

// let arr = [1,2,3,4];

// let square = arr.map((el)=>{
//     return el*el;
// });
// console.log(square);

// let sum = square.reduce((nums,el)=>{
//     return nums+el;
// });
// console.log(sum);

// let avg = sum / arr.length;
// console.log(avg);


//QUESTION-2. Create a new array using the map function whose each element is equal to the
//original element plus 5

// let arr = [1,2,3,4,5];
// let newArr = arr.map(function(el){
//     return el+5;
// });
// console.log(newArr);

// let arr = [1,2,3,4,5];
// let newArr = arr.map((el)=>{
//     return el+5;
// });
// console.log(newArr);

// *****************QUESTION-3*****************
//Create a new array whose elements are in uppercase of words present in the
//original array

// let arr = ["aditya","pavan","rutik"];

//**************first logic***************** */
// let newArr = arr.map((el)=>{
//     return el.toUpperCase();
// });



//************second logic****************
// console.log(arr.map((string)=>{
//     return string.toUpperCase();
// }));


//****************QUESTION-4****************** */
// Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled


// function doubleAndReturnArgs(arr,...args){
//     console.log(arr);
//     let double = args.map((el)=>{
//         return el*2;
//     });
//     console.log(double);
// }
// doubleAndReturnArgs([1,2,3,4],6,6);

// const doubleAndReturnArgs = (arr,...args)=>[
//     ...arr,
//     ...args.map((el)=>  el*2),
// ];
    

// doubleAndReturnArgs([1,2,3,4],6,6);

//********************QUESTION-5 */****************** */

// Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and SECOND OBJECT

// const mergeObjects = (obj1,obj2)=>{
//     return {...obj1,...obj2};
// }

// mergeObjects({a:1,b:2},{c:3,d:4});


























