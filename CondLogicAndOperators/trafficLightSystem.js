/*
Exercise: Traffic Light System

Create a variable lightColor.
Check if the light color is "red".
Check if the light color is "green".
Check if the light color is NOT "yellow".
let lightColor = "green";
*/

//ANSWER

let lightColor = "green";

if (lightColor === "red") {
    console.log("Stop");
} 
else if (lightColor === "green") {
    console.log("Go");
} 
else if (lightColor === "yellow") {
    console.log("Slow down");
}

if (lightColor !== "yellow") {
    console.log("Not yellow light");
}