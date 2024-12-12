/**
 * 
 * RULES!!!
 * 
 * 7 or 11 on the first roll wins
 * snake eyes(2) is a lose
 * 
 * IF NOT 7 or 11 on the first roll AND NOT SNAKE EYES
 * roll until match
 * 
 * SET win to false
 * 
 * SET gamePlay to true
 * 
 * Set rolls to 0
 * 
 * WHILE gamePlay
 *      SET total
 *      rolls++
 *      
 *      IF total is equal to 2
 *         Set gamePlay to false
 *      ELSE IF (total is equal to 7 ot total is equal to 11) AND rolls is equal to 1
 *         Set win to true
 *         SET gamePlay to !win
 *      ELSE IF (total is not equal to 7 or tatal is not equal to 11) AND rolls is not equal to 1
 *         THEN SEt point to total 
 *      ELSE IF point is equal yo tatal AND roll is greater then 1
 *         THEN SET win to true
 *         SET gamePlay to !win
 *      ELSE IF (total is equal to 7 AND rolls is greater then 1)  
 *          SET gamePlay to false
 */


class Game {

    constructor() {
        // data on the load
        this.dieDisplay1 = document.getElementById('dieDisplay1')
        this.dieDisplay2 = document.getElementById('dieDisplay2')

        this.rollTotalDispaly = document.getElementById('rollTotalDisplay')
        this.message = document.getElementById('message')
        this.rollBtn = document.getElementById('rollBtn')
        this.rollCountDisplay = document.getElementById('rollCountDisplay')
        this.pointDisplay = document.getElementById('pointDisplay')

        this.winDisplay = document.getElementById('winDisplay')
        this.lossDisplay = document.getElementById('lossDisplay')

        this.winStreakDisplay = document.getElementById('winStreakDisplay')
        this.lossStreakDisplay = document.getElementById('lossStreakDisplay')

        this.gameSettings = {
            gamePlay: false,
            rolls: 0,
            point: 0,
            totalWins: 0,
            totalLosses: 0,
            winStreak: 0,
            lossStreak: 0,
            lastResult: '',
            win: false
        }
    }

    init() {
        this.resetGame()
        this.changeColor()
        // console.log(this.message.classList);
        const settings = this.gameSettings
        this.message.innerText = `LESTS START THE GAME!`
        this.rollCountDisplay.innerText = settings.rolls
        this.dieDisplay1.innerText = ''
        this.dieDisplay2.innerText = ''
        this.pointDisplay.innerText = ''
        this.rollTotalDispaly.innerText = ''

        this.toggleRollBtn(this.gameSettings.gamePlay)
        this.rollBtn.addEventListener('click', this.rollDice)
    }

    changeColor() {
        let color = this.message.classList[0]
        
            if (this.message.classList.contains(color)) {
                // console.log(color);
                this.message. classList.remove(color)
                this.message.classList.add('black')
            }
        }

    

    checkWin(total, rolls) {
        let result 
        if (total === 2) {
            this.gameSettings.gamePlay = false
        } else if ((total === 7 || total === 11) && rolls === 1) {
            this.gameSettings.win = true
        } else if ((total != 7 || total != 11) && rolls === 1) {
            // setting point
            this.gameSettings.point = total 
            this. message.innerText = `YOUR POINT IS ${this.gameSettings.point}! LETS SEE IF YOU CAN HIT IT!!!`
            this.pointDisplay.innerText = this.gameSettings.point
        } else if (total === 7 & rolls > 1) {
            this.gameSettings.gamePlay = false
        } else if (total == this.gameSettings.point && rolls > 1) {
            this.gameSettings.win = true
        } else {
            this.message.innerText = 'ROLL AGAIN!!!'
        }

        this.gameSettings.win ? this.gameSettings.gamePlay = false : null

        if (this.gameSettings.win) {
            this.message.innerText = 'YOU WIN!!!'
            this.message.classList.remove('black')
            this.message.classList.add('green')
            result = 'win'
            this.gameSettings.lastResult = result
            this.gameSettings.totalWins++
            this.winDisplay.innerText = this.gameSettings.totalWins
            this.updateStreak(result)
            this.toggleRollBtn(this.gameSettings.gamePlay)
        } else if (this.gameSettings.win == false && this.gameSettings.gamePlay == false) {
            this.message.innerText = 'YOU LOSE!!!'
            this.message.classList.remove('black')
            this.message.classList.add('red')
            result = 'lose'
            this.gameSettings.lastResult = result
            this.gameSettings.totalLosses++
            this.lossDisplay.innerText = this.gameSettings.totalLosses
            this.updateStreak(result)
            this.toggleRollBtn(this.gameSettings.gamePlay)
        }
    }

    craps(rolls) {
        this.dieDisplay1.innerText = Math.ceil(Math.random() * 6)
        this.dieDisplay2.innerText = Math.ceil(Math.random() * 6)

        let total
        total = parseInt(this.dieDisplay1.innerText) + parseInt(this.dieDisplay2.innerText)

        this.rollTotalDispaly.innerText = total
        this.rollCountDisplay.innerText = rolls
        this.checkWin(total, rolls)
    }

    resetGame() {
        this.rollBtn.removeEventListener('click', this.rollDice)

        return this.gameSettings = {
            gamePlay: true,
            rolls: 0,
            points: 0,
            totalWins: this.gameSettings.totalWins,
            totalLosses: this.gameSettings.totalLosses,
            winStreak: this.gameSettings.winStreak,
            lossStreak: this.gameSettings.lossStreak,
            lastResult: this.gameSettings.lastResult,
            win: false
        }
    }

    rollDice() {
        // because this method is being called when firing an event, we must locate the data from a GLOBAL reference "action"
        action.gameSettings.rolls++
        action.craps(action.gameSettings.rolls)
        
    }

    toggleRollBtn(gamePlay) {
        // if (gamePlay) {
        //     this.rollBtn.removeAttribute('disabled')
        // } else {
        //     this.rollBtn.setAttribute('disabled', '')
        // }
        
        gamePlay ? this.rollBtn.removeAttribute('disabled') : this.rollBtn.setAttribute('disabled', '')
    }

    updateStreak(result) {
        if (result == 'win') {
            this.gameSettings.lossStreak = 0
            this.gameSettings.winStreak++
        } else {
            this.gameSettings.winStreak = 0
            this.gameSettings.lossStreak++
        }

        this.winStreakDisplay.innerText = this.gameSettings.winStreak
        this.lossStreakDisplay.innerText = this.gameSettings.lossStreak
    }
}

const gameStartBtn = document.getElementById('gameStartBtn')
const action = new Game()

gameStartBtn.addEventListener('click', ()=> action.init())





// ／\、
//（ﾟ､ ｡ ７
//⠀ |、ﾞ ~ヽ
//  じしf_, )ノ