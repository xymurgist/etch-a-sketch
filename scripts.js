////////// INITIALIZE VARIABLES //////////

const container = document.querySelector('#container');
const submitButton = document.querySelector('#submitButton');
const enterRows = document.querySelector('#userRows');
const enterCols = document.querySelector('#userCols');


////////// EVENT LISTENERS //////////

// "CONTAINER" MOUSEDOWN
container.addEventListener('mousedown', function () {
    moveMouse("down");
});

// "CONTAINER" MOUSEUP
container.addEventListener('mouseup', function () {
    moveMouse("up");
});

// "CONTAINER" RESIZE
container.addEventListener("resize", resizeBoxHeight);


// "ENTER" KEYPRESS
// Would like to learn how to make the following more concise and reusable
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



////////// FUNCTIONS //////////

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
    // creates a new grid according to user inputs

    let gridRows = userInput[0]
    let gridCols = userInput[1]

    // create a row and fill with columns
    for (let row = 0; row < gridRows; row++) {
        
        const gridRow = document.createElement('div');
        gridRow.classList.add('flex-container');
        container.appendChild(gridRow);

        // create boxes to represent columns
        for (let column = 0; column < gridCols; column++) {
            const gridCol = document.createElement('div');
            gridCol.classList.add('gridBox');
            gridRow.appendChild(gridCol);
        }
    }
    resizeBoxHeight();
}


function gridManager() {
    // makes calls to remove the current grid and create a new grid
    removeGrid();
    createGrid(checkUserInput());
}


function moveMouse(upDown) {
    // if the mouse button is up and the mouse is over a grid box, leave its current color
    // if the mouse button is down and the mouse is over a grid box, change its color

    let arrayOfBoxes = document.querySelectorAll('.gridBox');
    arrayOfBoxes.forEach(function (box) {

        if (upDown == "up") {
            if (box.style.backgroundColor == '') {
                box.addEventListener('mouseover', function () {
                    box.style.backgroundColor = '';
                });
            } else {
                box.style.backgroundColor = box.style.backgroundColor;
            }
        } else if (upDown == "down") {
            box.addEventListener('mouseover', function () {
                box.style.backgroundColor = "blue";
            });
            box.addEventListener('mousedown', function () {
                box.style.backgroundColor = "blue";
            });

        }
    });
}


function removeGrid() {
    // removes current grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function resizeBoxHeight() {
    // resizes each box so the height matches the width
    let boxWidth = document.querySelector('.gridBox').clientWidth;
    let boxes = document.querySelectorAll('.gridBox');

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute("style", `height: ${boxWidth}px`);
    }
}