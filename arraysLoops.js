// // activity 1
// Create an array that lists your favourite films, up to 5 elements.
// Add 2 more using a method.
// Use a loop to cycle through the array
let faveSeries = ['Game of Thrones','Lost','Doctor Who'];
faveSeries.push('Torchwood','Being Human');
for (let i = 0;i<faveSeries.length;i++) {
    console.log(faveSeries[i]);
}

// // activity 2
// Generate 6 random numbers between
// 1-50 and log them to the console.
for (let i = 0;i<6;i++) {
    console.log(Math.floor(Math.random()*50));
}

// // activity 3
// If we can create a loop to put 0-9 on the screen, how
// can we count from 9-0? Create a program that doesthis
for (let i = 9;i>=0;i--) {
    console.log(i);
}

// // activity 4
// Displays 4 films stored in an array.
// Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is Ghostbusters.
// If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo!
// we want Ghostbusters!
let films = ['Ghostbusters','Home Alone','Batman','Titanic'];
for (let i = 0;i<films.length;i++) {
    console.log(films[i]);
}
films[3] === 'Ghostbusters' ? console.log('Yay it\'s Ghostbusters!') : console.log('Boo!');

// // activity 5
// Generate a random number between 1 and 30 six times.
// For each random number generated, check if
// this number of divisible by 7 or not.
// Log out a message to the console if it is divisible
// by 7 or not. 
for (let i = 0;i<6;i++) {
    let num = Math.floor(Math.random()*30);
    console.log(num);
    if (num % 7 === 0) {
        console.log('This number is divisible by 7!');
    } else {
        console.log('This number is NOT divisible by 7.');
        }
    }

// // activity 6
// Imagine you’re a programmer for a social media platform! You have
// been tasked with building a prototype for a mutual followers program.
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
// In these arrays place 4 names as strings. Make sure there are 2 names
// that are in BOTH arrays.
// > Using a nested loop iterate over both arrays and console.log out the
// matching follower.

let bobsFollowers = ['Jamie','Isla','Neil','Beth','Emily','Tamsin'];
let hannahsFollowers = ['Ben','Harry','Noah','Emily','Micheal','Tamsin'];

for (let i=0;i<bobsFollowers.length;i++) {
    for(let y=0;y<hannahsFollowers.length;y++) {
        if (bobsFollowers[i] === hannahsFollowers[y]) {
            console.log(bobsFollowers[i], 'follows both Bob and Hannah!');  
        }
    }
}
// // activity 7
// Research on do...while loop, find
// out about the difference between
// for loop, while loop and do...while
// loop. Give an example of each.
// What are the pros and cons?
let i=5;
while (i<5) {
    console.log(i)
    i++;
}
// while loop is very open ended and can evaulate any condition and end when that condition no longer evaulates to true

i=5;
do {
    console.log(i);
    i++;
} while(i<5); 

// do/while loop always runs the loop once, even if the condition is false as the condition is not evaluated until after it has read the statements before it.

for (i=5;i<5;i++) {
    console.log(i)
    i++
}

// while true, itterates though a specified number of steps (startPosition;breakCondition;incrementValue)