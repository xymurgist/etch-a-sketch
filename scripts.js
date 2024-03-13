// Initialize constants

const container = document.querySelector('#container');
const submitButton = document.querySelector('#submitButton');
const enterRows = document.querySelector('#userRows');
const enterCols = document.querySelector('#userCols');


// TODO //
// Toggle highlight state of individual <div>s
/// lookup mouseDown and mouseEnter
/// make reset button

function removeGrid() {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function checkUserInput() {
    let userRows = document.querySelector('#userRows').value;
    let userCols = document.querySelector('#userCols').value;

    if (userRows > 100) {
        userRows = 100;
    }

    if (userCols > 100) {
        userCols = 100;
    }

    if (isNaN(userRows) || userRows < 1) {
        userRows = 5;
    }

    if (isNaN(userCols) || userCols < 1) {
        userCols = 10;
    }

    return [userRows, userCols];
}


function createGrid(userInput) {

    let gridRows = userInput[0]
    let gridCols = userInput[1]

    // create a row and fill with columns
    for (let row = 0; row < gridRows; row++) {
        
        const gridRow = document.createElement('div');
        gridRow.classList.add('flex-container');
        container.appendChild(gridRow);

        for (let column = 0; column < gridCols; column++) {
            const gridCol = document.createElement('div');
            gridCol.classList.add('gridBox');
            gridRow.appendChild(gridCol);
        }

        
    }

    // make box height = box width
    let boxWidth = document.querySelector('.gridBox').clientWidth;
    let boxes = document.querySelectorAll('.gridBox');

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute("style", `height: ${boxWidth}px`);
    }
    
}


function gridManager() {
    removeGrid();
    let userInput = checkUserInput();
    createGrid(userInput);
}


submitButton.addEventListener("click", gridManager);

// Would like to learn how to make the following more consice and reusable
// If the user presses the "Enter" key on the keyboard
enterRows.addEventListener("keypress", function (event){
    if(event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        gridManager();
    }
});

enterCols.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        gridManager();
    }
});

// createFlexBoxes();