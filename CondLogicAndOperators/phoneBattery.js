/* 
Exercise: Phone Battery

Create a variable battery.
Check if the battery is below 20.
Check if the battery is exactly 100.
Check if the battery is NOT 0.
let battery = 15;
*/

//ANSWER

let battery = 15;

if (battery < 20) {
    console.log("Low battery");
} 
else if (battery === 100) {
    console.log("Battery fully charged");
} 
else {
    console.log("Battery level is normal");
}

if (battery !== 0) {
    console.log("Phone still has power");
}