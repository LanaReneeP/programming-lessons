/**
 * Objects
 * 
 * in JS everything is an object
 * 
 * JAvascript is what is called an object-oriented programming language
 * 
 * with objects we can not only store data, but we can classify it
 * 
 * sytax:
 * 
 *      let objName = {
 *          property: value,
 *          key: value
 *       }
 * 
 * objects are not iteribal
 */
// console.log(console);


// build a me object
let me = {
    myName: {
        first: 'Lana',
        last: 'Palmeter',
        nickname: 'Renee'
    },
    age: 18,
    occupation: 'student',
    "children": ['Pete, Voddoo, Osiris'],
    favs: {
        foods: ['Lemon ricotta pasta, Creamy tuscan chicken, manicotti, spaghetti & meatballs, Italian cheese squares, jerk chicken'],
    },
    greeting: function() {
        var message = `My name is ${this.myName.first} ${this.myName.last}, but you can call me ${this.myName.nickname}. I am ${this.age} years old!!!`

        console.log(message);
        return message
    },
    "movies i like": ['Texas Chainsaw Massacre', 'Scream', 'Hannibal', 'Halloween', 'Saw', 'My Bloody Valintine', 'Black Christmas']
}

console.log(me);


//access data from an object

//dot notation => obj.key

console.log(me.age);

console.log(me.children);

//bracket notation => onj[key]
console.log(me["movies i like"]);

const movies = 'movies i like';
console.log(me[movies]);// []
console.log(me.movies);//undefined

console.log(me.favs.foods);

//console.log(me.greeting());
me.greeting();

const greeting =()=> {
    console.log('I am a function, not a method');
}

greeting()

/**
 * update an object
 * 
 * obj.key = new value
 */

// me.age = '19'
// console.log(me);

console.log(me.shoeSize);

me.shoeSize = 7;

/**
 *  Object.freeze() & Object.seal()
 * 
 * Object.seal() => seals an object. provents extentions and makes existing propories non-configurabal
 * 
 * Object.freeze() => freezes an object. prevents extentions and makes existing propirties non-configurable and non-writable
 */

Object.seal(me);

me.hand = 'right';

console.log(me.hand);

me.age = 26;

console.log(me);


Object.freeze(me.favs);

me.favs.food = 'sushi';

console.log(me);

console.clear()
/**build an object of a favorite movie, tv, or vidio game characters, including a method that returns a message pertaining to the characters */

let john = {
    title: 'John Wick',
    genre: 'action',
    year: 2014,
    rated: 'R',
    name: {
        first: 'John',
        last: 'Wick',
        nickname: ['Baba Yaga', 'Boogyman']
    },
    age: null,
    occupation: 'retired professional hitman',
    life: {
        dog: 'daisy',
        wife: 'Helen'
    },
    greeting: function() {
        var message = `From the Movie ${this.title} the main characters name is ${this.name.first} ${this.name.last} but many people know him as ${this.name.nickname[0]} or in eglish ${this.name.nickname[1]}. He is a ${this.occupation}. his wifes name is ${this.life.wife} and she passed away from an illness. His dog was named ${this.life.dog} before it was killed by the bad guys in the movie. His age is ${this.age}. the movie was released in ${this.year} and is rated ${this.rated}.`

        console.log(message);
        return message
    }
}

console.log(john);
console.log(john.greeting());
//HELP ME!!! THIS DUMB MESSAGE WON'T WORK!!!!

/**
 * classes => classes are objects whos proporties can be passed onto other containers.
 * 
 * syntax:
 * 
 *      class ClassName {
 *          constructor() {
 *              key = value
 *              key = value
 *           }
 *           method() {
 *                  //do stuff
 *           }
 *      }
 * 
 */

//build Animal class
class Animal {
    constructor() {
        // contains proporties that are accesible on the load
        this.hair = false,
        this.name,
        this.canFly,
        this.size,
        this.diet,
        this.legs,
        this.eyes,
        this.sound
    }

    makeSound() {
        console.log(`The ${this.name} sounds like this ${this.sound}`)
    }
}


//create an instance of an animal object and pass it into a container
const horse = new Animal()
const dog = new Animal()
const snake = new Animal()

horse.sound = 'neigh'
dog.sound = 'woof'
snake.sound = 'HISSSSSS'

horse.name = 'horse'
dog.name = 'dog'
snake.name = 'snake'

console.log(snake);


snake.makeSound()
horse.makeSound()

console.clear()

/** create a movie class. in the constructor add title, genre, duration, rating, cast, and any other proporties you would like to add. the write two methods that display data from the movie. create three instances of the movice class */

let movie = {
    title: 'Scream',
    cast: ['Neve Campbell', ' Courteney Cox', ' David Arquette', ' Skeet Ulrich', ' Matthew Lillard', ' Jamie Kennedy', ' Rose McGowan'],
    characters: ['Sydney', ' Gail', ' Dewey', ' Billy', ' Stu', ' Randy', ' Tatum'],
    rated: 'R',
    rating: '7.4/10',
    genre: ['horror', 'mystery '],
    duration: 111,
    director: 'Wes Craven',
    writer: 'Kevin Williamson',
    greeting: function() {
        var message = `${this.title} was directed by ${this.director} and was written by ${this.writer}. ${this.title} was rated ${this.rated} and it's rating was ${this.rating} overall. ${this.title} was filmed over ${this.duration} and is considered ${this.genre[0]} and ${this.genre[1]}. The main cast is ${this.cast} who all play the main characters in the movie. There characters names are ${this.characters}.`

        console.log(message);
        return message
    }
}

// const Billy = new killer


console.log(movie);
console.log(movie.greeting());


//dont need commons inthis but best if use
class Movie {
    constructor() {
        this.title,
        this. genre,
        this.duration,
        this.rating,
        this.rated,
        this.cast,
        this.director,
        this.writer,
        this.characters
    }

    getDetails() {
        var message = `${this.title} is a ${this.genre} film that was made in ${this.yearReleased}`

        console.log(message);
        return message
    }

    showRating() {
        var message = `${this.title} has a rating of ${this.rating}`

        console.log(message);
        return message
    }
}

const scream = new Movie()

scream.title = "Scream"
scream.genre = 'horror'
scream.duration = 111
scream.rating = 'R'
scream.cast = ['Neve Campbell', ' Courteney Cox', ' David Arquette', ' Skeet Ulrich', ' Matthew Lillard', ' Jamie Kennedy', ' Rose McGowan']
scream.yearReleased = 1996
scream.director = 'Wes Craven'

scream.showRating()
scream.getDetails()