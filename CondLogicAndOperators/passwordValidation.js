/*
Exercise: Password Validation

Create variables savedPassword and inputPassword.
Check if passwords match.
Check if passwords are NOT equal.
Check if the input password equals "admin123".
let savedPassword = "admin123";
let inputPassword = "admin123";
*/

//ANSWER

let savedPassword = "admin123";
let inputPassword = "admin123";

// Check if passwords match
if (savedPassword === inputPassword) {
    console.log("Passwords match");
} 
else {
    console.log("Passwords do not match");
}

// Check if passwords are NOT equal
if (savedPassword !== inputPassword) {
    console.log("Passwords are different");
}

// Check if input password equals "admin123"
if (inputPassword === "admin123") {
    console.log("Correct admin password entered");
}