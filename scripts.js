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

    let gridRows = document.querySelector('#gridRows').value;
    let gridCols = document.querySelector('#gridCols').value;
    let squaredGrid = gridSize * gridSize;
    let count = 1;

    if (isNaN(gridRows) || gridRows < 1 || isNaN(gridCols) || gridCols < 1) {
        gridRows = 10;
        gridCols = 10;
        squaredGrid = 100;
    }

    for (let row = 0; row < gridRows; row++) {
        
        const gridRow = document.createElement('div');
        gridRow.classList.add("flex-container", "gridRow");
        container.appendChild(gridRow);

        for (let column = 0; column < gridCols; column++) {
            const gridCol = document.createElement('div');
            gridCol.classList.add("gridBox");
            // gridBox.style.flex = "1 0 1%";
            gridCol.textContent = count;
            gridRow.appendChild(gridCol);
            count += 1;
        }
    }
    
}

submitButton.addEventListener("click", createGrid);

// createFlexBoxes();