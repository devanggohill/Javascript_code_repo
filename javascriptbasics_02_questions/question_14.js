// Write a JavaScript program that:

// Takes a number N from the user.
// Prints all numbers from 1 to N.
// If a number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

let n = Number(prompt("Enter a number:"));

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}
