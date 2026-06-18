/*
NUMBERS AND MATHS IN JAVASCRIPT

Number:
JavaScript uses the Number data type for both integers and decimals.

const score = 100;
const balance = 99.99;

Useful Number Methods:

score.toString()      // Converts number to string
num.toFixed(2)        // Fixed decimal places
num.toPrecision(4)    // Total digits
num.toLocaleString()  // Formats number with commas

Examples:

(100).toString()            // "100"
(123.456).toFixed(2)        // "123.46"
(123.456).toPrecision(4)    // "123.5"
(1000000).toLocaleString()  // "1,000,000"

Math Object:

Math.abs(-10)      // 10
Math.round(4.6)    // 5
Math.ceil(4.1)     // 5
Math.floor(4.9)    // 4
Math.min(1,2,3)    // 1
Math.max(1,2,3)    // 3
Math.random()      // Random number between 0 and 1

Random Number Between 1 and 10:

Math.floor(Math.random() * 10) + 1

Random Number Between Min and Max:

Math.floor(Math.random() * (max - min + 1)) + min

Important:

typeof NaN // "number"

Interview Revision:

abs()      -> Absolute value
round()    -> Nearest integer
ceil()     -> Always round up
floor()    -> Always round down
min()      -> Smallest value
max()      -> Largest value
random()   -> Random number
*/