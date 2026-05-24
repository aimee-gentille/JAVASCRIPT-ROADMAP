/*
Exercise: Online Course Payment

Create variables paymentMade and coursePrice.
Check if payment was made.
Check if the course price is above 50000.
Check if students can access the course.
let paymentMade = true;
let coursePrice = 75000;
*/

//ANSWER

let paymentMade = true;
let coursePrice = 75000;

if (paymentMade && coursePrice > 50000) {
    console.log("Student can access the course");
} 
else {
    console.log("Access denied");
}