let customerName = "Mina";
let productCategory = "Electronics";
let productPrice = 10000;
let quantity = 2;
let couponCode = "SAVE10";
let paymentMethod = "Visa";

let subtotal = productPrice * quantity;
let discount = 0;

if (productCategory === "Electronics") {
    discount = subtotal * 0.10;
} else if (productCategory === "Clothes") {
    discount = subtotal * 0.15;
} else if (productCategory === "Food") {
    discount = subtotal * 0.05;
}

let total = subtotal - discount;

if (couponCode === "SAVE10") {
    total = total - (total * 0.10);
}

if (paymentMethod === "Visa") {
    total = total - (total * 0.05);
}

if (total < 0) {
    total = 0;
}

let vat = total * 0.14;
let finalPrice = total + vat;

console.log("========== INVOICE ==========");
console.log("Customer Name: " + customerName);
console.log("Category: " + productCategory);
console.log("Price: " + productPrice);
console.log("Quantity: " + quantity);
console.log("Subtotal: " + subtotal);
console.log("VAT: " + vat);
console.log("Final Price: " + finalPrice);
console.log("=============================");