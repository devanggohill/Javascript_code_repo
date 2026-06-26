// Create this array:
// let prices = [250, 645, 300, 900, 50];
// Apply a 10% discount to each item.
// Store the updated price back into the same array.
// Print the updated array.

let prices = [250, 645, 300, 900, 50];

for (let i = 0; i < prices.length; i++) {
    let discount = prices[i] * 0.10;
    prices[i] = prices[i] - discount;
}

console.log(prices);