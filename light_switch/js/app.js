
// I couldn't get it to work the other way so I did it a different way and it worked

const bulb = document.querySelector('.lightSwitch');
    const button = document.getElementById('switch');

    let isOn = false;

    button.addEventListener('click', () => {
        isOn = !isOn;
        if (isOn) {
        bulb.classList.add('on');
        button.innerText = 'LIGHT IS ON! TURN IT OFF!'
        } else {
        bulb.classList.remove('on');
        button.innerText = 'LIGHT IS OFF! TURN IT ON!'
        }
    });


// ／\、
//（ﾟ､ ｡ ７
//⠀ |、ﾞ ~ヽ
//  じしf_, )ノ