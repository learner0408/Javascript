// Objects : Object values are written as name : value pairs.
//Objects in Javascript are similar to Dict in Python, Hash Tables in C

// Creating Object using Object Literal
let teacher = {
    subject : "Maths",
    num_experience : 3,
    school : 'IPS'
}

// Ways to print the properties of an object
console.log(teacher.subject)
console.log(teacher['school'])

// Complex Objects (Object inside an object)
let school = {
    name:'IPS',
    YOE:2002,
    math_teacher : teacher,
}
// console.log(school)

// Extracting a property which you are unsure of using ? sign
console.log(school.science_teacher?.YOE)

// Deleting Properties
delete school.math_teacher.num_experience
console.log(school.math_teacher)

// Iterating over all properties in Object using 'for in' loop
for (let key in school){
    console.log(key, school[key])
}
