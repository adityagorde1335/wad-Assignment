// let student = {
//     name:"Aditya",
//     age:21,
//     marks:81.2,
//     city:"Ahmednagar"
// };

// const item = {
//     price:100.99,
//     discount:50,
//     colors : ["red","pink"]
// };

// let obj = {
//     1:"a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undefined:"e"
// };


// const classInfo={
//     aman:{
//         grade:"A+",
//         city:"Delhi"
//     },

//     shradha:{
//         grade:"A",
//         city:"Pune"
//     },

//     karan:{
//         grade:"O",
//         city:"Mumbai"
//     }
// };


// const classInfo=[
//     { 
//         name:"Aman",
//         grade:"A+",
//         city:"Delhi"
//     },

//     {
//         name:"Shradha",
//         grade:"A",
//         city:"Pune"
//     },

//     {
//         name:"Aman",
//         grade:"O",
//         city:"Mumbai"
//     }
// ];



// Guessing a number game

let max= prompt("Enter the max number");

let number=Math.floor(Math.random()*max)+1;

let guess= prompt("Guess the correct number");

while(true)
{
    if(guess=="quit")
    {
        console.log("Quiting game!!");
        break;
    }

    else if(guess==number)
    {
        console.log("Conggratus!! you are guess the correct number :",number);
        break;
    }

    else if(guess<number)
    {
        console.log("Hint: your guess is less than max number...Please try again letter");
    }

    else{
        console.log("Hint: your guess is more than max number...Please try again letter");
    }
    guess= prompt("Guess the correct number");
}

//*****************JavaScript Part-5 Practice Questions********************* 

//Qs1. Create a program that generates a random number representing a dice roll.
//[The number should be between 1 and 6]

// let dice=Math.floor(Math.random()*6)+1;
//  console.log("Dice of roll is :",dice);


// Q-2)Create an object representing a car that stores the following properties for the
//car: name, model, color.
//Print the car’s name.

// let car = {
//     name:"Safari",
//     model:"TATA",
//     color:"Red"
// }

// console.log(car.name);



//Q-3) Create an object Person with their name, age and city.
//Edit their city’s original value to change it to “New York”.
//Add a new property country and set it to the United States


// let person = {
//     Name:"Pavan",
//     age:21,
//     city:"Gangakhed"
// }

// console.log("Perrson's city :",person.city="New York");
// console.log("Person's country:",person.country="United States");




























