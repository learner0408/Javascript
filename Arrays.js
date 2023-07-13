// Arrays - Type of Object which help to store values unlike key-value pairs

//Initializing an Array
let names = ["Circe", "Helios", "Telegonus"] // Or we can use 'new Array()'

// Adding element at the end
names.push("Odysseus")

//Indexing the array
console.log(names[3]);

// Adding element to a particular index
names[4] = "Hermes"
console.log(names)

// Array can contain mixed-data types
let data = ["GAI",8,{Algo:"3.2.1"},function(){console.log("Array can contain mixed data types")}]
console.log(data)

// pop method (Remove the end element)
console.log(names.pop())
names.push("Hermes")

// shift method (Remove the first element)
console.log(names.shift(),names);

//unshift method (Add element to the start of the array)
console.log(names.unshift("Circe"),names);

// splice(i,n) method (Removes n element starting from index i)
console.log("Removed names:-",names.splice(1,2),"Remaining names:-",names) ;