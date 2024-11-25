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
                item: 'freid turkey',
                imgUrl: 'fried_turkey.jpg',
                isChecked: false,
                madeBy: 'mom'
            }, {
                id: 2,
                type: 'meat',
                item: 'roasted chicken',
                imgUrl: 'roasted_chicken.jpg',
                isChecked: false,
                madeBy: 'renee'
            }, {
                id: 3,
                type: 'meat',
                item: 'honey glazzed ham',
                imgUrl: 'ham.jpg',
                isChecked: false, 
                madeBy: 'mom'
            }, {
                id: 4,
                type: 'meat',
                item: 'oven turkey',
                imgUrl: 'oven_turkey.jpg',
                isChecked: false, 
                madeBy: 'renee'
            }, {
                id: 5,
                type: 'sides',
                item: 'corn on the cob',
                imgUrl: 'corn.jpg',
                isChecked: false,
                madeBy: 'mom'
            }, {
                id: 6,
                type: 'sides',
                item: 'baked beans',
                imgUrl: 'beans.jpg',
                isChecked: false, 
                madeBy: 'renee'
            }, {
                id: 7,
                type: 'sides',
                item: 'stuffing',
                imgUrl: 'stuffing.jpg',
                isChecked: false, 
                madeBy: 'mom'
            }, {
                id: 8,
                type: 'sides',
                item: 'salad',
                imgUrl: 'salad.jpg',
                isChecked: false,
                madeBy: 'renee'
            }, {
                id: 9,
                type: 'sides',
                item: 'mac & cheese',
                imgUrl: 'mac_and_cheese.jpg',
                isChecked: false,
                madeBy: 'mom'
            }, {
                id: 10,
                type: 'sides',
                item: 'cranberry sauce',
                imgUrl: 'cranberry.jpg',
                isChecked: false,
                madeBy: 'renee'
            }, {
                id: 11,
                type: 'sides',
                item: 'mashed potatoes',
                imgUrl: 'taters.jpg',
                isChecked: false,
                madeBy: 'mom'
            }, {
                id: 12,
                type: 'sides',
                item: 'bread',
                imgUrl: 'bread.jpg',
                isChecked: false,
                madeBy: 'renee'
            }, {
                id: 13,
                type: 'desserts',
                item: 'brownie',
                imgUrl: 'brownie.jpg',
                isChecked: false,
                madeBy: 'mom'
            }, {
                id: 14,
                type: 'desserts',
                item: 'chocolate cake',
                imgUrl: 'cake.jpg',
                isChecked: false,
                madeBy: 'renee'
            }, {
                id: 15,
                type: 'desserts',
                item: 'chocolate moose',
                imgUrl: 'moose.jpg',
                isChecked: false,
                madeBy: 'mom'
            }, {
                id: 16,
                type: 'desserts',
                item: 'chocolate chip cookies',
                imgUrl: 'cookies.jpg',
                isChecked: false,
                madeBy: 'renee'
            }, {
                id: 17,
                type: 'drinks',
                item: 'sweet tea',
                imgUrl: 'csweet_tea.jpg',
                isChecked: false
            }, {
                id: 18,
                type: 'drinks',
                item: 'dr. pepper',
                imgUrl: 'dr.jpg',
                isChecked: false
            }, {
                id: 19,
                type: 'drinks',
                item: 'coke & lemon',
                imgUrl: 'coke_lemon.jpg',
                isChecked: false
            }, {
                id: 20,
                type: 'drinks',
                item: 'beer',
                imgUrl: 'beer.jpg',
                isChecked: false
            }
        ]
    }

    init() {
        //console.log('initialized');
        this.buildFigures(this.menu)
    }


    loadItems(el, child) {
        //console.log('loaded');
        el.appendChild(child)
    }

    buildFigures(arr) {

        arr.forEach(obj => {
            // for each obj build figure
            const column = document.createElement('div')
            column.classList.add('col')

            column.innerHTML = `
            <div class="figure-div">
                <figure class="figure item-figure">
                    <img src="https://via.placeholder.com/200x200" alt="placeholder img" class="img-fluid image figure-img food-img rounded" />
                    <figcaption class="figure-caption food-caption">${obj.madeBy}</figcaption>
                </figure>
                <h3 class="food-heading">${obj.item}</h3>
                <div class="form-check">
                    <input type="checkbox" name="${obj.type}" id="${obj.type}-${obj.id}" value="${obj.item}" class="form-check-input" >
                    <label for="${obj.type}-${obj.id}" class="text-capitalize form-check-label">${obj.item}</label>
                </div>
            </div>
            `

            //console.log(column);

            // this.rows.forEach(row => {
            //     this.loadItems(row, column)
            // })
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


}

const action = new MenuForm() 
    action.init()
