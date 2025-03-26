/*enter Electicity UNIT and Calculate amount to pay
For first 50 units, Rs: 1/unit
For next 100 units, 2/unit
For next 100 units, 3/ units
For units above 250, 4/units
For all bills above 150 units an additional surcharge of 20% of total bill amount is
added.*/
let units = prompt("enter your units : ");
let amount = 0;
let surcharge = 0;
if (units <= 50) {
    amount = units * 1;
    } 
else if (units <= 150) {
        amount = 50 * 1 + (units - 50) * 2;
     } 
else if (units <= 250) {
            amount = 50 * 1 + 100 * 2 + (units - 150 ) * 3;
    } 
else {
            amount = 50 * 1 + 100 * 2 + 100 * 3 + (units - 250) * 4;
            surcharge = amount * 0.2;
            amount = amount + surcharge;                      
  }
console.log("Total Amount:",amount,"rupees");

// output = units 300 ==>  total amount = 900

/*2. Write a JAVASCRIPT Program to print season according user input using switch case.
(e.g. 1 to 4 for "Winter" ", 5 to 8 for "Summer", 9 to 12 "Monsoon" then add any numberprint
 "Invalid season" etc.) */
 let season = parseInt(prompt("ENTER YOUR NUMBER :")); // Convert input to number
    switch (season) {
     case 1: 
     case 2: 
     case 3: 
     case 4:
         console.log("Winter");
         break;
     case 5: 
     case 6: 
     case 7: 
     case 8:
         console.log("Summer");
         break;
     case 9: 
     case 10: 
     case 11:
     case 12:
         console.log("Monsoon");
         break;
     default:
         console.log("Invalid season");
 }
 console.log(season);
 // output : choice 2 => winter
    
/*3. Write a JAVASCRIPT Program to find rate based on year and calculate total
using nested if. (I = PRN/100) Principal Amount (P)
Interest Rate No. of Years (N) (if 3<N<=5 then R is 3 | if 5<N<=8 then R is 5 | if 8<N<=12 then R is 12 |
 else R is 15)*/
let principal = 10000;
let rate = 0;
let years = 7 ;
if (years >= 3 && years <= 5) {
    rate = 3;
    }else if (years >= 5 && years <= 8) {
        rate = 5;
        }else if (years >= 8 && years <= 12) {
            rate = 12;
            }else {
                rate = 15;
                }
                let interest = principal * rate * years / 100;
                console.log("Interest:",interest,"rupees");
                console.log("Total:",principal+interest,"rupees");
                console.log("Rate:",rate,"%");

/* output = Interest: 3500 rupees
conditional.js:82 Total: 13500 rupees
conditional.js:83 Rate: 5 % */

//Q-4 Write a JAVASCRIPT Program to check Voting Eligibility.
let age_g = prompt("Enter your age:"); 
    age_g = Number(age);
if (age_g <= 0){
        console.log("Please enter a valid age.");
    } else if (age >= 18) {
        console.log("You are eligible to vote!");
    } else {
        console.log("You are not eligible to vote yet.");
}

 //output =  Enter your age: 21 ==> You are eligible to vote!

// Q- 5  Write a JAVASCRIPT Program to Classify Age Groups.
let age =  prompt("enter your age :");
if (age >= 0 && age <= 12) {
    console.log("You are a child");
    } 
else if (age >= 13 && age <= 19) {
     console.log("You are a teenager");
    } 
 else if (age >= 20 && age <= 30) {
    console.log("You are a young adult");
    } 
 else if (age >= 31 && age <= 60) {
     console.log("You are an adult");
     } 
else if (age >= 61) {
     console.log("You are a senior");
     }
else {
     console.log("Invalid age");
}
// output = enter your age : 12 ==> You are a child

