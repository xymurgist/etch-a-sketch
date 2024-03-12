// Initialize variables

const container = document.querySelector('#container');
const submitButton = document.querySelector('#submitButton');


// TODO //
// Create logic to accept user input to create number of boxes for "grid" of flexbox <div>s
// // prompt for user input for rows and columns for grid; start with hard numbers for testing
// // use loop to create individual <div>s

// Toggle highlight state of individual <div>s

function createFlexBoxes() {

    let gridSize = document.querySelector('#gridSize').value;
    let squaredGrid = gridSize * gridSize;

    console.log(gridSize);
    console.log(squaredGrid);
    for (let i = 0; i < squaredGrid; i++) {
        const flexBox = document.createElement('div');
        flexBox.classList.add("highlighted");
        container.appendChild(flexBox);
    }
}

submitButton.addEventListener("click", createFlexBoxes);

// createFlexBoxes();