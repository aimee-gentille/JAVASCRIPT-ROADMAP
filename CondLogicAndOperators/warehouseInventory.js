/*
Exercise: Warehouse Inventory

Create variables stock and soldItems.
Check if stock is greater than sold items.
Check if stock is 0.
Check if sold items are NOT more than stock.
let stock = 200;
let soldItems = 50;
*/

//ANSWER

let stock = 200;
let soldItems = 50;

if (stock > soldItems) {
    console.log("Stock is sufficient");
} 
else {
    console.log("Stock is not sufficient");
}

if (stock === 0) {
    console.log("Stock is empty");
}

if (soldItems <= stock) {
    console.log("Sold items are within stock limit");
}