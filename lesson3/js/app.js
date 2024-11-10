let coders = [
    'Will',
    'Charlie',
    'Connor',
    'Josh',
    'Zeek',
    'Janjala',
    'Favor',
    'Lachelle',
    'Clint',
    'Christopher',
    'Renee',
    'Chloe',
    'Trelin',
    'Darius'
];

// console.log(`Good Morning ${coders[0]}`)
// console.log(`Good Morning ${coders[1]}`)
// console.log(`Good Morning ${coders[2]}`)
// console.log(`Good Morning ${coders[3]}`)
// console.log(`Good Morning ${coders[4]}`)
// console.log(`Good Morning ${coders[5]}`)
// console.log(`Good Morning ${coders[6]}`)
// console.log(`Good Morning ${coders[7]}`)
// console.log(`Good Morning ${coders[8]}`)
// console.log(`Good Morning ${coders[9]}`)
// console.log(`Good Morning ${coders[10]}`)
// console.log(`Good Morning ${coders[11]}`)
// console.log(`Good Morning ${coders[12]}`)
// console.log(`Good Morning ${coders[13]}`)

//Repetition Structures
/**
 * Looping 
 * 
 * for loop
 * while loop
 * forEach loop
 */

/**
 * for loop
 * 
 * Allows us to loop through a data set
 * 
 * syntax: 
 * 
 * for (initialization; condition; iteration) {
 * //do stuff
 * }
 */

// loop through the array, coders and say good morning to each coder

for (let i = 0; i < coders.length; i++) {
    //do stuff
    console.log(`Good Morning, ${coders[i]}`)
};

for (let i = coders.length - 1; i >= 0; i--) {
    console.log(`Good Morning, ${coders[i]}`);
};

for (let i = 1; i <=  10; i++ ) {
    console.log(i);
}