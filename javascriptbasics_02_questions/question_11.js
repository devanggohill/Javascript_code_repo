// Write a JavaScript program that:

// Takes two numbers from the user.
// Checks which number is greater.
// If both numbers are equal, print:

let input = prompt("Enter two numbers separated by a space:");

let [a, b] = input.split(" ");

a = Number(a);
b = Number(b);

if (a > b) {
    console.log(a + " is greater.");
} else if (b > a) {
    console.log(b + " is greater.");
} else {
    console.log("Both numbers are equal.");
}