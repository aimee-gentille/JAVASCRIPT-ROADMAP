/*
Exercise: Water Tank Monitoring

Create a variable waterLevel.
Check if the water level is below 20.
Check if the tank is full.
Check if the water level is NOT 0.
let waterLevel = 15;
*/

//ANSWER

let waterLevel = 15;

if (waterLevel < 20) {
    console.log("Low water level");
} 
else if (waterLevel === 100) {
    console.log("Tank is full");
} 
else {
    console.log("Water level is normal");
}

if (waterLevel !== 0) {
    console.log("Tank has water");
}