// Method 1 - Multiline string
console.log(`
    |    | 
    |    | 
    |    | 
--------------
    |    | 
    |    | 
    |    | 
--------------
    |    | 
    |    | 
    |    | `)

// Method 2 - Arrays
let tableParts = ['    |    |     ','--------------'];
console.log(tableParts[0]);
console.log(tableParts[0]);
console.log(tableParts[0]);
console.log(tableParts[1]);
console.log(tableParts[0]);
console.log(tableParts[0]);
console.log(tableParts[0]);
console.log(tableParts[1]);
console.log(tableParts[0]);
console.log(tableParts[0]);
console.log(tableParts[0]);

// Method 3 - Loops
for (let step = 0; step<3; step++){
    console.log("    |    |     ");
}
console.log('--------------')
for (let step = 0; step<3; step++){
    console.log("    |    |     ");
}
console.log('--------------')
for (let step = 0; step<3; step++){
    console.log("    |    |     ");
}

// Extra Activity 1: Can you log me, three lines to the console. First line should tell me your name. Second line should tell me your age. Third line should tell me your star sign. 

console.log('Ellie');
console.log(26);
console.log('Libra');

// Extra Activity 2: Research another String Method and Number Method that you can show me tomorrow. This can be anything you like but please have a piece of working code that demonstrates it. 

console.log('I love dogs!'.replace('dogs','cats'));

