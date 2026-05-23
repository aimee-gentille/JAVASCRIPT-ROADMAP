/*
Exercise: Bus Seat Booking

Create variables availableSeats and requestedSeats.
Check if enough seats exist.
Check if the bus is full.
Check if requested seats are NOT more than available seats.
let availableSeats = 20;
let requestedSeats = 5;
*/

//ANSWER

let availableSeats = 20;
let requestedSeats = 5;

if (availableSeats === 0) {
    console.log("Bus is full");
} else if (requestedSeats > availableSeats) {
    console.log("Not enough seats available");
} else {
    console.log("Booking successful");
}