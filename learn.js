
function greet() {
console.log("Hello, World!");
}

greet();

document.body.style.backgroundColor = "#181818";
console.log("Background color changed to dark.");
console.log(1+1);

//variables//
//box for storing data
//let, const, var
//let and const are block scoped, var is function scoped

//variable initialization
let username;
username = "John";
console.log(username);
//instantiate and initialize in one line
let username2 = "Jane";
console.log(username2);


const name = "Alice";
console.log(name);
//username = "Bob"; // This will throw an error because username is a constant

//naming rules for variables
//1. Must start with a letter, underscore, or dollar sign
//2. Can contain letters, numbers, underscores, or dollar signs
//3. Cannot be a reserved keyword
//4. Case sensitive
//5. no spaces allowed in variable names

//use camelCase!!



//DATA TYPES
//1. String
//2. Number 
//3. Boolean

//primitives: string, number, boolean, null, undefined, symbol
//non-primitives: objects, arrays, functions

let Name = 'huy'; //string

console.log(7+4);
console.log('7'+'4'); //string concatenation

let age = 33; //number

let isStudent = true; //boolean

console.log(age > 18); //true
console.log(age < 18); //false
//if statements
//syntax: if (condition) { code to execute if condition is true }

if (age > 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}




//operators
//1. Arithmetic operators: +, -, *, /, %
//2. Assignment operators: =, +=, -=, *=, /=
//3. Comparison operators: ==, ===, !=, !==, >, <, >=, <=
//4. Logical operators: &&, ||, !

//operator precedence: parentheses, 
// exponents, multiplication/division, addition/subtraction
//operands are evaluated from left to right

//operaion types: unary, binary, ternary
    //unary: one operand, e.g. -5, !true
    //binary: two operands, e.g. 5 + 3, age > 18
    //ternary: three operands, e.g. condition ? expressionIfTrue : expressionIfFalse



    //ARITHMETIC OPERATORS
let a = 10;
let b = 5;

console.log(a + b); //15
console.log(a - b); //5
console.log(a * b); //50
console.log(a / b); //2
console.log(a % b); //0

//comparison operators
let x = 10;
console.log(x == 10);
console.log(x === 10); //strict equality, checks value and type
console.log(x != 5);    //returns true because x is not equal to 5
console.log(x !== '10');//returns true because x is not equal to '10' (different type)
console.log(x > 5); //true
console.log(x < 15);    //true
console.log(x >= 10);   //true
console.log(x <= 9);    //false 

//if statements
/*
if (age > 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}
    */
   
let finishedLoading = true;

if(finishedLoading == true) {
    console.log('loading complete')
}
//shortcut
if(finishedLoading){
    console.log('загрузка завершена')
}


//example of use
let dbPassword = '1234'; //from database
let enteredPassword = '123456';
let enteredUsername = 'Harry';

if(enteredPassword === dbPassword){
    console.log('Welcome'+ enteredUsername);
}else{
    console.log('Wrong P');
}

//ELIF EXAMPLE AS LANGUAGE SELECTED
let language = 'english';
if(language === 'spanish'){
    console.log('hola!');
}
else if(language === 'german'){
    console.log('heil!');
}
else if(language === 'english'){
    console.log('hi!');
}

// LOOPS
//FOR, WHILE
//WHILE: runs as long as the condition is TRUE

let counter = 0;
while(counter < 10){
    console.log(counter);
    counter ++;
}
//adds one to every loop cycle until it fits 

//--------------------------------------------
//FOR LOOPS
for(let i = 0; i < 10; i++){
    console.log(i);

}
// i=0 - setting a variable for i
//1<10 checks if i is smaller than 10 every iteration
//if true runs console.log(i)
//i++ adds one every iteration to avoid infinity loops


//for loops are great if you know HOW MANY TIMES YOU WANNA RUN A LOOP
//WHILE  loops are the opposite
//-----------------------------------------
//FUNCTIONS

//Date()
//Math.random()

/*function sayHello(){
    console.log('Hello world');
}
sayHello();
*/

//parameters and arguments
function sayHello(name){ //name is a parameter
    console.log('Hello ' + name);
}
sayHello('Tom'); //Tom is an argument

function addNumbers(num1, num2){
    console.log(num1 + num2)
}
addNumbers(5, 3) //arguments get assigned in the same order as the parameter
addNumbers(7,3)


function divideNumbers(num1, num2){
    console.log(num1 / num2)
}
divideNumbers(10, 2)

//------------------------------------------------------
// DOM
//FUNDAMENTALS
//MODIFY THE DOM
console.dir(document); //gives all the parts of HTML that can be controlled by JS
document.body.innerHTML = '<h1>hello world</h1>';
document.body.innerHTML = document.body.innerHTML +  '<button>Click me</button>';
//to add an element after another, select all the body elelments again
//and then add the element as shown above
console.log(document.body.style);
document.body.style.color = 'yellow';
document.body.style.backgroundColor = 'yellow';

//SELECT HTML ELEMENTS

// я долбоеб
