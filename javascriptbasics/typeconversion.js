let score = "33"
console.log(typeof score)

let valueinNumber = Number(score)
console.log(typeof valueinNumber)

// when we convert 33 = number possible 
// but 33abc = nan
// also devang = nan
// true = 1 false = 0 
// undefined = nan 
// nan = o 

// String to Number
let scor = "33";
console.log(Number(scor));      // 33
console.log(typeof Number(scor)); // number

// Invalid String to Number
let name = "Deva";
console.log(Number(name));       // NaN

// Boolean to Number
console.log(Number(true));       // 1
console.log(Number(false));      // 0

// Number to String
let age = 22;
console.log(String(age));        // "22"
console.log(typeof String(age)); // string

// Number to Boolean
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false

// String to Boolean
console.log(Boolean("Hello"));   // true
console.log(Boolean(""));        // false

// Null and Undefined
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN