//1. Write a JAVASCRIPT Program to print a greeting message using with argumen no return type function when call a function without argument at that time print message Good Morning.

function greet(message = "Good Morning") {
    console.log(message);
  }
greet();  
// Output==> Good Morning
  
// 2. Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function.

function circleArea(radius) {
    let area = 3.14 * radius * radius;
    return area;
    }
    console.log(circleArea(23)); 
// Output ==> 1661.06 

// 3. Write a JAVASCRIPT Program to find Triangle area ( area = (l*h)/2 ) using return type with argument function.

function triangleArea(b, height) {
    let area = (b * height) / 2;
    return area;
    }
    console.log(triangleArea(50, 50));
// Output ==> 1259

// 4. Write a JAVASCRIPT Program to find Rectangle area = I * h using return type with argument function.

function rectangleArea(l, h) {
    let area = l * h;
    return area;
    }
    console.log(rectangleArea(3, 3));
// Output ==> 9

// 5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

function ans(a, b, c) {
    let ans = ((b * b) * (4 * a * c)) / (2 * a);
    return ans;
    }
    console.log(ans(1, 2, 4));  
// Output ==> 32

// 6. Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function

function ans(a, b) {
    let ans = (a * a) + (2 * a * b) + (b * b);
        return ans;
        }
        console.log(ans(8, 9)); 
// Output ==> 289

// 7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8 ) using return type with argument function

function fahrenheitToCelsius(fahrenheit) {
    let c = (fahrenheit - 32) / 1.8;
    return c;
    }
    console.log(fahrenheitToCelsius(90)); 
// Output ==> 32.22222222222222

// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f= (c*1.8)+32 ) using return type with argument function.

function celsiusToFahrenheit(celsius) {
    let f = (celsius * 1.8) + 32;
    return f;
    }
    console.log(celsiusToFahrenheit(20));
// Output ==> 68

// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using anargument with no return type.

function checkOddEven(num) {
    if (num % 2 == 0) {
        console.log("Number is even " , num);
        }
        else {
            console.log("Number is odd " , num);
            }
            }
            checkOddEven(10);
            checkOddEven(5);
// Output ==> Number is even  10
// Output ==> Number is odd  5

// 10. Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type.

function swap(a, b) {
        console.log("Value  of Before Swapping: a =", a, "b =", b);
        a = a * b;
        b = a / b;
        a = a / b;
        console.log("Value of After Swapping: a =", a, "b =", b);
                    }
        swap(10, 80);
// Output ==> Value  of Before Swapping: a = 10 b = 80
// Output ==> Value  of After  Swapping: a = 80 b = 10






    
   
    
