// Assigning Variables using let
let num = 4

// Printing Variables
console.log(num)

// Assigning String to Variables
let user = "Ankur"
console.log(user)

// Changing values of variables
num= 9
console.log(num)

// Assigning Constants
const pi = 3.14
let radius = 5
let area = pi*(radius**2)
console.log(area)

//Data Types
/* Primitive Data Types:- (i) Number (ii) String (iii) Boolean (iv) Null (v) Undefined (vi) Symbol */


let data = 8 //Number
let username = "John" //String
let num1 = 100_00_000 //Number but in a different way
let hexaNum = 0xff //Hexadecimal Number
let expNum = 1.5e8 //Exponencial Number
let posInf = 5/0 //Positive Infinity
let negInf = -5/0 //Negative Infinity
let maxValue = Number.MAX_VALUE //Max Value available
let num2 = 1050505050505050505011n //BigInt(Using n at the end introduce precision)

console.log(num2)

// Print Data Type of any variable
console.log(typeof username)

// Adding two Strings
let firstname = "Stephen "
let lastname = "Hawking" 
console.log(firstname+lastname)

//Using Escape Character
let name = "Demis \"Deepmind\"" //Using the forward slash removed the effect of the quotations

let place = "Red \nFort"
console.log(place)

// Backspace
place = "Red For\brt"
console.log(place)

// Boolean
let bool = 20<19
console.log(bool)

// Null
let var1 = null
console.log(typeof var1) //Shows null is an object even if it signifies absence of object

// NaN
console.log(typeof (5/"Ankur")) // Shows NaN is a number Data Type