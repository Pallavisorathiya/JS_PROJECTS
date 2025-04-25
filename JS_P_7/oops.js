// oops concepts in javascript
/* 1) Create a School class and create a student and faculty method. The Student method gives
 the student name, email and contact number as arguments and prints all details the 
 same as faculty using class & object. */
 class School {
    student(name, email, contact) {
      console.log("Student Details:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Contact:", contact);
      console.log("===========================================")
    }
  
    faculty(name, email, contact) {
      console.log("Faculty Details:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Contact:", contact);
      console.log("===========================================")
    }
  }
let mySchool = new School();
mySchool.student("pallavi", "pallavi@example.com", "123-456-7890");
mySchool.faculty("Mr. john", "john@example.com", "098-765-4321");
  
/* OUTPUT ==>
 Student Details:
Name: pallavi
Email: pallavi@example.com
contact: 123-456-7890
Faculty Details:
Name: Mr. john
Email: john@example.com
contact: 098-765-4321 */

/*2) Create a Person class with an argument name and age. create an Employee class
through print out details of Person Class. */

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  showDetails() {
      console.log("Name: " , this.name);
      console.log("Age: " , this.age);
    }
  }
  class Employee extends Person {
    constructor(name, age) 
    {
      super(name, age); 
    }
  }
let emp = new Employee("John peter", 30);
emp.showDetails();

/* OUTPUT ==>
Name :John peter
Age :30 */

//3) Employee class creates a constructor called print a simple message. 

class Employees {
    constructor() {
      console.log("HELLO ,GOOD MORNING");
    }
  }
let  emp1 = new Employees();
  
//  OUTPUT ==> HELLO ,GOOD MORNING

/* 4) Create a shape class and create a rectangle and circle method find circle
area(3.14*r*r) and rectangle area (width*height) using with argument. */
class Shape {
circleArea(radius) {
let  area = 3.14 * radius * radius;
console.log("Circle Area:" ,area);
}
rectangleArea(width, height) {
      let area = width * height;
      console.log("Rectangle Area:", area);
    }
  }
let Shapes = new Shape();
Shapes.circleArea(10);      
Shapes.rectangleArea(2, 6); 
  

