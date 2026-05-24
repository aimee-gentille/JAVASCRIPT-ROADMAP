/*
Exercise: Library Borrowing

Create variables booksBorrowed and maxBooks.
Check if books borrowed are less than max allowed.
Check if the borrowing limit is reached.
Check if another book can be borrowed.
let booksBorrowed = 2;
let maxBooks = 5;
*/

//ANSWER

let booksBorrowed = 2;
let maxBooks = 5;

if (booksBorrowed < maxBooks) {
    console.log("You can borrow another book");
} 
else if (booksBorrowed === maxBooks) {
    console.log("Borrowing limit reached");
} 
else {
    console.log("Limit exceeded");
}