let mydate = new Date(); // Creates a new Date object with the current date and time

console.log(mydate); // Displays the complete Date object

console.log(mydate.toString()); // Converts date and time into a readable string format

console.log(mydate.toDateString()); // Returns only the date portion as a readable string

console.log(mydate.toISOString()); // Returns date and time in ISO 8601 format (UTC)

console.log(Date.now()); // Returns current timestamp in milliseconds since Jan 1, 1970

console.log(mydate.getTime()); // Returns timestamp of mydate in milliseconds since Jan 1, 1970

console.log(mydate.getFullYear()); // Returns the 4-digit year (e.g., 2026)

console.log(mydate.getMonth()); // Returns month (0-11), where 0 = January and 11 = December

console.log(mydate.getDate()); // Returns day of the month (1-31)

console.log(mydate.getDay()); // Returns day of the week (0-6), where 0 = Sunday

console.log(mydate.getHours()); // Returns hour (0-23)

console.log(mydate.getMinutes()); // Returns minutes (0-59)

console.log(mydate.getSeconds()); // Returns seconds (0-59)

mydate.setFullYear(2026); // Changes the year to 2026

mydate.setMonth(5); // Changes the month to June (months are 0-indexed)

mydate.setDate(18); // Changes the day of the month to 18

console.log(mydate); // Displays the updated date after modifications