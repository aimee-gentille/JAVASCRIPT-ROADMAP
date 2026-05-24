/* 
Exercise: Hotel Booking

Create variables roomsAvailable and roomsRequested.
Check if rooms are available.
Check if the hotel is full.
Check if requested rooms can be booked.
let roomsAvailable = 12;
let roomsRequested = 3;
*/

//ANSWER

let roomsAvailable = 12;
let roomsRequested = 3;

if (roomsAvailable === 0) {
    console.log("Hotel is full");
} else if (roomsRequested <= roomsAvailable) {
    console.log("Rooms booked successfully");
} else {
    console.log("Not enough rooms available");
}