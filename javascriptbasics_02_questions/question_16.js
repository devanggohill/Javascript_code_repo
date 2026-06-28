// This one is a little more challenging.

// Write a JavaScript program that:

// Takes a number N from the user.
// Finds the largest digit in that number.

let num = Number(prompt("Enter a number:"));

let largest = 0;

while (num > 0) {
    let digit = num % 10;

    if (digit > largest) {
        largest = digit;
    }

    num = Math.floor(num / 10);
}

console.log("Largest digit =", largest);
