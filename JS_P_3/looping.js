// 1. write a javascript program to display multiplication table of given integer using while loop
// let number = 45;
// let i = 1;
// while (i <= 10) {
//   console.log(number, 'x', i, '=', number * i);
//   i++;
// }
/*OUTPUT ==>
45 'x' 1 '=' 45
45 'x' 2 '=' 90
45 'x' 3 '=' 135
45 'x' 4 '=' 180
45 'x' 5 '=' 225
45 'x' 6 '=' 270
45 'x' 7 '=' 315
45 'x' 8 '=' 360
45 'x' 9 '=' 405
45 'x' 10 '=' 450 */

//2. Write a JAVASCRIPT Program to calculate the factorial of a given number using a while loop.
// let number = Number(prompt('Enter a number to find its factorial:'));
// let result = 1;
// let i = 1;
// while (i <= number) {
//   result *= i;
//   i++;
// }
// console.log('Factorial of ' + number + ' is: ' + result);

// OUTPUT ==>Factorial of 26 is: 4.0329146112660565e+26

// 3. Write a JAVASCRIPT Program to find the Armstrong number list of a given number using a do while loop.
// let num = 153;
// let original = num;
// let reverse = 0;
// do{
//     let rem = num % 10;
//     reverse = reverse + rem ** 3;
//     num = Math.floor(num / 10)
// }while(num > 0)
// if(original == reverse){
//     console.log("Number is armstrong number")
// }else{
//     console.log("Number is not armstrong number")
// }

// OUTPUT ==> Number is armstrong number

// 4. Write a JAVASCRIPT Program to find the Palindrome number list of a given number using a while
// let num = Number(prompt("Enter a number :"));
// let original = num ;
// let reverse = 0 ;
// while(num > 0){
//     let remainder = num % 10 ;
//     reverse = (reverse * 10) + remainder ;
//     num = Math.floor(num / 10) ;
// }
// if(original==reverse){
//     console.log(" Number is a palindrome number");
// }
// else{
//     console.log(" Number is not a palindrome number");
// } 

// OUTPUT ==> Enter a number : 121 ==>  Number is a palindrome number
// OUTPUT ==> Enter a number : 123 ==>  Number is not a palindrome number

// 5. Write a JAVASCRIPT Program to calculate the Fibonacci Series of a given number using a while loop.
// let n=10;
// let a=0, b=1,next;
// console.log("Fibonacci series up to " + n + ":");
// console.log(a);
// if (n > 1){ 
//   console.log(b);}
// let i=2;
// while(i < n){
//     next = a + b;
//     console.log(next);
//     a=b;
//     b=next;
// i++
// }

// OUTPUT ==> Enter a number to generate Fibonacci series: 10 ==> 0 1 1  2 .......

// 6. Write a JAVASCRIPT Program to add all the integers between o and 30 and display the total using do while loop.
// let total = 0;
// let i = 0;
// do {
//     total += i;
//     i++;
//     } 
// while (i <= 30);
//     console.log("the total  of 0 to 30 "  ,total); 
// Output: 465

/* 7. Write a JAVASCRIPT Program which iterates the integers from 1 to 100. For multiples of three
print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are
multiples of both three and five print "FizzBuzz" using do while loop. */
// let i = 1; 
// console.log("FizzBuzz from 1 to 100:");
// do {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz"); 
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i); 
//     }
//     i++; 
// } while (i <= 100);
/* OUTPUT ==>
FizzBuzz from 1 to 100:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
23
..........
Buzz
Fizz
97
98
Fizz
Buzz */

/* 8. Write a JAVASCRIPT Program that displays 1-2-3-4-5-6-7-8-9-10 on one line using a for loop.
There will be no hyphen(-) at starting and ending position.*/
// let i = 1;
// let result = ""; 
// for (let i = 1; i <= 10; i++) {
//     result += i; 
//     if (i < 10) { 
//         result = result + "-";
//     }
// }
// console.log(result); 
  
//Output ==>  1-2-3-4-5-6-7-8-9-10


// 9. Write a JAVASCRIPT Program that displays 1+4+9+16+....+100 = 385 on one line using a for loop.
// let sum = 0;
// let result = "";
// for (let i = 1; i <= 10; i++) {
//   sum += i * i;
//   result += (i * i);
//   if (i < 10) {
//     result += " + ";
//   }
// }
// result += " = " + sum;
// console.log(result);

// OUTPUT==> 1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 = 385

//10.  Write a JAVASCRIPT Program that displays below pattern using nested for loop:  
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 5; j >= 6 - i; j--) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
/* OUTPUT ==>
5
5 4 
5 4 3 
5 4 3 2 
5 4 3 2 1 */

// 11.  Write a JAVASCRIPT Program that displays below pattern using nested for loop:  
// let num = 1;

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += num + " ";  
//     num++;
//   }
//   console.log(row); 
// }
/* OUTPUT ==>
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15 */

