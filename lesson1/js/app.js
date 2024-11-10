// single line comment

/* 
    multi line comment


    DATA 
        data is infomation; food for the computer to prosess 

        five primitive data types

        number => 2, 1, 4333, -89
        string => "hello world", "4", 'hello world'
        boolean => true, false 
        undefined
        null
*/

console.log(10 + 3);

/*
number 

any numaric character that can be calculated

with number we can write expressions

+ => addition 10 + 3
- => subtraction 10 - 3
* => multuplication 10 * 3
/ => division 10 / 3
** => exponets 10 ** 3
% => modulus 10 % 3 => returns the remainder

we can also order our opporations 

PEMDAS


*/

console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 ** 3);
console.log(10 % 3);

console.log((10 - 3) / 5 + 8 * 3);

console.clear();

/*
    string

    character text => any value/key on the keyboard

    strings are reprosented by quotations ""
    can be single or double quotes

    "hello world"

    white space is included in the string

    concatination => combine two or more strings
*/

console.log("Renee");
console.log("hello world");
console.log(" hello               world");

console.log('13');
console.log(13);

console.log(10 + 3);
console.log("10 + 3");

console.log("hello" + " " + 'world'); // helloworld

// console.log('you can't do this!);
console.log("you can't do this!");

console.log('coach said "you can use excapes!"')
console.log("coach said \"you can use excapes!\"")
console.log('coach said \t"you can use excapes!"')
console.log('coach said \n"you can use excapes!"')
console.log('coach said "you can use \nexcapes to make a quote work\n or to make haiku!"')

/*
boolean

bollean => tre or false

*/

console.log(false);
console.log(true);

/*
undefined
*/ 

console.log(undefined);

/*
null
*/

console.log(null);

/*
data storage => varables

    var, let, const

    syntex: 
        var varName = data;

    var keyword

    naming rules and conventions

    - must not begin with a number or any special charactor; must begin with a letter; generally begins with a lowercase letter

    - for multipule words no spaces or hyphons; use camelcase or underscore
    - variable names should mean something or represent the data

*/

console.clear()

var myName = 'Renee';
console.log(myName);

// var foo = 13;
var inventory; 
inventory = 13;

// var littleB = "b";
// var bigB = "B";

// console.log(littleB < bigB);// true

// console.log(littleB.charCodeAt(0), bigB.charCodeAt(0));

inventory = 12;

console.log(inventory);

inventory = inventory + 5;
console.log(inventory);

console.clear()

var subtotal = 28

var taxRate = 0.09

var total = subtotal + (subtotal * taxRate);

console.log(total);

/*tempeapture converter

take a temp in fahrenheith (fah) and convert it into celsius (cel)*/

//pseudocode => a human like way of writing a program; not language specific; focus is on the logic

/*
input => temp in fahrenheith
output => temp in celsius

SET fah
Set cel to fah (fah - 32) * 5 / 9
RETURN cel

input = temp in cel
output = temp in fah

SET cel 
SET fah to (cel * 9 / 5) + 32
*/ 




var fah = 212
var cel = (fah -32) * 5 / 9

console.log(cel);


var cel = 100;
var fah = (cel * 9 / 5) + 32;

console.log(fah);


var aString = 'We were too close to the stars';

// how to find out how many characers are in a string? .length

console.log(aString.length)

console.clear()

console.log(inventory);

// inventory= inventory + 10;

// augmented arithmetic

inventory += 10;

console.log(inventory);

inventory -= 3;

console.log(inventory);

var itemsToBeAdded = 20;

var itemsSold = 15;

inventory += itemsToBeAdded;

console.log(inventory);

inventory -= itemsSold;

console.log(inventory);

let coderTotal = 20;

const ssn = 452254758;

coderTotal -= 2;

console.log(coderTotal);
