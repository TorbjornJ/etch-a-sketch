let container = document.querySelector('.grid-main')
let selectedColor = document.querySelector('#colorPicker');
let brushColor = '#000000';

selectedColor.onchange = (e) => setColor(e.target.value);


function gridCreate(height, width) {
    container.style.gridTemplateColumns = `repeat(${height}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${width}, 1fr)`;
    for (i = 0; i < height*width; i++) {
        let tile = document.createElement('div');
        container.appendChild(tile);
        tile.classList.add('square');
    }
    
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
            square.style.backgroundColor = '#f2f2f2';
        })

     gridPaint();
}

function gridPaint () {
    const squares = document.querySelectorAll('.square');
    squares.forEach(squares => {
        squares.addEventListener('mouseover', () => {
            squares.style.backgroundColor = brushColor;
        })
    })
}

function setColor(color) {
   brushColor = `${color}`;
   gridPaint();
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(squares => {
            squares.style.backgroundColor = '#f2f2f2';
        });
}

function newGrid() {
    let newSize = prompt("Please set a new size for both sides", "0");
    let value = parseInt(newSize);
    if (value > 1 && value <=100) { 
    [...container.childNodes].forEach(el => el.remove());
    gridCreate(newSize, newSize);
    gridPaint();
    }
    else {
        alert("Please enter a valid number between 1 and 0");
    }
}


gridCreate(16, 16);
