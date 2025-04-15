// 1 Write a simple JavaScript program to print expected Output using the following array.

let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(','));
console.log(myColor.join('+'));
console.log(myColor.slice(0, 3).join(','));
console.log(myColor[0]);
console.log(myColor.slice(1, 3).join(','));
let extendedColor = myColor.slice();
extendedColor.push("orange");
console.log(extendedColor.join(','));

/*OUTPUT ==>Red ,Green,WhIte,Black
            Red+Green+White+B1ack
            Red , Green, White
            Red
            Green , White
            Red, Green, White, Black, orange */

// 2.Write a JavaScript program to get the sum of all array elements using for loopand foreach loop.

let num = [11, 22, 33, 43, 57];
let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum += num[i];
    }
    console.log("Sum using for loop: ", sum);
    sum = 0;
    num.forEach(num => {sum += num;});
    console.log("Sum using foreach loop: ", sum);
        
/* OUTPUT ==> Sum using for loop:  166
              Sum using foreach loop:  166 */

//3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

let numbers = [101, 782, 356, 4, 50987];
let max = findMax(numbers);
let min = findMin(numbers);
console.log("Maximum value: ", max);
console.log("Minimum value: ", min);
function findMax(arr) {
    return Math.max.apply(Math, arr);
    }
    function findMin(arr) {
        return Math.min.apply(Math, arr);
        }

        /* OUTPUT ==> Maximum value:  50987
                     Minimum value:  4 */

// 4.Write a JavaScript program to convert all array elements into ASCII values.

// let myArray = ["#", "G", "*", ";"];
// let ascii = myArray.map(num => num.toString().charCodeAt(0));
// console.log(ascii);

//  OUTPUT ==> [35, 71, 42, 59] 

// // 5.Write a JavaScript program to remove negative values using the filter arrayfunction. -12, -5, o, 1, 5, 12, 19, 20];

// let NUM = [-12, -5, 0, 1, 5, 12,19,20];
//     let positiveNumbers = NUM.filter(NUM => NUM >= 0);
//     console.log(positiveNumbers);

    // OUTPUT ==> [0, 1, 5, 12, 19, 20]

//6. Write a JavaScript program using array map() method and return the square of the array element. arr = [2, 5, 6, 3, 8, 9];

let arr = [2, 5, 6, 3, 8, 9]
    let square = arr.map(num => num * num);
    console.log(square);
    //OUTPUT ==> [4, 25, 36, 9, 64,81]

//7.Write a JavaScript program for sorting an array in ascending descending.numbers = 12,5, o, 1, 5, 12, 19, 20]; myColor = ["Red", "Green", "White", "Black"];

let value = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];  
let Color = ["Red", "Green", "White", "Black"];
console.log("Ascending Numbers:", value.sort((a, b) => a - b));
console.log("Descending Numbers:", value.sort((a, b) => b - a));
console.log("Ascending Colors:", Color.sort());
console.log("Descending Colors:", Color.sort().reverse());

/*OUTPUT ==> Ascending Numbers: [0, 1, 5, 5,
Descending Numbers: [20, 19, 12, 12, 5,
Ascending Colors: [ Black, Green, Red, White ]
Descending Colors: [ White, Red, Green, Black ] */


//8. Write a JavaScript program which filters out any string which is less than 8characters. words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];\

let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']
    let filteredWords = words.filter(word => word.length <= 8);
    console.log(filteredWords);

    //OUTPUT ==>(5) ['Python', 'Go', 'Java', 'PHP', 'Ruby']

/* 9. write a JavaScript program to print expected output for the following string.
x = "airplane"; output:- r
x = "oxoxoxox"; output:- "oXoXoXoX"
x = "A New Java Book";
output:- "a new java book" , "A NEW JAVA BOOK" */

let x = "airplane";
console.log(x[2]); 
x = "oxoxoxox";
console.log(x); 
x = "A New Java Book";
console.log(x.toLowerCase()); 
console.log(x.toUpperCase());

// Output: "r"
// Output: "oXoXoXoX"
// Output: "a new java book" 
// Output: "A NEW JAVA BOOK"

// 10. write a JavaScript program for array reverse.

let arry = [1, 2, 3, 4, 5, 6]
    let reversed = arry.reverse();
    console.log(reversed);
    //OUTPUT ==> [6, 5, 4, 3, 2,]

//11. write a JavaScript program to check if a value is found or not?

let myArray = [10, 20, 30, 40, 50];
let valueToCheck = 30;

console.log(myArray.includes(valueToCheck)); 
// Output==>true

// 12. write a JavaScript program to print your name and write the number of totalcharacters.

let names = "pallavi";
console.log(names.length);
//OUTPUT ==> 7

//13 write a javascript program given this output using replace content

let sentence = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
let replacedSentence = sentence.replace(/dog/g, "cat");
console.log(replacedSentence);
// OUTPUT==>I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning

// 14 write a javascript program convert string to array
 
let str = "Hire the top 1% freelance developers";
let wordsArray = str.split(" ").slice(0, 4); 
console.log(wordsArray);
//OUTPUT ==> ["Hire", "the", "top", "1%"]

// 15  write a javascript program convert arry to string 
let arrs = ['5', 32, 'Daniel'];
let strOutput = arrs.join(",");
console.log(strOutput);
//OUTPUT ==> 5,32,Daniel