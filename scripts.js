// Initialize constants

const container = document.querySelector('#container');
const submitButton = document.querySelector('#submitButton');


// TODO //
// Create logic to accept user input to create number of boxes for "grid" of flexbox <div>s
// // prompt for user input for rows and columns for grid; start with hard numbers for testing
// // use loop to create individual <div>s

// Toggle highlight state of individual <div>s

function removeGrid() {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createGrid() {

    // Clear the current grid before creating a new grid
    removeGrid();

    let gridSize = document.querySelector('#gridSize').value;
    let squaredGrid = gridSize * gridSize;

    if (isNaN(gridSize) || gridSize < 1) {
        squaredGrid = 100;
    }

    for (let i = 0; i < squaredGrid; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add("gridBox", "highlighted");
        container.appendChild(gridBox);
    }
    
}

submitButton.addEventListener("click", createGrid);

// createFlexBoxes();