// Set -> (i) Contain unique values (ii) Can have mixed data types
let alphas = new Set();
alphas.add('Ankur')
alphas.add('Erina')
alphas.add('Arnold')
alphas.add('Erina')

//forEach method
alphas.forEach((value,value1,alphas) => { // Here value and value1 are same
    console.log(value);
})

// has method (Check if certain value is present or not)
console.log(alphas.has('Arnold'));

// Map -> Store key value pair
let marks = new Map();
marks.set("Ron",34)
marks.set("Alex",45)
marks.set("Mark",23)
marks.set("Ron",37) // Each key is unique (This will update the marks of Ron)

// Printing keys
console.log(marks.keys());

// has method (Checking is certain key is present or not)
console.log(marks.has('Adam'));

// get method 
console.log(marks.get('Ron'));

// forEach method
marks.forEach((v,k) => {
    console.log(k, ':', v);
})



