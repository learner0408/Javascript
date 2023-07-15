// Recursion -> When the function calls itself
// But there should we a condition when the function should stop calling itself
function func(num=1){
    console.log(num);
    num++
    if(num<9074){
        func(num)
    }
    
}
func()

// Applications

// Factorial
function factorial(n){
    if (n===1){
        return 1;
    }
    return n*factorial(n-1);
}

// console.log(factorial(5));