/* 
Exercise: Employee Salary

Create a variable salary.
Check if the salary is greater than 300000.
Check if the salary is less than 100000.
Check if the salary is exactly 500000.
let salary = 350000;
*/

//  ANSWER

let salary = 350000;

if (salary > 300000) {
    console.log("High salary");
} 
else if (salary < 100000) {
    console.log("Low salary");
} 
else {
    console.log("Average salary");
}

if (salary === 500000) {
    console.log("Special salary bonus category");
}