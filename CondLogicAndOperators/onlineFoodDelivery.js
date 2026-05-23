/* Exercise: Online Food Delivery

   Create variables orderAmount and isPremiumUser.
   Check if the order amount is greater than 20000.
   Check if the customer is premium.
   Check if free delivery applies.
   let orderAmount = 25000;
   let isPremiumUser = false;
 */


   //ANSWER

let orderAmount = 25000;
let isPremiumUser = false;

if (orderAmount > 20000 || isPremiumUser) {
    console.log("Free delivery applies");
} else {
    console.log("Delivery charges apply");
}