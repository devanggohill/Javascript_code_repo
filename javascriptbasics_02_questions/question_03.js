// Write a JavaScript program that:

// Takes a number N from the user.
// Prints only the even numbers from 1 to N.

num = Number(prompt("Enter number to print even numbers till it= "))
for(let i=0 ;i<= num ;i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

