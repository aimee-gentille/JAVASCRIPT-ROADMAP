/*
Exercise: Mobile Data Bundle

Create a variable dataBalance.
Check if data is greater than 1000.
Check if data is below 100.
Check if data is NOT equal to 0.
let dataBalance = 500;
*/

//ANSWER

let dataBalance = 500;

if (dataBalance > 1000) {
    console.log("High data balance");
} else if (dataBalance < 100) {
    console.log("Low data balance");
} else {
    console.log("Moderate data balance");
}

if (dataBalance !== 0) {
    console.log("Data is available");
}