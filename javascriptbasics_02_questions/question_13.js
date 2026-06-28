// Write a JavaScript program that:

// Takes a number N from the user.
// Prints the multiplication table of that number from 1 to 10.

let num = Number(prompt("Enter a number to print its multiplication table:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}