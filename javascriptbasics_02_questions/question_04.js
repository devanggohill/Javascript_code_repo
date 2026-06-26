// Write a JavaScript program that:

// Takes a number N from the user.
// Calculates the sum of all numbers from 1 to N.
// Prints the final sum.

let num = Number(prompt("Enter a number to calculate the sum:"));
let sum = 0;

for (let i = 1; i <= num; i++) {
    sum = sum + i;
}

console.log(sum);