/**Functions
 * 
 * A function is an executed task that is stored away and can be used whenever called
 * 
 * a function retures a specific output given a single or multiple inputs
 * 
 * syntax:
 * 
 *      function funcName(args) {
 *          //do stuff
 *          return statement
 *       }
 * 
 *      funcName(args)
 * 
 *  ES6
 * 
 *      arrow functions
 * 
 *     const funcName =(args)=> {
 *          //do stuff
 *          return statement
 *      }
 */

function add5() {
    console.log(`this is boring`);
    return 4 + 5;
}

// function addTowNumbers(a = 4, b = 5) {

//     return a + b;
// }

//refactor addTwoNumbers => writing as an arrow function

// const addTwoNumbers =(a =4, b = 5)=> {
//     return a + b;
// }

const addTwoNumbers =(a =4, b = 5)=> a + b;

// console.log(add5);//logs out the function

// console.log(add5(7));//logs the solution
// console.log(add5(2));
// console.log(add5(10));

console.log(addTwoNumbers());
console.log(addTwoNumbers(7));
console.log(addTwoNumbers(undefined, 19));
console.log(addTwoNumbers(2, 4));
console.log(addTwoNumbers(-11, 44));


// function greetUser(user = 'Guest') {
//     return `Good morning, ${user}`;
// }

const greetUser=(user = 'Guest')=> `Good morning, ${user}`;

greetUser()


console.log(greetUser());
console.log(greetUser('Renee'));
console.log(greetUser('Mother'));
console.log(greetUser('Father'));

console.clear()

//Scope 

/**
 * Global scope => a variable is accessible throughout the file
 * 
 * local scope => a variable is accessible only whithin local
 */

let scope = 'global';

function sayScope() {
    let scope = 'local'
    console.log(`The scope is now: ${scope}`);
    return scope;
}

console.log(`The scope is ${scope}`); //global
sayScope(); //local
console.log(scope); //local

console.log(`the scope is ${sayScope()}`);

console.clear()

//write a function a temp in cel and convert it to fah; reture the new temp

    //     var fah = 212
// var cel = (fah -32) * 5 / 9

// console.log(cel);

// var cel = 100;
// var fah = (cel * 9 / 5) + 32;

// let cel = 212
// let fah =  (cel * (9 / 5)) + 32;

function convertToFah(temp = 0) {
    let fah = (temp *( 9 / 5) + 32);
    console.log(`${temp} degrees cel is ${fah} degrees fah`);
    return fah
}

convertToFah();
convertToFah(100);
convertToFah(32);


//write a function that takes a temp and a unit as arguments. if the unit is 'cel' convert the temp to fah. if the unit is 'fah' convert the temp to cel. return the newTemp

// const addTwoNumbers =(a =4, b = 5)=> a + b;
// const convertTemp =(temp = 0, unit = 'cal')=> 

// //write function
// function convertTemp(temp = 0, unit = 'cel') {
//     //set newTemp
//     let newTemp
//     let message

//     //if the unit is 'cel'
//     if(unit == 'cel') {
//         //convert thetemp to fah
//         newTemp = (temp * (9 / 5)) + 32
//         message = `${temp} degrees cel is ${newTemp} degrees fah.`
//         //if unit is 'fah'
//     } else if (unit == 'fah') {
//         //conver the temp to cel
//         newTemp = (temp - 32) * 5 / 9
//         message = `${temp} degrees fah is ${newTemp} degrees cel.`
//     } else {
//         message = 'error'
//     }

//     console.log(message);
//     return newTemp;
// }

//convertTemp() //32
//convertTemp(100, 'cel') //212
//convertTemp(32, 'fah') //0
//convertTemp(212, 'fah') //100

//i dont know what im doing AHHHHHHHHHHHHHHH!!!!!!!!!!!

console.clear()

//run the arrow function
console.log(addTwoNumbers(16, 17));
console.log(greetUser('Renee'));


const numbers = [
    1, 2, 3, 4, 5
]

numbers.forEach(number => ()=> console.log(number * 2));



// const addTwoNumbers =(a =4, b = 5)=> a + b;
const convertTemp =(temp = 0, unit = 'cal')=> {
    // set newTemp
    let newTemp
    let message

    //if the unit is 'cel'
    if(unit == 'cel') {
        //convert thetemp to fah
        newTemp = (temp * (9 / 5)) + 32
        message = `${temp} degrees cel is ${newTemp} degrees fah.`
        //if unit is 'fah'
    } else if (unit == 'fah') {
        //conver the temp to cel
        newTemp = (temp - 32) * 5 / 9
        message = `${temp} degrees fah is ${newTemp} degrees cel.`
    } else {
        message = 'error'
    }

    console.log(message);
    return newTemp;
}

console.clear()

/**
 * write an arrow function that will take a number, num, as as argument and return if the number is odd or even. test with 3 different numbers
 */


// const num =(num % 2 === 0, num % 2 === 1)=> let num = 13;

// console.log(num);


// const evenOdd =(num) => {
//     if (num == 0) {
//         console.log('zero');
//     } else if (num % 2 === 0) {
//         console.log('even');
//     } else (num % 2 === 1) ;
//         console.log('odd');
//     } 


// evenOdd(2)

const oddOrEven = num => {
    let message
    // isNaN(num) ? message = 'not a number': null

    if (isNaN(num)) {
        console.log('not a number');
        return
    }

    if(num == 0) {
        message =  'zero';
    } else if (num % 2 ==1) {
        message = 'odd';
    } else {
        message = 'even';
    }

    console.log(message);
}

oddOrEven(12);
oddOrEven('foo');