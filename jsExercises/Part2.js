// Identify Data Types
let name= "Gentille";
let age= 21;
let country= "Rwanda";
let likeJavaScript = true;

console.log(typeof name);              
console.log(typeof age);               
console.log(typeof country);           
console.log(typeof likeJavaScript);


//String Practice
let firstName= "Aimee"
let lastName= "Gentille"

console.log("My name is:"+" "+firstName+" "+lastName);


//Number Practice
let priceOfAnItem = 20000;
let quantity = 2;
let total = priceOfAnItem * quantity;

console.log(total);


// Boolean Practice
let isLoggedIn= true;
let isAdmin= true;
let hasPermission= false;

console.log("User is Logged In:"+" "+ isLoggedIn);
console.log("User is Admin:"+" "+ isAdmin);
console.log("User has Permission:"+" "+ hasPermission);

//Array Practice
let favFood=["Pasta", "Chips", "Chicken"];
console.log(favFood);

favFood.push("Salad");
console.log(favFood);

favFood.splice(1,1);
console.log(favFood);

favFood.pop(1,1);
console.log(favFood);


//Object Practice
let student = {
    name: "Gentille",
    age: 21,
    grade: "A",
    school: "AUCA"
};

console.log(student);

student.email = "aimeegentille9@gmail.com";

console.log(student);

