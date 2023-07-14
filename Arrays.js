// Arrays - Type of Object which help to store values unlike key-value pairs

//Initializing an Array
let names = ["Circe", "Helios", "Telegonus"] // Or we can use 'new Array()'

// Adding element at the end
names.push("Odysseus")

//Indexing the array
console.log(names[3]);

// Adding element to a particular index
names[4] = "Hermes"
// console.log(names)

// Array can contain mixed-data types
let data = ["GAI",8,{Algo:"3.2.1"},function(){console.log("Array can contain mixed data types")}]
// console.log(data)

// pop method (Remove the end element)
console.log(names.pop())
names.push("Hermes")

// shift method (Remove the first element)
console.log(names.shift(),names);

// unshift method (Add element to the start of the array)
console.log(names.unshift("Circe"),names);

// splice(i,n) method (Removes n element starting from index i)
console.log("Removed names:-",names.splice(1,2),"Remaining names:-",names) ;

// forEach method (Apply fn to each value of the array)
names.forEach((name,i,names)=> {
    names[i] =  "Hi "+name;
})
console.log(names);

// filter method (Filter values based on some condition)
let nums = [32,45,34,13,24]
console.log(nums.filter(i => i%2!=0))

// map method
console.log(nums.map(i => i*2))

// reduce method (Reduce the elements acc to the function applied on previous and current values 
// and return a single value)
let result = nums.reduce((a,b) => { return a+b; })
console.log(result);

// split function (* It is not an array method but can be used to convert from string to array)
let words = "Hope you are doing well, Mr Clypto".split(' ')

// for-of loop in Arrays (Extracting values)
for (let name of names){
    console.log(name);
}
// for-in loop gives us key, which will be indexes in this case
// for (let i in names){
//     console.log(i);
// }

// Array Destructuring
let [nam1, nam2, nam3] = names;
// console.log(nam2);

// Swapping elements using array destructuring
let a = 3;
let b = 4;
[a,b] = [b,a]
console.log("a:",a,"b:",b);

// Destructuring partial array(Using ...)
let [one,two,three,four,,...five] = words;
// console.log(five);