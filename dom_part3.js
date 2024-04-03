//********JS CALL STACK*************/


// function hello(){
//     console.log("Inside hello function")
//     console.log("Hii");
// }

// function demo(){
//     console.log("Calling hello function");
//     hello();
// }

// console.log("Calling demo function");
// demo();
// console.log("done,,bye!!");


//******************** VISUALIZING THE CALL STACK*********** */


// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


//**************BREAK POINTS****************** */


//********************JS IS A SINGLE THREADED*************** */


// setTimeout( ()=>{
//     console.log("APNA COLLEGE");
// },3000);

// console.log("Hello");

//******************* CALL BACK  HELL **************/


//*******************TYPE-1********************** */
// let h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     setTimeout( ()=>{
//     h1.style.color = color;
//     },delay);
// }

// changeColor("red",1000);
// changeColor("green",2000);
// changeColor("blue",3000);
// changeColor("purple",4000);

//*******************TYPE-2**************************/

// let h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout( ()=>{
//     h1.style.color = color;
//     if(nextColorChange) nextColorChange();
//     },delay);
// }


// changeColor("blue",1000,()=>{
//     changeColor("green",1000,()=>{
//          changeColor("purple",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("orange",1000);
//             });
//          });
//     });
// });


//****PROMISES IS USED FOR SOLVE PROBLEM OF CALL BACK HELL**** */

// function savetoDB(data ,success,failure){
//    let internetSpeed = Math.floor(Math.random()*10)+1;

//    if(internetSpeed > 4){
//      success();
//    }else{
//       failure();
//    }
// }

// savetoDB("aditya",
// ()=>{
//     console.log("your data was saved:");
//     savetoDB("gorde",
//     ()=>{
//         console.log("your data was saved:");

//     savetoDB("rollNo",()=>{
//         console.log("your data was saved:");
//     },
//     ()=>{
//         console.log("Weak connection: data not saved");
//     })
//     },
//     ()=>{
//         console.log("Weak connection: data not saved");
//     })
// },
// ()=>{
//     console.log("Weak connection: data not saved");
//  });

//********EXAMPLE-PROMISES IS USED FOR SOLVE PROBLEM OF CALL BACK HELL *****/


// function savetoDB(data){
//     return new Promise((resolve,reject)=>{
//         let internateSpeed = Math.floor(Math.random()*10)+1;
//         if(internateSpeed > 4){
//             resolve("Success: Your data was saved");
//         }else{
//             reject("Failure: week connection");
//         }

//     });
// }

//savetoDB("aditya");


//**********  then() and catch() methods  ************* */


// function savetoDB(data){
//     return new Promise((resolve,reject)=>{
//         let internateSpeed = Math.floor(Math.random()*10)+1;
//         if(internateSpeed > 4){
//             resolve("Success: Your data was saved");
//         }else{
//             reject("Failure: week connection");
//         }

//     });
// }

// savetoDB("apna college")
// .then(()=>{
//     console.log("promise was resolved");
    
// })

// .catch(()=>{
//     console.log("promise was rejected");
    
// });


//********* PROMISE CHANING**************** */

// function savetoDB(data){
//     return new Promise((resolve,reject)=>{
//         let internateSpeed = Math.floor(Math.random()*10)+1;
//         if(internateSpeed > 4){
//             resolve("Success: Your data was saved");
//         }else{
//             reject("Failure: week connection");
//         }

//     });
// }

// savetoDB("apna college")
// .then(()=>{
//     console.log("data 1 saved");
//     return savetoDB("Hello world");
// })
// .then(()=>{
//     console.log("data 2 saved");
//     return savetoDB("Gorde");
// })
// .then(()=>{
//     console.log("data 3 saved");
// })

// .catch(()=>{
//     console.log("promise was rejected");
    
// });




//***PROMISE ARE REJECTED AND RESOLVED WITH SOME DATA (VALID RESULTS OR ERRORS)**** */
// function savetoDB(data){
//     return new Promise((resolve,reject)=>{
//         let internateSpeed = Math.floor(Math.random()*10)+1;
//         if(internateSpeed > 4){
//             resolve("Success: Your data was saved");
//         }else{
//             reject("Failure: week connection");
//         }

//     });
// }

// savetoDB("apna college")
// .then((result)=>{
//     console.log("data 1 saved");
//     console.log("result of promise",result);
//     return savetoDB("Hello world");
    
// })
// .then((result)=>{
//     console.log("data 2 saved");
//     console.log("result of promise",result);
//     return savetoDB("Gorde");
// })
// .then((result)=>{
//     console.log("data 3 saved");
//     console.log("result of promise",result);
// })

// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("error of promise",error);
    
// });


//*********** REFACTORING OLD CODE ***************** */

let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            h1.style.color = color;
            resolve("color change");
        },delay);
    })
}

changeColor("green",2000)
.then(()=>{
    console.log("Green was completed");
    return changeColor("Yellow",2000);
})

.then(()=>{
    console.log("Yellow was completed");
    return changeColor("red",2000);
})

.then(()=>{
    console.log("red was completed");
    return changeColor("purple",2000);
})

.then(()=>{
    console.log("purple  was completed");
    
})

.catch(()=>{
    console.log("color not found");
});










