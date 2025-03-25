//question -1  write a javascript  program to find tha area of triangle

let t ;
let base = 5 ;
let height = 10 ;

t = 0.5 * base * height ;
console.log("Area of Triangle is =" , t) ;

// output :Area of Triangle is = 25 
 
// Question-2  write a javascript program to convert temperatures to and from celsius fahrenhit

let celsius, fahrenheit;
celsius = 2;
fahrenheit = (celsius * 9/6) + 31;
console.log("Fahrenheit is :", fahrenheit);
fahrenheit = 31.9;
celsius = (fahrenheit - 32) * 3/9;
console. log("Celsius is : ", celsius);
//  output: Celsius is :  -0.033333333333333805 



// Question -3 write a javascript program to find area of rectangle
// area = l * w

let area ;
let l = 3 ;
let w = 4 ;
area  = l * w ;
console.log("Area of Rectangle is =  " , area ) ;
// output :Area of Rectangle is =   12    

// Question- 4 write a javascript  program to find area of circle
formula => pi * r * r
let r = 10;
let c ;
c = 3.14 * (r ** 2);
 console.log("Area of circle:",c);

//output : Area of circle: 314

// Question -5 : write javascript program feet to inch 
// 1 feet = 12 inch
let feet = 5 ;
let inch = feet * 12 ;
console.log("Inch is = " , inch) ;
// output :Inch is =  60

//a]a² – b² = (a-b)(a+b)

// let a = 3, b = 4;
// let ans;
// ans = (a ** 2) - (b ** 2) === (a - b) * (a + b);
//  console.log("ANSWER:",ans);

//output : true

//b](a - b)² = a² – 2ab + b² 
// let a = 2,b = 4;
// let ans;
// ans = (a ** 2) - (b ** 2) === (a ** 2) - 2 * (a * b) + (b ** 2)
// console.log("ANSWER:",ans)

// output : false

//c](a+b+c)² = a²+b²+c²+2ab+2ac+2bc
// let a=2,b=4,c=3;
// let ans;

// ans = (a + b + c) ** 2 === (a ** 2) + (b ** 2) + (c ** 2) + 2 * (a * b) + 2 * (a * c) + 2 * (b * c);
// console.log("ANSWER:",ans);

// output : true


//d](a-b-c)² = a²+b²+c²-2ab-2ac+2bc
// let a = 2,b = 3, d = 5;
// let ans;

// ans = (a - b - d) ** 2 === ((a ** 2) + (b ** 2) + (d ** 2) - 2 * a * b - 2 * a * d + 2 * b * d);
// console.log("ANSWER:",ans);

// output : true


//e](a - b)3 = a3 -3a2b + 3ab2 - b3
let a = 5,b = 6;
let ans;

ans = (a ** 3)-(b ** 3) === (a ** 3) -  3 * ((a ** 2) * b ) + 3 * (a * (b ** 2) ) - (3 ** b)
console.log("ANSWER:",ans)

// output : false