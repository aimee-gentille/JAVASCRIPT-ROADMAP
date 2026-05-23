/* 
Exercise: School Attendance

Create variable attendance.
Check if attendance is 90 or more.
Check if attendance is below 75.
Check if attendance is NOT exactly 100.
let attendance = 92;
*/

//ANSWER

let attendance = 92;

if (attendance >= 90) {
    console.log("Excellent attendance");
} else if (attendance < 75) {
    console.log("Low attendance warning");
} else {
    console.log("Average attendance");
}

if (attendance !== 100) {
    console.log("Attendance is not perfect (not 100)");
}
