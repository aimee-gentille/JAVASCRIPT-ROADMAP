/*
Exercise: Flight Check-in

Create variables passportValid and ticketPaid.
Check if the passport is valid.
Check if the ticket is paid.
Check if the passenger can board.
let passportValid = true;
let ticketPaid = true;
*/

//ANSWER

let passportValid = true;
let ticketPaid = true;

if (passportValid && ticketPaid) {
    console.log("Passenger can board");
} else {
    console.log("Passenger cannot board");
}