//Boolean true false

var t = true;
var f = false;

console.log(t, f);

/**
 * boolean operators
 * 
 *  < => less than
 *  > => greater than
 *  == => equal to
 *  === => is strictly equal to
 *  <= => is less than or equal to
 *  >= => greater than or equal to
 */

console.log(5 > 8); //false
console.log(5 < 8); //true
console.log(5 == 5); //true
console.log(5 === 5); //true


console.log(4 == 4); //true
console.log('four' == 'four'); //true
console.log(4 === '4'); //false
console.log(4 >= '4'); //true
console.log(4 === 4); //true

console.log('four' == 'four'); //true
console.log('four' > 'FOUR'); //true
console.log('four' < 'FOUR'); //flase


console.clear()
/**
 * logical operators
 * 
 *  && => and 
 *  || => or
 *  ! => not
 */

console.log(t && t);//true
console.log(t || f);//true
console.log(f || t);//true
console.log(t && f);//false
console.log(f && f);//false
console.log(t || t);//true
console.log(f || f);//false

console.log(!t);//false
console.log(!f);//true

console.log('true or false and not true or not false:',(t || f) && (!t ||!f));

/**
 * building the evil robot
 * 
 * conditionals
 * 
 *  if statemant
 * 
 *  syntax
 * 
 *          if (conditons) {
 *      //do stuff
 *      }
 */

let num = 13;

if (num > 7) {
    console.log(`${num} is greater the seven`);
}

/**
 *  if/else statement
 * 
 *     id (condition) {
 *      //do stuff
 *  } else {
 *      //do something else
 *  }
 */

if (num > 4) {
    console.log(`${num} is greater the 4`);
    } else {
        console.log(`{num} is not greater the 4`);
    }

/**
 *  else if statement
 *  
 *  if (condition) {
 *  //do stuff
 *  } else if (another condition) {
 *  //do other stuff } else {
 *  // do something else
 *  }
 */

/**
 *  write a program that tells if a nuber is odd or even
 *  if the number is odd, consle "odd". if thenumber is even, console "even"
 */


// if (num % 2 === 0) {
//     console.log('even');
// } else if (num % 2 === 1) {
//     console.log('odd');
// } else {
//     console.log('zero');
// }

if (isNaN(num)) {
    console.log('not a number');
} else {
    if (num === 0) {
        console.log('zero');
    } else if (num % 2 === 1) {
        console.log('odd');
    } else {
        console.log('even');
    }
}

console.log('6' % 2);

//write a program that will tell if a number is positive or negitive

if (num % 2 === 0) {
        console.log('positive');
    } else if (num % 2 === 1) {
        console.log('negitive');
    } else {
        console.log('zero');
    }

    if (isNaN (num) !== 'number') {
        console.log('mot a number');
    } else {
        if (num === 0) {
            console.log('zero');
        } else if (num > 0) {
            console.log('positive');
        } else {
            console.log('negitive');
        }
    }

    /**
     * switch
     * 
     * syntax: 
     * 
     *      switch (expression) {
     *      case A: 
     *          //do stuff
     *          break;
     *         case B: 
     *              //do stuff
     *              break;
     *          case N: 
     *              //do stuff
     *              break;
     *           default: 
     *              //do stuff
     *              break;
     *      }
     */

    const now = new Date()

    console.log(now);
    console.log(now.getFullYear());
    console.log(now.getMonth());
    console.log(now.getDate());
    console.log(now.getDay());
    
    const today = new Date().getDay()
    
switch (today) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednsday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Satuday');
        break;
    default:
        console.log('Error');
        break;
}
    

console.clear()

    // ternary opporator

    /**
     * syntax:
     * 
     *      condition ? do stuff : do something else
     */

    let isGameActive = false;

    isGameActive ? console.log('Game on') : console.log('Game over');

    let foo = 13;

    foo == 0 ? console.log('zero') : foo % 2 == 0 ? console.log('even') : console.log('odd');
    
    console.clear()

    /**
     * build a new an dimproved temp converter
     * convert a temp from cel to fah. if the temp in fah is below freezing point, console "freezing". if the temp is above the boiling point console "boiling". otherwize console the temp
     */


    // let fah = 212;
    // let cel = (fah -32) * 5 / 9;
    // fah >= 212 ? console.log('boiling') : fah <= 32 ? console.log('freezing') : console.log({temp});

    // if (isNaN (fah)) {
    //     console.log('not a number');
    // } else {
    //     if (fah >= 32) {
    //         console.log('freezing');
    //     } else if (fah <= 212) {
    //         console.log('boiling');
    //     } else {
    //         console.log({temp});
    //     }
    // }

    //     var fah = 212
// var cel = (fah -32) * 5 / 9

// console.log(cel);

// var cel = 100;
// var fah = (cel * 9 / 5) + 32;

    let cel = 0;
    let fah = (cel * (9 / 5)) + 32;
    if (isNaN(cel)) {
        console.log('not a number');
    } else {
        if (fah <= 32) {
            console.log('freezing');
        } else if (fah >= 212) {
            console.log('boiling');
        } else {
            console.log(fah);
            
        }
    }

    const arr = [
        1, 2, 3, 4
    ]

    const arr2 = [
        [1,2],
        [1, 3, [1, 2, 3,]],
        [[1], [2,6], [1, 8, 4]]
    ]

    console.clear()

    //build a light switch. if the light is on, turn it off. if the light is off, turn it on.

    let light = 'off';

    light == 'on' ? console.log('off') : light = 'off' ? console.log('on') : console.log('light');


    let lightIsOn = false;

    // if (lightIsOn) {
    //     lightIsOn = !lightIsOn
    // } else {
    //     lightIsOn = true
    // }

    
    lightIsOn ? lightIsOn = !lightIsOn : lightIsOn = true;
    
    console.log(`The light is on?:`, lightIsOn);

// if (2) {
//     console.log('hey');
// } else {
//     console.log('you');
// }

// console.log(f + f);
// console.log(t + t);
// console.log(f + 567);
// console.log(t + 567);
// console.log((f / (t + t)));
// console.log((f % (t + t)));