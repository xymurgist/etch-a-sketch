// INITIALIZE VARIABLES

const container = document.querySelector('#container');
const submitButton = document.querySelector('#submitButton');
const enterRows = document.querySelector('#userRows');
const enterCols = document.querySelector('#userCols');




///// EVENT LISTENERS /////

// "CONTAINER" RESIZE
container.addEventListener("resize", resizeBoxHeight);


// "ENTER" KEYPRESS
// Would like to learn how to make the following more consice and reusable
// If the user presses the "Enter" key while within the input textbox, manage the grid
enterRows.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        gridManager();
    }
});

enterCols.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        gridManager();
    }
});


// "SUBMIT" CLICK
submitButton.addEventListener("click", gridManager);


// WINDOW RESIZE
window.addEventListener("resize", resizeBoxHeight);




// TODO //
// Toggle highlight state of individual <div>s
/// lookup mouseDown and mouseEnter
/// make reset button


function addClassHighlight() {
    // Add MOUSEOVER to each gridBox

    let arrayOfBoxes = document.querySelectorAll('.gridBox');

    arrayOfBoxes.forEach(function (i) {
        i.addEventListener('mousedown', function () {
            console.log("I'm clicked")
            i.classList.add('highlight');
            // if ('mousedown') { i.classList.add('highlight'); }
        });
    });
}


function checkUserInput() {
    // check the user's entered values for validity
    // if not valid, make valid

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
    resizeBoxHeight();
    addClassHighlight();
    
}


function gridManager() {
    removeGrid();
    createGrid(checkUserInput());
}


function removeGrid() {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function resizeBoxHeight() {

    // make box height = box width
    let boxWidth = document.querySelector('.gridBox').clientWidth;
    let boxes = document.querySelectorAll('.gridBox');

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute("style", `height: ${boxWidth}px`);
    }
}
