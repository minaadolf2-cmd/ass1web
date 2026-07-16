let userPin = "1234";
let balance = 5000;
let attempts = 0;
let accountLocked = false;

let enteredPin = prompt("Enter your PIN:");

while (enteredPin !== userPin) {
    attempts++;

    if (attempts === 3) {
        accountLocked = true;
        console.log("Your account has been locked.");
        break;
    }

    console.log("Incorrect PIN.");
    enteredPin = prompt("Enter your PIN again:");
}

if (!accountLocked) {

    let operation = prompt("Choose an operation:\n1- Withdraw\n2- Deposit\n3- Check Balance\n4- Change PIN");

    if (operation === "1") {

        let amount = Number(prompt("Enter amount to withdraw:"));

        if (amount <= balance) {
            balance = balance - amount;
            console.log("Withdrawal successful.");
            console.log("Current Balance: " + balance);
        } else {
            console.log("Insufficient balance.");
        }

    } else if (operation === "2") {

        let amount = Number(prompt("Enter amount to deposit:"));

        if (amount > 0) {
            balance = balance + amount;
            console.log("Deposit successful.");
            console.log("Current Balance: " + balance);
        } else {
            console.log("Invalid deposit amount.");
        }

    } else if (operation === "3") {

        console.log("Current Balance: " + balance);

    } else if (operation === "4") {

        let newPin = prompt("Enter new 4-digit PIN:");

        if (newPin.length === 4) {
            userPin = newPin;
            console.log("PIN changed successfully.");
        } else {
            console.log("PIN must contain exactly 4 digits.");
        }

    } else {

        console.log("Invalid operation.");

    }
}