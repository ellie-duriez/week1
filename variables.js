// Activity 1
// Create a program that stores someone’s name,
// age and favourite colour and log it to the console
// in a complete sentence using Template Literals.
// Update all of your variables and write out a
// new sentence underneath your original.

let name = 'ellie';
let age = 26;
let faveFood = 'pizza';
console.log(`My name is ${name}, I am ${age} years old and my favourite food is ${faveFood}`)
name = 'simon';
age = 36;
faveFood = 'mango';
console.log(`My name is ${name}, I am ${age} years old and my favourite food is ${faveFood}`)

// Activity 2
// Create a program that stores what you eat today
// for breakfast, lunch and dinner. Log these to the
// console.
// Update each of these variables to what you
// will eat tomorrow. Log these to the console. 

let breakfast = 'toast';
let lunch = 'soup';
let dinner = 'stirfry';
console.log(`${breakfast}\n${lunch}\n${dinner}`);
breakfast = 'porridge oats';
lunch = 'sandwich';
dinner = 'spaghetti';
console.log(`${breakfast}\n${lunch}\n${dinner}`);

// Activity 3
// Create a program that calculates the number
// of days from today to your birth date. 

const birthDate = new Date('1995,10,01');
const todaysDate = new Date();
const difference = todaysDate-birthDate;
const myAge = Math.floor(difference / (1000 * 60 * 60 * 24));
console.log(birthDate)
console.log(todaysDate)
console.log(myAge,'days since you were born')


// Activity 4
// > Create 9 variables: space1, space2… space9.
// > Assign either the value ‘x’,’o’,’ ‘, to each of
// these variables.
// > Insert the variables into your board using the
// ${varName} syntax and make it look like the
// displayed board.
const x = 'x';
const o = 'o';
const empty = ' ';
console.log(`  
     |     |    
  ${x}  |  ${o}  |  ${empty}  
     |     |       
-----------------
     |     |       
  ${x}  |  ${x}  |  ${empty}   
     |     | 
-----------------
     |     |    
  ${o}  |  ${empty}  |  ${empty}  
     |     |      `);

    let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";
let space0 = " ";
let i = "|";
let j = "-----------";
