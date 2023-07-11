// IF-ELSE Statement
let num1 = 6;
let num2 = 8;

if(num1%2!=0 && num2%2!=0){
    console.log("Both are Odd!")
}
else if(num1%2===0 && num2%2=== 0){
    console.log("Both are Even!")
}
else{
    console.log("Only one is Odd!")
}

// Ternary Operator
let result;
result = num1>num2? "Num1 is greater" : "Num2 is greater"
console.log(result);

// SWITCH Statements
let day = "Tuesday"
switch(day){
    case "Monday":
    case "Tuesday":
        console.log("Go to Office!")
        break;  // It is important to use this break, because otherwise once it matches the below 
                // console will also print.
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Work from Home!")
        break ;
    case "Saturday":
    case "Sunday":
        console.log("Improve your skills!")
        break ;
    default:
        "Go Read a book!"
}
