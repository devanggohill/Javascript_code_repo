// Write a JavaScript program that:

// Takes a number N from the user.
// Counts how many numbers between 1 and N are divisible by 7.
// Prints the final count.

let num = Number(prompt("Enter a number:"));
let count = 0;

for (let i = 1; i <= num; i++) {
    if (i % 7 === 0) {
        count++;
    }
}

console.log("Count =", count);