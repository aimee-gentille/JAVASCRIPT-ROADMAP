/*
Exercise: Weather Alert

Create variables temperature and isRaining.
Check if the temperature is below 10.
Check if it is raining.
Check if a cold weather alert should be shown.
let temperature = 8;
let isRaining = true;
*/

//ANSWER

let temperature = 8;
let isRaining = true;

if (temperature < 10 && isRaining) {
    console.log("Cold weather alert");
} 
else {
    console.log("No cold weather alert");
}