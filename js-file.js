let container = document.querySelector('.wrapper')

gridCreate(16, 16);
gridColor();

function gridCreate(height, width) {
    container.style.gridTemplateColumns = `repeat(${height}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${width}, 1fr)`;
    for (i = 0; i < height*width; i++) {
    container.innerHTML += `<div class="square"></div>`;    
    }
    
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
            square.style.backgroundColor = 'white';
        })

}

function gridColor () {
    const squares = document.querySelectorAll('.square');
    squares.forEach(squares => {
        squares.addEventListener('mouseover', () => {
            squares.style.backgroundColor = 'black';
        })
    })
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(squares => {
            squares.style.backgroundColor = 'white';
        });
    

}

function newPrompt() {
    const squares = document.querySelectorAll('.square');
    const newgrid = prompt("Please enter a new length per side.", "0");
    const input = Number(newgrid.value);

    gridCreate(`${input}, ${input}`);
}
