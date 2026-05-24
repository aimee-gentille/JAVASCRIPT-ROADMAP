/*
Exercise: Smart Parking System

Create variables hoursParked and paymentCompleted.
Check if parking exceeded 5 hours.
Check if payment is completed.
Check if the penalty applies.
let hoursParked = 7;
let paymentCompleted = false;
*/

//ANSWER

let hoursParked = 7;
let paymentCompleted = false;

if (hoursParked > 5 && !paymentCompleted) {
    console.log("Penalty applies");
} 
else {
    console.log("No penalty");
}