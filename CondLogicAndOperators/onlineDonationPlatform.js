/*
Exercise: Online Donation Platform

Create variables donationAmount and isVerified.
Check if the donation is above 10000.
Check if the user is verified.
Check if donation qualifies for recognition.
let donationAmount = 15000;
let isVerified = true;
*/

//ANSWER

let donationAmount = 15000;
let isVerified = true;

if (donationAmount > 10000 && isVerified) {
    console.log("Donation qualifies for recognition");
} 
else {
    console.log("Donation does not qualify");
}