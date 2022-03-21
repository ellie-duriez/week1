// // Activity 1
// Create a variable called age. Write an if statement
// that logs “Yes I can serve you” if the age is greater
// than 17 and else logs “You aren’t old enough”.
// Take your if statement and add a variable
// called country in.
// Eg. if age > 17 and country == “UK”.

let age =12;
let country = "UK";

if (age>17 && country === 'UK') {
    console.log('Yes I can serve you.');
} else {
    console.log('You aren\'t old enough');
}

// // Activity 2
// Create a variable for any pizza topping.
// Create a switch statement, if the topping is one of your
// favourite ingredients, log to the console “These are
// important ingredients for my pizza.” If you don’t mind
// having Pepperoni for example log to the console “I don’t
// mind having ${topping} on my pizza.
// Finally, for any topping you don’t like log “${topping}
// should not be on a pizza.”

let pizzaTopping = 'mushrooms';

switch (pizzaTopping) {
    case 'pineapple':
        console.log('This is an important ingredient for my pizza.');
        break;
    case 'olives':
        console.log(`I don\'t mind having ${pizzaTopping} on my pizza.`);
        break;
    case 'mushrooms':
        console.log(`${pizzaTopping} should NOT be on a pizza.`);
        break;
    default:
        console.log('Never tried that topping.');
        break;
}

// // Activity 3
// Create a variable called password.
// Check how many letters are in the password, if there are
// less than 8, log to the console that the password is too
// short. Otherwise log the password to the console. 

let password = 'iloveponies123';
password.length <8 ? console.log('Password is too short') : console.log(password);

// // Activity 4
// Create a variable called num.
// Check if the variable is divisible by 3 or 5. If it
// is, log “This number is divisible by 3 or 5”.
// Otherwise log something else. 

let num = '46';
if (num%3 === 0 || num%5 === 0) {
    console.log('This number is divisible by 3 or 5.');
} else {
    console.log('This number is not divisible by 3 or 5.');
}

// // Activity 5
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by
// 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log
// “fizz buzz” to the console. Otherwise log num to the console.

num = '9032475';
if (num%3 === 0 && num%5 ===0) {
    console.log('fizz buzz');
} else if (num%3 === 0) {
    console.log('fizz');
} else if (num%5 === 0) {
    console.log('buzz');
} else {
    console.log(num);
}

// // Activity 6
// Create a variable called num.
// Check if the number is a palindrome (looks the
// same forward as it does backwards e.g. 1001 or
// 20202).

num = '80808080808';
let reversedNum = '';
for (let step=1; step<=num.length; step++) {
    reversedNum += num[num.length-step];
}

reversedNum === num ? console.log(`${reversedNum} and ${num} are the same! Palindrome!`) : console.log("They are not the same. No palindrome.");

// // Activity 7
// Create a variable called time, a variable called placeOfWork
// and a variable called townOfHome. Create an if statement that
// logs to the console where someone is at times of the day. E.g. if
// the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work. 

let time = 7;
let placeOfWork = 'commuting';
let townOfHome = 'in my bed at home';

switch (time) {
    case 7:
        console.log(townOfHome);
        break;
    case 8:
        console.log('currently commuting');
        break;
    case 9:
        console.log(placeOfWork);
        break;
}

// // Activity 8
// Take the string
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the
// index of a last vowel in the string.

myString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'
let checkNum = myString.lastIndexOf('a');
let winningNum = myString.lastIndexOf('e');
if (checkNum > winningNum) {
    winningNum = checkNum}
checkNum = myString.lastIndexOf('i');
if (checkNum > winningNum) {
    winningNum = checkNum}
checkNum = myString.lastIndexOf('o');
if (checkNum > winningNum) {
    winningNum = checkNum}
checkNum = myString.lastIndexOf('u');
if (checkNum > winningNum) {
    winningNum = checkNum}

console.log(winningNum,'/',myString[winningNum]);


// // Activity 9
// Create a variable called word that takes a string. Create
// an if statement that checks if the last letter is the same as
// the first. If it is return true, otherwise return false.

let word = "teapot";
firstLetter = word[0];
lastLetter = word[word.length-1];
console.log(firstLetter,lastLetter);
console.log(firstLetter === lastLetter);

// // Activity 10
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the
// sum is even. If it is return the number, otherwise return
// the numbers multiplied together.

num1 = 435;
num2 = 94;
(num1+num2)%2 === 0 ? console.log(`Your sum of ${num1+num2} is even!`) : console.log(`Your sum of ${num1+num2} is not even!`)