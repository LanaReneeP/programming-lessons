let count = 0;
const countDisplay = document.getElementById('countDisplay')

const colors = ['--box1', '--box2', '--box3', '--box4', '--box5', '--box6', '--box7', '--box8', '--box9']

const boxes = [
    {id: 1, color: 'box1'},
    {id: 2, color: 'box2'},
    {id: 3, color: 'box3'},
    {id: 4, color: 'box4'},
    {id: 5, color: 'box5'},
    {id: 6, color: 'box6'},
    {id: 7, color: 'box7'},
    {id: 8, color: 'box8'},
    {id: 9, color: 'box9'}
]

boxes.forEach(box => {
    const boxDiv = document.getElementById(`box${box.id}`)
    boxDiv.style.backgroundColor = `var(--${box.color})`
    boxDiv.addEventListener('click', () => {
        const randomColor = colors[Math.floor (Math.random() * colors.length)]
        boxDiv.style.backgroundColor = `var(${randomColor})`
        count++
        countDisplay.textContent = count
    })
})






// ／\、
//（ﾟ､ ｡ ７
//⠀ |、ﾞ ~ヽ
//  じしf_, )ノ