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


function checkUserInput() {
    let gridRows = document.querySelector('#gridRows').value;
    let gridCols = document.querySelector('#gridCols').value;

    if (gridRows > 100) {
        gridRows = 100;
    }

    if (gridCols > 100) {
        gridCols = 100;
    }

    if (isNaN(gridRows) || gridRows < 1) {
        gridRows = 1;
    }

    if (isNaN(gridCols) || gridCols < 1) {
        gridCols = 1;
    }

    return [gridRows, gridCols];
}


function createGrid(userInput) {

    let userRows = userInput[0]
    let userCols = userInput[1]
    let count = 1;

    for (let row = 0; row < userRows; row++) {
        
        const gridRow = document.createElement('div');
        gridRow.classList.add("flex-container", "gridRow");
        container.appendChild(gridRow);

        for (let column = 0; column < userCols; column++) {
            const gridCol = document.createElement('div');
            gridCol.classList.add("gridBox");
            // gridBox.style.flex = "1 0 1%";
            gridCol.textContent = count;
            gridRow.appendChild(gridCol);
            count += 1;
        }
    }
    
}

function gridManager() {
    removeGrid();
    let userInput = checkUserInput();
    createGrid(userInput);
}

submitButton.addEventListener("click", gridManager);

// createFlexBoxes();