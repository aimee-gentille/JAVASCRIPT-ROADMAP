/* 
Exercise: Electricity Usage

Create variable unitsUsed.
Check if units are above 100.
Check if units are below or equal to 50.
Check if units are NOT 0.
let unitsUsed = 140;
*/

//ANSWER

let unitsUsed = 140;

if (unitsUsed > 100) {
    console.log("High electricity usage");
} else if (unitsUsed <= 50) {
    console.log("Low electricity usage");
} else {
    console.log("Moderate electricity usage");
}

if (unitsUsed !== 0) {
    console.log("Units have been consumed");
}