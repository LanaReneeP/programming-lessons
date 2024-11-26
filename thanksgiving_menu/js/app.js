/**
 * load items
 * select items
 * return selected items
 */

class MenuForm {

    constructor() {
        // sccess DOM elements
        this.person = document.getElementById('person').value
        this.meatRow = document.getElementById('meatRow')
        this.sidesRow = document.getElementById('sidesRow')
        this.dessertsRow = document.getElementById('dessertsRow')
        this.dirnksRow = document.getElementById('drinksRow')
        this.foodList = document.getElementById('foodList')

        // create array of food items
        this.menu = [
            {
                id: 1,
                type: 'meat',
                item: 'Fried Turkey',
                imgUrl: 'images/fried_turkey.jpg',
                isChecked: false,
                madeBy: 'mom'
            }, {
                id: 2,
                type: 'meat',
                item: 'Roasted Chicken',
                imgUrl: 'images/roasted_chicken.jpg',
                isChecked: false,
                madeBy: 'renee'
            }, {
                id: 3,
                type: 'meat',
                item: 'Honey Glazzed Ham',
                imgUrl: 'images/ham.jpg',
                isChecked: false, 
                madeBy: 'mom'
            }, {
                id: 4,
                type: 'meat',
                item: 'Oven Turkey',
                imgUrl: 'images/oven_turkey2.jpg',
                isChecked: false, 
                madeBy: 'renee'
            }, {
                id: 5,
                type: 'sides',
                item: 'Grilled Corn On The Cob',
                imgUrl: 'images/corn.jpg',
                isChecked: false,
                madeBy: 'mom'
            }, {
                id: 6,
                type: 'sides',
                item: 'Baked Beans',
                imgUrl: 'images/beans.jpg',
                isChecked: false, 
                madeBy: 'renee'
            }, {
                id: 7,
                type: 'sides',
                item: 'Stuffing',
                imgUrl: 'images/stuffing.jpg',
                isChecked: false, 
                madeBy: 'mom'
            }, {
                id: 8,
                type: 'sides',
                item: 'Salad',
                imgUrl: 'images/salad.jpg',
                isChecked: false,
                madeBy: 'renee'
            }, {
                id: 9,
                type: 'sides',
                item: 'Mac & Cheese',
                imgUrl: 'images/mac_and_cheese.jpg',
                isChecked: false,
                madeBy: 'mom'
            }, {
                id: 10,
                type: 'sides',
                item: 'Cranberry Sauce',
                imgUrl: 'images/cranberry.jpg',
                isChecked: false,
                madeBy: 'renee'
            }, {
                id: 11,
                type: 'sides',
                item: 'Mashed Potatoes',
                imgUrl: 'images/taters.jpg',
                isChecked: false,
                madeBy: 'mom'
            }, {
                id: 12,
                type: 'sides',
                item: 'Italian Bread',
                imgUrl: 'images/bread.jpg',
                isChecked: false,
                madeBy: 'renee'
            }, {
                id: 13,
                type: 'desserts',
                item: 'Brownie',
                imgUrl: 'images/brownie.jpg',
                isChecked: false,
                madeBy: 'mom'
            }, {
                id: 14,
                type: 'desserts',
                item: 'Chocolate Cake',
                imgUrl: 'images/cake.jpg',
                isChecked: false,
                madeBy: 'renee'
            }, {
                id: 15,
                type: 'desserts',
                item: 'Chocolate Mousse',
                imgUrl: 'images/moose.jpg',
                isChecked: false,
                madeBy: 'mom'
            }, {
                id: 16,
                type: 'desserts',
                item: 'Chocolate Chip Cookies',
                imgUrl: 'images/cookies.jpg',
                isChecked: false,
                madeBy: 'renee'
            }, {
                id: 17,
                type: 'drinks',
                item: 'Sweet Tea',
                imgUrl: 'images/sweet_tea.jpg',
                isChecked: false
            }, {
                id: 18,
                type: 'drinks',
                item: 'Dr. Pepper',
                imgUrl: 'images/dr.jpg',
                isChecked: false
            }, {
                id: 19,
                type: 'drinks',
                item: 'Coke & Lemon',
                imgUrl: 'images/coke_lemon.jpg',
                isChecked: false
            }, {
                id: 20,
                type: 'drinks',
                item: 'Beer',
                imgUrl: 'images/beer.jpg',
                isChecked: false
            }
        ]

        this.plate = {
            person: '',
            meat: [],
            sides: [],
            desserts: [],
            drinks: ''
        }
    }

    init() {
        this.buildFigures(this.menu)
    }


    loadItems(el, child) {
        el.appendChild(child)
    }

    buildFigures(arr) {

        arr.forEach(obj => {
            // for each obj build figure
            const column = document.createElement('div')
            column.classList.add('col')

            column.innerHTML = `
            <div class="figure-div" data-isChecked=${obj.isChecked}>
                <figure class="figure item-figure">
                    <img src="${obj.imgUrl}" alt="placeholder img" class="img-fluid image figure-img food-img rounded" />
                    <figcaption class="figure-caption food-caption">${
                        obj.hasOwnProperty('madeBy') ? obj.madeBy : ''
                    }</figcaption>
                </figure>
                <h3 class="food-heading">${obj.item}</h3>
                <div class="form-check">
                    <input type="checkbox" name="${obj.type}" id="${obj.type}-${obj.id}" value="${obj.item}" class="form-check-input" >
                    <label for="${obj.type}-${obj.id}" class="text-capitalize form-check-label">${obj.item}</label>
                </div>
            </div>
            `
            switch (obj.type) {
                case 'meat':
                    this.loadItems(this.meatRow, column)
                    break
                case 'sides': 
                    this.loadItems(this.sidesRow, column)
                    break
                case 'desserts': 
                    this.loadItems(this.dessertsRow, column)
                    break
                case 'drinks': 
                    this.loadItems(this.dirnksRow, column)
                    break
                default:
                    return 'error'
            }
        })
    }

    buildPlate() {
        const person = document.getElementById('person').value
        const checkboxes = document.querySelectorAll('input[type=checkbox]')
        const foodItems = document.querySelectorAll('.figure-div')


        checkboxes.forEach(checkbox => {

            const name = checkbox.name
            const value = checkbox.value
            if (checkbox.checked) {
                //console.log(checkbox.value);
                this.plate = {
                    ...this.plate,
                    person,
                    [name]: [...this.plate[name],value]
                }

                this.menu.forEach(item => {
                        if (checkbox.value == item.item) {
                            item.isChecked = checkbox.checked
                        
                    }
                })
            } else {
                this.menu.forEach(item => {
                    if (checkbox.value == item.item) {
                        item.isChecked = false
                    }
                })
            }
                console.log(this.menu);
                
        })
        //console.log(this.plate);
        const personPlate = document.getElementById('personPlate')
        personPlate.innerText = `${this.plate.person}'s `

        this.makeReceipt(this.menu)
    }

    makeReceipt(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].isChecked) {
                const listItem = document.createElement('li')
                listItem.classList.add('list-group-item')
                listItem.innerText = arr[i].item
    
                this.foodList.appendChild(listItem)
    
            }
        }
    }

}


const submitBtn = document.getElementById('submitBtn')


const action = new MenuForm() 
    action.init()


submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    //console.log('click');
    action.buildPlate()
    submitBtn.setAttribute('disabled', true)
})

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for (prop in obj) {
//     console.log(obj[prop] * 3);
    
// }