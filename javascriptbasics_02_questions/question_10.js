// Write a JavaScript program that:

// Takes the user's age using prompt().

// If the age is 18 or above, print:

// You are eligible to vote.

// Otherwise, print:

// You are not eligible to vote.

let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}