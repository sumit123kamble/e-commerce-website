console.log("Hello from Sauce E-Commerce!");
console.log("Welcome to our Ketchup & Sauce Store");

// Simple product data
const products = [
    { id: 1, name: "Classic Tomato Ketchup", price: 150 },
    { id: 2, name: "Spicy Hot Sauce", price: 200 },
    { id: 3, name: "BBQ Sauce", price: 180 }
];

console.log("\nOur Products:");
products.forEach(product => {
    console.log(`- ${product.name}: ₹${product.price}`);
});