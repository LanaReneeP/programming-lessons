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
        

        //build array of characters
        this.characters = []

        this.cardRow = document.getElementById('cardRow')
    }
    //end constructor

    //init ot initializer
    init() {
        //console.log('initialized')
        const characters = this.characters
        //console.log(hero);
        this.getData()
        // this.buildCard()
    }

    //colect data from form
    getData() {
        const hero = {
            heroName: '',
            aliasName: '',
            isHero: 'hero' || 'villain',
            universe: 'marvel' || 'dc',
            powers: [],
            enemies: [],
            imgUrl: ''
        }

        //set inputs
        const heroInput = document.getElementById('heroInput')
        const aliasInput = document.getElementById('aliasInput')
        const power1 = document.getElementById('power1').value || null
        const power2 = document.getElementById('power2').value || null
        const power3 = document.getElementById('power3').value || null
        const enemy1 = document.getElementById('enemy1').value || null
        const enemy2 = document.getElementById('enemy2').value || null
        const enemy3 = document.getElementById('enemy3').value || null
        const imgInput = document.getElementById('imgInput').value || null

        //store values in obj
        hero.heroName = heroInput.value
        hero.aliasName = aliasInput.value
        hero.imgUrl = imgInput


        //radio buttons

        // var isHeroTemp = document.getElementById('isHero').value;
        // obj.isHero = isHeroTemp;

        // var universeTemp = document.getElementById('universe').value;
        // obj.universe = universeTemp;

        hero.isHero = document.querySelector('input[name=isHero]:checked').value || null
        hero.universe = document.querySelector('input[name=universe]:checked').value || null

        
    
        // add items to array
        hero.powers = [...hero.powers, power1, power2, power3]
        hero.enemies  = [...hero.enemies, enemy1, enemy2, enemy3]
        
        //console.log(hero);

        this.characters = [...this.characters, hero]
        //console.log(this.characters);

        this.buildCard(hero)
    }

    buildCard(obj) {
        const cardRow = this.cardRow

        const col = document.createElement('div')
        col.classList.add('col')

        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = obj.imgUrl
        img.alt = obj.heroName 
        img.classList.add('img-fluid', 'card-img-top', 'hero-img')

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const h3 = document.createElement('h3')
        h3.classList.add('display-5', 'text-captilize')
        h3.innerText = obj.heroName

        const aliasText = document.createElement('p')
        aliasText.classList.add('alias-text', 'text-capitalize')
        aliasText.innerText = obj.aliasName

        const heroText = document.createElement('p')
        heroText.classList.add('hero-text', 'text-capitalize')
        heroText.innerText = obj.isHero

        const universeText = document.createElement('p')
        universeText.classList.add('universe-text', 'text-capitalize')
        universeText.innerText = obj.universe
        

        //build lists
        const powerList = document.createElement('ul')
        powerList.setAttribute('id', 'powerList')
        powerList.classList.add('power-list', 'list-group', 'list-group-flush')

        obj.powers.forEach(power => {
            const li = document.createElement('li')
            li.classList.add('list-group-item')
            li.innerText = power

            powerList.appendChild(li)
        })

        const enemyList = document.createElement('ul')
        enemyList.setAttribute('id', 'enemyList')
        enemyList.classList.add('enemy-list', 'list-group', 'list-group-flush')

        obj.enemies.forEach(enemy => {
            const li = document.createElement('li')
            li.classList.add('list-group-item')
            li.innerText = enemy

            enemyList.appendChild(li)
        })


        //apened elements to card body
        cardBody.appendChild(h3)
        cardBody.appendChild(aliasText)
        cardBody.appendChild(heroText)
        cardBody.appendChild(universeText)
        cardBody.appendChild(powerList)
        cardBody.appendChild(enemyList)


        //apened elements to card
        card.appendChild(img)
        card.appendChild(cardBody)

        //apened to col
        col.appendChild(card)

        //apened to cardRow
        cardRow.appendChild(col)

        //I FIGURED OUT A PROBLEM ON MY OWN!!!! IM BETTER THAN EVERYONE!!!!! but dad...

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

