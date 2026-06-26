// Write a JavaScript program that:

// Takes a number from the user using prompt().
// Checks whether the number is positive, negative, or zero.
// Prints one of the following:
// "Positive Number"
// "Negative Number"
// "Zero"

let user_input = Number(prompt("Enter a number to check whether it is positive, negative, or zero:"));

if (user_input > 0) {
    console.log("Positive Number");
} else if (user_input < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}