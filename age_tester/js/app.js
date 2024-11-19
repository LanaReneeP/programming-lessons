/**
 * Build an age tester
 * 
 * User input their date of birth 
 * DOB gets tested to see if user is age 21 or older
 * 
 *      if user is age 21 or older, access is granted
 *      else access is denied
 * 
 * send message ti user displaying result
 * 
 * checkbox must be checked before validation
 */

const submitBtn = document.getElementById('submitBtn')

class Tester {
    constructor() {
        this.displayText = document.getElementById('displayText')
    }

    init() {
        //console.log('clicked');
        this.getDateOfBirth()
    }

    getDateOfBirth() {
        const DateOfBirth = document.getElementById('dateOfBirth').value

        // 2006-07-13 

        // str.slice(startPos, limit)
        // parseInt(str)
        const birthYear = parseInt(DateOfBirth.slice(0, 4))
        const birthMonth = parseInt(DateOfBirth.slice(5, 7))
        const birthDate = parseInt(DateOfBirth.slice(8))
        
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const date = today.getDate()
        // console.log(year);
        // console.log(month);
        // console.log(date);
        
        //console.log(birthYear, year);
        //console.log(birthMonth, month);
        //console.log(birthDate, date);
        
        
        //run tests
        const yearTest = year - birthYear
        const monthTest = month - birthMonth
        const dateTest = date - birthDate
        

        let access 

        let granted = 'Access Granted'
        let denied = 'Access Denied'

        // function accessGranted
        const accessGranted = (access) => {
            if(access === 'granted') {
                this.displayText.classList.remove('denied')
                this.displayText.classList.add('granted')
                this.displayText.innerText = granted
            } else if (access === 'denied') {
                this.displayText.classList.remove('granted')
                this.displayText.classList.add('denied')
                this.displayText.innerText = denied
            }
        }

        const validate = document.getElementById('checkbox')

        if (validate.checked) {
            // test dates 
            if (yearTest > 21) {
                accessGranted('granted')
            } else if (yearTest === 21) {
                if (monthTest > 0) {
                    accessGranted('granted')
                } else if (monthTest === 0) {
                    if (dateTest >= 0) {
                        accessGranted('granted')
                    } else {
                        accessGranted('denied')
                    }
                } else {
                    accessGranted('denied')
                }
            } else {
                accessGranted('denied')
            }
        } else {
            this.displayText.innerText = 'Please check box!'
        }
    }
}

const action = new Tester()

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    action.init()
})