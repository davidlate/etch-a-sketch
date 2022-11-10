


const etch = document.querySelector('#etch-container');
const slider = document.querySelector('#slider');
const eraser = document.querySelector('#eraser');
const pen = document.querySelector('#pen');
const wipe = document.querySelector('#clear');


etch.addEventListener('mouseover', updateColor);
slider.addEventListener('input', getNumberOfBoxes);
eraser.addEventListener('click', erase);
pen.addEventListener('click', writeSolid);
wipe.addEventListener('click', clearAll);

CONTAINER_HEIGHT = 400; //400px
CONTAINER_WIDTH = 400; //400px
state = 'pen';


function getNumberOfBoxes(e){
    numBoxes = document.querySelector('#slider').value;
    document.querySelector('#slider-counter').textContent = numBoxes;
    setUpGrid(numBoxes);
}

function setUpGrid(numBoxes){

    while (etch.firstChild) {
        etch.removeChild(etch.firstChild);
    }


    for (let row=1; row<=numBoxes; row++){

        for (let col = 1; col<=numBoxes; col++){

            let box = document.createElement('div')
            box.classList.add('box');
            box.setAttribute('id', `x${row}y${col}`)
            etch.appendChild(box);
            box.style.gridColumnStart = col;
        }
    }
    }


function updateColor(e){
    if (e.target.id == 'etch-container') return;

    const box = document.querySelector(`#${e.target.id}`);

    if (state == 'eraser') {
        box.style.backgroundColor = 'white';
        box.classList.remove('filled');
    }

    else if(!(box.classList.contains('filled'))){
        let r = Math.floor(Math.random() * 255+1);
        let g = Math.floor(Math.random() * 255+1);
        let b = Math.floor(Math.random() * 255+1);

    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    box.classList.add('filled')
    }
}

function erase(){
    state = 'eraser';
}

function writeSolid(){
    state = 'pen';
}

function clearAll(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.style.backgroundColor = 'white');
}

setUpGrid(document.querySelector('#slider').value);

console.log(document.querySelector('#slider').value);