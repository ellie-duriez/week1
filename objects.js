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

// const pet = {
//     name: 'Delilah',
//     typeOfPet: 'cat',
//     age: 5,
//     colour: 'white with black patches',
//     eat() { 
//         return `${this.name} is eating.`
//     },
//     drink() {
//         return `${this.name} is drinking.`
//     }
// }

// console.log(pet.eat())

// // Activity 3:
// // Create an object called coffeeShop with key values of:
// // branch, drinks with prices, food with prices
// // And methods called drinksOrdered and foodOrdered.
// // They should return a string saying [Your order] is … with all
// // items chosen with costs and total costs.

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