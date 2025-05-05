const container = document.querySelector('.container');

// Create a div.grid
const grid = document.createElement('div');
grid.setAttribute('class', 'grid');



// Create a div.grid--square
// fill grid with a 16 x 16 of grid-element
function fillRow() {
  const row = document.createElement('div');
  row.setAttribute('class', 'row');

  for (let i = 0; i <= 16; i++) {
    const gridElement = document.createElement('div');
    gridElement.setAttribute('class', 'grid--square');
    gridElement.textContent = i;

    row.appendChild(gridElement);
  }

  return row;
};

function fillGrid() {
  for (let i = 0; i <= 16; i++) {
    grid.appendChild(fillRow());
  }
};


fillGrid();

// Add grid to container
container.appendChild(grid);

let squares = document.querySelectorAll('.grid--square');
let opacity = 0.5;

squares.forEach(function(elem) {
  elem.addEventListener('mouseover', () => {
    elem.style.backgroundColor = 'black';

    if (opacity < 1) {
      opacity += 0.1;
    }

    console.log(opacity);
    elem.style.opacity = opacity.toFixed(1);
  })

});