// Arrays => storage container that holds multipule pieces of data

/*
syntax

let arrName = [item1, item2, item3,..., itemN];

each item in an array is given an index value

items are zero-indexed

arrName [0] = first item in the array
*/

let coder = 'Renee';
let coders = ['lana', 'Abby', 'mom', 'dad', 'gavin'];

console.log(coders);

const mom = coders[2];

console.log(mom);

console.log(coders[3]);
console.log(coders[10 / 5]);

var three = 3;

console.log(coders[three]);

console.log(coders['2']);

console.log(coders['two']);


// type coercion
console.log(1 + 1)//2
console.log('1' + '1')//'11'
console.log('1 + 1')//'1 + 1'
console.log(1 + '1')//'11'

console.log(2 * 2)//4
console.log('2' * "2")//4
console.log(2 * '2')//4

console.log('foo' * 'boo');//NaN
console.log('hello' + 'll');//helloll
console.log('hello' / 'll');//NaN

console.log(coders[4]);

console.log(coders[coders.length - 1]);
console.log(coders[coders.length / 5]);


console.clear()

coders[0] = 'Renee';

console.log(coders);

/**
 * build a random menu
 * 
 * write a program that will randomize an appetizer, entree, dessert, and drink. for each selection, build an array of 5 items ex.['manicotti', 'pizza', 'carbonara', limon ricotta pasta', 'creamy tuscan chicken']
 * 
 * reture the menu as a string 
 * 
 * ex. today you will have calamari, manicotti, tiramisu, and pepsi with lemon.
 * 
 * SET apps, entress, drinks
 * SET message
 * 
 * 
 */

//Math.random()
console.log(Math.random() * 100)

//Math.floor()
console.log(Math.floor(5.8));
console.log(Math.floor(5.3));

console.clear()

let apps = [
    "Chopped Italian Salad",
    "Wings",
    "Catfish",
    "Calamari",
    "Grits"
]

let entrees = [
    "Pappa al Pomodoro",
    "Manicotti",
    "Ossobuco",
    "Lemon Ricotta Pasta",
    "Creamy Tuscan Chicken"
]


let desserts = [
    "Tiramisu",
    "Chocolate Cake",
    "Brownie",
    "Pumpkin Pie",
    "Apple Pie"    
]

let drinks = [
    "Pepsi & Lemon",
    "Sweet Tea",
    "Coke",
    "Rootbeer",
    "Dr.Pepper"
]

drinks.push('milkshake');
// let idx = Math.floor(Math.random() * 5);
let app = apps[Math.floor(Math.random() * apps.length)]
let entree = entrees[Math.floor(Math.random() * entrees.length)]
let dessert = desserts[Math.floor(Math.random() * desserts.length)]
let drink = drinks[Math.floor(Math.random() * drinks.length)]

// console.log(idx);
// add an item to an array
// .push() => adds an item to the end os an array
// drinks.push('Milkshake')
// console.log(drinks);
// .pop => removes the last item in an array 
// drinks.pop()
// console.log(drinks);
// .unshift() => adds an item to the beginning of an array
// drinks.unshift('milkshake')
// console.log(drinks);
// .shift => removes the first item in an array
// drinks.shift()
// console.log(drinks);



// let message = "Today you will have " + app + ", " + entree + ", for dessert " + dessert
// + " and a tall glass of " + drink + " to wash it down";

// let message =`For your meal you will have a ${app} as an appetizer, you entress is ${entree}, ${dessert} for dessert, and a tall glass of ${drink} to wash it down.`

// Your total is ${30.99 + (30.99 * 0.07)}

// console.log(message);


// random outfit
let shirts = [
    "Black Crop Top",
    "Brown Angle Crop Top",
    "Tan Bodysuit", 
    "Grey Sweater",
    "Navy Blue Tank Top"
]

let bottoms = [
    "Black skirt",
    "Army Green Cargo Pants",
    "stonewashed Jeans",
    "Tan Shorts",
    "White Shorts"
]

let shoes = [
    "Black heels",
    "Black & White Jordans",
    "Convers",
    "Ugg Boots",
    "Combat Boots"
]

let styles = [
    "Y2K",
    "Cyber Punk",
    "vintage",
    "Dark Academia",
    "Coquette"
]

let shirt = shirts[Math.floor(Math.random() * shirts.length)]
let bottom = bottoms[Math.floor(Math.random() * bottoms.length)]
let shoe = shoes[Math.floor(Math.random() * shoes.length)]
let style = styles[Math.floor(Math.random() * styles.length)]

let message =`Todays outfit will start with a ${shirt} that will be paired with ${bottom} and ${shoe} for todays look. Your outfit will be styleed in a ${style} style..Slay`

console.log(message);


