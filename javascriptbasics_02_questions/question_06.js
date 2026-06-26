// Create the following array:
// let marks = [85, 97, 44, 37, 76, 60];
// Calculate the average marks of all the students.
// Print the average.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}

let avg = sum / marks.length;

console.log("Average marks =", avg);