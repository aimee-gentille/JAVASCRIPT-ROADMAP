// restaurant menu 


// menu 
// 1 Drink : water, soda, juice, milk,
// 2 fast food : pizza, burger, fries, salad, sandwich 
// 3 coffee : espresso, latte, cappuccino, mocha, flat white

let order="";
let price=0;

switch(order)
{
    case "Drink":
        console.log("1.water,2.soda,3.juice,4.milk");
        console.log("Enter the number of the drink you want");
        console.log("Enter the quantity");
        console.log("Total price is:");
        break

    case "fast food":
        console.log("1.pizza,2.Burger,3.fries,4.salad,5.sandwich");
        console.log("Enter the number of the food you want");
        console.log("Enter the quantity");
        console.log("Total price is:");  
        break

    case "coffee":
        console.log("1.espresso,2.latte,3.cappuccino,4.mocha,5.flat white");
        console.log("Enter the number of the coffee you want");
        console.log("Enter the quantity");
        console.log("Total price is:");  
        break
    
    default:
        console.log("invalid order");
        break;
}