/*
Exercise: Restaurant Table Reservation

Create variables tablesAvailable and customers.
Check if tables are available.
Check if the restaurant is full.
Check if reservation can proceed.
let tablesAvailable = 4;
let customers = 2;
*/

//ANSWER 

let tablesAvailable = 4;
let customers = 2;

if (tablesAvailable > 0) {
    console.log("Tables are available");
} 
else {
    console.log("Restaurant is full");
}

if (customers <= tablesAvailable) {
    console.log("Reservation can proceed");
} 
else {
    console.log("Not enough tables for customers");
}