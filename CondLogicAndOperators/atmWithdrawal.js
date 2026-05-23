/*    Exercise: ATM Withdrawal
    Create variables balance and withdrawAmount.
    Check if the balance is enough for withdrawal.
    Check if the balance is exactly 0.
    Check if the withdrawal amount is NOT greater than the balance.
    let balance = 50000;
    let withdrawAmount = 10000;   */

    //ANSWER

let balance = 50000;
let withdrawAmount = 10000;

//Step 1 & 3 combined: Check if withdrawal is valid (NOT greater than balance)
if (withdrawAmount <= balance) {
    balance = balance - withdrawAmount;
    console.log("Withdrawal successful");
    console.log("Remaining balance: " + balance);

    //Check if the balance become exactly 0
    if (balance === 0) {
        console.log("Balance is zero");
    }

} 

else {
    console.log("Insufficient funds");
}


