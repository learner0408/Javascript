//  *****Arithmetic Operators***** //

let num1 = 3
let num2 = 5
addition = num1+num2 //Add

subtraction = num2-num1 //Subtract

multiply = num1*num2 //Multiply

division = num1/num2 //Divide

remainder = num1%num2 //Remainder

num1++ //Add by 1

num1-- //Subtract by 1

num1+=4 //Shorthand Notation
console.log(num1)

let x = num1++ //Post Increment
console.log(x,num1)

let y = ++num1 //Pre Increment
console.log(y,num1)

num1 = num1 ** 2 //Calculating Power
num2 = Math.pow(num2,3) //Calculating Power
console.log(num1,num2)

// *****Relational Operators***** //

num1=3
num2=4
console.log("num1:-",num1," num2:-",num2)

let bool1 = num1>num2 //True
num1++

let bool2 = num1<=num2 //True

let str1 = "Jack"
let str2 = "Samantha"

let bool3 = str1>str2
str2 = "Jackey"

let bool4 = str1>str2 //False

num1--
num1 = String(num1)

let bool5 = num1>num2 //False (Type Coersion)

num1 = "4"
num2 = 4

let bool6 = num1==num2 //True **Important - "==" checks only value, not data type

let bool7 = num1===num2 //False **Important - "===" checks value as well as data type
console.log(bool7)

// *****Logical Operators***** //

let a= 5, b=4, c=3

let result1 = a>b && b<c //AND Operator
console.log("Result1:-",result1)

let result2 = a>b || b<c //OR Operator
console.log("Result2:-",result2)

result1 = !result1 //NOT Operator


