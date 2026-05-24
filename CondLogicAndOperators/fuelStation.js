/*
Exercise: Fuel Station

Create variables fuelAvailable and fuelNeeded.
Check if enough fuel exists.
Check if fuel is empty.
Check if fuel needed is NOT greater than available fuel.
let fuelAvailable = 100;
let fuelNeeded = 40;

*/

//ANSWER

let fuelAvailable = 100;
let fuelNeeded = 40;

if (fuelAvailable === 0) {
    console.log("Fuel is empty");
} 
else if (fuelNeeded <= fuelAvailable) {
    console.log("Fuel available, you can proceed");
} 
else {
    console.log("Not enough fuel");
}