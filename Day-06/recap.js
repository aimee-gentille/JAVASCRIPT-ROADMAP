// restaurant menu 


// menu 
// 1 Drink : water, soda, juice, milk,
// 2 fast food : pizza, burger, fries, salad, sandwich 
// 3 coffee : espresso, latte, cappuccino, mocha, flat white


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log ("Welcome to RedHat restaurant")

console.log("Categories: 1. Drink | 2. fast food | 3. coffee");

rl.question('Enter category name (Drink, fast food, or coffee): ', (order) => {
    let items = [];
    let pricePerItem = 0;

    switch (order) {
        case "Drink":
            items = ["water", "soda", "juice", "milk"];
            pricePerItem = 500;
            break;
        case "fast food":
            items = ["pizza", "burger", "fries", "salad", "sandwich"];
            pricePerItem = 10;
            break;
        case "coffee":
            items = ["espresso", "latte", "cappuccino", "mocha", "flat white"];
            pricePerItem = 5;
            break;
        default:
            console.log("Invalid order");
            rl.close();
            return;
    }

    console.log("\nItems available:", items.map((item, i) => `${i + 1}. ${item}`).join(', '));

    rl.question('Enter the number of the item you want: ', (itemNum) => {
        rl.question('Enter the quantity: ', (quantity) => {
            let total = pricePerItem * parseInt(quantity);
            
            // Order is greater than 50 discount
            if (total > 50) {
                total = total * 0.90; // 10% discount
                console.log("Discount applied! 10% off.");
            }

            console.log(`Total price is: $${total.toFixed(2)}`);
            rl.close();
        });
    });
});