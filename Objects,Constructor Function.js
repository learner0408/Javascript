// Objects : Object values are written as name : value pairs.
//Objects in Javascript are similar to Dict in Python, Hash Tables in C

// Creating Object using Object Literal
let teacher = {
    name : "Circe",
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
// delete school.math_teacher.num_experience
// console.log(school.math_teacher)

// Iterating over all properties in Object using 'for in' loop
for (let key in school){
    console.log(key, school[key])
}

// Methods in Objects
// 'this' keyword is used to point to the current object 
school.teacher_description = function () { return `${this.math_teacher.name} has an experience of ${this.math_teacher.num_experience} years in ${this.math_teacher.school}`}
console.log(school.teacher_description())

// Constructors Function
// It is considered good practice to name constructor functions with an upper-case first letter.
function Car(model, company, maxSpeed){
    this.model = model;
    this.company = company;
    this.maxSpeed = maxSpeed;

    this.getSpeed = ()=>console.log(`${this.company} ${this.model} can run at speed of ${this.maxSpeed}`);
}
let car1 = new Car('Model S', 'Tesla', '250mph'); // Creating new instance using 'new' keyword
car1.getSpeed()




