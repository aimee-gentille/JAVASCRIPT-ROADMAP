/*
Exercise: Hospital Emergency

Create variables temperature and heartRate.
Check if the temperature is above 39.
Check if the heart rate is below 60.
Check if both conditions are true.
let temperature = 40;
let heartRate = 55;
*/

//ANSWER

let temperature = 40;
let heartRate = 55;

if (temperature > 39 && heartRate < 60) {
    console.log("Emergency condition detected");
} else {
    console.log("Patient is stable");
}