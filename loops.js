//  for loop

// for(let i=1; i<=500; i++)
// {
//     console.log(i);
// }

// for(let i=100; i>=1; i--)
// {
//     console.log(i);
// }


// Print Odd numbers
//forward loop
// for(let i=1; i<=15 ;i=i+2)
// {
//     console.log(i);
// }

// Backword loop

// for(let i=15; i>=1; i=i-2)
// {
//     console.log(i);
// }


//  print even numbers forward
// for(let i=2; i<=10; i=i+2)
// {
//     console.log(i);
// }

//  print even numbers backward
// for(let i=10; i>=2; i=i-2)
// {
//     console.log(i);
// }


// infinite loop

// for(let i=1; ;i++)
// {
//     console.log(i);
// }

// Multiplication table for 5

// let n = prompt("Enter number");
// n= parseInt(n);
// for( let i=n; i<=n*10; i=i+n )
// {
//     console.log(i);
// }


// for(let i=3; i<=30; i=i+3)
//  {
//     console.log(i);
//  }


// Nested for loop


// for(let i=1; i<=3; i++)
// {
//     console.log(`outer loop ${i}`)
//     for(let j=1; j<=3; j++)
//     {
//         console.log(j);
//     }
// }

// While loop

// let i=10;

// while(i<=100)
// {
//     console.log(i);
//     i++;
// }


// Backword
// let j=100;

// while(j>=1)
// {
//     console.log(j);
//     j--;
// }


// print 0 to 20 numbers by using while loop

// let i=0;
// while(i<=20)
// {
//     console.log(i);
//     i++;
// }

// Multiplication table for 5 by using while loop

// let n = prompt("Enter any number");

// n=parseInt(n);

// let i=n;

// while(i<=n*10)
// {
//     console.log(i);
//     i=i+n;
// }


// favourite movie activity in javascript part-4 by using while loop

// const favourite_movie ="Heropanti";

// let guess = prompt("Guess my favourite movie");

// while( (guess !=  favourite_movie) && (guess != "quit"))
// {
//     // console.log("Wrong guess");
//    guess = prompt(`Wrong guess. Please try again`);
// }

// if(guess==favourite_movie)
// {
//     console.log("Congrats!!!");
// }
// else{
//     console.log("You quit");
// }

// break keyword

// Example-1
// const favourite_movie ="Heropanti";

// let guess = prompt("Guess my favourite movie");

// while( guess !=  favourite_movie)
// {

//     if(guess=="quit")
//     {
//         console.log("You quit");
//         break;
//     }
//    guess = prompt(`Wrong guess. Please try again`);
// }

// if(guess==favourite_movie)
// {
//     console.log("Congrats!!!");
// }


// Example-2

// let i=1;

// while(i<=10)
// {
//     if(i==6)
//     {
//         break;
//     }
//   console.log(i);
//   i++;
// }


//loops with arrays

// 1) Forward  Array

// let fruits = ["Banana","Lichi","Apple","Chiku","Pineapple"];

// fruits.push("Orange");
// for(let i=0; i<fruits.length; i++)
// {
//    console.log(i,fruits[i]);
// }

// 2)Backward Array

// for(let i=fruits.length-1; i>=0 ;i--)
// {
//   console.log(i,fruits[i]);
// }



//nested loops with nested arrays

//Example-1

// let arr = [["ironman","spiderman","thor"],["superman","wonder women","flash"]];


// for(let i=0; i<arr.length; i++)
// {
//   console.log(`list #${i}`);

//   for(let j=0; j<arr[i].length ;j++)
//   {
//     console.log(arr[i][j]);
//   }
// }


// Example-2

// let students=[['aman',95],['shradha',94.4],['karan',100]];

// for(let i=0; i<students.length; i++)
// {
//   console.log(`Info of student #${i+1}`);

//   for(let j=0; j<students[i].length; j++)
//   {
//     console.log(`${students[i][j]}`);
//   }
// }


//for of loop


// Example-1
// let fruits = ["Banana","Lichi","Apple","Chiku","Pineapple"];

// for(fruit of fruits )
// {
//   console.log(fruit);
// }


//Example-2

// for(char of "ADITYA GORDE")
// {
//   console.log(char);
// }




// *********Todo App by using JavaScript (JavaScript Part-4)**************


// let todo=[];

// let req= prompt("Please enter your request");

// while(true)
// {
//   if(req=="quit")
//   {
//     console.log("Quiting App!!");
//     break;
//   }

//   if(req=="list")
//   {
//     console.log("---------------");
//     for(let i=0; i<todo.length; i++)
//     {
//       console.log(i,todo[i]);
//     }
//     console.log("---------------");
//   }
  
//   else if(req=="add")
//   {
//     let task= prompt("Enter task you want to added");
//     todo.push(task);
//     console.log("Task Added");
//   }

//   else if(req=="delete")
//   {
//     let idx= prompt("Enter task index you want to deleted");
//     todo.splice(idx,1);
//     console.log("Task deleted");
//   }
//   req= prompt("Please enter your request");

// }

//*******************************************************************

// JavaScript part-4 Practice Questions

// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3}


// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for(let i=0;i<arr.length;i++)
// {
//   if(arr[i]==num)
//   {
//     arr.splice(i,1);
//   }
 
// }
// console.log(arr);

// ************************************************************
// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6


// let number=287152;

// let count=0;

// let copy=number;

// while(copy>0)
// {
//   count++;
//   copy=Math.floor(copy/10);
// }
// console.log(count);


//************************************** 

// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 2

// let number=287152;
// let sum=0;
// let copy=number;

// while(copy>0)
// {
//   digit=copy%10;
//   sum+=digit;
//   copy=Math.floor(copy/10);
// }
// console.log(sum);



//******************************************

// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1


// let n=0;
// let fact=1;
// for(let i=1;i<=n;i++)
// {
//     fact *=i;
// }
// console.log(fact);



//*************************************************

//Qs5. Find the largest number in an array with only positive numbers

// let arr = [2,5,8,6,4,12];

// let largest = 0;

// for(let i=0; i<=arr.length; i++)
// {
//   if(largest<arr[i]){
//     largest=arr[i];
//   }
  
// }
// console.log(largest);





































