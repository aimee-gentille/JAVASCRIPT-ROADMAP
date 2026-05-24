/*
Exercise: Employee Login System

Create variables username and password.
Check if username equals "admin".
Check if the password equals "12345".
Check if both login details are correct.
let username = "admin";
let password = "12345";
*/

//ANSWER

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login successful");
} 
else {
    console.log("Invalid login details");
}