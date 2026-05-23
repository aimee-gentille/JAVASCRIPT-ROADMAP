// Atm machine 

//the action : withdraw, deposit, check balance, pay bills
let balance = 1000;
let paymentAmount = 5000;
let depositAmount = 500;
let withdrawalAmount = 500;
let action = "pay bills";

switch (action) {
     case "withdraw":
           if (withdrawalAmount < balance && withdrawalAmount > 0) {
       balance -= withdrawalAmount; // balance = balance - withdrawalAmount;
             console.log("Withdrawal successful. Remaining balance: " + balance);
         }
        else {
             console.log("Insufficient balance or invalid amount");
         }
         break;
     case "deposit":
         if (depositAmount > 0) {
             balance += depositAmount;
             console.log("Deposit successful. New balance: " + balance);
         } else {
             console.log("Invalid amount");
         }
         break;
     case "check balance":
         console.log("Your current balance is: " + balance);
         break;
     case "pay bills":
         if (paymentAmount < balance && paymentAmount > 0) {
             balance -= paymentAmount;
             console.log("Payment successful. Remaining balance: " + balance);
         } else {
             console.log("Insufficient balance or invalid amount");
         }
         break;

     default:
         console.log("The action you enter is not valid");
         break;

}