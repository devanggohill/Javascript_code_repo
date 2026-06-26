// Write a JavaScript program that:

// Takes a string from the user using prompt().
// Counts how many vowels (a, e, i, o, u) are present in the string.
// Prints the total count.

let str = prompt("Enter a string:");
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
    ) {
        count++;
    }
}

console.log("Number of vowels =", count);