// Functions
function curse(){
    console.log("Fuck Off!")
}
curse()

// Passing Input and Return in Functions
function add(a,b){
    return a+b;
}
let result = add(5,8)
console.log(result)

// Function as Expression
let find_greater = function(num1,num2){
    if (num1>=num2){
        return num1;
    }
    return num2;
}

let result2 = find_greater(-10,23)
console.log(result2)

// ** Functions in Javascript are objects

// Local-Global Variables
/* """ Variables initialized inside a function or given as parameters are local variables. 
   But variables defined outside a function are global variables and can be used inside the function. """ */

// Assigning default value in Function
function greet(name = "You"){
    console.log(`Hi ${name}!`);
}
greet("Ankur")

// Arrow Function 
// In this if there is single statement inside block there is no need for curly brackets and using 
// return keyword
let add_modulus = (num1,num2) => {
    if (num1<0){
        num1 = -num1;
    }
    if (num2<0){
        num2 = -num2;
    }
    return num1+num2;
}
console.log(add_modulus(-23,11))