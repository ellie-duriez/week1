// // Activity 1
// Take this code and turn it into arrow function
const factorial = n => {
    if ((n === 0) || (n ===1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(3)) // testing the function works as intended

// // Activity 2
// Edit the below snippet to include two parameters and a
// running order count updated when the function is called:
let orderCount = 16;

const takeOrder = (topping1='no extra first topping',topping2='no extra second topping') => {
    console.log(`Pizza with ${topping1} and ${topping2} ... order number #${orderCount}.`);
    orderCount++;
}

takeOrder('pineapple'); // testing the function

// // Activity 3
// Cash machine time! Let’s create one that:
// Dispenses cash if your pin number is correct and your
// balance is equal to, or more than, the amount you’re
// trying to withdraw!

const pin = 9832;
let amount = 100; 

const cashMachine = (pinReq,amountReq) => {
    if (pinReq == pin) {
        if (amount >= amountReq) {
            amount-=amountReq;
            console.log(`Withdrew £${amountReq}, new balance: £${amount}`);
            return;
        }
    }
    console.log('Declined.');
} 

cashMachine(9832,90); // testing the function

