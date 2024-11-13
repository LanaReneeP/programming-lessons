/**
 * DOM
 * 
 * Document Object Model
 *          --looks like a tree diagram (root, branches, nodes)
 * 
    access the DOM
 * 
            byTagNames (p, ul, div)
            querySelector (.class, id)
            querySeclectorAll (.class, id)
            byId (id)
 */

// document.getElementById('myName')

// console.log(document.getElementById('myName'));

let myName = document.getElementById('myName')

myName.innerText = 'Renee'

//console.log(myName.style)
// myName.style.fontFamily = 'sans-serif'
// myName.style.color = 'pink'

// console.log(myName);

myName.classList.add('pink')

myName.classList.remove('pink')

myName.classList.add('purple')




// let hero = 'Superman'
// let alias = 'Clark Kent'
// let powers = ['super strength', 'x-ray vision', 'super speed', 'heat vision']
// let ememies = ['Lex Luther', 'Doomsday', 'Darkseid']


// const heroName = document.getElementById('heroName')
// heroName.innerText = hero

// const aliasName = document.getElementById('aliasName')
// aliasName.innerText = alias

// const powerList = document.getElementById('powerList')

// const enemyList = document.getElementById('enemyList')

//loop thriugh array and create an li for each element then append to powerList
// powers.forEach(power => {
    //do stuff
    //const li =  document.createElement('li')
    // console.log(li)
    //li.innerText = power
    //powerList.appendChild(li)
//})

//console.log(powerList);


// ememies.forEach(enemy => {
//     const li = document.createElement('li')
//     li.innerText = enemy
//     enemyList.appendChild(li)
// })





/**
 * refactor as a Class-based object
 * 
 *  class Superhero {
 * 
 *  }
 * 
 * 
 */

class Superhero {
    constructor() {
        //refactoring
        // this.hero,
        // this.alias,
        // this.powers = [],
        // this.enemies = [],
        // this.imgUrl
        this.hero = {
            heroName: '',
            aliasName: '',
            isHero: 'hero' || 'villain',
            universe: 'marvel' || 'dc',
            powers: [],
            enemies: [],
            imgUrl: ''
        }

        //build array of characters
    }
    //end constructor

    //init ot initializer
    init() {
        //console.log('initialized')
        const hero = this.hero
        //console.log(hero);
        this.getData(hero)
    }

    //colect data from form
    getData(obj) {
        //set inputs
        const heroInput = document.getElementById('heroInput')
        const aliasInput = document.getElementById('aliasInput')
        const power1 = document.getElementById('power1').value || null
        const power2 = document.getElementById('power2').value || null
        const power3 = document.getElementById('power3').value || null
        const enemy1 = document.getElementById('enemy1').value || null
        const enemy2 = document.getElementById('enemy2').value || null
        const enemy3 = document.getElementById('enemy3').value || null

        //store values in obj
        obj.heroName = heroInput.value
        obj.aliasName = aliasInput.value


        //radio buttons
        var isHeroTemp = document.getElementById('isHero').value;
        obj.isHero = isHeroTemp;

        var universeTemp = document.getElementById('universe').value;
        obj.universe = universeTemp;

        //obj.isHero = document.querySelector('input[name=isHero]:checked').value;
        //obj.universe = document.querySelector('input[name=universe]:checked').value;

        
        
        // add items to array
        obj.powers = [...obj.powers, power1, power2, power3]
        obj.enemies  = [...obj.enemies, enemy1, enemy2, enemy3]
        
        console.log(obj);

    }
    addPower(item) {
        const powerList = document.getElementById('powerList')
        const li = document.createElement('li')
        const powers = this.powers
        //take item and oush it into powers array
        powers.push(item)

        li.innerText = item

        powerList.appendChild(li)
    }

    addEmemy(item) {
        const enemyList = document.getElementById('enemyList')
        const li = document.createElement('li')
        const enemies = this.enemies
        //take item and oush it into powers array
        enemies.push(item)

        li.innerText = item

        enemyList.appendChild(li)
    }

    displayHero() {
        const heroName = document.getElementById('heroName')
        const aliasName = document.getElementById('aliasName')
        const img = document.getElementById('heroImg')

        img.src = `images/${this.imgUrl}`
        img.alt = `${this.hero}`

        

        heroName.innerText = this.hero
        aliasName.innerText = this.alias
    }
}

// const superman = new Superhero()

// //console.log(superman);
// superman.hero = 'Superman'
// superman.alias = 'Clark Kent'
// superman.imgUrl = 'superman.jpg'
// superman.displayHero()
// superman.addPower('super strength')
// superman.addPower('x-ray vision')
// superman.addPower('super speed')

// superman.addEmemy('Lex Luthor')
// superman.addEmemy('Darkseid')

//an event is any interaction between the user and the browser

/**
 *  EventListener
 *  syntax: 
 * 
 *      element.addEventListener(event, callback function)
 */

const action = new Superhero()

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    action.init()

})

// spread opperator

// const scores = [100, 100, 94, 52, 100, 98]
// console.log(scores);


// console.log(...scores)

// const newScores =  [...scores, 78]
// console.log(`scores: ${scores}`);
// console.log(`newScores: ${newScores}`);

