function countVowels(str) {
    str = str.toLowerCase();
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

    return count;
}

// Taking input from the user
let userInput = prompt("Enter a string:");

// Calling the function
let result = countVowels(userInput);

console.log("Number of vowels =", result);