// Challenge 1: E-Commerce Product Price Filter and Discount Logic

function getDiscountedPrices(priceArray) {
    // Step 1: Filter lga kar sirf 100 se bade prices chune
    // Step 2: Map lga kar sab par 10% discount (0.9 se multiply) kiya
    return priceArray
        .filter(price => price > 100)
        .map(price => price * 0.9);
}

// Code Testing (Output Verification)
const products =;

console.log("Original Prices:", products);
console.log("Discounted High-Value Prices:", getDiscountedPrices(products));

// Expected Output: [108, 405, 180]
