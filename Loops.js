// While Loop
let i=1;
let pattern = '*'
while (i<=5){
    console.log(pattern)
    pattern+='*'
    i++
}

// Do-While Loop
let count = 11
do{
    console.log(count)
    count++
}while(count<10)

// for Loop
pattern = 'o_o'
for(let j=5; j>0; j--){
    console.log(pattern)
    pattern+='|o_o'
}

// for in Loop (Used while iterating objects)
let phone = {company:'Apple', model:'iPhone14', os:'IOS'}
for (let key in phone){
    console.log(key, phone[key]);
}