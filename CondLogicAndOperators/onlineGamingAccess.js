/*
Exercise: Online Gaming Access

Create variables age and parentPermission.
Check if your age is 18 or older.
Check if parental permission exists.
Check if access should be granted.
let age = 15;
let parentPermission = true;
*/

//ANSWER

let age = 15;
let parentPermission = true;

if (age >= 18 || parentPermission) {
    console.log("Access granted to game");
} 
else {
    console.log("Access denied");
}
