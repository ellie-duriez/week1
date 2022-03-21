// Let’s edit our person object to include…
// A function called sayHi and when it’s called, it
// should return “Hello my name is ${this.name}”
const person = {
    name: 'Ellie',
    sayHi() {
        return `Hello my name is ${this.name}`
    }
}
console.log(person.sayHi())

// Activity 2:
// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a
// string saying [Your Pet Name] is eating/drinking. 

const pet = {
    name: 'Delilah',
    typeOfPet: 'cat',
    age: 5,
    colour: 'white with black patches',
    eat() { 
        return `${this.name} is eating.`
    },
    drink() {
        return `${this.name} is drinking.`
    }
}

console.log(pet.eat())

// // Activity 3 ----- V2 (improved attempt):
// // Create an object called coffeeShop with key values of:
// // branch, drinks with prices, food with prices
// // And methods called drinksOrdered and foodOrdered.
// // They should return a string saying [Your order] is … with all
// // items chosen with costs and total costs.

coffeeShop = {
    serverName: 'Ellie',
    orderNumber: 211,
    priceTotal: 0,
    VAT: 0.20,
    tip: 0.10,
    branch: 'Manchester Oxford road',
    drinks : {
        menu : [
            'filtered water',
            'smoothie',
            'kombucha',
            'juice',
            'milkshake',
            'tea',
            'coffee'
        ],
        prices : [
            1.00, //filtered water
            2.50, //smoothie
            2.75, //kombucha
            2.00, //juice
            3.00, //milkshake
            1.95, //tea
            2.25 //coffee
        ]
    },
    food : {
        menu: [
            'soup of the day',
            'avocado on toast',
            'glazed balsamic tofu',
            'udon lunch noodles',
            'hummus falafel pita',
            'red pesto pasta',
            'sourdough pizza slice'
        ],
        prices: [
            4.00, //soup of the day 
            3.50, //avocado on toast
            5.75, //glazed balsamic tofu
            5.50, //udon lunch noodles
            4.75, //hummus falafel pita
            4.50, //red pesto pasta
            3.75 //sourdough pizza slice
        ]
    }, 
    drinksOrdered() {
        let drinksOrderedList = []
        let drinksPriceTotal = 0
        for (let i = 0; i < customerOrder.length; i++) {
            for (let j = 0; j < coffeeShop.drinks.menu.length; j++) {
                if (customerOrder[i] === coffeeShop.drinks.menu[j]) {
                    drinksOrderedList.push(coffeeShop.drinks.menu[j] + ' - £'+coffeeShop.drinks.prices[j].toFixed(2))
                    drinksPriceTotal += coffeeShop.drinks.prices[j]
                }}}
        if (drinksOrderedList.length > 0) {
            coffeeShop.priceTotal +=drinksPriceTotal;
            return(`Your drinks order: \n${drinksOrderedList.join('\n')} \nTOTAL --- £${drinksPriceTotal.toFixed(2)}.\n`)
        }},
    foodOrdered() {
        let foodOrderedList = []
        let foodPriceTotal = 0
        for (let i = 0; i < customerOrder.length; i++) {
            for (let j = 0; j < coffeeShop.food.menu.length; j++) {
                if (customerOrder[i] === coffeeShop.food.menu[j]) {
                    foodOrderedList.push(coffeeShop.food.menu[j] + ' - £'+coffeeShop.food.prices[j].toFixed(2))
                    foodPriceTotal += coffeeShop.food.prices[j]
                }}}
        if (foodOrderedList.length > 0 ) {
            coffeeShop.priceTotal +=foodPriceTotal;
            return(`Your food order: \n${foodOrderedList.join('\n')} \nTOTAL --- £${foodPriceTotal.toFixed(2)}.\n`)
    }},
    receiveBill() {
        coffeeShop.orderNumber += 1;
        console.log(`-------------------\nOrder no #${coffeeShop.orderNumber}\n-------------------`);
        console.log(`${coffeeShop.foodOrdered()}\n${coffeeShop.drinksOrdered()}\nTOTAL PRICE: £${(coffeeShop.priceTotal+coffeeShop.priceTotal*coffeeShop.VAT+coffeeShop.priceTotal*coffeeShop.tip).toFixed(2)} (£${coffeeShop.priceTotal} plus ${coffeeShop.VAT*100}% VAT and a ${coffeeShop.tip*100}% tip).\n\n-`);
        console.log(`You were served today by: ${coffeeShop.serverName} \n-\nThe 'Feel Good Food' cafe @ ${coffeeShop.branch}\n${Date()}`);
        }
}

// USING ITEMS ON THE MENU EXACTLY AS THEY ARE WRITTEN (LOWERCASE, SPACED AND SPELT CORRECTLY), 
// WRITE YOUR FULL ORDER INTO THE ARRAY. NO LIMIT ON NO. OF ELEMENTS. DUPLICATES ARE FINE. ITEMS NOT ON THE MENU WILL BE IGNORED. :
let customerOrder = ['smoothie', 'hummus falafel pita', 'sourdough pizza slice', 'filtered water','kombucha','soup of the day'];
// SIMPLY RUN THIS FUNCTION TO RECIEVE THE BILL/RECEIPT FOR YOUR ORDER.
coffeeShop.receiveBill()

// Activity 3 ----- V1 (original attempt)

// let totalCost = 0
// let foodCost = 0
// let drinkCost = 0

// const coffeeshop = {
//     branch: 'Deansgate',
//     drinks: ['tap water',0,
//             'apple juice',2,
//             'coke 250ml',1.25],
//     foods: ['pizza',5,
//             'panini',4,
//             'toastie',3.50],
//     drinksOrdered(drinkChoice) {
//         drinkCost = this.drinks[this.drinks.indexOf(drinkChoice)+1];
//         totalCost+=drinkCost;
//         return `The drink you have ordered is ${this.drinks[this.drinks.indexOf(drinkChoice)]}, costing ${drinkCost}. The total price is now ${totalCost}.`
//     },
//     foodOrdered(foodChoice) {
//         foodCost = this.foods[this.foods.indexOf(foodChoice)+1];
//         totalCost+=foodCost;
//         return `The dish you have ordered is ${this.foods[this.foods.indexOf(foodChoice)]}, costing ${foodCost}. The total price is now ${totalCost}.`
//     }
// }

// // Place your orders here! Total cost will accumulate and update.
// console.log(coffeeshop.drinksOrdered('tap water'));
// console.log(coffeeshop.drinksOrdered('coke 250ml'));
// console.log(coffeeshop.foodOrdered('pizza'));
// console.log(coffeeshop.foodOrdered('toastie'));